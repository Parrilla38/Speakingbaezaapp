/**
 * Speaking Baeza · Cloud STT proxy (Netlify Function)
 *
 * Recibe audio del cliente (multipart con campo "file") y lo reenvía a
 * Groq inyectando la API key desde las variables de entorno de Netlify.
 * El cliente nunca ve la key.
 *
 * Configuración en Netlify (Site settings → Environment variables):
 *   - GROQ_API_KEY   (encrypted)  ← tu key gsk_... de https://console.groq.com/keys
 *   - GROQ_MODEL                  ← opcional. Por defecto whisper-large-v3-turbo.
 *   - ALLOWED_ORIGINS             ← opcional. Lista CSV o "*". Por defecto "*".
 *
 * Path público: /api/transcribe  (definido abajo en `export const config`).
 */

const DEFAULT_MODEL = 'whisper-large-v3-turbo';

export default async (req) => {
  const origin = req.headers.get('origin') || '';
  const cors = corsHeaders(origin);

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors });
  }
  if (req.method !== 'POST') {
    return json({ error: 'POST only' }, 405, cors);
  }

  const apiKey = Netlify.env.get('GROQ_API_KEY');
  if (!apiKey) {
    return json({ error: 'GROQ_API_KEY no configurada en Netlify' }, 500, cors);
  }

  let incoming;
  try {
    incoming = await req.formData();
  } catch (err) {
    return json({ error: `multipart parse failed: ${err.message}` }, 400, cors);
  }

  const file = incoming.get('file');
  if (!file) return json({ error: 'missing file' }, 400, cors);

  // Forzamos modelo + idioma + temperatura desde el servidor: el cliente no
  // puede pedir modelos caros, otros idiomas o respuestas no deterministas.
  const form = new FormData();
  form.set('file', file, file.name || 'audio.webm');
  form.set('model', Netlify.env.get('GROQ_MODEL') || DEFAULT_MODEL);
  form.set('language', 'en');
  form.set('response_format', 'json');
  form.set('temperature', '0');

  let upstream;
  try {
    upstream = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}` },
      body: form,
    });
  } catch (err) {
    return json({ error: `groq fetch failed: ${err.message}` }, 502, cors);
  }

  const body = await upstream.text();
  return new Response(body, {
    status: upstream.status,
    headers: { ...cors, 'Content-Type': 'application/json' },
  });
};

export const config = {
  path: '/api/transcribe',
};

function corsHeaders(origin) {
  const allowed = (Netlify.env.get('ALLOWED_ORIGINS') || '*').split(',').map(s => s.trim());
  const allow = allowed.includes('*') || allowed.includes(origin) ? (origin || '*') : allowed[0];
  return {
    'Access-Control-Allow-Origin':  allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age':       '86400',
    'Vary':                          'Origin',
  };
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...cors, 'Content-Type': 'application/json' },
  });
}
