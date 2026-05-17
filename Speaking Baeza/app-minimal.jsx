/* ────────────────────────────────────────────────────────────────
   App · Speaking · Minimal
   ──────────────────────────────────────────────────────────────── */

const SPK_MIN_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1c4c39",
  "ink": "#101312",
  "bg": "#fbfaf7",
  "fontDisplay": "Fraunces",
  "screen": "home"
}/*EDITMODE-END*/;

function AppMin(){
  const [t, setTweak]           = useTweaks(SPK_MIN_DEFAULTS);
  const [prog, addResult, resetProgress] = useProgress();
  const [screen, setScreen]     = React.useState(t.screen || 'home');
  const [help, setHelp]         = React.useState(false);

  // Motor de reconocimiento de voz: 'web' (rápido) | 'cloud' (híbrido) | 'whisper' (offline).
  const [sttEngine, setSttEngineState] = React.useState(() => {
    try {
      const v = localStorage.getItem('spk.sttEngine');
      return ['web','cloud','whisper'].includes(v) ? v : 'web';
    } catch(_) { return 'web'; }
  });
  const switchSttEngine = (v) => {
    setSttEngineState(v);
    if (typeof setSpeechEngine === 'function') setSpeechEngine(v);
  };

  // Config del backend cloud (Groq directo o Cloudflare Worker proxy).
  const [cloudUrl, setCloudUrl] = React.useState(() => {
    try { return localStorage.getItem('spk.sttBackendUrl') || ''; } catch(_) { return ''; }
  });
  const [cloudKey, setCloudKey] = React.useState(() => {
    try { return localStorage.getItem('spk.sttBackendKey') || ''; } catch(_) { return ''; }
  });
  const persistCloud = (patch) => {
    if (typeof setCloudSTTConfig === 'function') setCloudSTTConfig(patch);
  };

  // Progreso de descarga del modelo Whisper para feedback en el panel.
  const [whisperStatus, setWhisperStatus] = React.useState({ status: 'idle' });
  React.useEffect(() => {
    const onProg = (e) => setWhisperStatus(e.detail || { status: 'idle' });
    window.addEventListener('spk:whisper-progress', onProg);
    return () => window.removeEventListener('spk:whisper-progress', onProg);
  }, []);

  React.useEffect(()=>{
    history.replaceState({ screen: screen }, '');
    const handler = () => {
      setScreen('home');
      window.scrollTo({top:0});
      setTweak('screen', 'home');
      history.replaceState({ screen: 'home' }, '');
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  React.useEffect(()=>{
    const r = document.documentElement;
    r.style.setProperty('--m-accent', t.accent);
    r.style.setProperty('--m-ink', t.ink);
    r.style.setProperty('--m-bg', t.bg);
    r.style.setProperty('--m-font-display', `"${t.fontDisplay}", "Times New Roman", serif`);
    r.style.setProperty('--olive', t.accent);
    r.style.setProperty('--olive-2', t.accent);
    r.style.setProperty('--olive-3', t.accent);
    r.style.setProperty('--olive-soft', 'rgba(16,19,18,.55)');
    r.style.setProperty('--gold', '#b8924a');
    r.style.setProperty('--gold-2', '#d4ad60');
    r.style.setProperty('--paper', t.bg);
    r.style.setProperty('--paper-2', '#f4f2ed');
    r.style.setProperty('--paper-3', '#edeae3');
    r.style.setProperty('--cream', '#ffffff');
    r.style.setProperty('--ink', t.ink);
    r.style.setProperty('--ink-2', 'rgba(16,19,18,.72)');
    r.style.setProperty('--line', 'rgba(16,19,18,.08)');
    r.style.setProperty('--line-strong', 'rgba(16,19,18,.16)');
    r.style.setProperty('--font-display', `"${t.fontDisplay}", "Times New Roman", serif`);
  },[t.accent, t.ink, t.bg, t.fontDisplay]);

  const go = (s)=>{
    setScreen(s);
    window.scrollTo({top:0});
    setTweak('screen', s);
    if (s !== 'home') {
      history.pushState({ screen: s }, '');
    } else {
      history.replaceState({ screen: 'home' }, '');
    }
  };

  const user = {
    name: 'Alumn@',
    xp: prog.xp,
    streak: prog.streak,
    history: prog.history,
  };

  let body = null;
  if(screen === 'home')             body = <LandingMin go={go} user={user} />;
  else if(screen === 'predefined')  body = <PracticeMin go={go} onResult={addResult} />;
  else if(screen === 'free')        body = <FreeSpeaking go={go} onResult={addResult} />;
  else if(screen === 'pron')        body = <Pronunciation go={go} />;
  else if(screen === 'exam')        body = <Exam go={go} onResult={addResult} />;
  else if(screen === 'complete')    body = <Complete go={go} />;

  return (
    <>
      <TopBarMin
        onHome={()=>go('home')}
        onHelp={()=>setHelp(true)}
      />
      {body}
      {help && <HelpModal onClose={()=>setHelp(false)}/>}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Navegación">
          <TweakSelect
            label="Pantalla"
            value={screen}
            options={[
              {value:'home',       label:'Inicio'},
              {value:'predefined', label:'Práctica predefinida'},
              {value:'free',       label:'Speaking libre'},
              {value:'pron',       label:'Pronunciación'},
              {value:'exam',       label:'Examen (Modo IV)'},
              {value:'complete',   label:'Final de sesión'},
            ]}
            onChange={(v)=>{ setScreen(v); setTweak('screen', v); window.scrollTo({top:0}); }}
          />
        </TweakSection>

        <TweakSection label="Progreso">
          <TweakButton label={`Reiniciar progreso (${prog.xp} xp · racha ${prog.streak})`} onClick={()=>{ if(window.confirm('¿Seguro que quieres reiniciar el progreso a cero?')) resetProgress(); }}/>
        </TweakSection>

        <TweakSection label="Reconocimiento de voz">
          <TweakSelect
            label="Motor"
            value={sttEngine}
            options={[
              {value:'web',     label:'Rápido (Web Speech)'},
              {value:'cloud',   label:'Híbrido (live + Groq)'},
              {value:'whisper', label:'Offline (Whisper local)'},
            ]}
            onChange={switchSttEngine}
          />

          {sttEngine === 'cloud' && (
            <>
              <TweakText
                label="Endpoint"
                value={cloudUrl}
                placeholder="https://...worker.dev/ ó Groq URL"
                onChange={(v) => { setCloudUrl(v); persistCloud({ url: v }); }}
              />
              <TweakText
                label="API key (dev)"
                value={cloudKey}
                placeholder="Solo si endpoint = Groq directo"
                onChange={(v) => { setCloudKey(v); persistCloud({ key: v }); }}
              />
              <div style={{
                fontSize: 10.5, color: 'rgba(41,38,27,.6)', lineHeight: 1.45,
                padding: '4px 2px 0',
              }}>
                {!cloudUrl
                  ? '⚠️ Configura un endpoint para usar este modo.'
                  : cloudUrl.includes('api.groq.com')
                    ? (cloudKey ? '⚠️ Modo dev: key en localStorage (no para producción)' : '⚠️ Falta API key.')
                    : '✓ Usando proxy server-side (key oculta)'}
              </div>
              <TweakButton
                label="Usar Groq directo (dev)"
                secondary
                onClick={() => {
                  setCloudUrl('https://api.groq.com/openai/v1/audio/transcriptions');
                  persistCloud({ url: 'https://api.groq.com/openai/v1/audio/transcriptions' });
                }}
              />
            </>
          )}

          {sttEngine === 'whisper' && (
            <div style={{
              fontSize: 10.5, color: 'rgba(41,38,27,.6)', lineHeight: 1.45,
              padding: '4px 2px 0',
            }}>
              {whisperStatus.status === 'progress' && typeof whisperStatus.progress === 'number'
                ? `Descargando ${whisperStatus.file || 'modelo'}… ${Math.round(whisperStatus.progress)}%`
                : whisperStatus.status === 'loading-lib' ? 'Cargando biblioteca…'
                : whisperStatus.status === 'ready'       ? '✓ Modelo listo (cacheado)'
                : whisperStatus.status === 'error'       ? '✕ Error al cargar el modelo'
                : 'Whisper local · primera vez ≈ 75 MB de descarga. Sin transcripción en vivo.'}
            </div>
          )}
        </TweakSection>

        <TweakSection label="Color">
          <TweakColor label="Acento" value={t.accent}
            options={['#1c4c39', '#0f3d2e', '#2a6a4f', '#3b3b3b', '#7a4a1c', '#1e3a8a']}
            onChange={(v)=>setTweak('accent', v)}/>
          <TweakColor label="Fondo" value={t.bg}
            options={['#fbfaf7', '#ffffff', '#f5f4ef', '#f0eee7', '#fafafa']}
            onChange={(v)=>setTweak('bg', v)}/>
        </TweakSection>

        <TweakSection label="Tipografía">
          <TweakSelect label="Display" value={t.fontDisplay}
            options={[
              {value:'Fraunces',         label:'Fraunces (serif)'},
              {value:'Instrument Serif', label:'Instrument Serif'},
              {value:'Newsreader',       label:'Newsreader'},
              {value:'Inter',            label:'Inter (sans)'},
            ]}
            onChange={(v)=>setTweak('fontDisplay', v)}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppMin/>);
