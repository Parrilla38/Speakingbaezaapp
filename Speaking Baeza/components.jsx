/* ────────────────────────────────────────────────────────────────
   Shared UI · Speaking Trainer
   ──────────────────────────────────────────────────────────────── */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ──────────── Icons (geometric / line) ──────────── */

const Icon = {
  arrow: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>,

  arrowL: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>,

  play: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l12 7-12 7V5z" /></svg>,

  mic: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
    </svg>,

  speaker: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h4l5-4v14l-5-4H4z" /><path d="M17 8a5 5 0 0 1 0 8M20 5a9 9 0 0 1 0 14" />
    </svg>,

  scroll: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v12a3 3 0 0 0 3 3H8a3 3 0 0 1-3-3V5z" />
      <path d="M9 8h8M9 12h8M9 16h5" />
    </svg>,

  pen: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" /><path d="M14 6l3 3" />
    </svg>,

  wave: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h2M7 8v8M11 5v14M15 8v8M19 10v4M21 12h2" />
    </svg>,

  flame: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s5 4 5 9a5 5 0 1 1-10 0c0-2 1-3 1-3s.5 1.5 2 1.5C10 7 12 3 12 3z" />
    </svg>,

  star: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.5l7.1-.6L12 2z" /></svg>,

  check: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 6" />
    </svg>,

  close: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>,

  help: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 1-1 1.7M12 17h.01" />
    </svg>,

  globe: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>,

  chevron: (p) =>
  <svg width={p.s || 14} height={p.s || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>,

  medal: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3l3 6M17 3l-3 6M12 9a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" /><path d="M12 13v4M10 15h4" />
    </svg>,

  target: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>,

  refresh: (p) =>
  <svg width={p.s || 16} height={p.s || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
    </svg>

};

/* ──────────── Chevron rank badge (geometric, no emblem) ──────────── */

function ChevronMark({ size = 42, count = 2, color = "var(--gold)", bg = "transparent" }) {
  const stripes = [];
  const step = size / 8;
  for (let i = 0; i < count; i++) {
    const y = size * 0.62 - i * step * 1.6;
    stripes.push(
      <path key={i} d={`M ${size * 0.18} ${y} L ${size * 0.5} ${y - size * 0.28} L ${size * 0.82} ${y}`}
      stroke={color} strokeWidth={size * 0.06} fill="none" strokeLinecap="square" strokeLinejoin="miter" />
    );
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      {bg !== 'transparent' && <rect width={size} height={size} fill={bg} />}
      {stripes}
    </svg>);

}

/* ──────────── Buttons ──────────── */

function Button({ children, variant = "primary", size = "md", icon, iconRight, onClick, style, full, type, disabled, ...rest }) {
  const base = {
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    fontSize: size === 'lg' ? 15 : size === 'sm' ? 12 : 13,
    letterSpacing: size === 'lg' ? '.02em' : '.04em',
    textTransform: size === 'lg' ? 'none' : 'uppercase',
    padding: size === 'lg' ? '16px 22px' : size === 'sm' ? '8px 12px' : '12px 16px',
    border: '1px solid transparent',
    borderRadius: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    transition: 'all .15s ease',
    width: full ? '100%' : 'auto',
    justifyContent: full ? 'center' : 'flex-start',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    opacity: disabled ? .5 : 1,
    pointerEvents: disabled ? 'none' : 'auto'
  };
  const variants = {
    primary: { background: 'var(--olive)', color: 'var(--cream)', border: '1px solid var(--olive)' },
    gold: { background: 'var(--gold)', color: 'var(--olive)', border: '1px solid var(--gold)' },
    outline: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line-strong)' },
    ghost: { background: 'transparent', color: 'var(--ink)', border: '1px solid transparent' },
    cream: { background: 'var(--cream)', color: 'var(--olive)', border: '1px solid var(--cream)' },
    danger: { background: 'transparent', color: 'var(--red)', border: '1px solid var(--red)' }
  };
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {e.currentTarget.style.background = 'var(--olive-2)';}
        if (variant === 'gold') {e.currentTarget.style.background = 'var(--gold-2)';}
        if (variant === 'outline') {e.currentTarget.style.background = 'rgba(20,24,26,.06)';}
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = variants[variant].background;
      }}
      {...rest}>
      
      {icon}
      <span>{children}</span>
      {iconRight}
    </button>);

}

/* ──────────── Tag / chip ──────────── */

function Tag({ children, tone = 'neutral', style }) {
  const tones = {
    neutral: { color: 'var(--ink-2)', border: 'var(--line-strong)' },
    olive: { color: 'var(--olive)', border: 'var(--olive)' },
    gold: { color: 'var(--gold)', border: 'var(--gold)' },
    cream: { color: 'var(--cream)', border: 'rgba(255,255,255,.45)' }
  };
  const t = tones[tone];
  return (
    <span className="mono" style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 10.5, letterSpacing: '.16em', textTransform: 'uppercase',
      padding: '5px 9px', border: `1px solid ${t.border}`, color: t.color,
      borderRadius: 999, lineHeight: 1, whiteSpace: 'nowrap', ...style
    }}>{children}</span>);

}

/* ──────────── Section heading w/ index number ──────────── */

function SectionLabel({ num, children, style }) {
  return (
    <div className="mono" style={{
      display: 'flex', alignItems: 'baseline', gap: 14,
      fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase',
      color: 'var(--olive-soft)',
      ...style
    }}>
      <span style={{ color: 'var(--gold)' }}>{num}</span>
      <span style={{ flex: '0 0 24px', height: 1, background: 'var(--line-strong)' }} />
      <span>{children}</span>
    </div>);

}

/* ──────────── Top bar ──────────── */

function TopBar({ onHome, current, lang = 'ES', setLang, onHelp, accent }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(241,236,224,.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--line)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={onHome}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
            <ChevronMark size={22} count={2} color="var(--olive)" />
            <div style={{ lineHeight: 1, whiteSpace: 'nowrap' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--ink)', letterSpacing: '-.01em', whiteSpace: 'nowrap' }}>
                Speaking <em style={{ color: 'var(--gold)' }}>Trainer</em>
              </div>
              <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--olive-soft)', marginTop: 3, whiteSpace: 'nowrap' }}>
                Academia · Baeza
              </div>
            </div>
          </div>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="mono" style={{
            display: 'flex', alignItems: 'center', gap: 0,
            border: '1px solid var(--line-strong)', borderRadius: 999, padding: 2,
            fontSize: 11, letterSpacing: '.12em'
          }}>
            {['ES', 'EN'].map((l) =>
            <button key={l}
            onClick={() => setLang && setLang(l)}
            style={{
              border: 0, background: lang === l ? 'var(--olive)' : 'transparent',
              color: lang === l ? 'var(--cream)' : 'var(--ink)',
              padding: '5px 10px', borderRadius: 999, cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit'
            }}>{l}</button>
            )}
          </div>
          <button onClick={onHelp} title="Ayuda" style={{
            width: 34, height: 34, borderRadius: 999, border: '1px solid var(--line-strong)',
            background: 'transparent', color: 'var(--ink)', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
          }}><Icon.help s={16} /></button>
        </nav>
      </div>
    </header>);

}

/* ──────────── Footer ──────────── */

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--line)',
      marginTop: 80, paddingTop: 32, paddingBottom: 40
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap'
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 28, color: 'var(--olive)' }}>
            El Honor es mi divisa.
          </div>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--olive-soft)', marginTop: 8 }}>SPEAKING TRAINER · V2.6 · 131ª PROMOCIÓN

          </div>
        </div>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--olive-soft)', textAlign: 'right' }}>
          Desarrollado por el alumno №13123<br />
          Baeza · Jaén · ES
        </div>
      </div>
    </footer>);

}

/* ──────────── Rank ladder ──────────── */

const RANKS = [
{ name: 'Recluta', chevrons: 0, threshold: 0 },
{ name: 'Alumno', chevrons: 1, threshold: 50 },
{ name: 'Cabo', chevrons: 2, threshold: 140 },
{ name: 'Sargento', chevrons: 3, threshold: 280 },
{ name: 'Teniente', chevrons: 4, threshold: 500 },
{ name: 'Capitán', chevrons: 5, threshold: 800 }];


function getRank(xp) {
  let r = RANKS[0];
  for (const x of RANKS) {if (xp >= x.threshold) r = x;}
  return r;
}
function getNextRank(xp) {
  for (const x of RANKS) {if (xp < x.threshold) return x;}
  return null;
}

/* ──────────── Animated counter ──────────── */

function useTick(intervalMs = 80) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return t;
}

/* ──────────── Identity (localStorage, identity only) ──────────── */
// We persist NAME and STUDENT NUMBER only — never gameplay state.
// Used so each person can have their own card on their device,
// without any server / database / cross-user storage.

const IDENTITY_KEY = 'spk_identity_v1';

function useIdentity() {
  const [id, setIdRaw] = useState(() => {
    try {
      const raw = localStorage.getItem(IDENTITY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return { name: '', number: '', ...parsed };
      }
    } catch (e) {}
    return { name: '', number: '' };
  });
  const setId = useCallback((next) => {
    setIdRaw((prev) => {
      const merged = typeof next === 'function' ? next(prev) : { ...prev, ...next };
      try { localStorage.setItem(IDENTITY_KEY, JSON.stringify(merged)); } catch (e) {}
      return merged;
    });
  }, []);
  return [id, setId];
}

/* ──────────── InlineText — click-to-edit text on dark background ──────────── */

function InlineText({ value, onChange, placeholder, font='display', size=24, color='inherit', muted=false, maxLen=40, prefix='', suffix='', tone='dark' }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || '');
  const inputRef = useRef(null);

  useEffect(()=>{ if(!editing) setDraft(value || ''); }, [value, editing]);
  useEffect(()=>{
    if(editing && inputRef.current){
      inputRef.current.focus();
      inputRef.current.select();
    }
  },[editing]);

  const commit = () => {
    const v = draft.trim().slice(0, maxLen);
    if(v !== (value || '')) onChange(v);
    setEditing(false);
  };
  const cancel = () => { setDraft(value || ''); setEditing(false); };

  const baseStyle = {
    fontFamily: font === 'display' ? 'var(--font-display)' : font === 'mono' ? 'var(--font-mono)' : 'var(--font-ui)',
    fontSize: size,
    lineHeight: 1.05,
    color,
    letterSpacing: font === 'display' ? '-.01em' : font === 'mono' ? '.04em' : 'normal',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    minWidth: 0,
  };

  const isEmpty = !value || !value.trim();
  const display = isEmpty ? placeholder : (prefix + value + suffix);

  if(editing){
    return (
      <div style={{display:'inline-flex', alignItems:'center', gap:8, width:'100%', borderBottom: '1px dashed ' + (tone==='dark' ? 'rgba(255,255,255,.35)' : 'var(--line-strong)')}}>
        <input
          ref={inputRef}
          value={draft}
          maxLength={maxLen}
          onChange={(e)=>setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e)=>{
            if(e.key === 'Enter'){ e.preventDefault(); commit(); }
            if(e.key === 'Escape'){ e.preventDefault(); cancel(); }
          }}
          placeholder={placeholder}
          style={baseStyle}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={()=>setEditing(true)}
      title="Pulsa para editar"
      style={{
        ...baseStyle,
        textAlign:'left',
        cursor:'pointer',
        display:'inline-flex',
        alignItems:'center',
        gap:8,
        opacity: muted || isEmpty ? .55 : 1,
        borderBottom: '1px dashed transparent',
        transition: 'border-color .15s, opacity .15s',
      }}
      onMouseEnter={(e)=>{ e.currentTarget.style.borderBottomColor = tone==='dark' ? 'rgba(255,255,255,.25)' : 'var(--line-strong)'; e.currentTarget.style.opacity = '1'; }}
      onMouseLeave={(e)=>{ e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.opacity = (muted || isEmpty) ? '.55' : '1'; }}
    >
      <span style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{display}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{opacity:.55, flex:'0 0 12px'}}>
        <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/>
      </svg>
    </button>
  );
}

/* ──────────── Progress (localStorage, persistent) ──────────── */

const PROGRESS_KEY = 'spk_progress_v1';

function useProgress() {
  const [prog, setProg] = React.useState(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (p && typeof p === 'object') return { xp: 0, streak: 0, history: [], ...p };
      }
    } catch(e) {}
    return { xp: 0, streak: 0, history: [] };
  });

  const addResult = React.useCallback((score) => {
    setProg(prev => {
      const ok      = score > 50;
      const history = [...prev.history, { ok }].slice(-7);
      const streak  = ok ? prev.streak + 1 : 0;
      const xp      = prev.xp + Math.max(0, Math.round(score));
      const next    = { xp, streak, history };
      try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(next)); } catch(e) {}
      return next;
    });
  }, []);

  const resetProgress = React.useCallback(() => {
    const zero = { xp: 0, streak: 0, history: [] };
    setProg(zero);
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(zero)); } catch(e) {}
  }, []);

  return [prog, addResult, resetProgress];
}

/* expose globally */
Object.assign(window, {
  Icon, ChevronMark, Button, Tag, SectionLabel, TopBar, Footer,
  RANKS, getRank, getNextRank, useTick,
  useIdentity, InlineText, IDENTITY_KEY,
  useProgress, PROGRESS_KEY
});