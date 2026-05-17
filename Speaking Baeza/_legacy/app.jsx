/* ────────────────────────────────────────────────────────────────
   App · Speaking Trainer
   ──────────────────────────────────────────────────────────────── */

const SPK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#b8924a",
  "olive": "#1a2a1f",
  "paper": "#f1ece0",
  "userName": "Lucía R.",
  "xp": 168,
  "streak": 5,
  "fontDisplay": "Instrument Serif",
  "screen": "home"
}/*EDITMODE-END*/;

function App(){
  const [t, setTweak] = useTweaks(SPK_DEFAULTS);
  const [identity, setIdentity] = useIdentity();
  const [screen, setScreen] = React.useState(t.screen || 'home');
  const [help, setHelp] = React.useState(false);
  const [lang, setLang] = React.useState('ES');

  React.useEffect(()=>{
    const r = document.documentElement;
    r.style.setProperty('--gold', t.accent);
    r.style.setProperty('--olive', t.olive);
    r.style.setProperty('--paper', t.paper);
    r.style.setProperty('--font-display', `"${t.fontDisplay}", "Times New Roman", serif`);
  },[t.accent, t.olive, t.paper, t.fontDisplay]);

  const go = (s)=>{
    setScreen(s);
    window.scrollTo({top:0});
    setTweak('screen', s);
  };

  const user = {
    name: identity.name || t.userName,
    number: identity.number,
    xp: t.xp,
    streak: t.streak,
  };

  let body = null;
  if(screen === 'home') body = <Landing go={go} user={user} lang={lang} identity={identity} setIdentity={setIdentity}/>;
  else if(screen === 'predefined') body = <Practice go={go}/>;
  else if(screen === 'free') body = <FreeSpeaking go={go}/>;
  else if(screen === 'pron') body = <Pronunciation go={go}/>;
  else if(screen === 'complete') body = <Complete go={go}/>;

  return (
    <>
      <TopBar
        onHome={()=>go('home')}
        current={screen}
        lang={lang}
        setLang={setLang}
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
              {value:'home',       label:'Landing'},
              {value:'predefined', label:'Práctica predefinida'},
              {value:'free',       label:'Speaking libre'},
              {value:'pron',       label:'Pronunciación'},
              {value:'complete',   label:'Misión cumplida'},
            ]}
            onChange={(v)=>{ setScreen(v); setTweak('screen', v); window.scrollTo({top:0}); }}
          />
          <TweakButton label="Abrir modal de ayuda" onClick={()=>setHelp(true)}/>
        </TweakSection>

        <TweakSection label="Sesión actual">
          <TweakSlider label="XP de sesión" min={0} max={800} step={10} value={t.xp} onChange={(v)=>setTweak('xp', v)}/>
          <TweakSlider label="Racha (aciertos seguidos)" min={0} max={30} value={t.streak} onChange={(v)=>setTweak('streak', v)}/>
        </TweakSection>

        <TweakSection label="Identidad (local, en este dispositivo)">
          <TweakText label="Nombre" value={identity.name} onChange={(v)=>setIdentity({name: v})}/>
          <TweakText label="Nº alumno" value={identity.number} onChange={(v)=>setIdentity({number: v})}/>
          <TweakButton label="Borrar identidad local" onClick={()=>{ try{ localStorage.removeItem(IDENTITY_KEY); }catch(e){} setIdentity({name:'', number:''}); }}/>
        </TweakSection>

        <TweakSection label="Paleta">
          <TweakColor label="Acento" value={t.accent}
            options={['#b8924a', '#caa15a', '#d4a84b', '#8a6f2e', '#7a1f1f']}
            onChange={(v)=>setTweak('accent', v)}/>
          <TweakColor label="Verde oliva" value={t.olive}
            options={['#1a2a1f', '#0f1d14', '#243527', '#1d2b1a', '#13294b']}
            onChange={(v)=>setTweak('olive', v)}/>
          <TweakColor label="Papel" value={t.paper}
            options={['#f1ece0', '#f4f0e6', '#e8e2d2', '#faf7ef', '#ede7d6']}
            onChange={(v)=>setTweak('paper', v)}/>
        </TweakSection>

        <TweakSection label="Tipografía display">
          <TweakRadio label="Familia" value={t.fontDisplay}
            options={[
              {value:'Instrument Serif', label:'Serif'},
              {value:'Schibsted Grotesk', label:'Grotesk'},
            ]}
            onChange={(v)=>setTweak('fontDisplay', v)}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
