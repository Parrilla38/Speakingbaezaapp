/* ────────────────────────────────────────────────────────────────
   Speaking Trainer · Pantallas (versión Baeza)
   Mobile-first, papel cálido, verde benemérito, dorado sobrio.
   ──────────────────────────────────────────────────────────────── */

/* ════════════════════ TOP BAR ════════════════════ */

function TopBarMin({ onHome, onHelp }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(243,237,220,.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--m-line)',
    }}>
      <div className="m-container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 0', minHeight: 60,
      }}>
        <button onClick={onHome} style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: 12, padding: 0,
        }}>
          <span style={{
            width: 32, height: 32,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid var(--m-accent)', color: 'var(--m-accent)',
          }}>
            <ChevronMark size={22} count={2} color="var(--m-accent)" />
          </span>
          <span style={{ lineHeight: 1, textAlign: 'left' }}>
            <span style={{
              display: 'block',
              fontFamily: 'var(--m-font-display)', fontSize: 21, fontWeight: 400,
              color: 'var(--m-ink)', letterSpacing: '-.01em',
            }}>
              Speaking <em style={{ color: 'var(--m-gold)' }}>Baeza</em>
            </span>
            <span className="m-mono" style={{
              display: 'block', marginTop: 3,
              fontSize: 9.5, letterSpacing: '.24em', textTransform: 'uppercase',
              color: 'var(--m-muted)',
            }}>
              Academia · 131ª Promoción
            </span>
          </span>
        </button>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button onClick={onHelp} className="m-icon-btn" title="Ayuda">
            <Icon.help s={16} />
          </button>
        </nav>
      </div>
    </header>
  );
}

/* ════════════════════ LANDING ════════════════════ */

function LandingMin({ go, user }) {
  const totalQ = QUESTIONS.length;
  const today  = new Date();
  const eph    = getEphemeride(today);
  const rank   = getRank(user.xp);
  const next   = getNextRank(user.xp);
  const xpPct  = next
    ? Math.min(100, Math.round((user.xp - rank.threshold) / (next.threshold - rank.threshold) * 100))
    : 100;

  return (
    <main className="fade-enter" data-screen-label="01 Landing">
      <div className="m-container" style={{ paddingTop: 32, paddingBottom: 56 }}>

        {/* ── EYEBROW ─────────────────────────── */}
        <div className="m-eyebrow" style={{ marginBottom: 28 }}>
          <span className="m-dot" />
          <span>Sesión activa</span>
          <span className="m-rule" />
          <span>{WEEKDAY_ES[today.getDay()]} · {today.getDate()} {MONTH_ES[today.getMonth()].toLowerCase()}</span>
        </div>

        {/* ── HERO ────────────────────────────── */}
        <section style={{ marginBottom: 36 }}>
          <h1 className="m-hero-h1">
            Practica el <em>speaking</em><br/>
            como en el examen<span className="m-hero-flourish">.</span>
          </h1>
          <p style={{
            margin: '24px 0 0', maxWidth: 580,
            fontSize: 17, lineHeight: 1.5, color: 'var(--m-ink-2)',
          }}>
            {totalQ} preguntas oficiales, respuesta modelo, audio bilingüe.
            Pulsa, habla, repite. La academia, en tu bolsillo.
          </p>
        </section>

        {/* ── SESSION CARD ────────────────────── */}
        <section className="m-session">
          <div className="m-session-pane">
            <div className="m-session-eyebrow">
              <span>Academia · Speaking Baeza</span>
            </div>
            <div className="m-session-greet">
              Buenos días, <em style={{ color: 'var(--m-gold-2)' }}>Alumn@.</em>
            </div>
            <div className="m-session-bar" style={{ '--p': xpPct + '%' }}>
              <span />
            </div>
            <div className="m-session-bar-meta">
              <span>Progreso · {rank.name}</span>
              <span><span className="v">{user.xp}</span> / {next ? next.threshold : '∞'} xp</span>
            </div>
          </div>

          <div className="m-session-pane">
            <div className="m-stat-row">
              <div className="m-stat">
                <span className="m-stat-k">{user.streak}</span>
                <span className="m-stat-l">Racha de aciertos</span>
              </div>
              <div className="m-stat">
                <span className="m-stat-k">{user.xp}</span>
                <span className="m-stat-l">Puntos acumulados</span>
              </div>
            </div>
            {user.history && user.history.length > 0 ? (
              <div style={{ marginTop: 16 }}>
                <div className="m-session-bar-meta" style={{ marginBottom: 8 }}>
                  <span>Últimas respuestas</span>
                </div>
                <div style={{ display: 'flex', gap: 5 }}>
                  {user.history.map((h, i) => (
                    <div key={i} style={{
                      width: 26, height: 26,
                      border: '1px solid rgba(255,255,255,.25)',
                      background: h.ok ? 'var(--m-gold)' : 'transparent',
                      color: h.ok ? 'var(--m-accent)' : 'rgba(255,255,255,.45)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {h.ok ? <Icon.check s={12} /> : <span style={{ fontSize: 13, lineHeight: 1 }}>✕</span>}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ marginTop: 16 }}>
                <div className="m-session-bar-meta" style={{ marginBottom: 8 }}>
                  <span>Sugerencia del día</span>
                </div>
                <div style={{
                  fontFamily: 'var(--m-font-display)', fontStyle: 'italic',
                  fontSize: 15, color: 'var(--m-gold-2)', lineHeight: 1.3,
                }}>
                  "{QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)].q.en}"
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── MODE CARDS ──────────────────────── */}
        <section style={{ marginTop: 56 }}>
          <div className="m-section-label">
            <span className="n">01</span>
            <span className="line" />
            <span>Elige tu modo de práctica</span>
          </div>

          <ModeCard
            n="I"
            kicker={`Plan oficial · ${QUESTIONS.length} preguntas`}
            title={<>Preguntas <em>predefinidas</em></>}
            sub="La ruta canónica de la academia. Pregunta, modelo, traducción y comparación automática palabra a palabra."
            meta={["Bloques", "Audio ES/EN", "Auto-feedback"]}
            glyph={<Icon.scroll s={28} />}
            primary
            onClick={() => go('predefined')}
          />
          <ModeCard
            n="II"
            kicker="Tu material"
            title={<>Speaking <em>libre</em></>}
            sub="Trae tu pregunta y tu respuesta modelo. Mismo sistema de evaluación aplicado a tus apuntes."
            meta={["Ilimitado", "Tu vocabulario"]}
            glyph={<Icon.pen s={28} />}
            onClick={() => go('free')}
          />
          <ModeCard
            n="III"
            kicker="Rápido · una sola palabra"
            title={<>Pron<em>unciación</em></>}
            sub="¿Una palabra que se te resiste? Te la enseñamos a decir y la grabamos contigo."
            meta={["IPA", "Sílabas", "Repetir ×∞"]}
            glyph={<Icon.mic s={28} />}
            onClick={() => go('pron')}
          />
          <ModeCard
            n="IV"
            kicker="Simulacro · 5 preguntas · 2 min cada"
            title={<>Examen <em>oficial</em></>}
            sub="Cinco preguntas aleatorias del banco con cronómetro. Al terminar: nota final y respuesta modelo de cada una."
            meta={["10 min", "Sin reveal", "Resultados al final"]}
            glyph={<Icon.target s={28} />}
            onClick={() => go('exam')}
          />
        </section>

        {/* ── EPHEMERIDE ──────────────────────── */}
        <section className="m-eph" aria-label="Efeméride del día">
          <div className="m-section-label">
            <span className="n">02</span>
            <span className="line" />
            <span>Efeméride del día · Guardia Civil</span>
          </div>
          <div className="m-eph-grid">
            <div className="m-eph-date">
              <div className="m-eph-day">{String(today.getDate()).padStart(2, '0')}</div>
              <div className="m-eph-month">{MONTH_ES[today.getMonth()]}</div>
              <div className="m-eph-year">{eph.year}</div>
            </div>
            <div className="m-eph-body">
              <div className="m-eph-tag">
                <span>{eph.tag}</span>
                {eph.anniversary && (
                  <span style={{
                    marginLeft: 8, padding: '3px 8px',
                    background: 'var(--m-gold)', color: 'var(--m-accent-2)',
                    fontFamily: 'var(--m-font-mono)', fontSize: 9.5,
                    letterSpacing: '.22em', textTransform: 'uppercase',
                    borderRadius: 999, fontWeight: 600,
                  }}>
                    {eph.year ? `Aniversario · ${today.getFullYear() - eph.year} años` : 'Festividad'}
                  </span>
                )}
              </div>
              <h3 className="m-eph-title">{eph.title}</h3>
              <p className="m-eph-text">{eph.text}</p>
              <div className="m-eph-foot">
                {eph.footer.map((f, i) => (
                  <span key={i}>{i === 0 ? <strong>{f}</strong> : f}</span>
                ))}
                <span style={{ marginLeft: 'auto' }}>
                  {WEEKDAY_ES[today.getDay()]} · {today.getDate()} {MONTH_ES[today.getMonth()].toLowerCase()} {today.getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────── */}
        <footer className="m-footer">
          <div>
            <div className="lemma">
              <em>"El honor es mi <span className="g">divisa</span>."</em>
            </div>
            <div>Speaking Baeza · v3.0</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            Desarrollado por el alumno №13123<br />
            Academia · Baeza, Jaén<br />
            <span style={{ color: 'var(--m-accent)' }}>Todo por la Patria</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* ──── Mode card ──── */

function ModeCard({ n, kicker, title, sub, meta, glyph, primary, onClick }) {
  return (
    <button
      className={'m-mode' + (primary ? ' primary' : '')}
      onClick={onClick}
    >
      <span className="m-mode-rail">
        <span className="num">{n}</span>
        <span className="glyph">{glyph}</span>
      </span>
      <span className="m-mode-body">
        <span className="m-mode-kicker">
          <span style={{ width: 14, height: 1, background: 'currentColor', display: 'inline-block' }} />
          {kicker}
        </span>
        <span className="m-mode-title">{title}</span>
        <span className="m-mode-sub">{sub}</span>
        {meta && meta.length > 0 && (
          <span className="m-mode-meta">
            {meta.map((m, i) => (<span key={i}>{m}</span>))}
          </span>
        )}
      </span>
      <span className="m-mode-cta">
        <Icon.arrow s={20} />
      </span>
    </button>
  );
}

/* ════════════════════ WAVEFORM ════════════════════ */

function WaveformMin({ active }) {
  const tick = useTick(120);
  const bars = React.useMemo(() => Array.from({ length: 42 }, (_, i) => i), []);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 28 }}>
      {bars.map(i => {
        const h = active
          ? 3 + Math.abs(Math.sin((i + tick) / 2.4)) * 22 + Math.cos((i * 0.7 + tick) / 1.8) * 6
          : 3 + Math.abs(Math.sin(i / 3)) * 3;
        return <span key={i} style={{
          width: 2, height: Math.max(2, h),
          background: active ? 'var(--m-gold)' : 'rgba(255,255,255,.32)',
          transition: 'height .12s',
        }} />;
      })}
    </div>
  );
}

/* ════════════════════ PRACTICE (FUNCIONAL) ════════════════════ */

function PracticeMin({ go, onResult }) {
  const { useState, useEffect, useRef, useCallback } = React;

  const [qIdx,       setQIdx]       = useState(0);
  const [stage,      setStage]      = useState('idle'); // idle | recording | scored
  const [showAnswer, setShowAnswer] = useState(false);
  const [speed,      setSpeed]      = useState('Normal');
  const [transcript, setTranscript] = useState('');
  const [scoreData,  setScoreData]  = useState(null);
  const [srError,    setSrError]    = useState('');
  const [ttsPlaying, setTtsPlaying] = useState(null);

  const sr = useSR();
  const speedRate = speed === 'Lenta' ? 0.6 : speed === 'Rápida' ? 1.4 : 1.0;

  const q = QUESTIONS[qIdx];

  // Reset recording state when question changes
  useEffect(() => {
    sr.reset();
    setStage('idle');
    setShowAnswer(false);
    setTranscript('');
    setScoreData(null);
    setSrError('');
    setTtsPlaying(null);
    ttsStop();
  }, [qIdx]);

  // Cleanup on unmount
  useEffect(() => () => { sr.reset(); ttsStop(); }, []);

  function handleFinalize(text) {
    if (!text) {
      setSrError('No se detectó voz. Habla claro e inténtalo de nuevo.');
      setStage('idle');
      return;
    }
    const result = calcScore(text, q.a.en);
    setTranscript(text);
    setScoreData(result);
    setStage('scored');
    if (onResult) onResult(result.score);
  }

  function handleSrError(errorCode) {
    const msgs = {
      'sr-not-supported': '❌ Reconocimiento de voz no disponible. Usa Chrome en Android o un navegador de escritorio.',
      'not-allowed': '❌ Micrófono denegado. Permite el acceso al micrófono en tu navegador.',
      'network': '❌ Error de red. El reconocimiento de voz necesita conexión a internet.',
      'sr-no-speech': '❌ No se detectó nada. Habla claro e inténtalo de nuevo.',
    };
    setSrError(msgs[errorCode] || '❌ Error al grabar. Inténtalo de nuevo.');
    setStage('idle');
  }

  function cancelRecording() {
    sr.reset();
    setStage('idle');
    setSrError('');
  }

  function playTTS(id, text) {
    if (ttsPlaying === id) {
      ttsStop();
      setTtsPlaying(null);
    } else {
      ttsStop();
      ttsSpeak(text, speedRate, () => setTtsPlaying(null));
      setTtsPlaying(id);
    }
  }

  function toggleRecording() {
    if (stage === 'recording') {
      sr.stop(handleFinalize);
      setStage('idle');
    } else {
      setSrError('');
      setTranscript('');
      setScoreData(null);
      const ok = sr.start(handleFinalize, handleSrError);
      if (ok) setStage('recording');
    }
  }

  function handleNext() {
    if (qIdx < QUESTIONS.length - 1) {
      setQIdx(qIdx + 1);
    } else {
      go('complete');
    }
  }

  function handlePrev() {
    if (qIdx > 0) setQIdx(qIdx - 1);
  }

  const scoreLabel = scoreData
    ? (scoreData.score >= 75 ? '¡Excelente pronunciación!' : scoreData.score >= 45 ? '¡Buen esfuerzo, sigue así!' : 'Sigue practicando, ¡tú puedes!')
    : '';

  return (
    <main className="fade-enter" data-screen-label="02 Practice">
      <div className="m-container" style={{ paddingTop: 24, paddingBottom: 96 }}>

        {/* Back + meta */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 16, flexWrap: 'wrap', marginBottom: 36,
        }}>
          <button onClick={() => { ttsStop(); sr.reset(); go('home'); }} className="m-link">
            <Icon.arrowL s={14} /> Volver al cuartel
          </button>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="m-pill gold">★ Modo I · Predefinidas</span>
            <div className="m-seg">
              {['Lenta', 'Normal', 'Rápida'].map(s => (
                <button key={s} onClick={() => setSpeed(s)} className={speed === s ? 'on' : ''}>{s}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Question header */}
        <section style={{
          display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap',
          padding: '28px 32px', background: 'var(--m-card)', border: '1px solid var(--m-line-strong)',
          marginBottom: 32,
        }}>
          <div style={{
            fontFamily: 'var(--m-font-display)', fontSize: 72, lineHeight: .9,
            color: 'var(--m-gold)', fontWeight: 350, letterSpacing: '-.03em',
            fontVariantNumeric: 'tabular-nums', flex: '0 0 auto',
          }}>
            {String(qIdx + 1).padStart(2, '0')}
          </div>
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <div className="m-mono" style={{
              fontSize: 10.5, letterSpacing: '.24em', textTransform: 'uppercase',
              color: 'var(--m-muted)', marginBottom: 6,
            }}>
              Pregunta {qIdx + 1} / {QUESTIONS.length} · {q.topic.es}
            </div>
            <h1 style={{
              margin: 0, fontFamily: 'var(--m-font-display)', fontWeight: 350,
              fontSize: 'clamp(24px, 3.6vw, 38px)', lineHeight: 1.15, letterSpacing: '-.015em',
              color: 'var(--m-ink)',
            }}>
              {q.q.en}
            </h1>
            <div style={{
              marginTop: 10, fontSize: 15, color: 'var(--m-ink-2)',
              fontFamily: 'var(--m-font-display)', fontStyle: 'italic',
            }}>
              {q.q.es}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '0 0 auto' }}>
            <button className="m-btn" onClick={() => playTTS('q', q.q.en)}>
              <Icon.speaker s={14} /> {ttsPlaying === 'q' ? 'Detener audio' : 'Escuchar pregunta'}
            </button>
            <button className="m-btn" onClick={() => playTTS('a', q.a.en)}>
              <Icon.speaker s={14} /> {ttsPlaying === 'a' ? 'Detener audio' : 'Escuchar respuesta'}
            </button>
          </div>
        </section>

        {/* Record section */}
        <section style={{
          padding: '44px 32px',
          background: 'var(--m-accent)',
          color: 'var(--m-bg)',
          border: '1px solid var(--m-accent)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
          marginBottom: 32,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Live transcript during recording */}
          {stage === 'recording' && sr.liveText && (
            <div style={{
              width: '100%', padding: '16px 20px',
              background: 'rgba(255,255,255,.08)',
              fontFamily: 'var(--m-font-display)', fontSize: 20, lineHeight: 1.5,
              color: 'rgba(255,255,255,.92)', letterSpacing: '-.005em',
              borderLeft: '3px solid var(--m-gold)', marginBottom: 4,
            }}>
              {sr.liveText}
            </div>
          )}

          <button
            onClick={toggleRecording}
            className="m-record"
            data-active={stage === 'recording'}
            title={stage === 'recording' ? 'Parar grabación' : 'Empezar a grabar'}
          >
            <Icon.mic s={36} />
          </button>

          <WaveformMin active={stage === 'recording'} />

          {stage === 'recording' && (
            <button onClick={cancelRecording} style={{
              background: 'transparent', border: '1px solid rgba(255,255,255,.4)',
              color: 'rgba(255,255,255,.85)', cursor: 'pointer',
              padding: '6px 20px', fontSize: 12, letterSpacing: '.1em',
              fontFamily: 'var(--m-font-mono)', textTransform: 'uppercase',
            }}>
              Cancelar
            </button>
          )}

          <div className="m-mono" style={{
            fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.7)',
          }}>
            {stage === 'recording' ? '🎤 Escuchando… habla ahora'
              : stage === 'scored' ? 'Listo · pulsa para repetir'
              : sr.isSupported ? 'Pulsa el micrófono para empezar'
              : '⚠️ Reconocimiento de voz no disponible en este navegador'}
          </div>

          {srError && (
            <div style={{
              color: '#ffa0a0', fontSize: 13, textAlign: 'center',
              maxWidth: 440, lineHeight: 1.4
            }}>
              {srError}
            </div>
          )}
        </section>

        {/* Score block */}
        {scoreData && stage === 'scored' && (
          <section className="fade-enter" style={{
            display: 'grid', gridTemplateColumns: 'minmax(200px, 260px) 1fr', gap: 32,
            marginBottom: 36, alignItems: 'start',
            padding: 28, background: 'var(--m-card)', border: '1px solid var(--m-line-strong)',
          }}>
            <div>
              <div className="m-mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--m-muted)', marginBottom: 6 }}>
                Puntuación
              </div>
              <div style={{
                fontFamily: 'var(--m-font-display)', fontSize: 108, lineHeight: .9,
                color: 'var(--m-accent)', letterSpacing: '-.04em', fontWeight: 350,
                fontVariantNumeric: 'tabular-nums',
              }}>{scoreData.score}</div>
              <div style={{ fontSize: 13, color: 'var(--m-ink-2)', marginTop: 8 }}>
                {scoreData.emoji} {scoreLabel}
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <span className="m-pill gold">+{Math.round(scoreData.score / 8)} puntos</span>
                <span className="m-pill">{scoreData.cls === 'great' ? 'Notable' : scoreData.cls === 'good' ? 'Aprobado' : 'Sigue practicando'}</span>
              </div>
            </div>

            <div>
              <div className="m-mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--m-muted)', marginBottom: 10 }}>
                Lo que dijiste
              </div>
              <div style={{
                fontFamily: 'var(--m-font-display)', fontSize: 19, lineHeight: 1.65,
                color: 'var(--m-ink-2)', letterSpacing: '-.005em',
              }}>
                {scoreData.userWords.map((w, i) => {
                  const ok = scoreData.correctSet.has(w);
                  return (
                    <span key={i} style={{
                      background: ok ? 'rgba(31,58,38,.13)' : 'transparent',
                      color: ok ? 'var(--m-accent)' : 'inherit',
                      padding: '2px 3px', marginRight: 2, borderRadius: 2,
                    }}>{w} </span>
                  );
                })}
              </div>

              {/* Respuesta correcta con highlights */}
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px dashed var(--m-line-strong)' }}>
                <div className="m-mono" style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--m-muted)', marginBottom: 8 }}>
                  Respuesta modelo — <span style={{ color: 'var(--m-gold)' }}>dorado = palabras que dijiste</span>
                </div>
                <div style={{
                  fontFamily: 'var(--m-font-display)', fontSize: 17, lineHeight: 1.65,
                  color: 'var(--m-ink-2)', letterSpacing: '-.005em',
                }}>
                  {scoreData.correctWords.map((w, i) => {
                    const said = scoreData.userSet.has(w);
                    return (
                      <span key={i} style={{
                        background: said ? 'rgba(184,146,74,.22)' : 'transparent',
                        color: said ? 'var(--m-gold)' : 'inherit',
                        padding: '2px 3px', marginRight: 2, borderRadius: 2,
                        fontWeight: said ? 600 : 400,
                      }}>{w} </span>
                    );
                  })}
                </div>
              </div>

              {/* Hints for missed words */}
              {scoreData.missedHints.length > 0 && (
                <div style={{ marginTop: 14, padding: '12px 16px', background: 'var(--m-bg-2)', border: '1px solid var(--m-line)' }}>
                  <div className="m-mono" style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--m-muted)', marginBottom: 8 }}>
                    💡 Pronunciación de palabras clave
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {scoreData.missedHints.map(({ word, hint }, i) => (
                      <li key={i} style={{ fontSize: 13.5 }}>
                        <strong style={{ color: 'var(--m-accent)' }}>{word}</strong>
                        <span style={{ color: 'var(--m-muted)' }}> → </span>
                        <em style={{ fontFamily: 'var(--m-font-mono)', letterSpacing: '.04em' }}>{hint}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
                <button className="m-btn primary" onClick={handleNext}>
                  Siguiente pregunta <Icon.arrow s={14} />
                </button>
                <button className="m-btn" onClick={() => { setStage('idle'); setScoreData(null); sr.reset(); }}>
                  <Icon.refresh s={14} /> Repetir
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Model answer disclosure */}
        <section style={{ marginBottom: 40 }}>
          <button
            onClick={() => setShowAnswer(s => !s)}
            className="m-disclose"
            aria-expanded={showAnswer}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span className="m-disclose-icon" data-open={showAnswer}>
                <Icon.chevron s={14} />
              </span>
              Ver respuesta modelo
            </span>
            <span className="m-mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--m-muted)' }}>
              {showAnswer ? 'Ocultar' : 'Mostrar'}
            </span>
          </button>

          {showAnswer && (
            <div className="fade-enter" style={{
              marginTop: 20, paddingLeft: 26, borderLeft: '2px solid var(--m-gold)',
            }}>
              <div style={{
                fontFamily: 'var(--m-font-display)', fontSize: 21, lineHeight: 1.55,
                color: 'var(--m-ink)', letterSpacing: '-.005em',
              }}>
                {q.a.en}
              </div>
              <div style={{ fontSize: 14, color: 'var(--m-muted)', marginTop: 12, fontStyle: 'italic', lineHeight: 1.55 }}>
                {q.a.es}
              </div>
              <button
                className="m-tiny-btn"
                style={{ marginTop: 14 }}
                onClick={() => playTTS('a', q.a.en)}
              >
                <Icon.speaker s={13} /> {ttsPlaying === 'a' ? 'Detener audio' : 'Escuchar respuesta'}
              </button>
            </div>
          )}
        </section>

        {/* Progress bar */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ height: 3, background: 'var(--m-line-strong)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0, width: ((qIdx + 1) / QUESTIONS.length * 100) + '%',
              background: 'var(--m-gold)', transition: 'width .4s ease',
            }} />
          </div>
          <div className="m-mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--m-muted)', marginTop: 6 }}>
            {qIdx + 1} / {QUESTIONS.length} preguntas
          </div>
        </div>

        {/* Pager */}
        <nav style={{
          display: 'flex', alignItems: 'center', gap: 12,
          paddingTop: 22, borderTop: '1px solid var(--m-line)',
        }}>
          <button onClick={handlePrev} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 18px', background: 'transparent',
            border: '1px solid var(--m-line-strong)',
            color: 'var(--m-ink)', cursor: 'pointer', fontSize: 12,
            fontFamily: 'var(--m-font-mono)', letterSpacing: '.08em', textTransform: 'uppercase',
            opacity: qIdx === 0 ? .3 : 1, pointerEvents: qIdx === 0 ? 'none' : 'auto', flexShrink: 0,
          }}>
            <Icon.arrowL s={15} /> Anterior
          </button>

          <div className="m-mono" style={{
            flex: 1, textAlign: 'center',
            fontSize: 11, letterSpacing: '.18em', color: 'var(--m-muted)',
          }}>
            {String(qIdx + 1).padStart(2,'0')} / {String(QUESTIONS.length).padStart(2,'0')}
          </div>

          <button onClick={handleNext} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 28px',
            background: 'var(--m-accent)', color: '#fff',
            border: '1px solid var(--m-accent)',
            cursor: 'pointer', fontSize: 14, fontWeight: 700,
            fontFamily: 'var(--m-font-ui)', letterSpacing: '.01em',
            flexShrink: 0,
          }}>
            {qIdx < QUESTIONS.length - 1 ? 'Siguiente' : 'Finalizar'} <Icon.arrow s={16} />
          </button>
        </nav>

      </div>
    </main>
  );
}

/* expose */
Object.assign(window, { LandingMin, TopBarMin, ModeCard, PracticeMin, WaveformMin });
