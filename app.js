/* ═══════════════════════════════════════════════════════
   SPEAKING TRAINER · GUARDIA CIVIL
   app.js
═══════════════════════════════════════════════════════ */

// ── TRANSLATIONS ───────────────────────────────────────
const i18n = {
  es: {
    motto: 'El Honor es mi divisa',
    h1a: 'Speaking', h1b: 'Trainer',
    subtitle: 'Academia · Guardia Civil',
    speed: 'Velocidad:', slow: 'Lenta', normal: 'Normal', fast: 'Rápida',
    listenQ: 'Escuchar pregunta',
    listenA: 'Escuchar respuesta',
    showA: 'Ver respuesta', hideA: 'Ocultar respuesta',
    answerLabel: 'Respuesta modelo',
    recordLabel: '🎤 Tu turno — graba tu respuesta',
    startRec: 'Empezar a grabar',
    stopRec: '⏹ Parar grabación',
    recAgain: '🔄 Grabar de nuevo',
    youSaidLabel: '🗣 Lo que dijiste',
    correctLabel: '✓ Respuesta correcta — verde = aciertos',
    tipsLabel: '💡 Consejos de pronunciación',
    scoreLabel: 'Puntuación',
    wellDone: '¡Misión cumplida!',
    completedText: 'Has completado todas las preguntas. ¡Sigue practicando para mejorar tu inglés!',
    restart: 'Empezar de nuevo',
    prev: '← Anterior', next: 'Siguiente →',
    micTitle: 'Permiso de micrófono',
    micText: 'Para grabar tu respuesta y comprobar tu pronunciación necesitamos acceso al micrófono. Tu voz nunca se almacena.',
    micTextIOS: 'En iPhone/iPad pulsa "Permitir" y acepta el aviso del sistema. Si lo denegaste antes: Ajustes → Safari → Micrófono y actívalo para este sitio.',
    cancel: 'Cancelar', allow: 'Permitir',
    understood: 'Entendido',
    helpTitle: 'Ayuda y solución de problemas',
    helpLead: 'Selecciona el problema que tienes:',
    helpMic: 'El micrófono no funciona',
    helpSR: 'No se transcribe mi voz',
    helpNet: 'Error de red al grabar',
    helpTTS: 'No oigo el audio',
    helpSys: 'Micrófono bloqueado por el sistema',
    // Home / landing
    back: 'Inicio',
    homeLead: 'Elige el modo de práctica que mejor se adapte a lo que quieres hacer hoy.',
    cardTagRecommended: 'Recomendado',
    cardTagCustom: 'Personalizado',
    cardTagQuick: 'Rápido',
    cardPresetTitle: 'Frases predefinidas',
    cardPresetDesc: 'Practica con las 20 preguntas oficiales del speaking de la academia: armas, delitos, descripción, etc. Incluye respuesta modelo y traducción.',
    cardPresetF1: '✓ 20 preguntas tipo examen',
    cardPresetF2: '✓ Respuestas modelo en inglés',
    cardPresetF3: '✓ Traducción al español',
    cardFreeTitle: 'Speaking libre',
    cardFreeDesc: '¿Tienes tu propia pregunta y respuesta? Escríbelas y practica como si fuera un examen real. Ideal para repasar tus apuntes.',
    cardFreeF1: '✓ Tu pregunta, tu respuesta',
    cardFreeF2: '✓ Mismo sistema de evaluación',
    cardFreeF3: '✓ Practica cualquier tema',
    cardPronTitle: 'Pronunciación',
    cardPronDesc: '¿No sabes pronunciar una palabra o frase? Escríbela y te enseñamos cómo decirla con una guía fácil de leer.',
    cardPronF1: '✓ Cualquier palabra o frase',
    cardPronF2: '✓ Guía de pronunciación fácil',
    cardPronF3: '✓ Practica y verifica tu acento',
    homeTipTitle: 'Primer uso. ',
    homeTipText: 'Recuerda permitir el acceso al micrófono cuando lo pida tu navegador para poder grabar tu voz y obtener feedback de pronunciación.',
    modePresetShort: 'Predefinidas',
    modeFreeShort: 'Libre',
    modePronShort: 'Pronunciación',
    footer: 'Desarrollado por el alumno',
    progressLabel: (a, b) => `Pregunta ${a} de ${b}`,
    questionLabel: n => `PREGUNTA ${n}`,
    great: '¡Excelente pronunciación!',
    good:  '¡Buen esfuerzo, sigue así!',
    low:   'Sigue practicando, ¡tú puedes!',
    micDenied:    '❌ Micrófono denegado. Ve a los ajustes de tu navegador y permite el acceso.',
    micDeniedIOS: '❌ Micrófono denegado. Ve a Ajustes → Safari → Micrófono y permite el acceso a este sitio.',
    notSupported: '❌ Reconocimiento de voz no disponible. Usa Chrome en Android o un navegador de escritorio.',
    listening:       '🎤 Escuchando… habla ahora',
    nothingDetected: '❌ No se detectó nada. Habla claro e inténtalo de nuevo.',
    networkError:    '❌ Error de red. El reconocimiento de voz necesita internet.',
    pronouncedAs: w => `<strong>${w}</strong> se pronuncia:`,
    // Modes
    modePreset: 'Predefinidas',
    modeFree: 'Speaking libre',
    modePron: 'Pronunciación',
    // Free mode
    freeTitle: '✍️ Speaking Libre',
    freeIntro: 'Crea tu propia pregunta y respuesta para practicar lo que quieras.',
    freeQLabel: 'Tu pregunta (en inglés)',
    freeALabel: 'Tu respuesta modelo (en inglés)',
    startPractice: 'Empezar a practicar',
    yourQ: 'TU PREGUNTA',
    newPractice: 'Nueva práctica',
    fillBoth: 'Por favor, escribe tanto la pregunta como la respuesta.',
    // Pronunciation mode
    pronTitle: '🗣️ Pronunciación',
    pronIntro: 'Escribe una palabra o frase en inglés. Te enseñamos cómo pronunciarla y puedes escucharla.',
    pronInputLabel: 'Palabra o frase en inglés',
    showPron: 'Ver pronunciación',
    listenIt: 'Escuchar pronunciación',
    practicePron: '🎤 Practica pronunciándolo tú',
    recentWords: '📚 Palabras recientes',
    enterText: 'Por favor, escribe algo primero.',
    pronGreat: '¡Perfecto! Lo has pronunciado bien.',
    pronClose: 'Casi. Escucha de nuevo y vuelve a intentarlo.',
    pronWrong: 'Inténtalo de nuevo. Escucha la pronunciación con atención.',
    feedbackLabel: 'Comparación',
    easyTip: 'Léelo en voz alta como si fuera español:',
  },
  en: {
    motto: 'Honor is my emblem',
    h1a: 'Speaking', h1b: 'Trainer',
    subtitle: 'Academy · Civil Guard',
    speed: 'Speed:', slow: 'Slow', normal: 'Normal', fast: 'Fast',
    listenQ: 'Listen to question',
    listenA: 'Listen to answer',
    showA: 'Show answer', hideA: 'Hide answer',
    answerLabel: 'Model answer',
    recordLabel: '🎤 Your turn — record your answer',
    startRec: 'Start Recording',
    stopRec: '⏹ Stop Recording',
    recAgain: '🔄 Record Again',
    youSaidLabel: '🗣 You said',
    correctLabel: '✓ Correct answer — green = matched words',
    tipsLabel: '💡 Pronunciation tips',
    scoreLabel: 'Score',
    wellDone: 'Mission accomplished!',
    completedText: 'You have completed all the questions. Keep practising to improve your English!',
    restart: 'Start again',
    prev: '← Previous', next: 'Next →',
    micTitle: 'Microphone permission',
    micText: 'To record your answer and check your pronunciation, this app needs microphone access. Your voice is never stored.',
    micTextIOS: 'On iPhone/iPad tap "Allow" and accept the iOS prompt. If denied: Settings → Safari → Microphone and enable it for this site.',
    cancel: 'Cancel', allow: 'Allow',
    understood: 'Got it',
    helpTitle: 'Help & troubleshooting',
    helpLead: 'Select the problem you are having:',
    helpMic: 'The microphone is not working',
    helpSR: 'My voice is not being transcribed',
    helpNet: 'Network error when recording',
    helpTTS: 'I cannot hear the audio',
    helpSys: 'Microphone blocked by the system',
    // Home / landing
    back: 'Home',
    homeLead: 'Choose the practice mode that best fits what you want to do today.',
    cardTagRecommended: 'Recommended',
    cardTagCustom: 'Custom',
    cardTagQuick: 'Quick',
    cardPresetTitle: 'Preset Questions',
    cardPresetDesc: 'Practise with the 20 official academy speaking questions: weapons, crime, description, etc. Includes model answer and translation.',
    cardPresetF1: '✓ 20 exam-style questions',
    cardPresetF2: '✓ Model answers in English',
    cardPresetF3: '✓ Spanish translation',
    cardFreeTitle: 'Free Speaking',
    cardFreeDesc: 'Have your own question and answer? Type them and practise like a real exam. Perfect to review your notes.',
    cardFreeF1: '✓ Your question, your answer',
    cardFreeF2: '✓ Same evaluation system',
    cardFreeF3: '✓ Practise any topic',
    cardPronTitle: 'Pronunciation',
    cardPronDesc: "Don't know how to pronounce a word or sentence? Type it and we will show you how to say it with an easy-to-read guide.",
    cardPronF1: '✓ Any word or sentence',
    cardPronF2: '✓ Easy pronunciation guide',
    cardPronF3: '✓ Practise and check your accent',
    homeTipTitle: 'First time? ',
    homeTipText: 'Remember to allow microphone access when your browser asks for it, so you can record your voice and get pronunciation feedback.',
    modePresetShort: 'Preset',
    modeFreeShort: 'Free',
    modePronShort: 'Pronunciation',
    footer: 'Developed by student',
    progressLabel: (a, b) => `Question ${a} of ${b}`,
    questionLabel: n => `QUESTION ${n}`,
    great: 'Excellent pronunciation!',
    good:  'Good effort, keep going!',
    low:   'Keep practising — you can do it!',
    micDenied:    '❌ Microphone access denied. Please enable it in your browser settings.',
    micDeniedIOS: '❌ Microphone denied. Go to Settings → Safari → Microphone and allow it for this site.',
    notSupported: '❌ Speech recognition not available. Please use Chrome on Android or a desktop browser.',
    listening:       '🎤 Listening… speak now',
    nothingDetected: '❌ Nothing detected. Please speak clearly and try again.',
    networkError:    '❌ Network error. Speech recognition needs an internet connection.',
    pronouncedAs: w => `<strong>${w}</strong> is pronounced:`,
    // Modes
    modePreset: 'Preset',
    modeFree: 'Free Speaking',
    modePron: 'Pronunciation',
    // Free mode
    freeTitle: '✍️ Free Speaking',
    freeIntro: 'Create your own question and answer to practise whatever you want.',
    freeQLabel: 'Your question (in English)',
    freeALabel: 'Your model answer (in English)',
    startPractice: 'Start practising',
    yourQ: 'YOUR QUESTION',
    newPractice: 'New practice',
    fillBoth: 'Please fill in both the question and the answer.',
    // Pronunciation mode
    pronTitle: '🗣️ Pronunciation',
    pronIntro: 'Type any English word or sentence. We show you how to pronounce it and you can hear it.',
    pronInputLabel: 'Word or sentence in English',
    showPron: 'Show pronunciation',
    listenIt: 'Listen to pronunciation',
    practicePron: '🎤 Practise pronouncing it',
    recentWords: '📚 Recent words',
    enterText: 'Please type something first.',
    pronGreat: 'Perfect! You pronounced it correctly.',
    pronClose: 'Close! Listen again and try once more.',
    pronWrong: 'Try again. Listen carefully to the pronunciation.',
    feedbackLabel: 'Comparison',
    easyTip: 'Read it out loud as if it were Spanish:',
  }
};

// ── DATA ───────────────────────────────────────────────
const questions = [
  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿En qué situaciones usarías un arma?',
         en: 'In what situations would you use a weapon?' },
    a: { es: 'Usaría un arma en una situación donde mi vida está en peligro, para proteger a alguien de un atacante, o para cazar animales.',
         en: 'I would use a weapon in a situation where my life is in danger, to protect someone else from an attacker, or to hunt animals.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Qué opinas sobre el uso de las armas?',
         en: 'What do you think about the use of weapons?' },
    a: { es: 'Estoy de acuerdo con el uso de armas, pero solo en situaciones especiales. Las armas son muy importantes para defendernos y son esenciales para mantener la seguridad en la sociedad si las usamos de forma responsable.',
         en: 'I agree with the use of weapons, but only in special situations. Weapons are very important to defend ourselves and others. They are also essential to maintain security in society if we use them in a responsible way.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Deberían las armas de fuego ser legales?',
         en: 'Should guns be legal?' },
    a: { es: 'Creo que las armas deberían ser legales porque, si se usan correctamente, ayudan a la gente a defenderse. Sin embargo, creo que deben estar bajo una regulación estricta.',
         en: 'I think guns should be legal, because if they are used properly, they help people defend themselves, their families and their properties. However, I believe guns should be under strict regulation.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Cuál es para ti el arma más peligrosa?',
         en: 'What is the most dangerous weapon for you?' },
    a: { es: 'El arma más peligrosa es una pistola, porque cualquiera puede apretar un gatillo y puede matar a una persona en pocos segundos.',
         en: 'The most dangerous weapon is a gun, because everybody can pull a trigger and it can kill a person in just a few seconds.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Cuál es para ti la mejor arma y por qué?',
         en: 'What is the best weapon for you, and why?' },
    a: { es: 'Para mí, la mejor arma es una pistola. Es muy útil en una situación peligrosa y es muy ligera, así que puedo llevarla fácilmente.',
         en: 'For me, the best weapon is a pistol. It is very useful in a dangerous situation and it is very light, so I can carry it easily.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Qué tipo de armas puedes usar como Guardia Civil?',
         en: 'Which kinds of weapons can you use as a Civil Guard?' },
    a: { es: 'Como Guardia Civil, puedo usar una pistola, un sable, un cuchillo y una granada.',
         en: 'As a Civil Guard, I can use a pistol, a sword, a knife and a grenade.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Puedes nombrar algunas partes de un arma de fuego?',
         en: 'Can you name some parts of a gun?' },
    a: { es: 'Sí, las partes de un arma son: cañón, alza, punto de mira, culata, cargador, gatillo, munición, cartucho y bala.',
         en: 'Yes, the parts of a gun are: barrel, rear sight, front sight, butt, magazine, trigger, ammunition, cartridge and bullet.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Deberían ir armados la policía y los guardias civiles?',
         en: 'Should police and civil guards be armed?' },
    a: { es: 'Sí, deberían ir armados porque tienen que proteger a la gente y garantizar la seguridad. Si llevan armas, responderán mejor a situaciones peligrosas.',
         en: 'Yes, they should be armed because they have to protect people and ensure security. If they carry guns, they will respond better to dangerous situations.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Crees que es importante que un guardia civil tenga un arma?',
         en: 'Do you think it is important for a civil guard to have a gun?' },
    a: { es: 'Sí, creo que es importante tener un arma en nuestro trabajo, porque es lo que nos protegerá de los criminales y ayuda a proteger a los demás. El uso de las armas siempre debería ser el último recurso.',
         en: 'Yes, I think it is important to have a gun in our job, because it is the main thing that is going to protect us from criminals and helps protect others. The use of guns should always be the last resort.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Crees que la gente necesita armas?',
         en: 'Do you think people need guns?' },
    a: { es: 'Siempre depende de la situación. Ciertas personas necesitan armas para protección, para su trabajo o para deporte. En general, la gente no las necesita en su vida diaria.',
         en: 'It always depends on the situation. Certain kinds of people need guns for self-protection, for their jobs or for sport. In general, people do not need guns in their daily life, unless it is required by the circumstances.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Cuál es la diferencia entre un arma y una pistola?',
         en: 'What is the difference between a weapon and a gun?' },
    a: { es: 'Un arma es cualquier objeto que se puede usar para dañar a alguien. Por ejemplo, un cuchillo. Una pistola es un tipo de arma que dispara balas. Por ejemplo, una pistola automática.',
         en: 'A weapon is any object that can be used to hurt someone. For example, a knife. A gun is a kind of weapon that shoots bullets. For example, a pistol.' } },

  { topic: { es: '🔫 Armas',              en: '🔫 Weapons'     },
    q: { es: '¿Puedes describir una pistola?',
         en: 'Can you describe a pistol?' },
    a: { es: 'Una pistola es un arma de fuego pequeña que se puede usar con una o dos manos. Sus partes son: cañón, alza, punto de mira, cargador y gatillo. Las usan normalmente los guardias civiles y la policía.',
         en: 'A pistol is a small gun that can be used with one or two hands. The parts of a pistol are: barrel, rear sight, front sight, magazine and trigger. Pistols are normally used by civil guards and police in their job.' } },

  { topic: { es: '🚨 Delitos',            en: '🚨 Crime'       },
    q: { es: '¿Qué es el crimen organizado?',
         en: 'What is organised crime?' },
    a: { es: 'El crimen organizado es un grupo de personas que trabajan juntas para cometer delitos graves con el fin de obtener dinero. Usan violencia, intimidación y corrupción para proteger sus actividades ilegales.',
         en: 'Organised crime is a group of people who work together to commit serious crimes in order to get money. They usually operate in different cities or countries. They use violence, intimidation and corruption to protect their illegal activities.' } },

  { topic: { es: '🚨 Delitos',            en: '🚨 Crime'       },
    q: { es: '¿Qué es la corrupción?',
         en: 'What is corruption?' },
    a: { es: 'La corrupción es un comportamiento deshonesto, especialmente por parte de personas con poder. Suele implicar soborno o fraude.',
         en: 'Corruption is dishonest behaviour, especially by people in power. It usually involves bribery or fraud.' } },

  { topic: { es: '🚨 Delitos',            en: '🚨 Crime'       },
    q: { es: '¿Qué es el blanqueo de dinero?',
         en: 'What is money laundering?' },
    a: { es: 'El blanqueo de dinero es un delito en el que alguien oculta dinero obtenido ilegalmente metiéndolo en bancos o negocios para que parezca legal.',
         en: 'Money laundering is a crime in which someone hides illegally obtained money by putting it into banks or businesses, so that it looks legal.' } },

  { topic: { es: '🚨 Delitos',            en: '🚨 Crime'       },
    q: { es: '¿Qué es la trata de seres humanos?',
         en: 'What is human trafficking?' },
    a: { es: 'La trata de seres humanos es un delito en el que se traslada a personas a otro lugar y se les obliga a trabajar o prestar servicios en contra de su voluntad.',
         en: 'Human trafficking is a crime in which people are moved to another place and forced to work or provide services against their will.' } },

  { topic: { es: '🏠 Robo en domicilio',  en: '🏠 Burglary'   },
    q: { es: '¿Está aumentando o disminuyendo el robo en viviendas donde vives?',
         en: 'Is burglary increasing or decreasing where you live? Why?' },
    a: { es: 'En mi opinión, el robo en viviendas está disminuyendo porque muchas casas tienen cámaras de seguridad, alarmas y puertas blindadas. Además, la policía ha aumentado las patrullas.',
         en: 'In my opinion, burglary is slightly decreasing where I live, because many houses now have security cameras, alarm systems and reinforced doors. Also, the police have increased patrols and surveillance, which discourages burglars from committing this crime.' } },

  { topic: { es: '🏠 Robo en domicilio',  en: '🏠 Burglary'   },
    q: { es: '¿Qué consejos darías a la gente para proteger su casa?',
         en: 'What advice could you give to people to protect their home?' },
    a: { es: 'La gente puede seguir varios consejos: instalar un sistema de alarma, usar puertas y cerraduras resistentes, no dejar ventanas abiertas al salir, instalar cámaras, pedir a un vecino que vigile la casa y no publicar los planes de viaje en redes sociales.',
         en: 'People can follow several tips to protect their homes. First, install a security alarm system. Second, use strong doors and security locks. Third, do not leave windows open when you are away. Fourth, install security cameras. Fifth, ask a neighbour to watch your house when you are on holiday. Sixth, avoid sharing your travel plans on social media.' } },

  { topic: { es: '👤 Descripción',        en: '👤 Description' },
    q: { es: '¿Cuál es la diferencia entre "What is he like?" y "What does he look like?"',
         en: 'What is the difference between what is he like and what does he look like?' },
    a: { es: 'La pregunta "what is he like?" se refiere a la personalidad. Por ejemplo: es tranquilo, valiente y responsable. La pregunta "what does he look like?" se refiere a la apariencia física. Por ejemplo: es alto y delgado con el pelo corto y castaño.',
         en: 'The question what is he like refers to personality and character. For example he is calm, brave and responsible. The question what does he look like refers to physical appearance. For example he is tall and slim with short brown hair.' } },

  { topic: { es: '👤 Descripción',        en: '👤 Description' },
    q: { es: '¿Puedes describir la apariencia física de una persona?',
         en: 'Can you describe the physical appearance of a person?' },
    a: { es: 'Sí. Una persona se puede describir por su altura, complexión, color y longitud del pelo, color de ojos y rasgos distintivos como barba, tatuajes o pecas. Por ejemplo: ella es delgada, tiene el pelo largo y oscuro en dos trenzas y pecas en la nariz.',
         en: 'Yes. A person can be described by their height, build, hair colour and length, eye colour and distinctive features such as a beard, tattoos or freckles. For example she is of slender build, has long dark hair in two braids and visible freckles across her nose.' } },
];

// Pronunciation hints
const hints = {
  weapon:'WEP-un', weapons:'WEP-unz', dangerous:'DAYN-jer-us',
  situation:'sit-yoo-AY-shun', situations:'sit-yoo-AY-shunz',
  ammunition:'am-yoo-NISH-un', cartridge:'KAR-trij', trigger:'TRIG-er',
  pistol:'PIS-tul', grenade:'greh-NAYD', security:'sih-KYOOR-ih-tee',
  criminal:'KRIM-ih-nul', criminals:'KRIM-ih-nulz',
  organised:'OR-guh-nyzd', intimidation:'in-tim-ih-DAY-shun',
  corruption:'kuh-RUP-shun', laundering:'LAWN-der-ing',
  trafficking:'TRAF-ik-ing', illegally:'ih-LEE-guh-lee',
  surveillance:'ser-VAY-luns', burglary:'BUR-gluh-ree',
  appearance:'uh-PEER-uns', responsible:'rih-SPON-sih-bul',
  properties:'PROP-er-teez', regulation:'reg-yoo-LAY-shun',
  circumstances:'SER-kum-stan-siz', essential:'ih-SEN-shul',
  behaviour:'bih-HAYV-yer', bribery:'BRY-ber-ee',
  violence:'VY-uh-luns', ensure:'en-SHOOR',
  reinforced:'ree-in-FORST', patrols:'puh-TROLZ',
  society:'suh-SY-ih-tee', barrel:'BAR-ul',
  magazine:'MAG-uh-zeen', bullet:'BUL-it',
  neighbour:'NAY-ber', freckles:'FREK-ulz',
  braids:'BRAYDZ', slender:'SLEN-der', height:'HYT',
};

// ── STATE ──────────────────────────────────────────────
let current       = 0;
let speechRate    = 1.0;
let answerVisible = false;
let lang          = localStorage.getItem('gc_lang') || 'es';

// ── HELPERS ────────────────────────────────────────────
function T(key) {
  const v = i18n[lang][key];
  if (v !== undefined && v !== null) return v;
  const fallback = i18n.en[key];
  return (fallback !== undefined && fallback !== null) ? fallback : key;
}

function $(id) { return document.getElementById(id); }

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = i18n[lang][el.dataset.i18n];
    if (typeof val === 'string') el.textContent = val;
  });
}

// ── LANGUAGE ───────────────────────────────────────────
function setLang(l) {
  lang = l;
  localStorage.setItem('gc_lang', l);
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l)
  );
  applyTranslations();
  renderQuestion();
}

// ── TTS ────────────────────────────────────────────────
const synth = window.speechSynthesis || null;
const TTS_SUPPORTED = !!synth && typeof window.SpeechSynthesisUtterance === 'function';

const VOICE_PREF = [
  'Google US English',
  'Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Jenny Online (Natural) - English (United States)',
  'Microsoft Zira - English (United States)',
  'Samantha', 'Karen', 'Moira', 'Tessa', 'Victoria',
  'Google UK English Female',
];

let cachedVoice    = null;
let keepAliveTimer = null;
let activeBtn      = null;

function getBestVoice() {
  if (!synth) return null;
  if (cachedVoice) return cachedVoice;
  const voices = synth.getVoices();
  if (!voices.length) return null;
  for (const name of VOICE_PREF) {
    const v = voices.find(v => v.name === name);
    if (v) { cachedVoice = v; return v; }
  }
  return voices.find(v => v.lang === 'en-US') ||
         voices.find(v => v.lang.startsWith('en')) ||
         voices[0] || null;
}

function stopSpeaking() {
  if (!synth) return;
  try { synth.cancel(); } catch(_) {}
  clearInterval(keepAliveTimer);
  keepAliveTimer = null;
  if (activeBtn) {
    activeBtn.classList.remove('speaking');
    activeBtn.disabled = false;
    activeBtn = null;
  }
}

function speak(text, btn) {
  if (!TTS_SUPPORTED) {
    showErrorHelp('tts-not-supported');
    return;
  }
  stopSpeaking();
  const utt    = new SpeechSynthesisUtterance(text);
  utt.lang     = 'en-US';
  utt.rate     = speechRate;
  utt.pitch    = 1.05;
  utt.volume   = 1;

  const go = () => {
    const v = getBestVoice();
    if (v) utt.voice = v;
    activeBtn = btn;
    if (btn) { btn.classList.add('speaking'); btn.disabled = true; }
    // Chrome bug: synth pauses after ~15s on some platforms
    keepAliveTimer = setInterval(function() {
      if (synth.speaking && synth.paused) synth.resume();
    }, 8000);
    utt.onend = utt.onerror = function() {
      clearInterval(keepAliveTimer);
      if (btn) { btn.classList.remove('speaking'); btn.disabled = false; }
      activeBtn = null;
    };
    try { synth.speak(utt); } catch(e) {
      console.warn('TTS speak error:', e);
      if (btn) { btn.classList.remove('speaking'); btn.disabled = false; }
    }
  };

  // Voices may not be loaded yet (Chrome async behaviour)
  if (synth.getVoices().length > 0) {
    go();
  } else {
    // Set timeout fallback in case onvoiceschanged never fires (Safari)
    let fired = false;
    const fallback = setTimeout(function() { if (!fired) { fired = true; go(); } }, 800);
    synth.onvoiceschanged = function() {
      if (fired) return;
      fired = true;
      clearTimeout(fallback);
      synth.onvoiceschanged = null;
      go();
    };
  }
}

function speakQuestion() { speak(questions[current].q.en, $('btnQ')); }
function speakAnswer()   { speak(questions[current].a.en, $('btnA')); }

function setSpeed(rate) {
  speechRate = rate;
  document.querySelectorAll('.speed-btn').forEach(b =>
    b.classList.toggle('active', parseFloat(b.dataset.rate) === rate)
  );
}

// ── RENDER ─────────────────────────────────────────────
function renderQuestion() {
  const q = questions[current];

  $('topicTag').textContent    = q.topic[lang];
  $('questionNum').textContent = T('questionLabel')(String(current + 1).padStart(2, '0'));
  $('questionText').textContent = q.q.en;

  const tr = $('questionTranslation');
  if (lang === 'es') {
    tr.textContent = q.q.es;
    tr.classList.add('visible');
  } else {
    tr.textContent = '';
    tr.classList.remove('visible');
  }

  $('showBtnText').textContent = answerVisible ? T('hideA') : T('showA');
  $('answerBox').classList.toggle('visible', answerVisible);
  if (answerVisible) renderAnswerBox();

  $('btnPrev').disabled = current === 0;

  const pct = ((current + 1) / questions.length) * 100;
  $('progressFill').style.width = pct + '%';
  $('progressLabel').textContent = T('progressLabel')(current + 1, questions.length);

  document.querySelectorAll('.btn').forEach(b => {
    b.classList.remove('speaking');
    b.disabled = false;
  });
}

// Cross-browser-safe sentence splitter (avoids lookbehind for old Safari)
function splitSentences(text) {
  // Match end-of-sentence punctuation followed by spaces, capture into chunks
  return text
    .replace(/([.!?])\s+/g, '$1\n')
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean);
}

function renderAnswerBox() {
  const q = questions[current];
  $('answerText').innerHTML = splitSentences(q.a.en).map(s => `<p>${s}</p>`).join('');

  const tr = $('answerTranslation');
  if (lang === 'es') {
    tr.innerHTML = splitSentences(q.a.es).map(s => `<p>${s}</p>`).join('');
    tr.classList.add('visible');
  } else {
    tr.innerHTML = '';
    tr.classList.remove('visible');
  }
}

function toggleAnswer() {
  answerVisible = !answerVisible;
  $('answerBox').classList.toggle('visible', answerVisible);
  $('showBtnText').textContent = answerVisible ? T('hideA') : T('showA');
  if (answerVisible) renderAnswerBox();
}

// ── NAVIGATION ─────────────────────────────────────────
function loadQuestion() {
  stopSpeaking();
  answerVisible = false;
  resetRecording();
  renderQuestion();
}

function nextQ() {
  if (current < questions.length - 1) { current++; loadQuestion(); }
  else showCompleted();
}

function prevQ() {
  if (current > 0) { current--; loadQuestion(); }
}

function showCompleted() {
  stopSpeaking();
  $('mainCard').style.display      = 'none';
  $('completedCard').style.display = 'block';
  $('progressFill').style.width    = '100%';
  $('progressLabel').textContent   = '✦';
  $('btnPrev').style.visibility    = 'hidden';
  $('btnNext').style.visibility    = 'hidden';
}

function restart() {
  current = 0;
  $('mainCard').style.display      = 'block';
  $('completedCard').style.display = 'none';
  $('btnPrev').style.visibility    = 'visible';
  $('btnNext').style.visibility    = 'visible';
  loadQuestion();
}

// ── ERROR HELP SYSTEM ──────────────────────────────────
// Maps error codes to detailed, actionable instructions per browser/OS

const ERROR_HELP = {
  es: {
    'mic-not-allowed': {
      title: '🚫 Permiso de micrófono denegado',
      lead: 'Tu navegador no tiene permiso para usar el micrófono. Sigue los pasos de tu navegador:',
      steps: {
        chrome:  ['Pulsa el icono 🔒 (candado) en la barra de direcciones', 'Selecciona "Configuración del sitio"', 'Cambia "Micrófono" a "Permitir"', 'Recarga la página y vuelve a intentarlo'],
        edge:    ['Pulsa el icono 🔒 en la barra de direcciones', 'Pulsa "Permisos de este sitio"', 'Cambia "Micrófono" a "Permitir"', 'Recarga la página'],
        firefox: ['Pulsa el icono 🔒 en la barra de direcciones', 'Pulsa la "x" junto a "Bloqueado temporalmente" en Micrófono', 'Recarga la página y permite el acceso esta vez'],
        safari:  ['Abre el menú Safari → Ajustes → Sitios web', 'En la barra lateral selecciona "Micrófono"', 'Cambia el permiso de este sitio a "Permitir"', 'Recarga la página'],
        ios:     ['Abre Ajustes del iPhone/iPad', 'Pulsa Safari → Cámara o Micrófono', 'Asegúrate de que está en "Preguntar" o "Permitir"', 'Vuelve a la página y recarga (tira hacia abajo)'],
        android: ['Mantén pulsado el icono de Chrome', 'Pulsa "Información de la aplicación" → "Permisos"', 'Activa "Micrófono"', 'Vuelve a la página y recarga'],
        brave:   ['Pulsa el icono del escudo 🦁 en la barra de direcciones', 'Desactiva "Bloquear scripts" para este sitio', 'Recarga la página', 'Acepta el permiso de micrófono cuando lo pida'],
        default: ['Busca el icono de candado en la barra de direcciones', 'Permite el micrófono para este sitio', 'Recarga la página']
      }
    },
    'mic-blocked-system': {
      title: '🔒 Micrófono bloqueado por el sistema',
      lead: 'El sistema operativo no permite que el navegador use el micrófono:',
      steps: {
        ios:     ['Ajustes → Privacidad y seguridad → Micrófono', 'Activa el interruptor para Safari/Chrome', 'Vuelve a la app y recarga'],
        android: ['Ajustes → Aplicaciones → tu navegador', 'Permisos → Micrófono → Permitir', 'Vuelve a la app y recarga'],
        default: ['Ajustes del sistema → Privacidad → Micrófono', 'Permite el acceso a tu navegador', 'Recarga la página']
      }
    },
    'sr-not-supported': {
      title: '❌ Reconocimiento de voz no disponible',
      lead: 'Tu navegador actual no soporta el reconocimiento de voz. Esta función requiere un navegador compatible:',
      steps: {
        firefox: ['Firefox no soporta el reconocimiento de voz aún', 'Para grabar tu voz, abre la página en <strong>Chrome</strong>, <strong>Edge</strong> o <strong>Safari</strong>', 'El resto de funciones (escuchar, traducir) sí funcionan en Firefox'],
        brave:   ['Brave bloquea el reconocimiento de voz por privacidad', 'Pulsa el escudo 🦁 → desactiva "Bloquear scripts"', 'O abre la página en <strong>Chrome</strong> o <strong>Edge</strong>'],
        default: ['Abre esta página en <strong>Chrome</strong>, <strong>Edge</strong> o <strong>Safari</strong>', 'En móvil, Chrome para Android o Safari iOS funcionan perfectamente']
      }
    },
    'sr-network': {
      title: '📡 Error de red en el reconocimiento de voz',
      lead: 'El reconocimiento de voz necesita conexión a Internet con acceso a los servidores de voz. Esto suele fallar en redes corporativas (academias, hospitales, etc.) que bloquean ciertas APIs:',
      steps: {
        default: [
          'Comprueba que tienes conexión a Internet',
          'Si estás en un <strong>WiFi corporativo</strong> (academia, oficina, hospital): el firewall puede estar bloqueando los servidores de voz de Google',
          'Solución: conecta el móvil a tu red de datos y haz <em>tethering</em> al dispositivo',
          'Otra opción: usar la app fuera de la red corporativa'
        ]
      }
    },
    'sr-no-speech': {
      title: '🔇 No se detectó voz',
      lead: 'No se ha detectado ningún sonido durante la grabación:',
      steps: {
        default: [
          'Asegúrate de hablar lo suficientemente alto y claro',
          'Acércate más al micrófono (a 20–30 cm)',
          'Comprueba que el micrófono no esté silenciado físicamente',
          'En portátiles, comprueba que has elegido el micrófono correcto en los ajustes',
          'Inténtalo de nuevo'
        ]
      }
    },
    'tts-not-supported': {
      title: '🔊 Síntesis de voz no disponible',
      lead: 'Tu navegador no puede reproducir audio TTS:',
      steps: {
        default: ['Abre la página en <strong>Chrome</strong>, <strong>Edge</strong>, <strong>Safari</strong> o <strong>Firefox</strong>', 'Si ya estás usando uno de esos, recarga la página']
      }
    },
    'media-not-supported': {
      title: '⚠️ Acceso a medios no disponible',
      lead: 'Tu navegador no soporta el acceso a la cámara/micrófono. Esto suele ocurrir cuando:',
      steps: {
        default: [
          'Estás abriendo el archivo localmente (file://) en lugar de un servidor — necesitas <strong>HTTPS</strong>',
          'Tu navegador es muy antiguo — actualízalo',
          'Estás en modo incógnito con permisos restrictivos',
          'Solución: abre la página desde su URL pública (https://...)'
        ]
      }
    }
  },

  en: {
    'mic-not-allowed': {
      title: '🚫 Microphone permission denied',
      lead: 'Your browser is not allowed to use the microphone. Follow the steps for your browser:',
      steps: {
        chrome:  ['Click the 🔒 (lock) icon in the address bar', 'Select "Site settings"', 'Set "Microphone" to "Allow"', 'Reload the page and try again'],
        edge:    ['Click the 🔒 icon in the address bar', 'Click "Permissions for this site"', 'Set "Microphone" to "Allow"', 'Reload the page'],
        firefox: ['Click the 🔒 icon in the address bar', 'Click the "x" next to "Temporarily blocked" for Microphone', 'Reload the page and allow this time'],
        safari:  ['Open Safari menu → Settings → Websites', 'Select "Microphone" in the sidebar', 'Change permission for this site to "Allow"', 'Reload the page'],
        ios:     ['Open iPhone/iPad Settings', 'Tap Safari → Camera or Microphone', 'Make sure it is set to "Ask" or "Allow"', 'Return to the page and pull down to reload'],
        android: ['Long-press the Chrome icon', 'Tap "App info" → "Permissions"', 'Enable "Microphone"', 'Return to the page and reload'],
        brave:   ['Click the shield icon 🦁 in the address bar', 'Disable "Block Scripts" for this site', 'Reload the page', 'Accept the microphone permission when asked'],
        default: ['Look for the lock icon in the address bar', 'Allow microphone for this site', 'Reload the page']
      }
    },
    'mic-blocked-system': {
      title: '🔒 Microphone blocked by system',
      lead: 'The operating system is preventing the browser from using the microphone:',
      steps: {
        ios:     ['Settings → Privacy & Security → Microphone', 'Enable the toggle for Safari/Chrome', 'Return to the app and reload'],
        android: ['Settings → Apps → your browser', 'Permissions → Microphone → Allow', 'Return to the app and reload'],
        default: ['System Settings → Privacy → Microphone', 'Allow access to your browser', 'Reload the page']
      }
    },
    'sr-not-supported': {
      title: '❌ Speech recognition not available',
      lead: 'Your current browser does not support speech recognition. This feature requires a compatible browser:',
      steps: {
        firefox: ['Firefox does not yet support speech recognition', 'To record your voice, open the page in <strong>Chrome</strong>, <strong>Edge</strong> or <strong>Safari</strong>', 'All other features (listening, translation) still work in Firefox'],
        brave:   ['Brave blocks speech recognition for privacy', 'Click the shield 🦁 → disable "Block Scripts"', 'Or open the page in <strong>Chrome</strong> or <strong>Edge</strong>'],
        default: ['Open this page in <strong>Chrome</strong>, <strong>Edge</strong> or <strong>Safari</strong>', 'On mobile, Chrome for Android or Safari on iOS work perfectly']
      }
    },
    'sr-network': {
      title: '📡 Speech recognition network error',
      lead: 'Speech recognition needs internet access to voice servers. This often fails on corporate networks (academies, hospitals, etc.) that block certain APIs:',
      steps: {
        default: [
          'Check that you have internet connection',
          'If you are on a <strong>corporate WiFi</strong> (academy, office, hospital): the firewall may be blocking Google voice servers',
          'Solution: connect your phone to mobile data and tether the device',
          'Another option: use the app outside the corporate network'
        ]
      }
    },
    'sr-no-speech': {
      title: '🔇 No speech detected',
      lead: 'No sound was detected during recording:',
      steps: {
        default: [
          'Make sure you speak loud and clear enough',
          'Move closer to the microphone (20–30 cm away)',
          'Check that the microphone is not physically muted',
          'On laptops, check that you have selected the correct microphone in settings',
          'Try again'
        ]
      }
    },
    'tts-not-supported': {
      title: '🔊 Text-to-speech not available',
      lead: 'Your browser cannot play TTS audio:',
      steps: {
        default: ['Open the page in <strong>Chrome</strong>, <strong>Edge</strong>, <strong>Safari</strong> or <strong>Firefox</strong>', 'If you are already using one of those, reload the page']
      }
    },
    'media-not-supported': {
      title: '⚠️ Media access not available',
      lead: 'Your browser does not support camera/microphone access. This usually happens when:',
      steps: {
        default: [
          'You are opening the file locally (file://) instead of a server — you need <strong>HTTPS</strong>',
          'Your browser is too old — update it',
          'You are in incognito mode with restrictive permissions',
          'Solution: open the page from its public URL (https://...)'
        ]
      }
    }
  }
};

function getBrowserKey() {
  if (isIOS && (isSafari || isChrome)) return 'ios';
  if (isAndroid) return 'android';
  if (isBrave)   return 'brave';
  if (isEdge)    return 'edge';
  if (isFirefox) return 'firefox';
  if (isSafari)  return 'safari';
  if (isChrome)  return 'chrome';
  return 'default';
}

function showErrorHelp(errorKey) {
  const data = (ERROR_HELP[lang] && ERROR_HELP[lang][errorKey]) || ERROR_HELP.en[errorKey];
  if (!data) return;

  const browserKey = getBrowserKey();
  const steps = data.steps[browserKey] || data.steps.default || data.steps.chrome;
  const browserName = getBrowserName();

  $('errorTitle').textContent = data.title;
  $('errorBrowser').textContent = `${lang === 'es' ? 'Detectado' : 'Detected'}: ${browserName}`;
  $('errorLead').innerHTML = data.lead;
  $('errorSteps').innerHTML = steps.map((s, i) =>
    `<li><span class="step-num">${i + 1}</span><span class="step-text">${s}</span></li>`
  ).join('');

  $('errorModal').classList.add('visible');
}

function closeErrorModal() {
  $('errorModal').classList.remove('visible');
}

function showHelpMenu() {
  $('helpMenuModal').classList.add('visible');
}
function closeHelpMenu() {
  $('helpMenuModal').classList.remove('visible');
}

// ── BROWSER DETECTION & FEATURE SUPPORT ────────────────
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const ua = navigator.userAgent;

const isIOS     = /iPhone|iPad|iPod/i.test(ua) || (/Mac/.test(ua) && navigator.maxTouchPoints > 1);
const isAndroid = /Android/i.test(ua);
const isFirefox = /Firefox/i.test(ua);
const isEdge    = /Edg\//i.test(ua);
const isOpera   = /OPR\//i.test(ua);
const isSafari  = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua) && !isEdge && !isOpera;
const isChrome  = /Chrome/i.test(ua) && !isEdge && !isOpera;
// Brave detection: only async via navigator.brave.isBrave()
let isBrave = false;
if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
  navigator.brave.isBrave().then(function(v) { isBrave = !!v; checkSpeechRecognitionSupport(); }).catch(function() {});
}

function getBrowserName() {
  if (isBrave)   return 'Brave';
  if (isEdge)    return 'Edge';
  if (isOpera)   return 'Opera';
  if (isFirefox) return 'Firefox';
  if (isSafari)  return 'Safari';
  if (isChrome)  return 'Chrome';
  return lang === 'es' ? 'tu navegador' : 'your browser';
}

// Show a non-blocking banner when speech recognition isn't available
function checkSpeechRecognitionSupport() {
  if (SR && !isFirefox && !isBrave) return; // works fine

  const banner = document.getElementById('compatBanner');
  if (!banner) return;

  let msg, errKey;
  if (isFirefox) {
    errKey = 'sr-not-supported';
    msg = lang === 'es'
      ? `⚠️ <strong>Firefox</strong> no soporta el reconocimiento de voz. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">Ver soluciones</button>`
      : `⚠️ <strong>Firefox</strong> does not support speech recognition. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">See solutions</button>`;
  } else if (isBrave) {
    errKey = 'sr-not-supported';
    msg = lang === 'es'
      ? `⚠️ <strong>Brave</strong> bloquea el reconocimiento de voz. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">Cómo activarlo</button>`
      : `⚠️ <strong>Brave</strong> blocks speech recognition. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">How to enable it</button>`;
  } else if (!SR) {
    errKey = 'sr-not-supported';
    msg = lang === 'es'
      ? `⚠️ Tu navegador no soporta reconocimiento de voz. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">Ver soluciones</button>`
      : `⚠️ Your browser does not support speech recognition. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">See solutions</button>`;
  }

  if (msg) {
    banner.innerHTML = msg + ' <button class="banner-close" onclick="this.parentElement.style.display=\'none\'">×</button>';
    banner.style.display = 'block';
  }
}

// Helper: render error message with a "Ver solución" / "See solution" link
function errorWithHelp(message, errorKey) {
  const linkLabel = lang === 'es' ? 'Ver solución' : 'See solution';
  return `${message} <button class="error-help-btn" onclick="showErrorHelp('${errorKey}')">❓ ${linkLabel}</button>`;
}

let recognition  = null;
let isRecording  = false;
let accumulated  = '';
let restartTimer = null;
let micGranted   = false;

function buildRecognition() {
  if (!SR) return null;
  const r = new SR();
  r.lang             = 'en-US';
  r.interimResults   = true;
  r.continuous       = false;
  r.maxAlternatives  = 1;

  r.onresult = e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) accumulated += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    const live = (accumulated + interim).trim();
    $('youSaid').textContent = live || T('listening');
    $('transcriptBox').classList.add('visible');
  };

  r.onerror = e => {
    clearTimeout(restartTimer);
    if (e.error === 'no-speech') {
      if (isRecording) restartTimer = setTimeout(safeStart, 400);
      return;
    }
    if (e.error === 'aborted') return;
    isRecording = false;
    setBtnStopped();

    let msg, errKey;
    if (e.error === 'not-allowed') {
      msg = isIOS ? T('micDeniedIOS') : T('micDenied');
      errKey = 'mic-not-allowed';
    } else if (e.error === 'network') {
      msg = T('networkError');
      errKey = 'sr-network';
    } else if (e.error === 'service-not-allowed') {
      msg = T('notSupported');
      errKey = 'sr-not-supported';
    } else {
      msg = '❌ ' + e.error;
      errKey = 'sr-not-supported';
    }
    $('youSaid').innerHTML = errorWithHelp(msg, errKey);
    $('transcriptBox').classList.add('visible');
  };

  r.onend = () => {
    clearTimeout(restartTimer);
    if (isRecording) {
      restartTimer = setTimeout(safeStart, 300);
      return;
    }
    setBtnStopped();
    const final = accumulated.trim();
    if (final) showComparison(final);
    else if ($('youSaid').textContent.startsWith('🎤')) {
      $('youSaid').innerHTML = errorWithHelp(T('nothingDetected'), 'sr-no-speech');
    }
  };

  return r;
}

function safeStart() {
  if (!recognition) return;
  try { recognition.start(); } catch(e) {
    if (!String(e.message).includes('already')) console.warn('SR:', e.message);
  }
}

function setBtnStopped() {
  $('btnRecord').classList.remove('recording');
  $('recordBtnText').textContent = T('recAgain');
}

// Permission modal
function openMicModal() {
  $('micModalText').textContent = isIOS ? T('micTextIOS') : T('micText');
  $('micModal').classList.add('visible');
}
function closeMicModal() { $('micModal').classList.remove('visible'); }

async function checkMicSilently() {
  if (navigator.permissions && navigator.permissions.query) {
    try {
      const r = await navigator.permissions.query({ name: 'microphone' });
      return r.state === 'granted';
    } catch (_) { return false; }
  }
  return false;
}

async function toggleRecording() {
  if (!SR) {
    $('youSaid').innerHTML = errorWithHelp(T('notSupported'), 'sr-not-supported');
    $('transcriptBox').classList.add('visible');
    return;
  }
  if (isRecording) { stopRecording(); return; }
  const granted = micGranted || await checkMicSilently();
  if (granted) { micGranted = true; startRecording(); }
  else openMicModalFor('preset');
}

function startRecording() {
  accumulated  = '';
  isRecording  = true;
  clearTimeout(restartTimer);

  $('youSaid').textContent   = T('listening');
  $('wordComparison').innerHTML = '';
  $('tipsList').innerHTML    = '';
  $('comparisonRow').style.display = 'none';
  $('tipsRow').style.display       = 'none';
  $('scoreWrap').style.display     = 'none';
  $('scoreBar').style.width        = '0%';
  $('transcriptBox').classList.add('visible');
  $('btnRecord').classList.add('recording');
  $('recordBtnText').textContent = T('stopRec');

  try { recognition && recognition.abort(); } catch(_) {}
  recognition  = buildRecognition();
  restartTimer = setTimeout(safeStart, 250);
}

function stopRecording() {
  isRecording = false;
  clearTimeout(restartTimer);
  try { recognition && recognition.stop(); } catch(_) {}
  setBtnStopped();
  const final = accumulated.trim();
  if (final) showComparison(final);
}

function resetRecording() {
  isRecording = false;
  clearTimeout(restartTimer);
  try { recognition && recognition.abort(); } catch(_) {}
  recognition = null; accumulated = '';
  $('transcriptBox').classList.remove('visible');
  $('youSaid').textContent         = '—';
  $('wordComparison').innerHTML    = '';
  $('tipsList').innerHTML          = '';
  $('comparisonRow').style.display = 'none';
  $('tipsRow').style.display       = 'none';
  $('scoreWrap').style.display     = 'none';
  $('btnRecord').classList.remove('recording');
  $('recordBtnText').textContent   = T('startRec');
}

// ── SCORING ────────────────────────────────────────────
const STOP = new Set([
  'a','an','the','i','is','it','in','of','to','and','or','but',
  'be','by','for','on','at','do','not','as','so','if','my','we',
  'he','she','they','you','can','are','was','has','had','this',
  'that','with','from','his','her','its','our','your','their',
  'have','will','would','could','should','may','been','were',
  'there','which','who','what','how','when','where','yes','no',
  'very','just','also','up','out','about','than','then','into',
  'only','more','some','one','two','three','first','second',
  'third','fourth','fifth','sixth'
]);

function norm(str) { return str.toLowerCase().replace(/[^a-z\s]/g, '').trim(); }

function showComparison(transcript) {
  const correctText  = questions[current].a.en;
  const userWords    = norm(transcript).split(/\s+/).filter(Boolean);
  const correctWords = norm(correctText).split(/\s+/).filter(Boolean);
  const correctSet   = new Set(correctWords);
  const userSet      = new Set(userWords);

  // You said
  $('youSaid').innerHTML = userWords.map(w =>
    `<span class="${correctSet.has(w) ? 'word-ok' : 'word-wrong'}">${w}</span>`
  ).join(' ') || '—';

  // Correct answer with highlights
  $('wordComparison').innerHTML = correctWords.map(w =>
    `<span class="${userSet.has(w) ? 'word-ok' : ''}">${w}</span>`
  ).join(' ');
  $('comparisonRow').style.display = 'block';

  // Score
  const keyWords = correctWords.filter(w => !STOP.has(w));
  const matched  = keyWords.filter(w => userSet.has(w));
  const score    = keyWords.length ? Math.round((matched.length / keyWords.length) * 100) : 0;

  const cls   = score >= 75 ? 'great' : score >= 45 ? 'good' : 'low';
  const emoji = score >= 75 ? '🌟' : score >= 45 ? '👍' : '💪';

  $('scoreWrap').style.display = 'block';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const bar = $('scoreBar');
    bar.className       = 'score-bar-inner score-' + cls;
    bar.style.width     = score + '%';
    $('scoreText').className   = 'score-text ' + cls;
    $('scoreText').textContent = `${emoji} ${score}% — ${T(cls)}`;
  }));

  // Tips
  const missed = keyWords.filter(w => !userSet.has(w) && hints[w]).slice(0, 6);
  if (missed.length) {
    $('tipsList').innerHTML = missed.map(w =>
      `<li>${T('pronouncedAs')(w)} <em>${hints[w]}</em></li>`
    ).join('');
    $('tipsRow').style.display = 'block';
  } else {
    $('tipsRow').style.display = 'none';
  }
}

// ════════════════════════════════════════════════════════
//  MODE SWITCHING
// ════════════════════════════════════════════════════════
let currentMode = 'home';

function setMode(mode) {
  currentMode = mode;

  // Stop any ongoing audio/recording across modes
  stopSpeaking();
  resetRecording();
  if (typeof resetFreeRecording === 'function') resetFreeRecording();
  if (typeof resetPronRecording === 'function') resetPronRecording();

  // Update sections — hide all, show only the one we want
  document.querySelectorAll('.mode-section').forEach(function(s) { s.classList.remove('active'); });
  if (mode === 'home')          $('modeHome').classList.add('active');
  if (mode === 'preset')        $('modePreset').classList.add('active');
  if (mode === 'free')          $('modeFree').classList.add('active');
  if (mode === 'pronunciation') $('modePronunciation').classList.add('active');

  // Show/hide the active-mode bar (back button + mini tabs) and speed
  const bar = $('activeModeBar');
  const speedRow = $('speedRow');
  if (mode === 'home') {
    bar.style.display = 'none';
    speedRow.style.display = 'none';
  } else {
    bar.style.display = 'flex';
    speedRow.style.display = 'flex';
  }

  // Update mini tabs to highlight current mode
  document.querySelectorAll('.mode-mini-tab').forEach(function(b) {
    b.classList.toggle('active', b.dataset.mode === mode);
  });

  // Scroll to top when switching modes
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ════════════════════════════════════════════════════════
//  FREE MODE — user-defined Q&A
// ════════════════════════════════════════════════════════
let freeQuestionText  = '';
let freeAnswerText    = '';
let freeAnswerVisible = false;

let freeRecognition = null;
let freeIsRecording = false;
let freeAccumulated = '';
let freeRestartTimer = null;

function loadFreeQuestion() {
  const q = $('freeQuestion').value.trim();
  const a = $('freeAnswer').value.trim();
  if (!q || !a) { alert(T('fillBoth')); return; }

  freeQuestionText = q;
  freeAnswerText   = a;
  freeAnswerVisible = false;

  $('freeQuestionText').textContent = q;
  $('freeAnswerText').innerHTML = splitSentences(a).map(s => `<p>${s}</p>`).join('');
  $('freeAnswerBox').classList.remove('visible');
  $('freeShowText').textContent = T('showA');

  resetFreeRecording();
  $('freePractice').style.display = 'block';
  $('freePractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function speakFreeQuestion() { if (freeQuestionText) speak(freeQuestionText, $('freeBtnQ')); }
function speakFreeAnswer()   { if (freeAnswerText)   speak(freeAnswerText,   $('freeBtnA')); }

function toggleFreeAnswer() {
  freeAnswerVisible = !freeAnswerVisible;
  $('freeAnswerBox').classList.toggle('visible', freeAnswerVisible);
  $('freeShowText').textContent = freeAnswerVisible ? T('hideA') : T('showA');
}

function resetFreeMode() {
  $('freeQuestion').value = '';
  $('freeAnswer').value = '';
  freeQuestionText = ''; freeAnswerText = '';
  $('freePractice').style.display = 'none';
  resetFreeRecording();
}

// Free mode recording
function buildFreeRecognition() {
  if (!SR) return null;
  const r = new SR();
  r.lang = 'en-US'; r.interimResults = true; r.continuous = false; r.maxAlternatives = 1;

  r.onresult = e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) freeAccumulated += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    const live = (freeAccumulated + interim).trim();
    $('freeYouSaid').textContent = live || T('listening');
    $('freeTranscriptBox').classList.add('visible');
  };

  r.onerror = e => {
    clearTimeout(freeRestartTimer);
    if (e.error === 'no-speech') {
      if (freeIsRecording) freeRestartTimer = setTimeout(freeSafeStart, 400);
      return;
    }
    if (e.error === 'aborted') return;
    freeIsRecording = false;
    setFreeBtnStopped();
    let msg, errKey;
    if (e.error === 'not-allowed') {
      msg = isIOS ? T('micDeniedIOS') : T('micDenied');
      errKey = 'mic-not-allowed';
    } else if (e.error === 'network') {
      msg = T('networkError');
      errKey = 'sr-network';
    } else {
      msg = '❌ ' + e.error;
      errKey = 'sr-not-supported';
    }
    $('freeYouSaid').innerHTML = errorWithHelp(msg, errKey);
  };

  r.onend = () => {
    clearTimeout(freeRestartTimer);
    if (freeIsRecording) {
      freeRestartTimer = setTimeout(freeSafeStart, 300);
      return;
    }
    setFreeBtnStopped();
    const final = freeAccumulated.trim();
    if (final) showFreeComparison(final);
    else if ($('freeYouSaid').textContent.startsWith('🎤')) {
      $('freeYouSaid').innerHTML = errorWithHelp(T('nothingDetected'), 'sr-no-speech');
    }
  };
  return r;
}

function freeSafeStart() {
  if (!freeRecognition) return;
  try { freeRecognition.start(); } catch(e) {
    if (!String(e.message).includes('already')) console.warn('Free SR:', e.message);
  }
}

function setFreeBtnStopped() {
  $('freeBtnRecord').classList.remove('recording');
  $('freeRecordText').textContent = T('recAgain');
}

async function toggleFreeRecording() {
  if (!SR) {
    $('freeYouSaid').innerHTML = errorWithHelp(T('notSupported'), 'sr-not-supported');
    $('freeTranscriptBox').classList.add('visible');
    return;
  }
  if (freeIsRecording) { stopFreeRecording(); return; }
  const granted = micGranted || await checkMicSilently();
  if (granted) { micGranted = true; startFreeRecording(); }
  else openMicModalFor('free');
}

function startFreeRecording() {
  freeAccumulated = '';
  freeIsRecording = true;
  clearTimeout(freeRestartTimer);

  $('freeYouSaid').textContent = T('listening');
  $('freeWordComparison').innerHTML = '';
  $('freeComparisonRow').style.display = 'none';
  $('freeScoreWrap').style.display = 'none';
  $('freeScoreBar').style.width = '0%';
  $('freeTranscriptBox').classList.add('visible');
  $('freeBtnRecord').classList.add('recording');
  $('freeRecordText').textContent = T('stopRec');

  try { freeRecognition && freeRecognition.abort(); } catch(_) {}
  freeRecognition = buildFreeRecognition();
  freeRestartTimer = setTimeout(freeSafeStart, 250);
}

function stopFreeRecording() {
  freeIsRecording = false;
  clearTimeout(freeRestartTimer);
  try { freeRecognition && freeRecognition.stop(); } catch(_) {}
  setFreeBtnStopped();
  const final = freeAccumulated.trim();
  if (final) showFreeComparison(final);
}

function resetFreeRecording() {
  freeIsRecording = false;
  clearTimeout(freeRestartTimer);
  try { freeRecognition && freeRecognition.abort(); } catch(_) {}
  freeRecognition = null;
  freeAccumulated = '';
  $('freeTranscriptBox').classList.remove('visible');
  $('freeYouSaid').textContent = '—';
  $('freeWordComparison').innerHTML = '';
  $('freeComparisonRow').style.display = 'none';
  $('freeScoreWrap').style.display = 'none';
  $('freeBtnRecord').classList.remove('recording');
  $('freeRecordText').textContent = T('startRec');
}

function showFreeComparison(transcript) {
  const userWords    = norm(transcript).split(/\s+/).filter(Boolean);
  const correctWords = norm(freeAnswerText).split(/\s+/).filter(Boolean);
  const correctSet   = new Set(correctWords);
  const userSet      = new Set(userWords);

  $('freeYouSaid').innerHTML = userWords.map(w =>
    `<span class="${correctSet.has(w) ? 'word-ok' : 'word-wrong'}">${w}</span>`
  ).join(' ') || '—';

  $('freeWordComparison').innerHTML = correctWords.map(w =>
    `<span class="${userSet.has(w) ? 'word-ok' : ''}">${w}</span>`
  ).join(' ');
  $('freeComparisonRow').style.display = 'block';

  const keyWords = correctWords.filter(w => !STOP.has(w));
  const matched  = keyWords.filter(w => userSet.has(w));
  const score    = keyWords.length ? Math.round((matched.length / keyWords.length) * 100) : 0;

  const cls   = score >= 75 ? 'great' : score >= 45 ? 'good' : 'low';
  const emoji = score >= 75 ? '🌟' : score >= 45 ? '👍' : '💪';

  $('freeScoreWrap').style.display = 'block';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const bar = $('freeScoreBar');
    bar.className = 'score-bar-inner score-' + cls;
    bar.style.width = score + '%';
    $('freeScoreText').className = 'score-text ' + cls;
    $('freeScoreText').textContent = `${emoji} ${score}% — ${T(cls)}`;
  }));
}


// ════════════════════════════════════════════════════════
//  PRONUNCIATION MODE
// ════════════════════════════════════════════════════════

// Easy Spanish-style pronunciation map for common English sounds
const SPANISH_PRON_MAP = [
  // digraphs first (longest match)
  ['tion',  'shon'], ['sion',  'shon'],
  ['ought', 'ot'],   ['augh', 'af'],
  ['ough',  'of'],   ['eigh', 'ei'],
  ['tch',   'ch'],   ['ph',   'f'],
  ['th',    'z'],    ['sh',   'sh'],
  ['ch',    'ch'],   ['ck',   'k'],
  ['wh',    'gu'],   ['qu',   'cu'],
  ['ng',    'ng'],
  // vowels
  ['ee',    'i'],    ['ea',   'i'],
  ['oo',    'u'],    ['ou',   'au'],
  ['ai',    'ei'],   ['ay',   'ei'],
  ['oa',    'ou'],   ['oi',   'oi'],
  ['oy',    'oi'],   ['ie',   'ai'],
  // single letters
  ['a',     'a'],    ['e',    'e'],
  ['i',     'i'],    ['o',    'o'],
  ['u',     'a'],    ['y',    'i'],
  ['j',     'y'],    ['v',    'v'],
  ['w',     'u'],    ['z',    's'],
  ['h',     ''],     ['c',    'k'],
  ['x',     'ks'],   ['r',    'r'],
];

let pronCurrentText = '';
let pronRecognition = null;
let pronIsRecording = false;
let pronAccumulated = '';
let pronRestartTimer = null;

// Build "easy" Spanish-style pronunciation for any input
function buildEasyPron(text) {
  let result = text.toLowerCase();
  // Apply rules in order
  for (const [from, to] of SPANISH_PRON_MAP) {
    result = result.split(from).join(to);
  }
  // Clean up doubles
  result = result.replace(/(.)\1+/g, '$1');
  return result;
}

// IPA-style phonetic for known words; for unknowns, generate a phonetic-like form
function buildPhonetic(text) {
  const lower = text.toLowerCase().trim();
  // If single known word, use the dictionary
  if (hints[lower]) return '/' + hints[lower].toLowerCase().replace(/-/g, ' · ') + '/';

  // For sentences, build word by word
  const words = lower.split(/\s+/);
  if (words.length > 1) {
    const parts = words.map(w => {
      const clean = w.replace(/[^a-z]/g, '');
      return hints[clean] ? hints[clean].toLowerCase().replace(/-/g, '·') : clean;
    });
    return '/' + parts.join(' ') + '/';
  }
  return '/' + lower + '/';
}

function checkPronunciation() {
  const text = $('pronInput').value.trim();
  if (!text) { alert(T('enterText')); return; }

  pronCurrentText = text;
  $('pronWord').textContent     = text;
  $('pronPhonetic').textContent = buildPhonetic(text);
  $('pronEasy').innerHTML       = `${T('easyTip')} <strong>${buildEasyPron(text)}</strong>`;

  $('pronResult').style.display = 'block';
  resetPronRecording();
  saveRecentWord(text);
  renderRecentWords();

  $('pronResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function speakPronInput() {
  if (pronCurrentText) speak(pronCurrentText, $('pronBtnSpeak'));
}

// Recent words storage
function saveRecentWord(word) {
  let recent = JSON.parse(localStorage.getItem('gc_recent_words') || '[]');
  recent = recent.filter(w => w.toLowerCase() !== word.toLowerCase());
  recent.unshift(word);
  recent = recent.slice(0, 10);
  localStorage.setItem('gc_recent_words', JSON.stringify(recent));
}

function renderRecentWords() {
  const recent = JSON.parse(localStorage.getItem('gc_recent_words') || '[]');
  if (!recent.length) {
    $('pronRecent').style.display = 'none';
    return;
  }
  $('pronRecent').style.display = 'block';
  $('pronRecentList').innerHTML = recent.map(w =>
    `<button class="pron-recent-item" onclick="loadRecentWord('${w.replace(/'/g, "\\'")}')">${w}</button>`
  ).join('');
}

function loadRecentWord(word) {
  $('pronInput').value = word;
  checkPronunciation();
}

// Pronunciation mode recording (different feedback than the others)
function buildPronRecognition() {
  if (!SR) return null;
  const r = new SR();
  r.lang = 'en-US'; r.interimResults = true; r.continuous = false; r.maxAlternatives = 1;

  r.onresult = e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) pronAccumulated += e.results[i][0].transcript + ' ';
      else interim += e.results[i][0].transcript;
    }
    const live = (pronAccumulated + interim).trim();
    $('pronYouSaid').textContent = live || T('listening');
    $('pronTranscriptBox').classList.add('visible');
  };

  r.onerror = e => {
    clearTimeout(pronRestartTimer);
    if (e.error === 'no-speech') {
      if (pronIsRecording) pronRestartTimer = setTimeout(pronSafeStart, 400);
      return;
    }
    if (e.error === 'aborted') return;
    pronIsRecording = false;
    setPronBtnStopped();
    let msg, errKey;
    if (e.error === 'not-allowed') {
      msg = isIOS ? T('micDeniedIOS') : T('micDenied');
      errKey = 'mic-not-allowed';
    } else if (e.error === 'network') {
      msg = T('networkError');
      errKey = 'sr-network';
    } else {
      msg = '❌ ' + e.error;
      errKey = 'sr-not-supported';
    }
    $('pronYouSaid').innerHTML = errorWithHelp(msg, errKey);
  };

  r.onend = () => {
    clearTimeout(pronRestartTimer);
    if (pronIsRecording) {
      pronRestartTimer = setTimeout(pronSafeStart, 300);
      return;
    }
    setPronBtnStopped();
    const final = pronAccumulated.trim();
    if (final) showPronFeedback(final);
    else if ($('pronYouSaid').textContent.startsWith('🎤')) {
      $('pronYouSaid').innerHTML = errorWithHelp(T('nothingDetected'), 'sr-no-speech');
    }
  };
  return r;
}

function pronSafeStart() {
  if (!pronRecognition) return;
  try { pronRecognition.start(); } catch(e) {
    if (!String(e.message).includes('already')) console.warn('Pron SR:', e.message);
  }
}

function setPronBtnStopped() {
  $('pronBtnRecord').classList.remove('recording');
  $('pronRecordText').textContent = T('recAgain');
}

async function togglePronRecording() {
  if (!SR) {
    $('pronYouSaid').innerHTML = errorWithHelp(T('notSupported'), 'sr-not-supported');
    $('pronTranscriptBox').classList.add('visible');
    return;
  }
  if (pronIsRecording) { stopPronRecording(); return; }
  const granted = micGranted || await checkMicSilently();
  if (granted) { micGranted = true; startPronRecording(); }
  else openMicModalFor('pron');
}

function startPronRecording() {
  pronAccumulated = '';
  pronIsRecording = true;
  clearTimeout(pronRestartTimer);

  $('pronYouSaid').textContent = T('listening');
  $('pronFeedbackRow').style.display = 'none';
  $('pronTranscriptBox').classList.add('visible');
  $('pronBtnRecord').classList.add('recording');
  $('pronRecordText').textContent = T('stopRec');

  try { pronRecognition && pronRecognition.abort(); } catch(_) {}
  pronRecognition = buildPronRecognition();
  pronRestartTimer = setTimeout(pronSafeStart, 250);
}

function stopPronRecording() {
  pronIsRecording = false;
  clearTimeout(pronRestartTimer);
  try { pronRecognition && pronRecognition.stop(); } catch(_) {}
  setPronBtnStopped();
  const final = pronAccumulated.trim();
  if (final) showPronFeedback(final);
}

function resetPronRecording() {
  pronIsRecording = false;
  clearTimeout(pronRestartTimer);
  try { pronRecognition && pronRecognition.abort(); } catch(_) {}
  pronRecognition = null;
  pronAccumulated = '';
  $('pronTranscriptBox').classList.remove('visible');
  $('pronYouSaid').textContent = '—';
  $('pronFeedbackRow').style.display = 'none';
  $('pronBtnRecord').classList.remove('recording');
  $('pronRecordText').textContent = T('startRec');
}

// Levenshtein for short-string comparison
function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[a.length][b.length];
}

function showPronFeedback(transcript) {
  const target = norm(pronCurrentText);
  const said   = norm(transcript);

  const dist  = levenshtein(target, said);
  const maxLen = Math.max(target.length, said.length);
  const sim   = maxLen ? Math.round((1 - dist / maxLen) * 100) : 0;

  let cls, emoji, msg;
  if (sim >= 85) { cls = 'great'; emoji = '🌟'; msg = T('pronGreat'); }
  else if (sim >= 60) { cls = 'good'; emoji = '👍'; msg = T('pronClose'); }
  else { cls = 'low'; emoji = '💪'; msg = T('pronWrong'); }

  // Highlight comparison
  $('pronYouSaid').innerHTML = said
    ? `<span class="word-${sim >= 60 ? 'ok' : 'wrong'}">${said}</span>`
    : '—';

  $('pronFeedbackLabel').textContent = `${emoji} ${msg} (${sim}%)`;
  $('pronFeedbackLabel').className = 't-label ' + (cls === 'great' ? 't-correct' : cls === 'good' ? 't-tips' : 't-you');
  $('pronFeedback').innerHTML = `${T('feedbackLabel')}: <strong>${pronCurrentText}</strong> vs <strong>${said}</strong>`;
  $('pronFeedbackRow').style.display = 'block';
}


// ════════════════════════════════════════════════════════
//  Modal: which mode triggered it?
// ════════════════════════════════════════════════════════
let pendingMicMode = 'preset';
function openMicModalFor(mode) {
  pendingMicMode = mode;
  openMicModal();
}

// Wrapper that dispatches to the right starter for the active mode
async function requestMicPermission() {
  closeMicModal();
  const elId = pendingMicMode === 'free' ? 'freeYouSaid' :
               pendingMicMode === 'pron' ? 'pronYouSaid' : 'youSaid';
  const boxId = pendingMicMode === 'free' ? 'freeTranscriptBox' :
                pendingMicMode === 'pron' ? 'pronTranscriptBox' : 'transcriptBox';

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    $(elId).innerHTML = errorWithHelp(T('notSupported'), 'media-not-supported');
    $(boxId).classList.add('visible');
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(function(t) { t.stop(); });
    micGranted = true;
    if (pendingMicMode === 'free')      startFreeRecording();
    else if (pendingMicMode === 'pron') startPronRecording();
    else                                startRecording();
  } catch (err) {
    const errName = err && err.name ? err.name : '';
    let errKey = 'mic-not-allowed';
    let msg = isIOS ? T('micDeniedIOS') : T('micDenied');
    if (errName === 'NotFoundError' || errName === 'DevicesNotFoundError') {
      errKey = 'mic-blocked-system';
      msg = lang === 'es'
        ? '❌ No se ha encontrado ningún micrófono.'
        : '❌ No microphone found.';
    } else if (errName === 'NotReadableError' || errName === 'TrackStartError') {
      errKey = 'mic-blocked-system';
      msg = lang === 'es'
        ? '❌ No se puede acceder al micrófono. Otra app puede estar usándolo.'
        : '❌ Microphone is unavailable. Another app may be using it.';
    }
    $(elId).innerHTML = errorWithHelp(msg, errKey);
    $(boxId).classList.add('visible');
  }
}


// ── INIT ───────────────────────────────────────────────
// Pre-load voices
if (synth && synth.getVoices().length === 0) {
  synth.onvoiceschanged = function() { getBestVoice(); synth.onvoiceschanged = null; };
} else if (synth) {
  getBestVoice();
}

// Apply language & render
document.querySelectorAll('.lang-btn').forEach(b =>
  b.classList.toggle('active', b.dataset.lang === lang)
);
applyTranslations();
loadQuestion();
renderRecentWords();
checkSpeechRecognitionSupport();

// Pre-warm mic permission status
checkMicSilently().then(g => { micGranted = g; });
