/* ────────────────────────────────────────────────────────────────
   Screens · Speaking Trainer
   ──────────────────────────────────────────────────────────────── */

/* ════════════════════ LANDING ════════════════════ */

function Landing({ go, user, lang, identity, setIdentity }) {

  const rank = getRank(user.xp);
  const next = getNextRank(user.xp);
  const pct = next ? Math.min(100, Math.round((user.xp - rank.threshold) / (next.threshold - rank.threshold) * 100)) : 100;

  return (
    <main className="fade-enter">

      {/* ── HERO ───────────────────────────────── */}
      <section style={{ paddingTop: 48, paddingBottom: 40, position: 'relative' }}>
        <div className="container">

          <div className="mono" style={{
            display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap',
            fontSize: 10.5, letterSpacing: '.24em', textTransform: 'uppercase',
            color: 'var(--olive-soft)', marginBottom: 36
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 6, height: 6, background: 'var(--gold)', borderRadius: '50%' }} />
              Sesión activa
            </span>
            <span style={{ height: 10, width: 1, background: 'var(--line-strong)' }} />
            <span>Baeza · Jaén</span>
            <span style={{ height: 10, width: 1, background: 'var(--line-strong)' }} />
            <span>EXAMEN ORAL · INGLÉS</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(64px, 12vw, 184px)',
            lineHeight: .92, letterSpacing: '-.02em',
            margin: 0, color: 'var(--ink)'
          }}>
            Speaking<br />
            <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Trainer.</em>
            <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)' }}>°</span>
          </h1>

          <div style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48,
            marginTop: 40, alignItems: 'end'
          }}>
            <p style={{
              margin: 0, maxWidth: 560, fontSize: 19, lineHeight: 1.45, color: 'var(--ink-2)'
            }}>
              Entrena el examen oral de inglés con la <em style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>disciplina</em> de la academia.
              Setenta y cuatro preguntas oficiales, feedback en tiempo real y un sistema de progreso digno de tu rango.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" iconRight={<Icon.arrow s={16} />} onClick={() => go('predefined')}>
                Comenzar entrenamiento
              </Button>
              <Button variant="outline" size="lg" onClick={() => {
                const el = document.getElementById('modos');
                if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' });
              }}>
                Ver modos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER STAT STRIP ───────────────────── */}
      <section style={{ borderTop: '1px solid var(--line-strong)', borderBottom: '1px solid var(--line-strong)' }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0
        }}>
          {[
          { k: '74', label: 'Preguntas oficiales' },
          { k: '03', label: 'Modos de práctica' },
          { k: 'ES↔EN', label: 'Audio bilingüe' },
          { k: '∞', label: 'Repeticiones por sesión' }].
          map((s, i) =>
          <div key={i} style={{
            padding: '26px 22px',
            borderLeft: i ? '1px solid var(--line)' : 'none',
            display: 'flex', flexDirection: 'column', gap: 6
          }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1, color: 'var(--olive)' }}>{s.k}</div>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>{s.label}</div>
            </div>
          )}
        </div>
      </section>

      {/* ── CADETE CARD ───────────────────── */}
      <section style={{ padding: '56px 0 24px' }}>
        <div className="container">
          <SectionLabel num="01" style={{ marginBottom: 18 }}>Tu sesión actual</SectionLabel>

          <div style={{
            background: 'var(--olive)',
            color: 'var(--cream)',
            border: '1px solid var(--olive)',
            padding: '36px 36px 32px',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr 1fr',
            gap: 0,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', right: 0, top: 0, width: 280, height: 280,
              backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 1px, transparent 1px 14px)',
              pointerEvents: 'none'
            }} />

            <div style={{ borderRight: '1px solid rgba(255,255,255,.18)', paddingRight: 36 }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.24em', textTransform: 'uppercase', opacity: .6, display:'flex', alignItems:'center', gap:8 }}>
                <span>Alumno · Nº&nbsp;</span>
                <InlineText
                  value={identity.number}
                  onChange={(v)=>setIdentity({number: v})}
                  placeholder="añade tu número"
                  font="mono"
                  size={11}
                  color="var(--cream)"
                  maxLen={8}
                  tone="dark"
                />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 54, lineHeight: 1.05, marginTop: 6, letterSpacing: '-.01em' }}>
                <InlineText
                  value={identity.name}
                  onChange={(v)=>setIdentity({name: v})}
                  placeholder="escribe tu nombre"
                  font="display"
                  size={54}
                  color="var(--cream)"
                  maxLen={28}
                  tone="dark"
                />
              </div>
              <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .45, marginTop: 8 }}>
                Identidad guardada sólo en este dispositivo
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 18 }}>
                <div style={{
                  width: 56, height: 56, border: '1px solid rgba(255,255,255,.35)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <ChevronMark size={42} count={rank.chevrons} color="var(--gold)" />
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .55 }}>Rango de sesión</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginTop: 2 }}>{rank.name}</div>
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase' }} className="mono">
                  <span style={{ opacity: .6 }}>Progreso a {next ? next.name : 'rango máximo'}</span>
                  <span style={{ color: 'var(--gold)' }}>{user.xp} / {next ? next.threshold : '∞'} xp</span>
                </div>
                <div style={{
                  marginTop: 8, height: 6, background: 'rgba(255,255,255,.12)',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, width: pct + '%',
                    background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-2) 100%)'
                  }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '0 36px', borderRight: '1px solid rgba(255,255,255,.18)' }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.24em', textTransform: 'uppercase', opacity: .6 }}>Racha de aciertos</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 6 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 80, lineHeight: 1, color: 'var(--gold)' }}>{user.streak}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', opacity: .7 }}>seguidos<br/>en esta sesión</div>
              </div>

              <div style={{ marginTop: 18 }}>
                <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.2em', textTransform: 'uppercase', opacity: .55, marginBottom: 8 }}>
                  Últimas 7 respuestas
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['ok','ok','ok','ko','ok','ok','ok'].map((d, i) =>
                  <div key={i} style={{
                    width: 30, height: 30, border: '1px solid rgba(255,255,255,.25)',
                    background: d === 'ok' ? 'var(--gold)' : 'transparent',
                    color: d === 'ok' ? 'var(--olive)' : 'rgba(255,255,255,.4)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {d === 'ok' ? <Icon.check s={14} /> : <span className="mono" style={{ fontSize: 14 }}>×</span>}
                  </div>
                  )}
                </div>
              </div>

              <div className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .55, marginTop: 18 }}>
                +12 xp por cada acierto
              </div>
            </div>

            <div style={{ paddingLeft: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.24em', textTransform: 'uppercase', opacity: .6 }}>Sugerencia para empezar</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, marginTop: 8, lineHeight: 1.15 }}>
                  "What are the main offences against persons?"
                </div>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .55, marginTop: 10 }}>
                  Pregunta aleatoria · Bloque: Delitos
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button variant="gold" iconRight={<Icon.arrow s={16} />} onClick={() => go('predefined')} full>
                  Empezar por aquí
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3 MODE CARDS ───────────────────────── */}
      <section id="modos" style={{ padding: '40px 0' }}>
        <div className="container">

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, gap: 24, flexWrap: 'wrap' }}>
            <div>
              <SectionLabel num="02" style={{ marginBottom: 14 }}>Elige tu modo de práctica</SectionLabel>
              <h2 style={{
                margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-.01em', lineHeight: 1.05,
                maxWidth: 740
              }}>
                Tres caminos, una misma <em>orden</em>: dominar el oral.
              </h2>
            </div>
            <Tag tone="olive">★ Recomendado: Predefinidas</Tag>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
            border: '1px solid var(--line-strong)',
            background: 'var(--cream)'
          }}>
            <ModeCard
              num="I"
              tone="olive"
              recommended
              title={<>Frases <em>predefinidas</em></>}
              kicker="Plan oficial"
              desc="Las preguntas tipo examen, con respuesta modelo y traducción. La ruta canónica de la academia."
              stats={[['74', 'preguntas'], ['ES/EN', 'audio'], ['Auto', 'feedback']]}
              bullets={['74 preguntas oficiales', 'Respuestas modelo', 'Traducción al español', 'Comparación palabra a palabra']}
              cta="Empezar plan oficial"
              onClick={() => go('predefined')} />
            
            <ModeCard
              num="II"
              title={<>Speaking <em>libre</em></>}
              kicker="Tu material"
              desc="Trae tu propia pregunta y respuesta. Mismo sistema de evaluación, aplicado a tus apuntes."
              stats={[['∞', 'temas'], ['Custom', 'preguntas'], ['Tuyo', 'flexible']]}
              bullets={['Tu pregunta, tu respuesta', 'Misma evaluación oficial', 'Para repasar tus apuntes', 'Pruébalo al instante']}
              cta="Crear ejercicio libre"
              onClick={() => go('free')} />
            
            <ModeCard
              num="III"
              title={<>Pron<em>unciación</em></>}
              kicker="Rápido"
              desc="¿Una palabra que se te resiste? Te la enseñamos a decir y la grabamos contigo para corregir el acento."
              stats={[['Word', 'o frase'], ['IPA', 'guía'], ['Repeat', '×N']]}
              bullets={['Cualquier palabra o frase', 'Guía fácil de leer', 'Repetición sin límite', 'Visualización IPA y sílabas']}
              cta="Practicar pronunciación"
              onClick={() => go('pron')} />
            
          </div>

        </div>
      </section>

      {/* ── PROGRESS THROUGH 20 ─────────────────── */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <SectionLabel num="03" style={{ marginBottom: 14 }}>Cuadro de mando · Banco de preguntas</SectionLabel>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32, alignItems: 'start'
          }}>
            <div style={{
              border: '1px solid var(--line-strong)',
              background: 'var(--cream)',
              padding: 24
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--olive)' }}>En esta sesión</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>3 / 74 respondidas</div>
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))', gap: 5
              }}>
                {QUESTIONS_STATE.map((q, i) =>
                <div key={i} title={q.title} style={{
                  aspectRatio: '1 / 1',
                  background: q.status === 'done' ? 'var(--olive)' :
                  q.status === 'active' ? 'var(--gold)' :
                  'transparent',
                  border: '1px solid ' + (q.status === 'done' ? 'var(--olive)' : 'var(--line-strong)'),
                  color: q.status === 'done' ? 'var(--cream)' :
                  q.status === 'active' ? 'var(--olive)' : 'var(--olive-soft)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em'
                }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: 18, marginTop: 18, flexWrap: 'wrap' }}>
                {[
                ['var(--olive)', 'Respondidas en sesión'],
                ['var(--gold)', 'En curso'],
                ['transparent', 'Por responder']].
                map((l, i) =>
                <div key={i} className="mono" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
                    <span style={{ width: 12, height: 12, background: l[0], border: '1px solid var(--line-strong)' }} />{l[1]}
                  </div>
                )}
              </div>

              <div style={{ marginTop: 24, borderTop: '1px solid var(--line)', paddingTop: 18 }}>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)', marginBottom: 12 }}>Últimas respuestas de esta sesión</div>
                {[
                ['#10', 'What are firearms classified as?', 92, 'A'],
                ['#09', 'Describe a suspect in detail.', 78, 'B']].
                map((r, i) =>
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '56px 1fr 60px 36px', gap: 12, alignItems: 'center',
                  padding: '12px 0', borderTop: i ? '1px dashed var(--line)' : 'none'
                }}>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: '.14em', color: 'var(--gold)' }}>{r[0]}</div>
                    <div style={{ fontSize: 14 }}>{r[1]}</div>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: '.14em', color: 'var(--olive-soft)', textAlign: 'right' }}>{r[2]}%</div>
                    <div style={{
                    width: 30, height: 30, border: '1px solid var(--olive)',
                    color: 'var(--olive)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: 18
                  }}>{r[3]}</div>
                  </div>
                )}
              </div>
            </div>

            <div style={{
              border: '1px solid var(--line-strong)',
              padding: 24,
              background: 'var(--paper-2)'
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--olive)', marginBottom: 4 }}>Insignias de sesión</div>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)', marginBottom: 18 }}>Desbloquéalas mientras entrenas · se reinician al cerrar</div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--line-strong)', background: 'var(--paper-3)' }}>
                {MEDALS.map((m, i) =>
                <div key={i} style={{
                  padding: '18px 12px', borderRight: (i + 1) % 3 ? '1px solid var(--line)' : 'none',
                  borderBottom: i < 6 ? '1px solid var(--line)' : 'none',
                  textAlign: 'center', opacity: m.unlocked ? 1 : .35,
                  background: m.unlocked ? 'var(--paper-2)' : 'transparent'
                }}>
                    <div style={{
                    width: 46, height: 46, margin: '0 auto', border: '1px solid var(--olive)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--olive)',
                    background: m.unlocked ? 'var(--cream)' : 'transparent'
                  }}>
                      {m.icon}
                    </div>
                    <div className="mono" style={{
                    marginTop: 8, fontSize: 9.5, letterSpacing: '.18em', textTransform: 'uppercase',
                    color: m.unlocked ? 'var(--olive)' : 'var(--olive-soft)'
                  }}>{m.name}</div>
                  </div>
                )}
              </div>

              <div style={{ marginTop: 18, fontSize: 13, lineHeight: 1.5, color: 'var(--ink-2)' }}>
                <em style={{ fontFamily: 'var(--font-display)', fontSize: 16 }}>A tiro:</em> Encadena 5 aciertos sin revelar la respuesta para desbloquear <strong>Sin Manual</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOTTO BAND ─────────────────── */}
      <section style={{
        marginTop: 32,
        background: 'var(--paper-2)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '72px 0'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
            Orden del día
          </div>
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.1, letterSpacing: '-.01em',
            margin: '22px auto 12px', maxWidth: 900, color: 'var(--ink)', fontStyle: 'italic'
          }}>
            "El idioma no es una asignatura: es un <span style={{ color: 'var(--gold)' }}>uniforme</span> que se aprende llevándolo todos los días."
          </blockquote>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
            — Manual del cadete · §III
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}

/* ──────────── Mode card ──────────── */

function ModeCard({ num, title, kicker, desc, stats, bullets, cta, onClick, tone, recommended }) {
  const isOlive = tone === 'olive';
  return (
    <div style={{
      borderLeft: num === 'I' ? 'none' : '1px solid var(--line-strong)',
      padding: '28px 26px',
      display: 'flex', flexDirection: 'column', gap: 18,
      background: isOlive ? 'var(--olive)' : 'transparent',
      color: isOlive ? 'var(--cream)' : 'var(--ink)',
      position: 'relative',
      minHeight: 540
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.24em', color: 'var(--gold)' }}>
          MODO {num}
        </div>
        {recommended && <Tag tone="gold">★ Recomendado</Tag>}
      </div>

      <div>
        <div className="mono" style={{
          fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase',
          color: isOlive ? 'rgba(255,255,255,.55)' : 'var(--olive-soft)', marginBottom: 8
        }}>{kicker}</div>
        <h3 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: 48, lineHeight: 1.02, letterSpacing: '-.01em'
        }}>{title}</h3>
      </div>

      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, opacity: .85 }}>{desc}</p>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(' + stats.length + ', 1fr)', gap: 0,
        borderTop: '1px solid ' + (isOlive ? 'rgba(255,255,255,.18)' : 'var(--line)'),
        borderBottom: '1px solid ' + (isOlive ? 'rgba(255,255,255,.18)' : 'var(--line)')
      }}>
        {stats.map((s, i) =>
        <div key={i} style={{
          padding: '10px 8px',
          borderLeft: i ? '1px solid ' + (isOlive ? 'rgba(255,255,255,.12)' : 'var(--line)') : 'none'
        }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1, color: isOlive ? 'var(--cream)' : 'var(--olive)' }}>{s[0]}</div>
            <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .65, marginTop: 3 }}>{s[1]}</div>
          </div>
        )}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {bullets.map((b, i) =>
        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, lineHeight: 1.4, opacity: .9 }}>
            <span style={{
            flex: '0 0 14px', marginTop: 5, width: 14, height: 1,
            background: isOlive ? 'var(--gold)' : 'var(--olive)'
          }} />
            <span>{b}</span>
          </li>
        )}
      </ul>

      <Button
        variant={isOlive ? 'gold' : 'primary'}
        onClick={onClick}
        iconRight={<Icon.arrow s={16} />}
        full
        size="md">
        {cta}</Button>
    </div>);

}

/* ──────────── Mock data ──────────── */

const QUESTIONS_STATE = function () {
  const arr = [];
  for (let i = 0; i < 74; i++) {
    arr.push({
      title: 'Question ' + (i + 1),
      status: i < 3 ? 'done' : i === 3 ? 'active' : 'pending'
    });
  }
  return arr;
}();

const MEDALS = [
{ name: 'Primer acierto', unlocked: true, icon: <Icon.target s={20} /> },
{ name: '3 seguidas', unlocked: true, icon: <Icon.star s={20} /> },
{ name: '5 seguidas', unlocked: false, icon: <Icon.flame s={20} /> },
{ name: 'Notable', unlocked: false, icon: <Icon.medal s={20} /> },
{ name: 'Sobresaliente', unlocked: false, icon: <Icon.medal s={20} /> },
{ name: 'Sin manual', unlocked: false, icon: <Icon.scroll s={20} /> },
{ name: 'Maratón ×10', unlocked: false, icon: <Icon.check s={20} /> },
{ name: 'Voz de oro', unlocked: false, icon: <Icon.mic s={20} /> },
{ name: 'Limpio 100%', unlocked: false, icon: <Icon.star s={20} /> }];


/* ════════════════════ PRACTICE ════════════════════ */

const SAMPLE_QUESTION = {
  num: 11, total: 74,
  block: 'Delitos',
  en: 'What are the main offences against persons?',
  es: '¿Cuáles son los principales delitos contra las personas?',
  modelEN: "The main offences against persons are murder, manslaughter, assault, threats, and injuries. They are crimes that directly affect the life, body, or freedom of the victim, and they are punished by the Spanish Criminal Code.",
  modelES: "Los principales delitos contra las personas son el asesinato, el homicidio, las agresiones, las amenazas y las lesiones. Son delitos que afectan directamente a la vida, el cuerpo o la libertad de la víctima, y están penados por el Código Penal español."
};

function Practice({ go }) {
  const [stage, setStage] = useState('idle');
  const [showAnswer, setShowAnswer] = useState(false);
  const [speed, setSpeed] = useState('Normal');

  const score = 87;
  const transcript = "the main offences against people are murder, assault, threats and injuries. they affect the life and the body of the victim, and they are punished by the spanish criminal code.";

  return (
    <main className="fade-enter">
      <div className="container" style={{ paddingTop: 36, paddingBottom: 80 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => go('home')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--olive)', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
            letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap'
          }}>
            <Icon.arrowL s={14} /> Volver al cuartel
          </button>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag tone="olive">Modo Predefinidas</Tag>
            <div style={{ display: 'flex', border: '1px solid var(--line-strong)' }}>
              {['Lenta', 'Normal', 'Rápida'].map((s) =>
              <button key={s} onClick={() => setSpeed(s)} className="mono" style={{
                padding: '7px 11px', fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase',
                border: 'none', borderLeft: s === 'Lenta' ? 'none' : '1px solid var(--line)',
                background: speed === s ? 'var(--olive)' : 'transparent',
                color: speed === s ? 'var(--cream)' : 'var(--ink)',
                cursor: 'pointer', fontFamily: 'var(--font-mono)'
              }}>{s}</button>
              )}
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start',
          padding: '22px 24px', border: '1px solid var(--line-strong)', background: 'var(--cream)',
          marginBottom: 24
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, color: 'var(--gold)', lineHeight: .9, flex: '0 0 auto' }}>
            {String(SAMPLE_QUESTION.num).padStart(2, '0')}
          </div>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
              Pregunta {SAMPLE_QUESTION.num} / {SAMPLE_QUESTION.total} · Bloque: {SAMPLE_QUESTION.block}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.6vw, 34px)', lineHeight: 1.15, marginTop: 6 }}>
              {SAMPLE_QUESTION.en}
            </div>
            <div style={{ fontSize: 14, color: 'var(--olive-soft)', marginTop: 6, fontStyle: 'italic' }}>
              {SAMPLE_QUESTION.es}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '0 0 auto' }}>
            <Button variant="outline" size="sm" icon={<Icon.speaker s={14} />}>Escuchar pregunta</Button>
            <Button variant="outline" size="sm" icon={<Icon.speaker s={14} />}>Escuchar respuesta</Button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>

          <div style={{ border: '1px solid var(--line-strong)', background: 'var(--cream)', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <SectionLabel num="A" style={{ marginBottom: 0 }}>Respuesta modelo</SectionLabel>
              <button onClick={() => setShowAnswer((s) => !s)} className="mono" style={{
                background: 'transparent', border: '1px solid var(--line-strong)', padding: '6px 10px',
                fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer'
              }}>{showAnswer ? 'Ocultar' : 'Mostrar'}</button>
            </div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 21, lineHeight: 1.45,
              filter: showAnswer ? 'none' : 'blur(8px)', transition: 'filter .25s',
              color: 'var(--ink)', minHeight: 120
            }}>
              {SAMPLE_QUESTION.modelEN}
            </div>
            <div style={{
              fontSize: 13.5, lineHeight: 1.55, color: 'var(--olive-soft)', marginTop: 14, fontStyle: 'italic',
              filter: showAnswer ? 'none' : 'blur(6px)', transition: 'filter .25s'
            }}>
              {SAMPLE_QUESTION.modelES}
            </div>
          </div>

          <div style={{ border: '1px solid var(--line-strong)', background: 'var(--olive)', color: 'var(--cream)', padding: 24, position: 'relative', overflow: 'hidden' }}>
            <SectionLabel num="B" style={{ marginBottom: 14, color: 'var(--cream)' }}>Tu turno · graba tu respuesta</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: '18px 0 6px' }}>
              <button
                onClick={() => setStage(stage === 'recording' ? 'scored' : 'recording')}
                style={{
                  width: 130, height: 130, borderRadius: '50%',
                  background: stage === 'recording' ? 'var(--gold)' : 'transparent',
                  border: '1px solid ' + (stage === 'recording' ? 'var(--gold)' : 'var(--cream)'),
                  color: stage === 'recording' ? 'var(--olive)' : 'var(--cream)',
                  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all .2s',
                  boxShadow: stage === 'recording' ? '0 0 0 6px rgba(184,146,74,.18)' : 'none'
                }}>
                <Icon.mic s={42} />
              </button>
              <Waveform active={stage === 'recording'} />
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .7 }}>
                {stage === 'recording' ? 'Grabando · 00:08' : stage === 'scored' ? 'Grabación completada' : 'Pulsa para empezar a grabar'}
              </div>
              <Button
                variant={stage === 'recording' ? 'gold' : 'cream'}
                onClick={() => setStage(stage === 'recording' ? 'scored' : 'recording')}
                icon={<Icon.mic s={14} />}>
                
                {stage === 'recording' ? 'Detener' : stage === 'scored' ? 'Volver a grabar' : 'Empezar a grabar'}
              </Button>
            </div>
          </div>
        </div>

        {stage === 'scored' &&
        <div style={{
          marginTop: 24, border: '1px solid var(--line-strong)', background: 'var(--cream)',
          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 0
        }}>
            <div style={{
            padding: 30, background: 'var(--olive)', color: 'var(--cream)',
            minWidth: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6
          }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .6 }}>Puntuación</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 96, lineHeight: 1, color: 'var(--gold)' }}>{score}</div>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .7 }}>de 100 · Notable</div>
              <div style={{ marginTop: 10, padding: '6px 10px', border: '1px solid var(--gold)', color: 'var(--gold)', display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8 }}>
                <Icon.flame s={13} />&nbsp;<span className="mono" style={{ fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase' }}>+12 xp · 3 aciertos seguidos</span>
              </div>
            </div>
            <div style={{ padding: 24 }}>
              <SectionLabel num="C" style={{ marginBottom: 12 }}>Lo que dijiste</SectionLabel>
              <div style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
                {transcript.split(' ').map((w, i) => {
                const good = ['murder,', 'assault,', 'threats', 'injuries.', 'crime', 'spanish', 'code.'].some((k) => w.includes(k));
                return (
                  <span key={i} style={{
                    background: good ? 'rgba(184,146,74,.20)' : 'transparent',
                    padding: '2px 1px', marginRight: 3
                  }}>{w} </span>);

              })}
              </div>
              <div style={{ display: 'flex', gap: 18, marginTop: 18, paddingTop: 14, borderTop: '1px dashed var(--line)', flexWrap: 'wrap' }}>
                <Metric label="Coincidencia" value="92%" />
                <Metric label="Pronunciación" value="84%" />
                <Metric label="Fluidez" value="A-" />
                <Metric label="Vocab. clave" value="6 / 7" />
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
                <Button variant="primary" iconRight={<Icon.arrow s={14} />}>Siguiente pregunta</Button>
                <Button variant="outline" icon={<Icon.refresh s={14} />}>Repetir</Button>
                <Button variant="ghost" icon={<Icon.scroll s={14} />} onClick={() => setShowAnswer(true)}>Comparar con modelo</Button>
              </div>
            </div>
          </div>
        }

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
          <Button variant="ghost" icon={<Icon.arrowL s={14} />}>Anterior · 10</Button>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
            <span style={{ color: 'var(--ink)' }}>11</span> · 12 · 13 · 14
          </div>
          <Button variant="ghost" iconRight={<Icon.arrow s={14} />}>Siguiente · 12</Button>
        </div>
      </div>
    </main>);

}

function Metric({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 90 }}>
      <span className="mono" style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--olive)', marginTop: 2 }}>{value}</span>
    </div>);

}

function Waveform({ active }) {
  const tick = useTick(120);
  const bars = useMemo(() => Array.from({ length: 36 }, (_, i) => i), []);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 32 }}>
      {bars.map((i) => {
        const h = active ?
        4 + Math.abs(Math.sin((i + tick) / 2.4)) * 26 + Math.cos((i * 0.7 + tick) / 1.8) * 8 :
        3 + Math.abs(Math.sin(i / 3)) * 4;
        return <span key={i} style={{
          width: 3, height: Math.max(2, h),
          background: active ? 'var(--gold)' : 'rgba(255,255,255,.3)',
          transition: 'height .12s'
        }} />;
      })}
    </div>);

}

/* ════════════════════ FREE SPEAKING ════════════════════ */

function FreeSpeaking({ go, onResult }) {
  const [phase, setPhase] = useState('setup');
  const [q, setQ] = useState('');
  const [a, setA] = useState('');
  const [stage, setStage] = useState('idle');
  const [transcript, setTranscript] = useState('');
  const [scoreData, setScoreData] = useState(null);
  const [srError, setSrError] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [speed, setSpeed] = useState('Normal');
  const [ttsPlaying, setTtsPlaying] = useState(null);
  const sr = useSpeech();
  const scoreRef = React.useRef(null);

  const speedRate = speed === 'Lenta' ? 0.6 : speed === 'Rápida' ? 1.4 : 1.0;

  React.useEffect(() => {
    return () => { sr.stop(null); ttsStop(); };
  }, []);

  React.useEffect(() => {
    if (scoreData && scoreRef.current) {
      setTimeout(() => scoreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    }
  }, [scoreData]);

  function startRecording() {
    ttsStop();
    setTranscript('');
    setScoreData(null);
    setSrError('');
    setStage('recording');
    sr.start(
      (text) => {
        const sd = calcScore(text, a);
        setTranscript(text);
        setStage('scored');
        setScoreData(sd);
        if (onResult) onResult(sd.score);
      },
      (err) => { setSrError(err); setStage('idle'); }
    );
  }

  function stopRecording() {
    sr.stop((text) => {
      const t = text || sr.liveText;
      if (t) {
        const sd = calcScore(t, a);
        setTranscript(t);
        setStage('scored');
        setScoreData(sd);
        if (onResult) onResult(sd.score);
      } else {
        setStage('idle');
      }
    });
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

  function resetPractice() {
    sr.stop(null); ttsStop();
    setTtsPlaying(null);
    setStage('idle'); setTranscript(''); setScoreData(null); setSrError(''); setShowAnswer(false);
  }

  if (phase === 'setup') {
    return (
      <main className="fade-enter">
        <div className="container" style={{ paddingTop: 36, paddingBottom: 80, maxWidth: 880, margin: '0 auto' }}>
          <button onClick={() => go('home')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--olive)', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
            letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 24, whiteSpace: 'nowrap'
          }}>
            <Icon.arrowL s={14} /> Volver al cuartel
          </button>

          <Tag tone="neutral" style={{ marginBottom: 14 }}>MODO II · TU MATERIAL</Tag>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: .95, letterSpacing: '-.02em' }}>
            Speaking <em style={{ color: 'var(--olive)' }}>libre.</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.45, color: 'var(--ink-2)', maxWidth: 580, marginTop: 18 }}>
            Trae tu propia pregunta y respuesta. Te las evaluamos con el mismo sistema que las predefinidas — perfecto para repasar tus apuntes o un tema concreto.
          </p>

          <div style={{ marginTop: 36, border: '1px solid var(--line-strong)', background: 'var(--cream)' }}>
            <FieldArea label="Tu pregunta" mono="A — En inglés" value={q} onChange={setQ}
              placeholder="e.g. What are the main offences against property?" rows={2} />
            <FieldArea label="Tu respuesta modelo" mono="B — En inglés" value={a} onChange={setA}
              placeholder="Escribe la respuesta tal y como te gustaría decirla. Te servirá como referencia." rows={6} />
            <div style={{ padding: '18px 22px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
                {a.split(/\s+/).filter(Boolean).length} palabras · ≈ {Math.max(8, Math.ceil(a.split(/\s+/).filter(Boolean).length / 2.2))}s al leer
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <Button variant="outline" icon={<Icon.refresh s={14} />} onClick={() => { setQ(''); setA(''); }}>Limpiar</Button>
                <Button variant="primary" iconRight={<Icon.arrow s={14} />}
                  onClick={() => { resetPractice(); setPhase('practice'); }}
                  disabled={!q.trim() || !a.trim()}>
                  Empezar a practicar
                </Button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 36, borderTop: '1px dashed var(--line-strong)', paddingTop: 24 }}>
            <SectionLabel num="—" style={{ marginBottom: 12 }}>Plantillas de ejemplo</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
              {[
                ['What is a misdemeanour vs a felony?', 'Delitos'],
                ['Describe a robbery in progress.', 'Descripción'],
                ['What does the Civil Guard do?', 'Cuerpos'],
                ['How do you arrest a suspect?', 'Procedimiento']
              ].map((e, i) =>
                <button key={i} onClick={() => { setQ(e[0]); setA(''); }} style={{
                  border: '1px solid var(--line)', padding: '14px 16px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, background: 'var(--cream)',
                  cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-ui)'
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 17 }}>{e[0]}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>{e[1]}</div>
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ── Practice phase ── */
  const sd = scoreData;
  const scoreLabel = sd ? (sd.score >= 80 ? 'Sobresaliente' : sd.score >= 65 ? 'Notable' : sd.score >= 50 ? 'Aprobado' : 'Sigue intentándolo') : '';

  return (
    <main className="fade-enter">
      <div className="container" style={{ paddingTop: 36, paddingBottom: 80 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => { resetPractice(); setPhase('setup'); }} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--olive)', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
            letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap'
          }}>
            <Icon.arrowL s={14} /> Cambiar ejercicio
          </button>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <Tag tone="neutral">MODO II · LIBRE</Tag>
            <div style={{ display: 'flex', border: '1px solid var(--line-strong)' }}>
              {['Lenta', 'Normal', 'Rápida'].map((s) =>
                <button key={s} onClick={() => setSpeed(s)} className="mono" style={{
                  padding: '7px 11px', fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase',
                  border: 'none', borderLeft: s === 'Lenta' ? 'none' : '1px solid var(--line)',
                  background: speed === s ? 'var(--olive)' : 'transparent',
                  color: speed === s ? 'var(--cream)' : 'var(--ink)',
                  cursor: 'pointer', fontFamily: 'var(--font-mono)'
                }}>{s}</button>
              )}
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start',
          padding: '22px 24px', border: '1px solid var(--line-strong)', background: 'var(--cream)', marginBottom: 24
        }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
              Tu pregunta · Modo libre
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.6vw, 32px)', lineHeight: 1.15, marginTop: 6 }}>{q}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '0 0 auto' }}>
            <Button variant="outline" size="sm" icon={<Icon.speaker s={14} />}
              onClick={() => playTTS('q', q)}>{ttsPlaying === 'q' ? 'Detener audio' : 'Escuchar pregunta'}</Button>
            <Button variant="outline" size="sm" icon={<Icon.speaker s={14} />}
              onClick={() => playTTS('a', a)}>{ttsPlaying === 'a' ? 'Detener audio' : 'Escuchar respuesta'}</Button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
          <div style={{ border: '1px solid var(--line-strong)', background: 'var(--cream)', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <SectionLabel num="A" style={{ marginBottom: 0 }}>Respuesta modelo</SectionLabel>
              <button onClick={() => setShowAnswer(s => !s)} className="mono" style={{
                background: 'transparent', border: '1px solid var(--line-strong)', padding: '6px 10px',
                fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer'
              }}>{showAnswer ? 'Ocultar' : 'Mostrar'}</button>
            </div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1.45,
              filter: showAnswer ? 'none' : 'blur(8px)', transition: 'filter .25s',
              color: 'var(--ink)', minHeight: 120
            }}>{a}</div>
          </div>

          <div style={{ border: '1px solid var(--line-strong)', background: 'var(--olive)', color: 'var(--cream)', padding: 24, position: 'relative', overflow: 'hidden' }}>
            <SectionLabel num="B" style={{ marginBottom: 20, color: 'var(--cream)' }}>Tu turno · graba tu respuesta</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <button
                onClick={() => stage === 'recording' ? stopRecording() : startRecording()}
                style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: stage === 'recording' ? 'var(--gold)' : 'rgba(255,255,255,.08)',
                  border: '2px solid ' + (stage === 'recording' ? 'var(--gold)' : 'rgba(255,255,255,.35)'),
                  color: stage === 'recording' ? 'var(--olive)' : 'var(--cream)',
                  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all .2s',
                  boxShadow: stage === 'recording' ? '0 0 0 8px rgba(184,146,74,.14), 0 0 0 18px rgba(184,146,74,.06)' : 'none'
                }}>
                <Icon.mic s={28} />
              </button>

              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .65, textAlign: 'center' }}>
                {stage === 'recording' ? '🎤 Escuchando… habla ahora' : stage === 'scored' ? 'Listo — pulsa para repetir' : 'Pulsa el micrófono para empezar'}
              </div>

              {stage === 'recording' ? (
                <div style={{ width: '100%' }}>
                  {sr.liveText ? (
                    <div style={{
                      padding: '14px 18px', marginBottom: 4,
                      background: 'rgba(255,255,255,.07)',
                      borderLeft: '2px solid var(--gold)',
                      fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1.5,
                      color: 'rgba(255,255,255,.92)', letterSpacing: '-.005em',
                    }}>
                      {sr.liveText}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Waveform active={true} />
                    </div>
                  )}
                </div>
              ) : (
                <Waveform active={false} />
              )}

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                {stage === 'recording' ? (
                  <>
                    <button onClick={stopRecording} style={{
                      flex: '1 1 auto', minWidth: 140,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      padding: '12px 20px',
                      background: 'var(--gold)', color: 'var(--olive)',
                      border: '1px solid var(--gold)',
                      cursor: 'pointer', fontSize: 14, fontWeight: 700,
                      fontFamily: 'var(--font-ui)',
                    }}>
                      <Icon.mic s={14} /> Detener grabación
                    </button>
                    <button onClick={cancelRecording} style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      padding: '12px 16px',
                      background: 'transparent', color: 'rgba(255,255,255,.75)',
                      border: '1px solid rgba(255,255,255,.25)',
                      cursor: 'pointer', fontSize: 13, fontFamily: 'var(--font-ui)',
                    }}>
                      Cancelar
                    </button>
                  </>
                ) : (
                  <button onClick={startRecording} style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '12px 24px', width: '100%',
                    background: 'rgba(255,255,255,.1)', color: 'var(--cream)',
                    border: '1px solid rgba(255,255,255,.3)',
                    cursor: 'pointer', fontSize: 14, fontWeight: 500,
                    fontFamily: 'var(--font-ui)',
                  }}>
                    <Icon.mic s={14} /> {stage === 'scored' ? 'Volver a grabar' : 'Empezar a grabar'}
                  </button>
                )}
              </div>
              {srError && <div className="mono" style={{ fontSize: 10.5, color: 'rgba(255,120,120,.9)', textAlign: 'center' }}>{srError}</div>}
            </div>
          </div>
        </div>

        {stage === 'scored' && sd &&
          <div ref={scoreRef} style={{
            marginTop: 24, border: '1px solid var(--line-strong)', background: 'var(--cream)',
            display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 0
          }}>
            <div style={{
              padding: 30, background: 'var(--olive)', color: 'var(--cream)',
              minWidth: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6
            }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .6 }}>Puntuación</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 96, lineHeight: 1, color: 'var(--gold)' }}>{sd.score}</div>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .7 }}>{sd.emoji} {scoreLabel}</div>
            </div>
            <div style={{ padding: 24 }}>
              <SectionLabel num="C" style={{ marginBottom: 12 }}>Lo que dijiste</SectionLabel>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1.65,
                marginBottom: 14, letterSpacing: '-.005em',
              }}>
                {sd.userWords.map((w, i) => (
                  <span key={i} style={{
                    background: sd.matchedSet.has(w) ? 'rgba(184,146,74,.22)' : 'transparent',
                    padding: '2px 3px', marginRight: 2, borderRadius: 2,
                  }}>{w} </span>
                ))}
              </div>
              <div style={{ marginBottom: 14 }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)', marginBottom: 6 }}>Palabras clave del modelo</div>
                <div style={{ fontSize: 15, lineHeight: 1.65 }}>
                  {sd.correctWords.map((w, i) => (
                    <span key={i} style={{
                      background: sd.userSet.has(w) ? 'rgba(26,42,31,.15)' : 'transparent',
                      padding: '2px 1px', marginRight: 3,
                      color: sd.userSet.has(w) ? 'var(--olive)' : 'var(--ink-2)'
                    }}>{w} </span>
                  ))}
                </div>
              </div>
              {sd.missedHints && sd.missedHints.length > 0 &&
                <div style={{ marginBottom: 14, padding: '10px 14px', background: 'var(--paper-2)', border: '1px solid var(--line)' }}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)', marginBottom: 6 }}>Pronunciación · palabras no dichas</div>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    {sd.missedHints.map((h, i) => (
                      <span key={i} style={{ fontSize: 14 }}><strong>{h[0]}</strong> → <span className="mono" style={{ color: 'var(--gold)', fontSize: 12 }}>{h[1]}</span></span>
                    ))}
                  </div>
                </div>
              }
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Button variant="outline" icon={<Icon.refresh s={14} />} onClick={resetPractice}>Repetir</Button>
                <Button variant="ghost" icon={<Icon.scroll s={14} />} onClick={() => setShowAnswer(true)}>Ver respuesta modelo</Button>
                <Button variant="ghost" icon={<Icon.arrowL s={14} />} onClick={() => { resetPractice(); setPhase('setup'); }}>Nuevo ejercicio</Button>
              </div>
            </div>
          </div>
        }
      </div>
    </main>
  );
}

function FieldArea({ label, mono, value, onChange, placeholder, rows = 3 }) {
  return (
    <div style={{ padding: '20px 22px', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 8 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--olive)' }}>{label}</div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>{mono}</div>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        style={{
          width: '100%', resize: 'vertical', border: 'none', outline: 'none',
          fontFamily: 'var(--font-ui)', fontSize: 16, lineHeight: 1.55,
          background: 'transparent', color: 'var(--ink)', padding: '4px 0',
          WebkitTextFillColor: 'var(--ink)',
        }} />
      
    </div>);

}

/* ════════════════════ PRONUNCIATION ════════════════════ */

function Pronunciation({ go }) {
  const [inputVal, setInputVal] = useState('apprehend');
  const [result, setResult] = useState(null);
  const [stage, setStage] = useState('idle');
  const [transcript, setTranscript] = useState('');
  const [simScore, setSimScore] = useState(null);
  const [srError, setSrError] = useState('');
  const [recentWords, setRecentWords] = useState([]);
  const [ttsActive, setTtsActive] = useState(false);
  const sr = useSpeech();

  React.useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('spk_pron_recent') || '[]');
      setRecentWords(saved);
    } catch(e) {}
    lookupWord('apprehend');
    return () => { sr.stop(null); ttsStop(); };
  }, []);

  function lookupWord(w) {
    if (!w.trim()) return;
    const wt = w.trim();
    ttsStop(); setTtsActive(false);
    setResult({ word: wt, phonetic: buildPhonetic(wt), easy: buildEasyPron(wt) });
    setTranscript(''); setSimScore(null); setSrError(''); setStage('idle');
    try {
      const saved = JSON.parse(localStorage.getItem('spk_pron_recent') || '[]');
      const updated = [wt, ...saved.filter(x => x !== wt)].slice(0, 10);
      localStorage.setItem('spk_pron_recent', JSON.stringify(updated));
      setRecentWords(updated);
    } catch(e) {}
  }

  function startRecording() {
    if (!result) return;
    ttsStop(); setTtsActive(false);
    setTranscript(''); setSimScore(null); setSrError('');
    setStage('recording');
    sr.start(
      (text) => {
        setTranscript(text);
        const dist = levenshtein(text.toLowerCase().trim(), result.word.toLowerCase());
        const sim = Math.max(0, Math.round((1 - dist / Math.max(result.word.length, text.trim().length, 1)) * 100));
        setSimScore(sim);
        setStage('scored');
      },
      (err) => { setSrError(err); setStage('idle'); }
    );
  }

  function stopRecording() {
    sr.stop((text) => {
      const t = text || sr.liveText;
      if (t && result) {
        setTranscript(t);
        const dist = levenshtein(t.toLowerCase().trim(), result.word.toLowerCase());
        const sim = Math.max(0, Math.round((1 - dist / Math.max(result.word.length, t.trim().length, 1)) * 100));
        setSimScore(sim);
        setStage('scored');
      } else {
        setStage('idle');
      }
    });
  }

  const SUGGESTED = ['warrant', 'suspect', 'offence', 'statement', 'curfew', 'seize', 'smuggling', 'perjury'];

  return (
    <main className="fade-enter">
      <div className="container" style={{ paddingTop: 36, paddingBottom: 80 }}>
        <button onClick={() => go('home')} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: 'var(--olive)', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
          letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 24, whiteSpace: 'nowrap'
        }}>
          <Icon.arrowL s={14} /> Volver al cuartel
        </button>

        <div className="pron-layout">

          <div>
            <Tag tone="neutral" style={{ marginBottom: 14 }}>MODO III · RÁPIDO</Tag>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: .95, letterSpacing: '-.02em' }}>
              Pron<em style={{ color: 'var(--olive)' }}>unciación.</em>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.45, color: 'var(--ink-2)', maxWidth: 520, marginTop: 18 }}>
              Escribe cualquier palabra o frase, escucha cómo se dice y grábate para comparar.
            </p>

            <div style={{ marginTop: 30, border: '1px solid var(--line-strong)', background: 'var(--cream)', padding: 20 }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--olive-soft)', marginBottom: 10 }}>Palabra o frase en inglés</div>
              <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && lookupWord(inputVal)}
                style={{
                  width: '100%', border: 'none', outline: 'none', background: 'transparent',
                  fontFamily: 'var(--font-display)', fontSize: 36, padding: '4px 0',
                  color: 'var(--ink)', WebkitTextFillColor: 'var(--ink)',
                }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingTop: 14, borderTop: '1px dashed var(--line)' }}>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
                  {inputVal.length} letras · {inputVal.split(/\s+/).filter(Boolean).length} palabras
                </div>
                <Button variant="primary" iconRight={<Icon.arrow s={14} />} onClick={() => lookupWord(inputVal)}>Ver pronunciación</Button>
              </div>
            </div>

            {recentWords.length > 0 &&
              <div style={{ marginTop: 20 }}>
                <SectionLabel num="—" style={{ marginBottom: 10 }}>Recientes</SectionLabel>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {recentWords.map((w, i) =>
                    <button key={i} onClick={() => { setInputVal(w); lookupWord(w); }} className="mono" style={{
                      padding: '7px 11px', border: '1px solid var(--gold)', background: 'transparent',
                      fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', cursor: 'pointer',
                      color: 'var(--gold)'
                    }}>{w}</button>
                  )}
                </div>
              </div>
            }

            <div style={{ marginTop: 20 }}>
              <SectionLabel num="—" style={{ marginBottom: 10 }}>Vocabulario sugerido</SectionLabel>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {SUGGESTED.map((w) =>
                  <button key={w} onClick={() => { setInputVal(w); lookupWord(w); }} className="mono" style={{
                    padding: '7px 11px', border: '1px solid var(--line-strong)', background: 'transparent',
                    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', cursor: 'pointer'
                  }}>{w}</button>
                )}
              </div>
            </div>
          </div>

          <div className="pron-result-panel">
            <SectionLabel num="A" style={{ marginBottom: 12, color: 'var(--cream)' }}>Resultado</SectionLabel>

            {result ? <>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1, marginTop: 6, letterSpacing: '-.02em' }}>
                {result.word}
              </div>

              <div className="mono" style={{ fontSize: 16, letterSpacing: '.06em', color: 'var(--gold)', marginTop: 10 }}>
                {result.phonetic}
              </div>

              <div style={{ marginTop: 24, padding: '16px 18px', background: 'rgba(255,255,255,.04)', border: '1px dashed rgba(255,255,255,.18)' }}>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .6, marginBottom: 8 }}>Guía sencilla (léelo como español)</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, letterSpacing: '.04em' }}>{result.easy}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, opacity: .7, marginTop: 8 }}>
                  Las MAYÚSCULAS marcan la sílaba con acento.
                </div>
              </div>

              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button
                  onClick={() => {
                    if (ttsActive) { ttsStop(); setTtsActive(false); }
                    else { ttsSpeak(result.word, 1.0, () => setTtsActive(false)); setTtsActive(true); }
                  }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    padding: '14px 20px', width: '100%',
                    background: ttsActive ? 'rgba(255,255,255,.15)' : 'var(--gold)',
                    color: ttsActive ? 'var(--cream)' : 'var(--olive)',
                    border: ttsActive ? '1px solid rgba(255,255,255,.4)' : '1px solid var(--gold)',
                    cursor: 'pointer', fontSize: 14, fontWeight: 600,
                    fontFamily: 'var(--font-ui)', letterSpacing: '.01em',
                  }}>
                  <Icon.speaker s={16} />
                  {ttsActive ? '■ Detener audio' : '▶ Escuchar pronunciación'}
                </button>
                {stage !== 'recording'
                  ? <button
                      onClick={startRecording}
                      style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        padding: '14px 20px', width: '100%',
                        background: 'rgba(255,255,255,.08)', color: 'var(--cream)',
                        border: '1px solid rgba(255,255,255,.35)',
                        cursor: 'pointer', fontSize: 14, fontWeight: 500,
                        fontFamily: 'var(--font-ui)', letterSpacing: '.01em',
                      }}>
                      <Icon.mic s={16} />
                      {stage === 'scored' ? '↺ Repetir práctica' : '● Practicar pronunciación'}
                    </button>
                  : <button
                      onClick={stopRecording}
                      style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        padding: '14px 20px', width: '100%',
                        background: '#a93226', color: '#fff',
                        border: '2px solid #a93226',
                        cursor: 'pointer', fontSize: 15, fontWeight: 700,
                        fontFamily: 'var(--font-ui)', letterSpacing: '.01em',
                      }}>
                      <Icon.mic s={16} />
                      ■ Detener grabación
                    </button>
                }
              </div>

              {stage === 'recording' &&
                <div style={{ marginTop: 16 }}>
                  <Waveform active={true} />
                  {sr.liveText ? <div style={{ fontSize: 13, opacity: .75, marginTop: 8, fontStyle: 'italic' }}>"{sr.liveText}"</div> : null}
                </div>
              }

              {srError && <div className="mono" style={{ fontSize: 10.5, color: 'rgba(255,120,120,.9)', marginTop: 10 }}>{srError}</div>}

              {stage === 'scored' && simScore !== null &&
                <div style={{ marginTop: 20, padding: 16, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)' }}>
                  <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .6, marginBottom: 8 }}>Tu pronunciación</div>
                  {transcript && <div style={{ fontSize: 14, fontStyle: 'italic', opacity: .8, marginBottom: 10 }}>Escuché: "{transcript}"</div>}
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1, color: simScore >= 70 ? 'var(--gold)' : 'rgba(255,255,255,.7)' }}>
                    {simScore}
                  </div>
                  <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .75 }}>
                    {simScore >= 80 ? '✓ Excelente' : simScore >= 55 ? '~ Bastante bien' : '✗ Sigue practicando'}
                  </div>
                </div>
              }
            </> : (
              <div style={{ opacity: .5, fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 20 }}>
                Escribe una palabra y pulsa "Ver pronunciación"
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}

/* ════════════════════ MISSION COMPLETE ════════════════════ */

function Complete({ go }) {
  return (
    <main className="fade-enter">
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 18 }}>
          <div style={{
            width: 140, height: 140, border: '1px solid var(--olive)', borderRadius: '50%',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--cream)'
          }}>
            <ChevronMark size={84} count={4} color="var(--gold)" />
          </div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
            Sesión cerrada
          </div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: .95, letterSpacing: '-.02em' }}>
            Misión <em style={{ color: 'var(--olive)' }}>cumplida.</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 560, lineHeight: 1.5 }}>
            Has cerrado tu sesión con una media notable. Cuando vuelvas se reinicia el marcador — los datos no se guardan.
          </p>
        </div>

        <div style={{
          maxWidth: 880, margin: '40px auto 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          border: '1px solid var(--line-strong)', background: 'var(--cream)'
        }}>
          {[
          ['12', 'Respondidas'],
          ['86', 'Media'],
          ['+240', 'XP de sesión'],
          ['5', 'Mejor racha']].
          map((m, i) =>
          <div key={i} style={{ padding: '22px', borderLeft: i ? '1px solid var(--line)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--olive)', lineHeight: 1 }}>{m[0]}</div>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)', marginTop: 6 }}>{m[1]}</div>
            </div>
          )}
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" iconRight={<Icon.arrow s={14} />} onClick={() => go('predefined')}>Empezar otra ronda</Button>
          <Button variant="outline" onClick={() => go('home')}>Volver al cuartel</Button>
        </div>
      </div>
    </main>);

}

/* ════════════════════ HELP MODAL ════════════════════ */

function HelpModal({ onClose }) {
  const [open, setOpen] = useState(null);

  const items = [
    {
      icon: 'mic',
      problem: 'El micrófono no funciona',
      steps: [
        'Abre la configuración del navegador (Chrome/Edge) → Privacidad y seguridad → Permisos del sitio → Micrófono.',
        'Busca la dirección de esta página y cambia el permiso a "Permitir".',
        'Recarga la página y pulsa el botón de micrófono de nuevo.',
        'Si usas Safari o Firefox, el reconocimiento de voz puede no estar disponible — usa Chrome o Edge.',
      ]
    },
    {
      icon: 'wave',
      problem: 'No se transcribe mi voz',
      steps: [
        'Habla en inglés, claro y a velocidad normal — el sistema reconoce inglés, no español.',
        'Acerca el micrófono o habla más alto; el ruido de fondo dificulta el reconocimiento.',
        'Pulsa el micrófono, espera el cambio de color (rojo = grabando) y luego habla.',
        'Si el texto no aparece, para y vuelve a intentarlo con un intento nuevo.',
      ]
    },
    {
      icon: 'globe',
      problem: 'Error de red al grabar',
      steps: [
        'El reconocimiento de voz requiere conexión a Internet — comprueba que tienes WiFi o datos.',
        'Desactiva VPN o proxy si los tienes activos; pueden bloquear la API de reconocimiento de voz.',
        'Recarga la página y vuelve a intentarlo.',
        'Si el problema persiste, el servidor de Google puede estar temporalmente no disponible — espera unos minutos.',
      ]
    },
    {
      icon: 'speaker',
      problem: 'No oigo el audio (TTS)',
      steps: [
        'Comprueba que el volumen del sistema y del navegador no estén en silencio.',
        'Algunos navegadores bloquean el audio hasta que el usuario interactúa con la página — pulsa cualquier botón primero.',
        'En Chrome, ve a Configuración → Privacidad y seguridad → Configuración del sitio → Sonido y permite el sonido.',
        'Prueba con auriculares o altavoces externos para descartar un problema de hardware.',
      ]
    },
    {
      icon: 'flame',
      problem: 'Micrófono bloqueado por el sistema',
      steps: [
        'En Windows: ve a Configuración → Privacidad y seguridad → Micrófono y activa el acceso para aplicaciones de escritorio y para tu navegador.',
        'En Mac: ve a Preferencias del sistema → Privacidad y seguridad → Micrófono y activa la casilla de tu navegador.',
        'Cierra y vuelve a abrir el navegador después de cambiar el permiso del sistema.',
        'Si nada funciona, reinicia el ordenador y vuelve a intentarlo.',
      ]
    },
  ];

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(20,24,26,.55)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, backdropFilter: 'blur(3px)'
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: 'min(580px, 100%)', background: 'var(--paper)',
        border: '1px solid var(--olive)', padding: 0,
        boxShadow: '0 20px 60px rgba(0,0,0,.2)',
        maxHeight: '90vh', display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--line-strong)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: '0 0 auto' }}>
          <div>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>Manual</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26 }}>Ayuda y solución de problemas</div>
          </div>
          <button onClick={onClose} style={{
            width: 36, height: 36, border: '1px solid var(--line-strong)', background: 'transparent', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
          }}><Icon.close s={16} /></button>
        </div>

        <div style={{ padding: '12px 24px 22px', overflowY: 'auto' }}>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--olive-soft)', margin: '10px 0 14px' }}>
            Pulsa el problema que tienes para ver la solución
          </div>
          {items.map((it, i) => (
            <div key={i} style={{ marginBottom: 8, border: '1px solid var(--line)', background: open === i ? 'var(--cream)' : 'var(--cream)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 14, width: '100%', padding: '13px 16px',
                  border: 'none', borderRadius: 0, background: 'transparent',
                  cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--ink)'
                }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
                  <span style={{
                    width: 30, height: 30, border: `1px solid ${open === i ? 'var(--gold)' : 'var(--olive)'}`,
                    color: open === i ? 'var(--gold)' : 'var(--olive)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    flex: '0 0 30px', transition: 'color .15s, border-color .15s'
                  }}>{Icon[it.icon] && Icon[it.icon]({ s: 16 })}</span>
                  <span style={{ fontWeight: open === i ? 600 : 400 }}>{it.problem}</span>
                </span>
                <span style={{ transform: open === i ? 'rotate(90deg)' : 'none', transition: 'transform .2s', flex: '0 0 auto', color: 'var(--olive-soft)' }}>
                  <Icon.chevron s={14} />
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '4px 16px 16px 16px', borderTop: '1px dashed var(--line-strong)' }}>
                  <ol style={{ margin: '10px 0 0', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {it.steps.map((step, j) => (
                      <li key={j} style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-2)' }}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}

          <div style={{ marginTop: 16, padding: '10px 14px', background: 'rgba(26,42,31,.05)', border: '1px solid var(--line)' }}>
            <span className="mono" style={{ fontSize: 10.5, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive-soft)' }}>
              Recomendado: Chrome o Edge en escritorio para mejor compatibilidad.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* expose */
Object.assign(window, {
  Landing, Practice, FreeSpeaking, Pronunciation, Complete, HelpModal
});