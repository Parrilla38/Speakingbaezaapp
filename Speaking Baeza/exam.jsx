/* ────────────────────────────────────────────────────────────────
   Modo IV · Examen — completamente funcional
   Preguntas de QUESTIONS (data.jsx) · SR real · 3 intentos · Pista
   ──────────────────────────────────────────────────────────────── */

const HINT_PENALTY  = 20;
const QUESTION_TIME = 120;
const TOTAL_QS      = 5;

function pickExamQuestions(n) {
  const pool = [...QUESTIONS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
}

function pad2x(n) { return String(n).padStart(2, '0'); }
function fmtTime(s) { return `${pad2x(Math.floor(s / 60))}:${pad2x(s % 60)}`; }

/* ════════════════════ EXAM ROOT ════════════════════ */
function Exam({ go, onResult }) {
  const [stage,     setStage]     = useState('intro');
  const [questions, setQuestions] = useState(() => pickExamQuestions(TOTAL_QS));
  const [qIdx,      setQIdx]      = useState(0);
  const [results,   setResults]   = useState([]);

  const start = () => { setQIdx(0); setResults([]); setStage('running'); };

  const handleNext = (result) => {
    const next = [...results, result];
    setResults(next);
    if (onResult) onResult(result.finalScore);
    if (qIdx + 1 >= TOTAL_QS) { setStage('done'); }
    else { setQIdx(i => i + 1); }
  };

  const restart = () => {
    setQuestions(pickExamQuestions(TOTAL_QS));
    setQIdx(0); setResults([]); setStage('intro');
  };

  if (stage === 'intro')                    return <ExamIntro   go={go} start={start} questions={questions} />;
  if (stage === 'running' && questions[qIdx]) return <ExamRunning key={qIdx} go={go} current={questions[qIdx]} qIdx={qIdx} total={TOTAL_QS} onNext={handleNext} />;
  return <ExamDone go={go} questions={questions} results={results} restart={restart} />;
}

/* ════════════════════ INTRO ════════════════════ */
function ExamIntro({ go, start, questions }) {
  const rules = [
    ['5',   'Preguntas',      'del banco oficial'],
    ['∞',   'Intentos',       'sin límite por pregunta'],
    ['2:00','Cronómetro',     'por pregunta'],
    ['💡',  'Pista opcional', `-${HINT_PENALTY} pts si se usa`],
  ];
  return (
    <main className="fade-enter" data-screen-label="04 Exam Intro">
      <div className="m-container" style={{ paddingTop:32, paddingBottom:80 }}>
        <button onClick={()=>go('home')} className="m-link" style={{ marginBottom:28 }}>
          <Icon.arrowL s={14}/> Volver al cuartel
        </button>
        <div className="m-eyebrow" style={{ marginBottom:22 }}>
          <span className="m-dot"/><span>Modo IV</span><span className="m-rule"/><span>Simulacro de examen</span>
        </div>
        <h1 className="m-hero-h1" style={{ fontSize:'clamp(48px,9vw,112px)' }}>
          Examen <em>oficial</em><span className="m-hero-flourish">.</span>
        </h1>
        <p style={{ margin:'24px 0 0', maxWidth:580, fontSize:17, lineHeight:1.55, color:'var(--m-ink-2)' }}>
          Cinco preguntas aleatorias del banco oficial. Intentos ilimitados por pregunta con cronómetro de dos minutos. Pista disponible con penalización. La respuesta modelo se revela al terminar.
        </p>
        <section className="m-exam-rules" style={{ marginTop:40, background:'var(--m-card)', border:'1px solid var(--m-line-strong)' }}>
          {rules.map((r,i)=>(
            <div key={i} className="m-exam-rule">
              <div style={{ fontFamily:'var(--m-font-display)', fontSize:44, lineHeight:1, color:'var(--m-accent)', letterSpacing:'-.02em', fontWeight:350 }}>{r[0]}</div>
              <div style={{ marginTop:10, fontFamily:'var(--m-font-mono)', fontSize:10.5, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--m-gold)' }}>{r[1]}</div>
              <div style={{ marginTop:4, fontSize:13.5, color:'var(--m-ink-2)' }}>{r[2]}</div>
            </div>
          ))}
        </section>
        <section style={{ marginTop:36 }}>
          <div className="m-section-label"><span className="n">·</span><span className="line"/><span>Temas del examen de hoy</span></div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {questions.map((q,i)=>(
              <span key={i} className="m-pill">
                <span style={{ color:'var(--m-gold)', marginRight:6 }}>0{i+1}</span>{q.topic.es}
              </span>
            ))}
          </div>
        </section>
        <section style={{ marginTop:56, padding:32, background:'var(--m-accent)', color:'var(--m-bg)', border:'1px solid var(--m-accent)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:20 }}>
          <div>
            <div className="m-mono" style={{ fontSize:10.5, letterSpacing:'.24em', textTransform:'uppercase', color:'var(--m-gold-2)', marginBottom:8 }}>Cuando estés listo</div>
            <div style={{ fontFamily:'var(--m-font-display)', fontSize:'clamp(28px,4vw,40px)', lineHeight:1.1, letterSpacing:'-.015em', fontWeight:350 }}>
              El cronómetro arranca al pulsar.<br/>No habrá pausas.
            </div>
          </div>
          <button onClick={start} className="m-btn gold" style={{ padding:'18px 28px', fontSize:15, minHeight:56 }}>
            <Icon.target s={16}/> Iniciar examen <Icon.arrow s={16}/>
          </button>
        </section>
      </div>
    </main>
  );
}

/* ════════════════════ RUNNING ════════════════════ */
function ExamRunning({ go, current, qIdx, total, onNext }) {
  const sr = useSpeech();
  const [timeLeft,     setTimeLeft]     = useState(QUESTION_TIME);
  const [phase,        setPhase]        = useState('idle'); // idle | recording | reviewing
  const [attemptsList, setAttemptsList] = useState([]);
  const [lastAttempt,  setLastAttempt]  = useState(null);
  const [hintUsed,     setHintUsed]     = useState(false);
  const [ttsPlaying,   setTtsPlaying]   = useState(null);
  const hintUsedRef       = useRef(false);
  const resultDoneRef     = useRef(false);

  useEffect(() => { return () => { ttsStop(); }; }, []);

  /* Timer — pausa mientras graba */
  useEffect(() => {
    if (phase === 'recording') return;
    if (timeLeft <= 0) {
      const best = getBest(attemptsList);
      onNext({ transcript: best?.transcript||'', scoreData: best?.scoreData||null, finalScore: best?.finalScore||0, attempts: attemptsList.length, hintUsed });
      return;
    }
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, phase]);

  const getBest = (list) => list.reduce((b,a) => !b || a.finalScore > b.finalScore ? a : b, null);

  const processResult = (finalText) => {
    if (resultDoneRef.current) return;
    resultDoneRef.current = true;
    if (!finalText || !finalText.trim()) { setPhase('idle'); return; }
    const sd = calcScore(finalText, current.a.en);
    const finalScore = Math.max(0, sd.score - (hintUsedRef.current ? HINT_PENALTY : 0));
    const attempt = { transcript: finalText, scoreData: sd, finalScore };
    setLastAttempt(attempt);
    setAttemptsList(prev => [...prev, attempt]);
    setPhase('reviewing');
  };

  const startRecording = () => {
    ttsStop();
    setTtsPlaying(null);
    resultDoneRef.current = false;
    setPhase('recording');
    sr.start(processResult, () => setPhase('idle'));
  };

  const stopRecording = () => { sr.stop(processResult); };

  const cancelRecording = () => {
    resultDoneRef.current = true;
    sr.reset();
    setPhase('idle');
  };

  const retry = () => { sr.reset && sr.reset(); setPhase('idle'); };

  const playTTS = (id, text) => {
    if (ttsPlaying === id) {
      ttsStop();
      setTtsPlaying(null);
    } else {
      ttsStop();
      ttsSpeak(text, 0.9, () => setTtsPlaying(null));
      setTtsPlaying(id);
    }
  };

  const confirmAnswer = () => {
    const best = getBest(attemptsList);
    onNext({ transcript: best?.transcript||'', scoreData: best?.scoreData||null, finalScore: best?.finalScore||0, attempts: attemptsList.length, hintUsed });
  };

  const useHint = () => { hintUsedRef.current = true; setHintUsed(true); };

  const hintText     = current.a.en.split('.')[0] + '.';
  const pct          = ((QUESTION_TIME - timeLeft) / QUESTION_TIME) * 100;
  const warn         = timeLeft <= 30;
  const urgent       = timeLeft <= 10;

  const scoreLabel = (cls) => cls === 'great' ? 'Excelente' : cls === 'good' ? 'Bien' : cls === 'ok' ? 'Regular' : 'Sigue practicando';
  const scoreColor = (s) => s >= 75 ? 'var(--m-accent)' : s >= 50 ? '#c4642a' : 'var(--m-burgundy)';

  return (
    <main className="fade-enter" data-screen-label={`04 Exam · Q${qIdx+1}`}>
      <div className="m-container" style={{ paddingTop:24, paddingBottom:60 }}>

        {/* Progress dots */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, marginBottom:28, flexWrap:'wrap' }}>
          <div className="m-eyebrow"><span className="m-dot"/><span>Examen en curso</span></div>
          <div style={{ display:'flex', gap:6 }}>
            {Array.from({length:total}).map((_,i)=>(
              <span key={i} style={{ width:36, height:4, background: i<qIdx?'var(--m-gold)':i===qIdx?'var(--m-accent)':'var(--m-line-strong)' }}/>
            ))}
          </div>
        </div>

        {/* Counter + timer */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:16, marginBottom:20, flexWrap:'wrap' }}>
          <div>
            <div className="m-mono" style={{ fontSize:10.5, letterSpacing:'.24em', textTransform:'uppercase', color:'var(--m-muted)' }}>
              Pregunta {qIdx+1} de {total} · {current.topic.es}
            </div>
            <div style={{ fontFamily:'var(--m-font-display)', fontSize:56, fontWeight:350, letterSpacing:'-.03em', lineHeight:1, color:'var(--m-gold)', marginTop:6, fontVariantNumeric:'tabular-nums' }}>
              0{qIdx+1} <span style={{ color:'var(--m-muted)', fontSize:28 }}>/ 0{total}</span>
            </div>
          </div>
          <div style={{ textAlign:'right' }}>
            <div className="m-mono" style={{ fontSize:10.5, letterSpacing:'.24em', textTransform:'uppercase', color: phase==='recording'?'var(--m-accent)':warn?'var(--m-burgundy)':'var(--m-muted)' }}>
              {phase==='recording'?'⏸ Pausado':urgent?'¡Tiempo agotándose!':warn?'Quedan':'Tiempo restante'}
            </div>
            <div style={{ fontFamily:'var(--m-font-display)', fontSize:56, fontWeight:350, letterSpacing:'-.03em', lineHeight:1, color: phase==='recording'?'var(--m-accent)':urgent?'var(--m-burgundy)':warn?'#c4642a':'var(--m-accent)', marginTop:6, fontVariantNumeric:'tabular-nums', transition:'color .3s' }}>
              {fmtTime(timeLeft)}
            </div>
          </div>
        </div>

        {/* Timer bar */}
        <div style={{ height:4, background:'var(--m-line)', marginBottom:28, position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, width:pct+'%', background: urgent?'var(--m-burgundy)':warn?'#c4642a':'linear-gradient(90deg,var(--m-accent) 0%,var(--m-gold) 100%)', transition:'width 1s linear, background .3s' }}/>
        </div>

        {/* Question card */}
        <section style={{ padding:'28px 32px', background:'var(--m-card)', border:'1px solid var(--m-line-strong)', marginBottom:20 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:16, flexWrap:'wrap' }}>
            <div style={{ flex:1, minWidth:0 }}>
              <h1 style={{ margin:0, fontFamily:'var(--m-font-display)', fontWeight:350, fontSize:'clamp(22px,4vw,42px)', lineHeight:1.15, letterSpacing:'-.02em', color:'var(--m-ink)', textWrap:'balance' }}>
                {current.q.en}
              </h1>
              <div style={{ marginTop:10, fontFamily:'var(--m-font-display)', fontStyle:'italic', fontSize:16, color:'var(--m-ink-2)' }}>
                {current.q.es}
              </div>
            </div>
            <button className="m-tiny-btn" onClick={()=>playTTS('q', current.q.en)} style={{ flex:'0 0 auto', marginTop:4 }}>
              <Icon.speaker s={13}/> {ttsPlaying === 'q' ? 'Detener' : 'Escuchar'}
            </button>
          </div>

          {/* Hint */}
          {!hintUsed ? (
            <div style={{ marginTop:18, paddingTop:14, borderTop:'1px dashed var(--m-line-strong)', display:'flex', alignItems:'center', gap:12, flexWrap:'wrap' }}>
              <button className="m-tiny-btn" onClick={useHint} style={{ borderColor:'#c4642a', color:'#c4642a' }}>
                💡 Pista (-{HINT_PENALTY} pts)
              </button>
              <span style={{ fontSize:12, color:'var(--m-muted)' }}>Primera frase de la respuesta modelo. Penaliza la nota.</span>
            </div>
          ) : (
            <div style={{ marginTop:16, paddingTop:14, borderTop:'1px dashed var(--m-line-strong)' }}>
              <div className="m-mono" style={{ fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'#c4642a', marginBottom:6 }}>
                💡 Pista · -{HINT_PENALTY} pts aplicados a esta pregunta
              </div>
              <div style={{ fontSize:15, lineHeight:1.55, color:'var(--m-ink-2)', fontStyle:'italic' }}>
                "{hintText}"
              </div>
            </div>
          )}
        </section>

        {/* Recording block */}
        {phase !== 'reviewing' && (
          <section style={{ padding:'32px', background: phase==='recording'?'var(--m-burgundy)':'var(--m-accent)', color:'var(--m-bg)', border:'1px solid currentColor', display:'flex', flexDirection:'column', alignItems:'center', gap:14, marginBottom:16, transition:'background .3s' }}>
            <button onClick={phase==='recording'?stopRecording:startRecording} className="m-record" data-active={phase==='recording'} disabled={!sr.isSupported}>
              <Icon.mic s={40}/>
            </button>
            <WaveformMin active={phase==='recording'}/>
            {phase==='recording' && (
              <button onClick={cancelRecording} style={{
                background: 'transparent', border: '1px solid rgba(255,255,255,.4)',
                color: 'rgba(255,255,255,.85)', cursor: 'pointer',
                padding: '6px 20px', fontSize: 12, letterSpacing: '.1em',
                fontFamily: 'var(--m-font-mono)', textTransform: 'uppercase',
              }}>
                Cancelar
              </button>
            )}
            {phase==='recording' && sr.liveText && (
              <div style={{ width:'100%', maxWidth:560, padding:'10px 14px', background:'rgba(0,0,0,.2)', borderRadius:3, fontSize:14, lineHeight:1.5, color:'rgba(255,255,255,.9)', fontStyle:'italic', textAlign:'center' }}>
                {sr.liveText}
              </div>
            )}
            <div className="m-mono" style={{ fontSize:10.5, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.78)' }}>
              {!sr.isSupported?'Reconocimiento de voz no disponible':phase==='recording'?'Grabando… pulsa para parar':'Pulsa el micrófono para hablar'}
            </div>
          </section>
        )}

        {/* Score review */}
        {phase === 'reviewing' && lastAttempt && (
          <section style={{ padding:'24px 28px', background:'var(--m-card)', border:'1px solid var(--m-line-strong)', marginBottom:16 }}>
            <div style={{ display:'flex', alignItems:'center', gap:20, marginBottom:16, flexWrap:'wrap' }}>
              <div style={{ fontFamily:'var(--m-font-display)', fontSize:64, fontWeight:350, letterSpacing:'-.03em', lineHeight:1, fontVariantNumeric:'tabular-nums', color:scoreColor(lastAttempt.finalScore) }}>
                {lastAttempt.finalScore}
              </div>
              <div>
                <div style={{ fontFamily:'var(--m-font-display)', fontSize:22, fontStyle:'italic', color:'var(--m-ink)', lineHeight:1.2 }}>
                  {lastAttempt.scoreData.emoji} {scoreLabel(lastAttempt.scoreData.cls)}
                </div>
                <div className="m-mono" style={{ fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--m-muted)', marginTop:4 }}>
                  Intento {attemptsList.length}
                  {hintUsed && <span style={{ color:'#c4642a' }}> · Pista -{HINT_PENALTY} pts</span>}
                </div>
              </div>
            </div>

            {/* Transcript */}
            {lastAttempt.transcript && (
              <div style={{ marginBottom:14 }}>
                <div className="m-mono" style={{ fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:6 }}>Lo que has dicho</div>
                <div style={{ fontSize:14.5, lineHeight:1.6, color:'var(--m-ink-2)', fontStyle:'italic' }}>"{lastAttempt.transcript}"</div>
              </div>
            )}

            {/* Word comparison */}
            {lastAttempt.scoreData && lastAttempt.scoreData.correctWords && (
              <div style={{ marginBottom:14 }}>
                <div className="m-mono" style={{ fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:8 }}>Palabras de la respuesta modelo</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                  {lastAttempt.scoreData.correctWords.map((w,i)=>{
                    const hit = lastAttempt.scoreData.userSet && lastAttempt.scoreData.userSet.has(normText(w));
                    return (
                      <span key={i} style={{ padding:'3px 8px', borderRadius:999, fontSize:12.5, fontFamily:'var(--m-font-mono)', background: hit?'rgba(26,42,31,.1)':'rgba(107,31,31,.07)', color: hit?'var(--m-accent)':'var(--m-burgundy)', border:`1px solid ${hit?'rgba(26,42,31,.2)':'rgba(107,31,31,.2)'}`, textDecoration: hit?'none':'line-through', opacity: hit?1:.75 }}>
                        {w}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Actions */}
            <div style={{ display:'flex', gap:10, flexWrap:'wrap', paddingTop:14, borderTop:'1px dashed var(--m-line-strong)' }}>
              <button className="m-btn" onClick={retry}>
                <Icon.refresh s={13}/> Intentar de nuevo
              </button>
              <button className="m-btn primary" onClick={confirmAnswer} style={{ marginLeft:'auto' }}>
                {qIdx+1>=total?<><Icon.check s={13}/> Terminar examen</>:<>Siguiente pregunta <Icon.arrow s={13}/></>}
              </button>
            </div>
          </section>
        )}

        {/* Skip / footer */}
        {phase !== 'reviewing' && (
          <div style={{ display:'flex', justifyContent:'flex-end', marginTop:12 }}>
            <button className="m-btn" onClick={confirmAnswer} disabled={attemptsList.length===0} style={{ opacity:attemptsList.length===0?.35:1 }}>
              {qIdx+1>=total?<><Icon.check s={13}/> Terminar examen</>:<>Pasar pregunta <Icon.arrow s={13}/></>}
            </button>
          </div>
        )}
        <div style={{ marginTop:12 }}>
          <div className="m-mono" style={{ fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--m-muted)' }}>
            La respuesta modelo se mostrará al finalizar el examen.
          </div>
        </div>
      </div>
    </main>
  );
}

/* ════════════════════ DONE ════════════════════ */
function ExamDone({ go, questions, results, restart }) {
  const avg = results.length ? Math.round(results.reduce((s,r)=>s+(r.finalScore||0),0)/results.length) : 0;
  const passLabel = avg>=90?'Sobresaliente':avg>=75?'Notable':avg>=60?'Bien':avg>=50?'Suficiente':'Insuficiente';

  const allMissed = results.flatMap(r => {
    if (!r.scoreData?.keyWords) return [];
    return r.scoreData.keyWords.filter(w => !r.scoreData.matchedSet || !r.scoreData.matchedSet.has(w));
  });
  const topMissed = Array.from(new Set(allMissed)).slice(0, 6);

  return (
    <main className="fade-enter" data-screen-label="04 Exam Done">
      <div className="m-container" style={{ paddingTop:24, paddingBottom:80 }}>
        <button onClick={()=>go('home')} className="m-link" style={{ marginBottom:24 }}>
          <Icon.arrowL s={14}/> Volver al cuartel
        </button>

        {/* Score hero */}
        <section style={{ padding:32, background:'var(--m-accent)', color:'var(--m-bg)', border:'1px solid var(--m-accent)', position:'relative', overflow:'hidden', marginBottom:40 }}>
          <div style={{ position:'absolute', right:-40, top:-40, width:280, height:280, backgroundImage:'repeating-linear-gradient(135deg,rgba(255,255,255,.04) 0 1px,transparent 1px 14px)', pointerEvents:'none' }}/>
          <div style={{ position:'relative', zIndex:1 }}>
            <div className="m-mono" style={{ fontSize:10.5, letterSpacing:'.24em', textTransform:'uppercase', color:'var(--m-gold-2)', marginBottom:14 }}>
              Examen terminado · {questions.length} preguntas
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', gap:24, flexWrap:'wrap' }}>
              <div style={{ fontFamily:'var(--m-font-display)', fontWeight:350, fontSize:'clamp(120px,18vw,200px)', lineHeight:.85, letterSpacing:'-.04em', color:'var(--m-gold-2)', fontVariantNumeric:'tabular-nums' }}>
                {avg}
              </div>
              <div style={{ paddingBottom:14 }}>
                <div style={{ fontFamily:'var(--m-font-display)', fontSize:36, fontWeight:400, letterSpacing:'-.015em', fontStyle:'italic', color:'var(--m-bg)' }}>{passLabel}</div>
                <div className="m-mono" style={{ fontSize:10.5, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.62)', marginTop:4 }}>Sobre 100 · Media del examen</div>
              </div>
            </div>
            {/* Per-question bar */}
            <div style={{ marginTop:28, display:'grid', gridTemplateColumns:`repeat(${questions.length},1fr)`, gap:10 }}>
              {questions.map((q,i)=>{
                const r = results[i]; const s = r?.finalScore||0;
                return (
                  <div key={i}>
                    <div className="m-mono" style={{ fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.55)' }}>
                      0{i+1}
                    </div>
                    <div style={{ marginTop:6, height:4, background:'rgba(255,255,255,.14)', position:'relative', overflow:'hidden' }}>
                      <div style={{ position:'absolute', inset:0, width:s+'%', background: s>=75?'var(--m-gold)':s>=50?'#d49a4a':'#a85a4a' }}/>
                    </div>
                    <div style={{ marginTop:6, fontFamily:'var(--m-font-display)', fontSize:24, color:'var(--m-bg)', fontWeight:350, fontVariantNumeric:'tabular-nums' }}>
                      {s}{r?.hintUsed&&<span style={{ fontSize:12, marginLeft:4, opacity:.7 }}>💡</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Missed words */}
        {topMissed.length > 0 && (
          <section style={{ marginBottom:48 }}>
            <div className="m-section-label"><span className="n">·</span><span className="line"/><span>Vocabulario que se te escapó</span></div>
            <div style={{ padding:'22px 26px', background:'var(--m-card)', border:'1px solid var(--m-line-strong)', display:'flex', flexWrap:'wrap', gap:24, alignItems:'center' }}>
              <div style={{ fontFamily:'var(--m-font-display)', fontStyle:'italic', fontSize:22, color:'var(--m-accent)' }}>Palabras clave que te faltaron:</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {topMissed.map((m,i)=>(
                  <span key={i} className="m-pill gold" style={{ background:'var(--m-bg)' }}>{m}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tips */}
        <section style={{ marginBottom:48 }}>
          <div className="m-section-label"><span className="n">·</span><span className="line"/><span>Cómo mejorar</span></div>
          <div style={{ padding:'22px 26px', background:'var(--m-card)', border:'1px solid var(--m-line-strong)' }}>
            <p style={{ margin:'0 0 16px', fontSize:15.5, lineHeight:1.6, color:'var(--m-ink)', fontFamily:'var(--m-font-display)', fontStyle:'italic' }}>
              {avg >= 75
                ? '🌟 Excelente resultado. Estás dominando el vocabulario clave. Repasa las palabras que te faltaron para alcanzar la puntuación perfecta.'
                : avg >= 50
                ? '👍 Buen trabajo. Para mejorar, fíjate en las palabras clave resaltadas en la revisión de cada pregunta y memoriza las respuestas modelo.'
                : '💪 Sigue practicando. Escucha las respuestas modelo pulsando "Escuchar modelo" en cada pregunta y repítelas en voz alta varias veces.'}
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {[
                ['📖', 'Aprende las palabras clave de cada respuesta modelo — son las que más puntúan.'],
                ['🎙️', 'Habla despacio y con claridad para que el reconocimiento de voz te entienda mejor.'],
                ['🔄', 'Usa los 3 intentos: el mejor de los tres es el que cuenta en la nota final.'],
                ['💡', 'Usa la pista solo si estás bloqueado — ayuda, pero resta 20 puntos.'],
                ['🌐', 'El reconocimiento de voz funciona mejor en Chrome o Edge con buena conexión a Internet.'],
              ].map(([icon, tip], i) => (
                <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                  <span style={{ fontSize:17, flex:'0 0 auto', lineHeight:1.5 }}>{icon}</span>
                  <span style={{ fontSize:13.5, lineHeight:1.55, color:'var(--m-ink-2)' }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Per-question review */}
        <section style={{ marginBottom:40 }}>
          <div className="m-section-label"><span className="n">·</span><span className="line"/><span>Revisión pregunta por pregunta</span></div>
          <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
            {questions.map((q,i)=>(
              <ExamReview key={i} idx={i} q={q} result={results[i]||null}/>
            ))}
          </div>
        </section>

        <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'flex-end', paddingTop:24, borderTop:'1px solid var(--m-line)' }}>
          <button className="m-btn" onClick={()=>go('home')}><Icon.arrowL s={14}/> Volver al cuartel</button>
          <button className="m-btn primary" onClick={restart}><Icon.refresh s={14}/> Repetir examen</button>
        </div>
      </div>
    </main>
  );
}

/* ════════════════════ REVIEW ════════════════════ */
function ExamReview({ idx, q, result }) {
  const [open, setOpen] = useState(idx === 0);
  const score      = result?.finalScore || 0;
  const scoreColor = score>=75?'var(--m-accent)':score>=50?'#c4642a':'var(--m-burgundy)';
  const missedWords = result?.scoreData?.keyWords
    ? result.scoreData.keyWords.filter(w => !result.scoreData.matchedSet || !result.scoreData.matchedSet.has(w))
    : [];

  return (
    <div style={{ background:'var(--m-card)', border:'1px solid var(--m-line-strong)' }}>
      <button onClick={()=>setOpen(o=>!o)} style={{ width:'100%', background:'transparent', border:'none', padding:'20px 24px', cursor:'pointer', display:'flex', alignItems:'center', gap:20, textAlign:'left', fontFamily:'var(--m-font-ui)' }}>
        <div style={{ fontFamily:'var(--m-font-display)', fontSize:38, fontWeight:350, color:'var(--m-gold)', letterSpacing:'-.02em', lineHeight:1, width:50, flex:'0 0 50px', fontVariantNumeric:'tabular-nums' }}>
          0{idx+1}
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div className="m-mono" style={{ fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--m-muted)' }}>
            {q.topic.es}{result?.hintUsed&&<span style={{ color:'#c4642a', marginLeft:8 }}>💡 pista usada</span>}
          </div>
          <div style={{ fontFamily:'var(--m-font-display)', fontSize:20, lineHeight:1.25, color:'var(--m-ink)', marginTop:4 }}>{q.q.en}</div>
        </div>
        <div style={{ textAlign:'right', flex:'0 0 auto' }}>
          <div style={{ fontFamily:'var(--m-font-display)', fontSize:44, fontWeight:350, color:scoreColor, letterSpacing:'-.02em', lineHeight:1, fontVariantNumeric:'tabular-nums' }}>{score}</div>
          <div className="m-mono" style={{ fontSize:9.5, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--m-muted)', marginTop:4 }}>/ 100</div>
        </div>
        <span className="m-disclose-icon" data-open={open} style={{ flex:'0 0 20px' }}><Icon.chevron s={14}/></span>
      </button>

      {open && (
        <div className="fade-enter m-exam-review-body" style={{ padding:'4px 24px 24px', borderTop:'1px dashed var(--m-line-strong)' }}>
          <div className="m-exam-review-col">
            <div className="m-mono" style={{ fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--m-muted)', margin:'20px 0 10px' }}>
              Lo que dijiste ({result?.attempts||0} intento{result?.attempts!==1?'s':''})
            </div>
            <div style={{ fontSize:15.5, lineHeight:1.55, color:'var(--m-ink-2)', fontStyle:'italic' }}>
              {result?.transcript ? `"${result.transcript}"` : <em style={{ color:'var(--m-muted)' }}>Sin respuesta — tiempo agotado o pregunta saltada.</em>}
            </div>

            {/* Word comparison */}
            {result?.scoreData?.correctWords && (
              <div style={{ marginTop:14 }}>
                <div className="m-mono" style={{ fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--m-muted)', marginBottom:8 }}>Palabras de la respuesta modelo</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                  {result.scoreData.correctWords.map((w,i)=>{
                    const norm = normText(w);
                    const exactHit = result.scoreData.userSet?.has(norm);
                    const fuzzyHit = result.scoreData.matchedSet?.has(norm);
                    const hit = exactHit || fuzzyHit;
                    return (
                      <span key={i} title={fuzzyHit && !exactHit ? 'Reconocido por similitud' : undefined} style={{ padding:'3px 8px', borderRadius:999, fontSize:12.5, fontFamily:'var(--m-font-mono)', background: hit?'rgba(26,42,31,.1)':'rgba(107,31,31,.07)', color: hit?'var(--m-accent)':'var(--m-burgundy)', border:`1px solid ${hit?'rgba(26,42,31,.2)':'rgba(107,31,31,.2)'}`, textDecoration: hit?'none':'line-through', opacity: hit?1:.75 }}>
                        {w}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {missedWords.length > 0 && (
              <div style={{ marginTop:14 }}>
                <div className="m-mono" style={{ fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--m-burgundy)', marginBottom:8 }}>Palabras clave que te faltaron</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                  {missedWords.map((m,i)=>(
                    <span key={i} style={{ padding:'4px 9px', borderRadius:999, background:'rgba(107,31,31,.08)', color:'var(--m-burgundy)', fontFamily:'var(--m-font-mono)', fontSize:10.5, letterSpacing:'.16em', textTransform:'uppercase', border:'1px solid rgba(107,31,31,.22)' }}>{m}</span>
                  ))}
                </div>
              </div>
            )}

            {result?.hintUsed && (
              <div style={{ marginTop:14, padding:'8px 12px', background:'rgba(196,100,42,.08)', border:'1px solid rgba(196,100,42,.2)' }}>
                <span className="m-mono" style={{ fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:'#c4642a' }}>
                  💡 Pista usada · -{HINT_PENALTY} pts deducidos de la puntuación bruta
                </span>
              </div>
            )}
          </div>

          <div className="m-exam-review-col m-exam-review-model">
            <div className="m-mono" style={{ fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--m-accent)', margin:'20px 0 10px' }}>Lo que tendrías que haber dicho</div>
            <div style={{ fontFamily:'var(--m-font-display)', fontSize:18, lineHeight:1.5, color:'var(--m-ink)' }}>{q.a.en}</div>
            <div style={{ marginTop:12, fontSize:13.5, lineHeight:1.55, color:'var(--m-muted)', fontStyle:'italic' }}>{q.a.es}</div>
            <button className="m-tiny-btn" style={{ marginTop:14 }} onClick={()=>ttsSpeak(q.a.en, 0.9)}>
              <Icon.speaker s={13}/> Escuchar modelo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* expose */
Object.assign(window, { Exam, ExamIntro, ExamRunning, ExamDone, ExamReview, pickExamQuestions, fmtTime });
