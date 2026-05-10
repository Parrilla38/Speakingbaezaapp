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
// EXPANDED QUESTIONS LIST — to replace lines 211-331 in app.js
// Extracted comprehensively from the speaking exam document

const questions = [
  // ════════════════════════════════════════════════════
  //  🔫 WEAPONS
  // ════════════════════════════════════════════════════
  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿En qué situaciones usarías un arma?',
         en: 'In what situations would you use a weapon?' },
    a: { es: 'Usaría un arma en una situación donde mi vida está en peligro, para proteger a alguien de un atacante, o para cazar animales.',
         en: 'I would use a weapon in a situation where my life is in danger, to protect someone else from an attacker, or to hunt animals.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Qué opinas sobre el uso de las armas?',
         en: 'What do you think about the use of weapons?' },
    a: { es: 'Estoy de acuerdo con el uso de armas, pero solo en situaciones especiales. Las armas son muy importantes para defendernos y son esenciales para mantener la seguridad en la sociedad si las usamos de forma responsable.',
         en: 'I agree with the use of weapons, but only in special situations. Weapons are very important to defend ourselves and others. They are also essential to maintain security in society if we use them in a responsible way.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Estás de acuerdo o en desacuerdo con el uso de armas? (respuesta negativa)',
         en: 'Do you agree or disagree with the use of weapons? (negative answer)' },
    a: { es: 'No estoy de acuerdo con el uso de armas, porque son la causa principal de accidentes y están relacionadas con la delincuencia en nuestro país. Solo las personas entrenadas o los profesionales deberían usar armas.',
         en: 'I disagree with the use of weapons, because they are the main cause of accidents and are related to crime in our country. Only trained people or professionals should use weapons.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Deberían las armas de fuego ser legales? (a favor)',
         en: 'Should guns be legal? (in favour)' },
    a: { es: 'Sí, las armas deberían ser legales, porque si se usan correctamente, ayudan a la gente a defenderse a sí misma, a sus familias y a sus propiedades.',
         en: 'Yes, guns should be legal, because if they are used properly, they help people defend themselves, their families and their properties.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Deberían las armas de fuego ser ilegales? (en contra)',
         en: 'Should guns be illegal? (against)' },
    a: { es: 'Sí, las armas deberían ser ilegales, porque pueden ser fáciles de encontrar y usadas por la gente equivocada. Creo que las armas deberían estar bajo una regulación estricta.',
         en: 'Yes, guns should be illegal, because they can be easy to find and used by the wrong people. I believe guns should be under strict regulation.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti el arma más peligrosa? (pistola)',
         en: 'What is the most dangerous weapon for you? (gun)' },
    a: { es: 'El arma más peligrosa es una pistola, porque cualquiera puede apretar un gatillo y es un arma que puede matar a una persona en pocos segundos.',
         en: 'The most dangerous weapon is a gun, because everybody can pull a trigger and it is a weapon that can kill a person in a few seconds.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti el arma más peligrosa? (cuchillo)',
         en: 'What is the most dangerous weapon for you? (knife)' },
    a: { es: 'El arma más peligrosa es un cuchillo, porque todo el mundo tiene uno en la cocina. Los cuchillos son fáciles de usar, porque no hace falta estar entrenado para causar una herida mortal.',
         en: 'The most dangerous weapon is a knife, because everybody has one in their kitchen. Knives are easy to use, because you do not have to be trained to cause a lethal wound.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti la mejor arma? (pistola)',
         en: 'What is the best weapon for you? (pistol)' },
    a: { es: 'Para mí, la mejor arma es una pistola. Es muy útil en una situación peligrosa y es muy ligera, así que puedo llevarla fácilmente.',
         en: 'For me, the best weapon is a pistol. It is very useful in a dangerous situation and it is very light, so I can carry it easily.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti la mejor arma? (arma nuclear)',
         en: 'What is the best weapon for you? (nuclear weapon)' },
    a: { es: 'Creo que la mejor arma es un arma nuclear. Tiene una capacidad destructiva única y es esencial para prevenir un conflicto mayor.',
         en: 'I think the best weapon is a nuclear weapon. It has a unique destructive capacity and it is essential to prevent a bigger conflict.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti la mejor arma? (fusil de francotirador)',
         en: 'What is the best weapon for you? (sniper gun)' },
    a: { es: 'En mi experiencia, la mejor arma es un fusil de francotirador, porque es una de las armas más precisas y muy efectiva a larga distancia. Si la usan personas entrenadas, ayuda a evitar que otros resulten heridos.',
         en: 'In my experience, the best weapon is a sniper gun because it is one of the most precise weapons and it is very effective at long distances. If this weapon is used by trained people, it helps prevent other people from being harmed.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Qué tipo de armas puedes usar como Guardia Civil?',
         en: 'Which kinds of weapons can you use as a Civil Guard?' },
    a: { es: 'Como Guardia Civil, puedo usar una pistola, un sable, un cuchillo y una granada.',
         en: 'As a Civil Guard, I can use a pistol, a sword, a knife and a grenade.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Puedes nombrar las partes de un arma de fuego?',
         en: 'Can you name some parts of a gun?' },
    a: { es: 'Sí, las partes de un arma son: cañón, alza, punto de mira, culata, cargador, gatillo, munición, cartucho y bala.',
         en: 'Yes, the parts of a gun are: barrel, rear sight, front sight, butt, magazine, trigger, ammunition, cartridge and bullet.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Deberían la policía y los guardias civiles ir armados? (a favor)',
         en: 'Should police and civil guards be armed? (in favour)' },
    a: { es: 'Sí, deberían ir armados porque tienen que proteger a la gente y garantizar la seguridad en general. Si llevan armas, responderán mejor ante una situación peligrosa.',
         en: 'Yes, they should be armed because they have to protect people and ensure security in general. If they carry guns, they will respond better to a dangerous situation.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Deberían la policía y los guardias civiles ir armados? (en contra)',
         en: 'Should police and civil guards be armed? (against)' },
    a: { es: 'No, no deberían ir armados, porque si hay armas involucradas, la probabilidad de accidentes aumenta. Es mejor usar métodos no letales para tratar con los criminales. La mejor manera de evitar una situación peligrosa es la prevención.',
         en: 'No, they should not be armed, because if there are weapons involved, the probability of accidents increases. It is better to use non-lethal methods to deal with criminals. The best way to avoid a dangerous situation is prevention.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Crees que es importante que un guardia civil tenga un arma? (sí)',
         en: 'Do you think it is important for a civil guard to have a gun? (yes)' },
    a: { es: 'Sí, creo que es importante tener un arma en nuestro trabajo, porque es lo principal que va a protegernos de los criminales y ayuda a proteger a los demás.',
         en: 'Yes, I think it is important to have a gun in our job, because it is the main thing that is going to protect us from criminals and helps protect others.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Crees que es importante que un guardia civil tenga un arma? (no)',
         en: 'Do you think it is important for a civil guard to have a gun? (no)' },
    a: { es: 'No, no creo que sea importante que los guardias civiles tengan armas, porque podemos tratar con los criminales de manera no letal y prevenir accidentes. El uso de armas debería ser siempre el último recurso.',
         en: 'No, I do not think it is important for civil guards to have guns, because we can deal with criminals in non-lethal ways and prevent accidents from happening. The use of guns should be the last resort.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Crees que la gente necesita armas?',
         en: 'Do you think people need guns?' },
    a: { es: 'Siempre depende de la situación. Ciertos tipos de personas necesitan armas para protección personal, para su trabajo o para deporte. En general, la gente no necesita armas en su vida diaria, a menos que las circunstancias lo requieran.',
         en: 'It always depends on the situation. Certain kinds of people need guns for self-protection or for their jobs or sport. In general, people do not need guns in their daily life, unless it is required by the circumstances.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es la diferencia entre un arma y una pistola? Pon un ejemplo de cada una.',
         en: 'What is the difference between a weapon and a gun? Give an example of each one.' },
    a: { es: 'Un arma es cualquier objeto que se puede usar para hacer daño a alguien. Por ejemplo, un cuchillo: se puede usar para cortar o apuñalar a alguien. Una pistola es un tipo de arma que dispara balas. Por ejemplo, una pistola: está diseñada para hacer daño a las personas.',
         en: 'A weapon is an object that can be used to hurt someone. For example, a knife: it can be used to chop or to stab someone. A gun is a kind of weapon that shoots bullets. For example, a pistol: a gun is designed to hurt people.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: 'Describe una pistola.',
         en: 'Describe a pistol.' },
    a: { es: 'Una pistola es un arma de fuego pequeña que se puede usar con una o dos manos. Las partes de una pistola son: cañón, alza, punto de mira, cargador y gatillo, entre otras. Las pistolas las usan normalmente los guardias civiles y la policía en su trabajo.',
         en: 'A pistol is a small gun that can be used with one or two hands. The parts of a pistol are: barrel, rear sight, front sight, magazine and trigger, among others. Pistols are normally used by civil guards and police in their job.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: 'Dime 2 o 3 aspectos positivos del uso de armas.',
         en: 'Tell me 2 or 3 positive aspects about the use of guns.' },
    a: { es: 'Las armas se pueden usar para protección personal. Las armas también son útiles para la caza. Además, son esenciales para que la policía y las fuerzas de seguridad mantengan el orden.',
         en: 'Guns can be used for self-protection. Guns are also useful for hunting. They are also essential for the police and security forces to keep order.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: 'Dime 2 o 3 aspectos negativos del uso de armas.',
         en: 'Tell me 2 or 3 negative aspects about the use of guns.' },
    a: { es: 'Las armas están relacionadas con la violencia y la delincuencia. Las armas están implicadas en accidentes mortales. Además, su uso indebido puede causar consecuencias irreversibles.',
         en: 'Guns are related to violence and crime. Guns are involved in lethal accidents. Also, their misuse can cause irreversible consequences.' } },

  // ════════════════════════════════════════════════════
  //  🚨 ORGANISED CRIME & DEFINITIONS
  // ════════════════════════════════════════════════════
  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el crimen organizado?',
         en: 'What is organised crime?' },
    a: { es: 'El crimen organizado es un grupo de personas que trabajan juntas para cometer delitos graves con el fin de obtener dinero. Suelen operar en diferentes ciudades o países. Usan violencia, intimidación y corrupción para proteger sus actividades ilegales. A menudo intentan parecer un negocio legal. Trafican con drogas, armas y personas.',
         en: 'Organised crime is a group of people who work together to commit serious crimes in order to get money. They usually operate in different cities or countries. They use violence, intimidation and corruption to protect their illegal activities. They often try to look like a legal business. They traffic drugs, weapons and people.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el crimen organizado? (definición alternativa)',
         en: 'What is organised crime? (alternative definition)' },
    a: { es: 'El crimen organizado es una actividad delictiva llevada a cabo por grupos estructurados de criminales que cooperan para cometer actividades ilegales con el fin de obtener dinero, poder o influencia. Estos grupos suelen operar a nivel internacional y durante largos periodos de tiempo.',
         en: 'Organised crime is criminal activity carried out by structured groups of criminals that cooperate to commit illegal activities in order to obtain money, power or influence. These groups usually operate internationally and for long periods of time.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué delitos están relacionados con los grupos organizados?',
         en: 'What crimes are related to organised groups?' },
    a: { es: 'Algunos delitos comúnmente relacionados con grupos organizados son: tráfico de drogas, trata de seres humanos, contrabando, blanqueo de dinero, tráfico de armas, secuestro para pedir rescate, extorsión y chantaje, y falsificación de documentos.',
         en: 'Some crimes commonly related to organised groups are: drug dealing, human trafficking, smuggling, money laundering, arms trafficking, kidnapping for ransom, extortion and blackmail, and forgery and document falsification.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es la corrupción?',
         en: 'What is corruption?' },
    a: { es: 'La corrupción es un comportamiento deshonesto, especialmente por parte de personas con poder. Suele implicar soborno o fraude.',
         en: 'Corruption is dishonest behaviour, especially by people in power. It usually involves bribery or fraud.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es la intimidación?',
         en: 'What is intimidation?' },
    a: { es: 'La intimidación es el acto de asustar a alguien para hacerle hacer algo.',
         en: 'Intimidation is the act of frightening someone to make them do something.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el soborno?',
         en: 'What is bribery?' },
    a: { es: 'El soborno es el acto de dar u ofrecer dinero o regalos para hacer que alguien haga algo ilegal o deshonesto.',
         en: 'Bribery is the act of giving or offering money or gifts to make someone do something illegal or dishonest.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es la extorsión?',
         en: 'What is extortion?' },
    a: { es: 'La extorsión es un delito en el que alguien obtiene dinero o algo valioso usando amenazas o la fuerza.',
         en: 'Extortion is a crime in which someone gets money or something valuable by using threats or force.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el fraude?',
         en: 'What is fraud?' },
    a: { es: 'El fraude es un delito en el que alguien engaña a la gente para obtener dinero, por ejemplo creando empresas falsas o documentos falsos.',
         en: 'Fraud is a crime in which someone deceives people in order to get money, for example by creating fake companies or false documents.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el blanqueo de dinero?',
         en: 'What is money laundering?' },
    a: { es: 'El blanqueo de dinero es un delito en el que alguien oculta dinero obtenido ilegalmente metiéndolo en bancos o negocios para que parezca legal.',
         en: 'Money laundering is a crime in which someone hides illegally obtained money by putting it into banks or businesses so that it looks legal.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es la trata de seres humanos?',
         en: 'What is human trafficking?' },
    a: { es: 'La trata de seres humanos es un delito en el que se traslada a personas a otro lugar y se les obliga a trabajar o a prestar servicios.',
         en: 'Human trafficking is a crime in which people are moved to another place and forced to work or provide services.' } },

  // ════════════════════════════════════════════════════
  //  🦹 CRIMES & CRIMINALS
  // ════════════════════════════════════════════════════
  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué crímenes y criminales conoces?',
         en: 'What crimes and criminals do you know?' },
    a: { es: 'Algunos delitos y criminales que conozco son: robo en domicilio y ladrón, atraco y atracador, hurto en tiendas y ladrón de tiendas, carterismo y carterista, secuestro y secuestrador, tráfico de drogas y narcotraficante, chantaje y chantajista, incendio provocado y pirómano, falsificación y falsificador, y contrabando y contrabandista.',
         en: 'Some crimes and criminals I know are: burglary and burglar, mugging and mugger, shoplifting and shoplifter, pickpocketing and pickpocket, kidnapping and kidnapper, drug dealing and drug dealer, blackmail and blackmailer, arson and arsonist, forgery and forger, and smuggling and smuggler.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: 'Dime tres delitos y sus criminales.',
         en: 'Tell me three crimes and their criminals.' },
    a: { es: 'Primero, atraco y atracador: un atracador es alguien que ataca a la gente en la calle y le quita el dinero. Segundo, hurto en tiendas y ladrón de tiendas: un ladrón de tiendas es alguien que se lleva cosas de una tienda sin pagar por ellas. Tercero, secuestro y secuestrador: un secuestrador es alguien que se lleva a una persona por la fuerza y suele exigir un rescate.',
         en: 'First, mugging and mugger: a mugger is someone who attacks people in the street and takes their money. Second, shoplifting and shoplifter: a shoplifter is someone who takes things from a shop without paying for them. Third, kidnapping and kidnapper: a kidnapper is someone who takes a person by force and usually demands a ransom.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un atracador (mugger)?',
         en: 'What does a mugger do?' },
    a: { es: 'Un atracador es alguien que ataca a la gente en la calle y les quita el dinero.',
         en: 'A mugger is someone who attacks people in the street and takes their money.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un ladrón de tiendas (shoplifter)?',
         en: 'What does a shoplifter do?' },
    a: { es: 'Un ladrón de tiendas es alguien que se lleva cosas de una tienda sin pagar por ellas.',
         en: 'A shoplifter is someone who takes things from a shop without paying for them.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un secuestrador de aviones (hijacker)?',
         en: 'What does a hijacker do?' },
    a: { es: 'Un secuestrador de aviones es alguien que obliga al piloto a darle el control de un avión en mitad de un vuelo.',
         en: 'A hijacker is someone who forces the pilot to give them control of a plane in the middle of a journey.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un carterista (pickpocket)?',
         en: 'What does a pickpocket do?' },
    a: { es: 'Un carterista es alguien que saca cosas del bolsillo o del bolso de otra persona.',
         en: 'A pickpocket is someone who takes things out of somebody\'s pocket or bag.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un joyrider (ladrón de coches imprudente)?',
         en: 'What does a joyrider do?' },
    a: { es: 'Un joyrider es alguien que roba un coche y lo conduce a gran velocidad.',
         en: 'A joyrider is someone who steals a car and drives it fast.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un ladrón de viviendas (burglar)?',
         en: 'What does a burglar do?' },
    a: { es: 'Un ladrón de viviendas es alguien que entra en las casas para robar.',
         en: 'A burglar is someone who breaks into houses to steal.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el atraco (mugging)?',
         en: 'What is mugging?' },
    a: { es: 'Es un delito que consiste en atacar a la gente en la calle para quitarles el dinero.',
         en: 'It is a crime that consists of attacking people in the street to take their money.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el hurto en tiendas (shoplifting)?',
         en: 'What is shoplifting?' },
    a: { es: 'Es la acción de robar en una tienda sin pagar los artículos.',
         en: 'It is the action of stealing from a shop without paying for the items.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el secuestro de vehículos (hijacking)?',
         en: 'What is hijacking?' },
    a: { es: 'Consiste en tomar el control de un vehículo por la fuerza.',
         en: 'It consists of taking control of a vehicle by force.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el carterismo (pickpocketing)?',
         en: 'What is pickpocketing?' },
    a: { es: 'Es un delito que consiste en robar del bolsillo o del bolso de alguien.',
         en: 'It is a crime that consists of stealing from someone\'s pocket or bag.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el joyriding?',
         en: 'What is joyriding?' },
    a: { es: 'Es la acción de robar un coche y conducirlo a gran velocidad por diversión.',
         en: 'It is the action of stealing a car and driving it fast for fun.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el robo en domicilio (burglary)?',
         en: 'What is burglary?' },
    a: { es: 'Consiste en entrar en las casas para robar, normalmente cuando no hay nadie dentro.',
         en: 'Burglary is a crime that consists of breaking into a house or building in order to steal something, usually when nobody is inside.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el robo con violencia (robbery)?',
         en: 'What is robbery?' },
    a: { es: 'El robo con violencia es un delito que consiste en sustraer algo usando la fuerza o amenazas.',
         en: 'Robbery is a crime that consists of stealing using force or threats.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el hurto (theft)?',
         en: 'What is theft?' },
    a: { es: 'El hurto es el delito de robar cosas sin usar la fuerza.',
         en: 'Theft is the crime of stealing things without using force.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el vandalismo?',
         en: 'What is vandalism?' },
    a: { es: 'El vandalismo es el delito de destruir o dañar propiedades de manera intencionada.',
         en: 'Vandalism is the crime of intentionally destroying or damaging property.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el secuestro (kidnapping)?',
         en: 'What is kidnapping?' },
    a: { es: 'El secuestro es el delito de llevarse a alguien por la fuerza y normalmente exigir un rescate.',
         en: 'Kidnapping is the crime of taking someone by force and usually demanding a ransom.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el chantaje (blackmail)?',
         en: 'What is blackmail?' },
    a: { es: 'El chantaje es el delito de exigir dinero a alguien a cambio de mantener un secreto.',
         en: 'Blackmail is the crime of demanding money to keep a secret.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el asesinato (murder)?',
         en: 'What is murder?' },
    a: { es: 'El asesinato es el delito de matar a otra persona de manera intencionada y premeditada.',
         en: 'Murder is the crime of intentionally and deliberately killing another person.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el contrabando (smuggling)?',
         en: 'What is smuggling?' },
    a: { es: 'El contrabando es el delito de mover mercancías o personas de un país a otro de manera ilegal.',
         en: 'Smuggling is the crime of moving goods or people from one country to another illegally.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el tráfico de drogas (drug dealing)?',
         en: 'What is drug dealing?' },
    a: { es: 'El tráfico de drogas es el delito de vender sustancias ilegales.',
         en: 'Drug dealing is the crime of selling illegal substances.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es la falsificación (forgery)?',
         en: 'What is forgery?' },
    a: { es: 'La falsificación es el delito de crear documentos o dinero falsos.',
         en: 'Forgery is the crime of making fake documents or money.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el incendio provocado (arson)?',
         en: 'What is arson?' },
    a: { es: 'El incendio provocado es el delito de prender fuego a una propiedad de manera intencionada.',
         en: 'Arson is the crime of intentionally setting fire to property.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el exceso de velocidad (speeding)?',
         en: 'What is speeding?' },
    a: { es: 'El exceso de velocidad es la infracción de conducir por encima del límite de velocidad establecido.',
         en: 'Speeding is the offence of driving above the established speed limit.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el terrorismo?',
         en: 'What is terrorism?' },
    a: { es: 'El terrorismo es el uso de la violencia, por ejemplo poner bombas, por motivos políticos o ideológicos.',
         en: 'Terrorism is the use of violence, for example setting off bombs, for political or ideological reasons.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es la estafa (swindle)?',
         en: 'What is a swindle?' },
    a: { es: 'La estafa es el delito de engañar a alguien para quitarle su dinero.',
         en: 'A swindle is the crime of deceiving someone to take their money.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es la violación (rape)?',
         en: 'What is rape?' },
    a: { es: 'La violación es el delito de forzar a alguien a tener relaciones sexuales.',
         en: 'Rape is the crime of forcing someone to have sex.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el homicidio (homicide)?',
         en: 'What is homicide?' },
    a: { es: 'El homicidio es el delito de matar a otra persona.',
         en: 'Homicide is the crime of killing another person.' } },

  // ════════════════════════════════════════════════════
  //  🏠 BURGLARY (housing)
  // ════════════════════════════════════════════════════
  { topic: { es: '🏠 Robo en domicilio', en: '🏠 Burglary' },
    q: { es: '¿Está aumentando o disminuyendo el robo en viviendas donde vives? ¿Por qué?',
         en: 'Is burglary increasing or decreasing where you live? Why?' },
    a: { es: 'En mi opinión, el robo en viviendas está disminuyendo ligeramente donde vivo, porque muchas casas ahora tienen cámaras de seguridad, sistemas de alarma y puertas blindadas. Además, la policía ha aumentado las patrullas y la vigilancia, lo que disuade a los ladrones de cometer este delito.',
         en: 'In my opinion, burglary is slightly decreasing where I live because many houses now have security cameras, alarm systems and reinforced doors. Moreover, the police have increased patrols and surveillance, which discourages burglars from committing this crime.' } },

  { topic: { es: '🏠 Robo en domicilio', en: '🏠 Burglary' },
    q: { es: '¿Qué consejos darías a la gente para proteger su casa?',
         en: 'What advice could you give to people to protect their home?' },
    a: { es: 'La gente puede seguir varios consejos para proteger sus casas. Primero, instalar un sistema de alarma. Segundo, usar puertas resistentes y cerraduras de seguridad. Tercero, no dejar las ventanas abiertas cuando estás fuera. Cuarto, instalar cámaras de seguridad o sensores de movimiento. Quinto, pedir a un vecino que vigile la casa cuando estás de vacaciones. Sexto, evitar compartir tus planes de viaje en redes sociales. Estas medidas pueden prevenir que los ladrones entren en las casas.',
         en: 'People can follow several tips to protect their homes. First, install a security alarm system. Second, use strong doors and security locks. Third, do not leave windows open when you are away. Fourth, install security cameras or motion sensors. Fifth, ask a neighbour to watch your house when you are on holiday. Sixth, avoid sharing your travel plans on social media. These measures can prevent burglars from breaking into houses.' } },

  // ════════════════════════════════════════════════════
  //  🙋 PERSONALITY (What is he/she like?)
  // ════════════════════════════════════════════════════
  { topic: { es: '🙋 Personalidad', en: '🙋 Personality' },
    q: { es: '¿Cómo eres? / ¿Cómo es tu personalidad?',
         en: 'What are you like? / How would you describe your personality?' },
    a: { es: 'Soy una persona trabajadora, tranquila y profesional. Soy responsable, disciplinado y muy organizado en mi trabajo diario. Además, soy amable y me llevo bien con la gente.',
         en: 'I am a hard-working, calm and professional person. I am responsible, disciplined and very organised in my daily work. In addition, I am friendly and I get along well with people.' } },

  { topic: { es: '🙋 Personalidad', en: '🙋 Personality' },
    q: { es: '¿Cómo es él/ella? / Descríbeme su personalidad.',
         en: 'What is he/she like? / How would you describe his/her personality?' },
    a: { es: 'Él/Ella es muy valiente, abierto/a y disciplinado/a. También es una persona responsable y comprometida con su trabajo, y siempre intenta ayudar a los demás.',
         en: 'He/She is very brave, outgoing and disciplined. He/She is also a responsible person, committed to his/her work, and always tries to help others.' } },

  { topic: { es: '🙋 Personalidad', en: '🙋 Personality' },
    q: { es: '¿Qué tipo de persona eres?',
         en: 'What kind of person are you?' },
    a: { es: 'Soy una persona honesta, comprometida y trabajadora. Me considero leal, paciente y con sentido del deber, cualidades muy importantes para un Guardia Civil.',
         en: 'I am an honest, committed and hard-working person. I consider myself loyal, patient and with a sense of duty, qualities that are very important for a Civil Guard.' } },

  { topic: { es: '🙋 Personalidad', en: '🙋 Personality' },
    q: { es: '¿Cuáles son tus mejores cualidades?',
         en: 'What are your best qualities?' },
    a: { es: 'Mis mejores cualidades son la responsabilidad, la disciplina y la honestidad. También soy una persona paciente y empática, y trabajo bien en equipo.',
         en: 'My best qualities are responsibility, discipline and honesty. I am also a patient and empathetic person, and I work well in a team.' } },

  // ════════════════════════════════════════════════════
  //  👤 PHYSICAL APPEARANCE
  // ════════════════════════════════════════════════════
  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: '¿Cuál es la diferencia entre "What is he like?" y "What does he look like?"',
         en: 'What is the difference between "What is he like?" and "What does he look like?"' },
    a: { es: 'La pregunta "what is he like?" se refiere a la personalidad y el carácter. Por ejemplo: es tranquilo, valiente y responsable. La pregunta "what does he look like?" se refiere a la apariencia física. Por ejemplo: es alto y delgado con el pelo corto y castaño.',
         en: 'The question what is he like refers to personality and character. For example he is calm, brave and responsible. The question what does he look like refers to physical appearance. For example he is tall and slim with short brown hair.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: '¿Cómo eres físicamente? / Descríbete físicamente.',
         en: 'What do you look like? / Can you describe yourself physically?' },
    a: { es: 'Soy alto y delgado. Tengo el pelo corto y castaño, y los ojos azules. Soy de complexión atlética y mido aproximadamente 1 metro 80.',
         en: 'I am tall and thin. I have short brown hair and blue eyes. I am of athletic build and I am approximately 1 metre 80 tall.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: '¿Tienes algún rasgo distintivo?',
         en: 'Do you have any distinctive features?' },
    a: { es: 'Sí, tengo algunos rasgos distintivos. Por ejemplo, tengo una pequeña cicatriz en la mano y llevo barba corta. Estos son los rasgos más fáciles de reconocer en mí.',
         en: 'Yes, I have some distinctive features. For example, I have a small scar on my hand and I wear a short beard. These are the easiest features to recognise on me.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: '¿Cómo describirías a una persona físicamente? (regla general)',
         en: 'How would you describe a person physically? (general rule)' },
    a: { es: 'Una persona se puede describir por su estatura, complexión, color y longitud del pelo, color de ojos, edad aproximada y cualquier rasgo distintivo como una barba, tatuajes o pecas.',
         en: 'A person can be described by their height, build, hair colour and length, eye colour, approximate age and any distinctive features such as a beard, tattoos or freckles.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: 'Describe la siguiente foto: hombre rubio de mediana edad con perilla.',
         en: 'Describe the following picture: middle-aged fair-haired man with a goatee.' },
    a: { es: 'Es de complexión delgada y parece de mediana edad. Es rubio, con el pelo liso y peinado hacia atrás, ligeramente canoso por los lados. Es un hombre de ojos azules, sin afeitar (con barba incipiente), con perilla y bigote ligeros. En cuanto a su altura, parece medir alrededor de 1 metro 80.',
         en: 'He is of slender build and appears to be middle-aged. He is fair-haired with straight, slicked-back hair that is slightly graying at the sides. He is a blue-eyed man who is currently unshaven, with stubble, featuring a light goatee and moustache. Regarding his height, he looks to be about 1 metre 80.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: 'Describe la siguiente foto: adolescente morena con trenzas y pecas.',
         en: 'Describe the following picture: dark-haired teenage girl with braids and freckles.' },
    a: { es: 'Es de complexión delgada y tiene la piel clara. Es morena, con el pelo largo y negro recogido en dos trenzas y un flequillo. Es una chica de ojos oscuros y, como rasgo distintivo, tiene pecas visibles por la nariz y las mejillas. En cuanto a su edad, parece estar en la adolescencia, y mide aproximadamente 1 metro 55.',
         en: 'She is of slender build and has pale skin. She is dark-haired with long, black hair styled in two braids with a fringe. She is a dark-eyed girl and, as a distinguishing feature, she has visible freckles across her nose and cheeks. Regarding her age, she appears to be in her teens, and her height is approximately 1 metre 55.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: 'Describe la siguiente foto: hombre caucásico rubio sin barba.',
         en: 'Describe the following picture: fair-haired Caucasian man, clean shaven.' },
    a: { es: 'Es caucásico y de complexión delgada. Es rubio, con el pelo corto y liso, que se está aclarando por la parte superior. Es un hombre de ojos azules y está afeitado. En cuanto a su edad, parece tener cuarenta y muchos o ser de mediana edad. Su altura es de aproximadamente 1 metro 75.',
         en: 'He is Caucasian and has a slender build. He is fair-haired with straight, short hair that is thinning on top. He is a blue-eyed man and is clean shaven. Regarding his age, he appears to be in his late forties or middle-aged. His height is approximately 1 metre 75.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: 'Describe la siguiente foto: mujer caucásica rubia con pelo corto ondulado.',
         en: 'Describe the following picture: fair-haired Caucasian woman with short wavy hair.' },
    a: { es: 'Es caucásica y de complexión delgada. Es rubia, con el pelo corto y ondulado que le llega a la mandíbula. Es una mujer de ojos azules y parece tener cuarenta y muchos o ser de mediana edad. En cuanto a su altura, parece medir alrededor de 1 metro 68.',
         en: 'She is Caucasian and of slender build. She is fair-haired with wavy, short hair that reaches her jawline. She is a blue-eyed woman and appears to be in her late forties or middle-age. Regarding her height, she looks to be about 1 metre 68.' } },
];

// Pronunciation hints
const hints = {
  // Weapons
  weapon:'WEP-un', weapons:'WEP-unz', dangerous:'DAYN-jer-us',
  situation:'sit-yoo-AY-shun', situations:'sit-yoo-AY-shunz',
  ammunition:'am-yoo-NISH-un', cartridge:'KAR-trij', trigger:'TRIG-er',
  pistol:'PIS-tul', grenade:'greh-NAYD', security:'sih-KYOOR-ih-tee',
  knife:'NYF', knives:'NYVZ', sword:'SORD',
  barrel:'BAR-ul', magazine:'MAG-uh-zeen', bullet:'BUL-it',
  sniper:'SNY-per', nuclear:'NEW-klee-er',
  destructive:'dis-TRUK-tiv', conflict:'KON-flikt',
  precise:'pri-SAYS', effective:'ih-FEK-tiv',
  prevent:'pri-VENT', harmed:'HARMD',

  // Crime
  criminal:'KRIM-ih-nul', criminals:'KRIM-ih-nulz',
  organised:'OR-guh-nyzd', organized:'OR-guh-nyzd',
  intimidation:'in-tim-ih-DAY-shun', corruption:'kuh-RUP-shun',
  laundering:'LAWN-der-ing', trafficking:'TRAF-ik-ing',
  illegally:'ih-LEE-guh-lee', illegal:'ih-LEE-gul',
  extortion:'ek-STOR-shun', bribery:'BRY-ber-ee',
  fraud:'FRAWD', smuggling:'SMUG-ling',
  forgery:'FOR-juh-ree', vandalism:'VAN-duh-liz-um',
  kidnapping:'KID-nap-ing', blackmail:'BLAK-mayl',
  arson:'AR-son', terrorism:'TER-uh-riz-um',
  homicide:'HOM-ih-syd', swindle:'SWIN-dul',
  speeding:'SPEE-ding', hijacking:'HY-jak-ing',
  pickpocketing:'PIK-pok-it-ing', shoplifting:'SHOP-lif-ting',
  mugging:'MUG-ing', joyriding:'JOY-ry-ding',
  burglary:'BUR-gluh-ree', burglar:'BUR-glur',
  mugger:'MUG-er', shoplifter:'SHOP-lif-ter',
  pickpocket:'PIK-pok-it', kidnapper:'KID-nap-er',
  hijacker:'HY-jak-er', joyrider:'JOY-ry-der',
  blackmailer:'BLAK-may-ler', arsonist:'AR-son-ist',
  forger:'FOR-jer', smuggler:'SMUG-ler',
  thief:'THEEF', vandal:'VAN-dul',
  murderer:'MUR-der-er', murder:'MUR-der',
  rape:'RAYP', rapist:'RAY-pist',
  deceive:'di-SEEV', deceives:'di-SEEVZ',
  ransom:'RAN-sum', valuable:'VAL-yoo-uh-bul',

  // Police / Civil Guard
  surveillance:'ser-VAY-luns',
  reinforced:'ree-in-FORST', patrols:'puh-TROLZ',
  society:'suh-SY-ih-tee', ensure:'en-SHOOR',
  professional:'pruh-FESH-uh-nul', professionals:'pruh-FESH-uh-nulz',
  trained:'TRAYND', non:'NON',
  lethal:'LEE-thul', wound:'WOOND',
  responsible:'rih-SPON-sih-bul', responsibility:'rih-spon-suh-BIL-ih-tee',
  discipline:'DIS-uh-plin', disciplined:'DIS-uh-plind',
  honest:'ON-ist', honesty:'ON-ih-stee',
  committed:'kuh-MIT-id', loyal:'LOY-ul',
  patient:'PAY-shunt', empathetic:'em-puh-THET-ik',

  // Description / Appearance
  appearance:'uh-PEER-uns', physical:'FIZ-ih-kul',
  height:'HYT', slender:'SLEN-der',
  freckles:'FREK-ulz', braids:'BRAYDZ',
  caucasian:'kaw-KAY-zhun', stubble:'STUB-ul',
  goatee:'go-TEE', moustache:'MUS-tash',
  jawline:'JAW-lyn', distinctive:'dis-TINK-tiv',
  thinning:'THIN-ing', graying:'GRAY-ing',
  unshaven:'un-SHAY-vun', shaved:'SHAYVD',
  shaven:'SHAY-vun', beard:'BEERD',
  tattoo:'ta-TOO', tattoos:'ta-TOOZ',
  fringe:'FRINJ', plaits:'PLATS',

  // Common verbs / nouns from answers
  defend:'di-FEND', protect:'pruh-TEKT',
  carry:'KAR-ee', regulation:'reg-yoo-LAY-shun',
  properties:'PROP-er-teez', circumstances:'SER-kum-stan-siz',
  essential:'ih-SEN-shul', behaviour:'bih-HAYV-yer',
  violence:'VY-uh-luns', dishonest:'dis-ON-ist',
  attacker:'uh-TAK-er', attacks:'uh-TAKS',
  attack:'uh-TAK', threats:'THRETS',
  threaten:'THRET-un', valuable:'VAL-yoo-uh-bul',
  measures:'MEZH-erz', motion:'MO-shun',
  neighbour:'NAY-ber', neighbours:'NAY-berz',
  holiday:'HOL-ih-day', social:'SO-shul',
  laundering:'LAWN-der-ing', laundered:'LAWN-derd',
  influence:'IN-floo-uns', cooperate:'ko-OP-uh-rayt',
  internationally:'in-ter-NASH-uh-nuh-lee',
  discourage:'dis-KUR-ij', discourages:'dis-KUR-ij-iz',
  committing:'kuh-MIT-ing',
};

// ── STATE ──────────────────────────────────────────────
let current       = 0;
let speechRate    = 1.0;
let answerVisible = false;
let lang          = localStorage.getItem('gc_lang') || 'es';
let lastSpoken    = null; // { text, btn } — remembers last TTS for speed-change re-speak

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
  lastSpoken = { text: text, btn: btn };
  const utt    = new SpeechSynthesisUtterance(text);
  utt.lang     = 'en-US';
  // Clamp rate to widely-supported range (Safari rejects extreme values).
  // We use a wider effective range for perceptible difference.
  utt.rate     = Math.max(0.5, Math.min(2.0, speechRate));
  utt.pitch    = 1.05;
  utt.volume   = 1;

  const go = () => {
    const v = getBestVoice();
    // Avoid voices that ignore the rate parameter (some "online natural" ones)
    if (v) utt.voice = v;
    // Re-apply rate AFTER voice (some browsers reset it when voice is set)
    utt.rate = Math.max(0.5, Math.min(2.0, speechRate));
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
  const oldRate = speechRate;
  speechRate = rate;
  document.querySelectorAll('.speed-btn').forEach(b =>
    b.classList.toggle('active', parseFloat(b.dataset.rate) === rate)
  );

  // If currently speaking, restart at new rate (the only reliable way to apply it)
  if (oldRate !== rate && synth && synth.speaking && lastSpoken) {
    speak(lastSpoken.text, lastSpoken.btn);
  }
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
      lead: 'Tu navegador no tiene permiso para usar el micrófono. Sigue los pasos para tu dispositivo:',
      steps: {
        // ─── iOS ─────────────────────────────────────────
        'ios-safari': [
          'Abre la app <strong>Ajustes</strong> de tu iPhone/iPad',
          'Baja y pulsa <strong>Safari</strong>',
          'Pulsa <strong>Micrófono</strong> y selecciona <strong>"Preguntar"</strong> o <strong>"Permitir"</strong>',
          'Vuelve a Safari y recarga la página tirando hacia abajo desde la parte superior',
          'Cuando vuelvas a pulsar "Empezar a grabar", iOS te pedirá permiso — pulsa <strong>"Permitir"</strong>'
        ],
        'ios-chrome': [
          'Abre la app <strong>Ajustes</strong> de tu iPhone/iPad',
          'Baja hasta encontrar <strong>Chrome</strong> en la lista de apps',
          'Pulsa Chrome y activa el interruptor de <strong>Micrófono</strong>',
          'Vuelve a Chrome y recarga la página',
          'Si sigue sin funcionar, prueba a abrir la página en <strong>Safari</strong> (funciona mejor en iOS)'
        ],
        'ios-other': [
          'Los navegadores en iPhone/iPad están limitados por Apple',
          'Para que funcione el micrófono, abre esta página en <strong>Safari</strong>',
          'En Safari: Ajustes → Safari → Micrófono → activa el permiso para este sitio',
          'Pulsa "Empezar a grabar" otra vez y acepta el aviso de iOS'
        ],
        // ─── Android ─────────────────────────────────────
        'android-chrome': [
          'En la página, pulsa el icono del <strong>candado 🔒</strong> arriba a la izquierda de la URL',
          'Pulsa <strong>"Permisos"</strong>',
          'Activa <strong>Micrófono</strong>',
          'Recarga la página (tira hacia abajo)',
          'Si no aparece la opción: Ajustes de Android → Apps → Chrome → Permisos → Micrófono → Permitir'
        ],
        'android-firefox': [
          'En Firefox, pulsa los <strong>tres puntos ⋮</strong> arriba a la derecha',
          'Pulsa <strong>"Ajustes" → "Permisos del sitio" → "Micrófono"</strong>',
          'Permite el micrófono para este sitio',
          'Recarga la página',
          'Nota: Firefox aún no soporta reconocimiento de voz, prueba con <strong>Chrome</strong>'
        ],
        'android-samsung': [
          'En Samsung Internet, pulsa los <strong>tres puntos ⋮</strong> abajo a la derecha',
          'Pulsa <strong>"Ajustes" → "Sitios y descargas" → "Permisos del sitio"</strong>',
          'Pulsa <strong>"Micrófono"</strong> y permite este sitio',
          'Recarga la página',
          'Si sigue sin funcionar, prueba con <strong>Chrome para Android</strong>'
        ],
        'android-other': [
          'Pulsa el icono del <strong>candado 🔒</strong> en la barra de direcciones',
          'Busca "Permisos" o "Configuración del sitio"',
          'Activa <strong>Micrófono</strong> para esta página',
          'Recarga la página',
          'Si no encuentras la opción, instala <strong>Chrome para Android</strong>'
        ],
        // ─── Desktop ─────────────────────────────────────
        'desktop-chrome': [
          'Pulsa el icono del <strong>candado 🔒</strong> a la izquierda de la URL',
          'Selecciona <strong>"Configuración del sitio"</strong>',
          'Busca <strong>"Micrófono"</strong> y cámbialo a <strong>"Permitir"</strong>',
          'Vuelve a la página y recárgala (Ctrl+R o Cmd+R)'
        ],
        'desktop-edge': [
          'Pulsa el icono del <strong>candado 🔒</strong> en la barra de direcciones',
          'Pulsa <strong>"Permisos para este sitio"</strong>',
          'Cambia <strong>"Micrófono"</strong> a <strong>"Permitir"</strong>',
          'Recarga la página'
        ],
        'desktop-firefox': [
          'Pulsa el icono del <strong>candado 🔒</strong> en la URL',
          'Verás "Micrófono bloqueado temporalmente" — pulsa la <strong>"×"</strong> a su lado',
          'Recarga la página',
          'Esta vez, cuando pida permiso, pulsa <strong>"Permitir"</strong>'
        ],
        'desktop-safari': [
          'Abre el menú <strong>Safari → Ajustes → Sitios web</strong>',
          'En la barra lateral, selecciona <strong>"Micrófono"</strong>',
          'Busca este sitio en la lista y cámbialo a <strong>"Permitir"</strong>',
          'Recarga la página'
        ],
        'desktop-brave': [
          'Pulsa el icono del <strong>escudo 🦁</strong> de Brave a la derecha de la URL',
          'Asegúrate de que los <strong>escudos están bajados</strong> para este sitio',
          'Pulsa también el <strong>candado 🔒</strong> y permite el micrófono',
          'Recarga la página'
        ],
        default: [
          'Busca el icono del candado en la barra de direcciones',
          'Permite el micrófono para este sitio',
          'Recarga la página'
        ]
      }
    },
    'mic-blocked-system': {
      title: '🔒 Micrófono bloqueado por el sistema',
      lead: 'El sistema operativo (no el navegador) está bloqueando el acceso al micrófono:',
      steps: {
        'ios-safari': [
          'Abre <strong>Ajustes → Privacidad y seguridad → Micrófono</strong>',
          'Activa el interruptor para <strong>Safari</strong>',
          'Si hay alguna app usando el micrófono ahora mismo, ciérrala',
          'Vuelve a la página y recarga'
        ],
        'ios-chrome': [
          'Abre <strong>Ajustes → Privacidad y seguridad → Micrófono</strong>',
          'Activa el interruptor para <strong>Chrome</strong>',
          'Si no aparece Chrome, abre Chrome una vez, intenta grabar, y vuelve a Ajustes',
          'Vuelve a la página y recarga'
        ],
        'ios-other': [
          'Abre <strong>Ajustes → Privacidad y seguridad → Micrófono</strong>',
          'Activa el interruptor para tu navegador',
          'Si tu navegador no aparece en la lista, abre Safari en su lugar'
        ],
        'android-chrome': [
          'Mantén pulsado el icono de <strong>Chrome</strong> en la pantalla',
          'Pulsa <strong>"Información de la aplicación"</strong>',
          'Pulsa <strong>"Permisos" → "Micrófono" → "Permitir"</strong>',
          'Vuelve a la app y recarga'
        ],
        'android-other': [
          'Ve a <strong>Ajustes → Aplicaciones</strong>',
          'Busca tu navegador en la lista',
          'Pulsa <strong>"Permisos" → "Micrófono"</strong> y permite el acceso',
          'Vuelve a la página y recarga'
        ],
        'desktop-windows': [
          'Abre <strong>Configuración → Privacidad y seguridad → Micrófono</strong>',
          'Activa <strong>"Acceso al micrófono"</strong>',
          'Activa <strong>"Permitir que las apps de escritorio accedan al micrófono"</strong>',
          'Recarga la página'
        ],
        'desktop-mac': [
          'Abre <strong>Ajustes del Sistema → Privacidad y seguridad → Micrófono</strong>',
          'Activa el interruptor para tu navegador',
          'Tendrás que cerrar y volver a abrir el navegador',
          'Recarga la página'
        ],
        default: [
          'Ajustes del sistema → Privacidad → Micrófono',
          'Permite el acceso a tu navegador',
          'Recarga la página'
        ]
      }
    },
    'sr-not-supported': {
      title: '❌ Reconocimiento de voz no disponible',
      lead: 'El reconocimiento de voz no funciona en tu navegador actual. Aquí tienes la solución para tu dispositivo:',
      steps: {
        'ios-safari': [
          'Comprueba que tienes <strong>iOS 14.5 o más nuevo</strong> (Ajustes → General → Información → Versión del software)',
          'Si tienes una versión más antigua, actualiza iOS en <strong>Ajustes → General → Actualización de software</strong>',
          'Si ya tienes iOS 14.5+: ve a <strong>Ajustes → Safari → Avanzado → Funciones experimentales</strong> y comprueba que <strong>"Speech Recognition"</strong> está activado',
          'Cierra Safari completamente (desliza hacia arriba) y vuelve a abrir la página',
          'Si nada funciona, prueba el resto de funciones de la app (escuchar audio, traducciones) que sí funcionan'
        ],
        'ios-chrome': [
          'Chrome en iPhone/iPad usa Safari por debajo, así que tiene las mismas limitaciones',
          'Para mejores resultados, abre esta página en <strong>Safari</strong> directamente',
          'Comprueba que tienes <strong>iOS 14.5 o más nuevo</strong>',
          'En iOS antiguos no hay forma de usar reconocimiento de voz — actualiza iOS si puedes'
        ],
        'ios-other': [
          'Todos los navegadores en iPhone/iPad usan Safari por debajo (limitación de Apple)',
          'Abre esta página directamente en <strong>Safari</strong> para mejores resultados',
          'Asegúrate de tener <strong>iOS 14.5 o más nuevo</strong>',
          'Si tienes iOS antiguo, actualiza desde Ajustes → General → Actualización de software'
        ],
        'android-chrome': [
          'Chrome para Android sí soporta reconocimiento de voz — si no funciona puede ser un problema temporal',
          'Comprueba tu conexión a Internet (necesita estar online)',
          'Cierra Chrome completamente y vuelve a abrir la página',
          'Si sigue fallando, actualiza Chrome desde Play Store',
          'Como alternativa, abre la página en <strong>Microsoft Edge para Android</strong>'
        ],
        'android-firefox': [
          'Firefox para Android no soporta reconocimiento de voz aún',
          'Abre esta página en <strong>Chrome para Android</strong>, que viene preinstalado en casi todos los Android',
          'O instala <strong>Microsoft Edge</strong> desde Play Store',
          'El resto de funciones de la app sí funcionan en Firefox'
        ],
        'android-samsung': [
          'Samsung Internet a veces falla con el reconocimiento de voz',
          'Abre esta página en <strong>Chrome para Android</strong> que viene preinstalado',
          'O instala <strong>Microsoft Edge</strong> desde Play Store',
          'El resto de funciones (audio, traducción) sí funcionan en Samsung Internet'
        ],
        'android-other': [
          'Tu navegador de Android no soporta reconocimiento de voz',
          'Abre esta página en <strong>Chrome para Android</strong> (preinstalado en casi todos)',
          'O instala <strong>Microsoft Edge</strong> desde Play Store',
          'El resto de funciones de la app sí funcionan'
        ],
        'desktop-firefox': [
          'Firefox de escritorio no soporta reconocimiento de voz',
          'Abre esta página en <strong>Chrome</strong>, <strong>Edge</strong>, <strong>Safari</strong> (Mac) o <strong>Opera</strong>',
          'El resto de funciones (escuchar audio, traducción) sí funcionan en Firefox'
        ],
        'desktop-brave': [
          'Brave bloquea el reconocimiento de voz por privacidad',
          'Pulsa el icono del <strong>escudo 🦁</strong> y baja los escudos para este sitio',
          'Recarga la página',
          'Si sigue sin funcionar, abre la página en <strong>Chrome</strong> o <strong>Edge</strong>'
        ],
        default: [
          'Abre esta página en <strong>Chrome</strong>, <strong>Edge</strong>, <strong>Safari</strong> u <strong>Opera</strong>',
          'En Android: usa <strong>Chrome</strong> o <strong>Edge</strong>',
          'En iPhone/iPad: usa <strong>Safari</strong> con iOS 14.5+',
          'El resto de funciones de la app sí funcionan en cualquier navegador'
        ]
      }
    },
    'sr-network': {
      title: '📡 Error de red en el reconocimiento de voz',
      lead: 'El reconocimiento de voz necesita conexión a Internet con acceso a los servidores de Google. Suele fallar en redes corporativas que bloquean ciertos servicios:',
      steps: {
        'ios-safari': [
          'Comprueba que tienes Internet (abre cualquier otra web para confirmarlo)',
          'Si estás en un WiFi corporativo (academia, hospital, oficina): el firewall puede estar bloqueando los servidores de voz',
          'Solución rápida: <strong>desactiva el WiFi</strong> y usa los datos móviles',
          'Vuelve a intentar grabar — debería funcionar con datos',
          'Para usarlo con el WiFi corporativo, pide al administrador que desbloquee <em>speech.googleapis.com</em>'
        ],
        'android-chrome': [
          'Comprueba que tienes Internet abriendo cualquier otra web',
          'Si estás en un WiFi corporativo (academia, oficina): el firewall puede estar bloqueando los servidores de Google',
          'Solución rápida: <strong>desactiva el WiFi</strong> y usa los datos móviles',
          'Vuelve a intentar grabar — debería funcionar con datos',
          'Para usarlo con el WiFi corporativo, pide al administrador que desbloquee <em>speech.googleapis.com</em>'
        ],
        'desktop-windows': [
          'Comprueba tu conexión a Internet',
          'Si estás en una red corporativa o académica, el firewall puede estar bloqueando los servidores de voz',
          'Si tienes móvil con datos, comparte la conexión por <em>tethering</em> y prueba con esa red',
          'Otra opción: hablar con IT para que desbloqueen <em>speech.googleapis.com</em>'
        ],
        'desktop-mac': [
          'Comprueba tu conexión a Internet',
          'Si estás en una red corporativa o académica, el firewall puede estar bloqueando los servidores de voz',
          'Conecta el iPhone/Android por <em>compartir red</em> y prueba con esa conexión',
          'Otra opción: hablar con IT para que desbloqueen <em>speech.googleapis.com</em>'
        ],
        default: [
          'Comprueba que tienes conexión a Internet',
          'Si estás en un <strong>WiFi corporativo</strong> (academia, hospital, oficina): el firewall puede estar bloqueando los servidores de voz de Google',
          'Solución más rápida: <strong>desactiva el WiFi</strong> y usa los datos móviles del teléfono',
          'Vuelve a probar — debería funcionar con datos'
        ]
      }
    },
    'sr-no-speech': {
      title: '🔇 No se detectó voz',
      lead: 'No se ha detectado ningún sonido durante la grabación:',
      steps: {
        'ios-safari': [
          'Habla más alto y claro al hacer la grabación',
          'Acerca el iPhone/iPad a la boca (no necesitas tocarlo, basta con 20–30 cm)',
          'Comprueba que el silencio físico del iPhone no esté activado (el interruptor en el lateral)',
          'Si tienes auriculares Bluetooth conectados, comprueba que se está usando su micrófono',
          'Inténtalo de nuevo desde el principio'
        ],
        'android-chrome': [
          'Habla más alto y claro',
          'Acerca el teléfono a la boca (20–30 cm)',
          'Comprueba el volumen del micrófono en Ajustes → Sonido',
          'Si llevas auriculares Bluetooth, prueba a desconectarlos para usar el micrófono del teléfono',
          'Inténtalo de nuevo'
        ],
        'desktop-windows': [
          'Habla más fuerte y claro',
          'Comprueba que está seleccionado el micrófono correcto: clic derecho sobre el icono de altavoz → Configuración de sonido → Entrada',
          'Sube el volumen del micrófono al 100%',
          'Si usas auriculares con micrófono, comprueba que están bien enchufados',
          'Inténtalo de nuevo'
        ],
        'desktop-mac': [
          'Habla más fuerte y claro',
          'Comprueba el micrófono en <strong>Ajustes del Sistema → Sonido → Entrada</strong>',
          'Sube el nivel de entrada',
          'Si usas AirPods o auriculares, asegúrate de que están conectados correctamente',
          'Inténtalo de nuevo'
        ],
        default: [
          'Habla más alto y claro',
          'Acércate más al micrófono (20–30 cm)',
          'Comprueba que el micrófono no esté silenciado físicamente',
          'Comprueba que el micrófono correcto esté seleccionado en los ajustes del sistema',
          'Inténtalo de nuevo'
        ]
      }
    },
    'tts-not-supported': {
      title: '🔊 Síntesis de voz no disponible',
      lead: 'Tu navegador no puede reproducir audio TTS:',
      steps: {
        'ios-safari': [
          'Asegúrate de tener <strong>iOS 7 o más nuevo</strong> (todos los iPhone modernos lo tienen)',
          'Comprueba que el iPhone no esté en modo silencio (interruptor lateral)',
          'Sube el volumen del dispositivo',
          'Si no oyes nada, reinicia Safari (cierra la pestaña y vuelve a abrirla)'
        ],
        'android-chrome': [
          'Asegúrate de tener Chrome actualizado a la última versión',
          'Sube el volumen multimedia del teléfono',
          'Si no oyes nada, reinicia Chrome',
          'Si sigue sin funcionar, instala "Google Text-to-Speech" desde Play Store'
        ],
        default: [
          'Abre la página en <strong>Chrome</strong>, <strong>Edge</strong>, <strong>Safari</strong> o <strong>Firefox</strong>',
          'Si ya estás usando uno de esos, comprueba el volumen del sistema',
          'Recarga la página'
        ]
      }
    },
    'media-not-supported': {
      title: '⚠️ Acceso a medios no disponible',
      lead: 'Tu navegador no soporta el acceso al micrófono. Esto suele ocurrir cuando:',
      steps: {
        'ios-safari': [
          'Asegúrate de tener <strong>iOS 11 o más nuevo</strong> para acceso a micrófono en Safari',
          'Comprueba que estás abriendo la página por <strong>HTTPS</strong> (URL que empieza por https://)',
          'Si la URL empieza por http:// el micrófono no funcionará — usa la versión https',
          'Si abres el archivo desde el iPhone (file://), no funcionará — necesita un servidor web'
        ],
        'android-chrome': [
          'Comprueba que la URL empieza por <strong>https://</strong> (no http)',
          'Si abres un archivo local (file://), no funciona — necesita un servidor web',
          'Actualiza Chrome a la última versión',
          'Si usas datos móviles, comprueba que tienes señal'
        ],
        default: [
          'La página debe abrirse con <strong>HTTPS</strong> (URL que empieza por https://)',
          'Si abres el archivo localmente (file://) el micrófono no funcionará',
          'Solución: sube la página a un servidor web (Netlify, GitHub Pages...) y ábrela desde la URL pública',
          'Comprueba también que tu navegador esté actualizado'
        ]
      }
    }
  },

  en: {
    'mic-not-allowed': {
      title: '🚫 Microphone permission denied',
      lead: 'Your browser does not have permission to use the microphone. Follow the steps for your device:',
      steps: {
        'ios-safari': [
          'Open the <strong>Settings</strong> app on your iPhone/iPad',
          'Scroll down and tap <strong>Safari</strong>',
          'Tap <strong>Microphone</strong> and select <strong>"Ask"</strong> or <strong>"Allow"</strong>',
          'Return to Safari and reload the page by pulling down from the top',
          'When you tap "Start Recording" again, iOS will ask for permission — tap <strong>"Allow"</strong>'
        ],
        'ios-chrome': [
          'Open the <strong>Settings</strong> app on your iPhone/iPad',
          'Scroll down to find <strong>Chrome</strong> in the apps list',
          'Tap Chrome and enable the <strong>Microphone</strong> toggle',
          'Return to Chrome and reload the page',
          'If it still doesn\'t work, try opening the page in <strong>Safari</strong> (works better on iOS)'
        ],
        'ios-other': [
          'All browsers on iPhone/iPad are limited by Apple',
          'For microphone access, open this page in <strong>Safari</strong>',
          'In Safari: Settings → Safari → Microphone → enable permission for this site',
          'Tap "Start Recording" again and accept the iOS prompt'
        ],
        'android-chrome': [
          'On the page, tap the <strong>lock icon 🔒</strong> at the left of the URL',
          'Tap <strong>"Permissions"</strong>',
          'Enable <strong>Microphone</strong>',
          'Reload the page (pull down)',
          'If the option doesn\'t appear: Android Settings → Apps → Chrome → Permissions → Microphone → Allow'
        ],
        'android-firefox': [
          'In Firefox, tap the <strong>three dots ⋮</strong> at the top right',
          'Tap <strong>"Settings" → "Site permissions" → "Microphone"</strong>',
          'Allow microphone for this site',
          'Reload the page',
          'Note: Firefox does not yet support speech recognition, try <strong>Chrome</strong>'
        ],
        'android-samsung': [
          'In Samsung Internet, tap the <strong>three dots ⋮</strong> at the bottom right',
          'Tap <strong>"Settings" → "Sites and downloads" → "Site permissions"</strong>',
          'Tap <strong>"Microphone"</strong> and allow this site',
          'Reload the page',
          'If still not working, try <strong>Chrome for Android</strong>'
        ],
        'android-other': [
          'Tap the <strong>lock icon 🔒</strong> in the address bar',
          'Look for "Permissions" or "Site settings"',
          'Enable <strong>Microphone</strong> for this page',
          'Reload the page',
          'If you can\'t find the option, install <strong>Chrome for Android</strong>'
        ],
        'desktop-chrome': [
          'Click the <strong>lock icon 🔒</strong> to the left of the URL',
          'Select <strong>"Site settings"</strong>',
          'Find <strong>"Microphone"</strong> and change it to <strong>"Allow"</strong>',
          'Return to the page and reload (Ctrl+R or Cmd+R)'
        ],
        'desktop-edge': [
          'Click the <strong>lock icon 🔒</strong> in the address bar',
          'Click <strong>"Permissions for this site"</strong>',
          'Change <strong>"Microphone"</strong> to <strong>"Allow"</strong>',
          'Reload the page'
        ],
        'desktop-firefox': [
          'Click the <strong>lock icon 🔒</strong> in the URL',
          'You\'ll see "Microphone temporarily blocked" — click the <strong>"×"</strong> next to it',
          'Reload the page',
          'This time, when it asks for permission, click <strong>"Allow"</strong>'
        ],
        'desktop-safari': [
          'Open the menu <strong>Safari → Settings → Websites</strong>',
          'In the sidebar, select <strong>"Microphone"</strong>',
          'Find this site in the list and change it to <strong>"Allow"</strong>',
          'Reload the page'
        ],
        'desktop-brave': [
          'Click the <strong>shield icon 🦁</strong> at the right of the URL',
          'Make sure shields are <strong>down</strong> for this site',
          'Also click the <strong>lock icon 🔒</strong> and allow microphone',
          'Reload the page'
        ],
        default: [
          'Look for the lock icon in the address bar',
          'Allow microphone for this site',
          'Reload the page'
        ]
      }
    },
    'mic-blocked-system': {
      title: '🔒 Microphone blocked by the system',
      lead: 'The operating system (not the browser) is blocking microphone access:',
      steps: {
        'ios-safari': [
          'Open <strong>Settings → Privacy & Security → Microphone</strong>',
          'Enable the toggle for <strong>Safari</strong>',
          'If any app is using the microphone right now, close it',
          'Return to the page and reload'
        ],
        'ios-chrome': [
          'Open <strong>Settings → Privacy & Security → Microphone</strong>',
          'Enable the toggle for <strong>Chrome</strong>',
          'If Chrome doesn\'t appear, open Chrome once, try to record, and return to Settings',
          'Return to the page and reload'
        ],
        'ios-other': [
          'Open <strong>Settings → Privacy & Security → Microphone</strong>',
          'Enable the toggle for your browser',
          'If your browser doesn\'t appear in the list, use Safari instead'
        ],
        'android-chrome': [
          'Long-press the <strong>Chrome</strong> icon on your screen',
          'Tap <strong>"App info"</strong>',
          'Tap <strong>"Permissions" → "Microphone" → "Allow"</strong>',
          'Return to the app and reload'
        ],
        'android-other': [
          'Go to <strong>Settings → Apps</strong>',
          'Find your browser in the list',
          'Tap <strong>"Permissions" → "Microphone"</strong> and allow access',
          'Return to the page and reload'
        ],
        'desktop-windows': [
          'Open <strong>Settings → Privacy & security → Microphone</strong>',
          'Enable <strong>"Microphone access"</strong>',
          'Enable <strong>"Let desktop apps access your microphone"</strong>',
          'Reload the page'
        ],
        'desktop-mac': [
          'Open <strong>System Settings → Privacy & Security → Microphone</strong>',
          'Enable the toggle for your browser',
          'You will need to quit and reopen the browser',
          'Reload the page'
        ],
        default: [
          'System Settings → Privacy → Microphone',
          'Allow access to your browser',
          'Reload the page'
        ]
      }
    },
    'sr-not-supported': {
      title: '❌ Speech recognition not available',
      lead: 'Speech recognition doesn\'t work in your current browser. Here\'s the solution for your device:',
      steps: {
        'ios-safari': [
          'Check that you have <strong>iOS 14.5 or newer</strong> (Settings → General → About → Software Version)',
          'If you have an older version, update iOS in <strong>Settings → General → Software Update</strong>',
          'If you already have iOS 14.5+: go to <strong>Settings → Safari → Advanced → Experimental Features</strong> and check that <strong>"Speech Recognition"</strong> is enabled',
          'Close Safari completely (swipe up) and reopen the page',
          'If nothing works, you can still use the other app features (listening to audio, translations)'
        ],
        'ios-chrome': [
          'Chrome on iPhone/iPad uses Safari under the hood, so it has the same limitations',
          'For best results, open this page directly in <strong>Safari</strong>',
          'Check that you have <strong>iOS 14.5 or newer</strong>',
          'On older iOS versions, speech recognition is not available — update iOS if you can'
        ],
        'ios-other': [
          'All browsers on iPhone/iPad use Safari under the hood (Apple limitation)',
          'Open this page directly in <strong>Safari</strong> for best results',
          'Make sure you have <strong>iOS 14.5 or newer</strong>',
          'If you have older iOS, update from Settings → General → Software Update'
        ],
        'android-chrome': [
          'Chrome for Android supports speech recognition — if it doesn\'t work it might be a temporary issue',
          'Check your Internet connection (it needs to be online)',
          'Close Chrome completely and reopen the page',
          'If it keeps failing, update Chrome from Play Store',
          'As an alternative, open the page in <strong>Microsoft Edge for Android</strong>'
        ],
        'android-firefox': [
          'Firefox for Android doesn\'t support speech recognition yet',
          'Open this page in <strong>Chrome for Android</strong>, which comes pre-installed on most Androids',
          'Or install <strong>Microsoft Edge</strong> from Play Store',
          'All other app features work in Firefox'
        ],
        'android-samsung': [
          'Samsung Internet sometimes fails with speech recognition',
          'Open this page in <strong>Chrome for Android</strong> which comes pre-installed',
          'Or install <strong>Microsoft Edge</strong> from Play Store',
          'All other features (audio, translation) work in Samsung Internet'
        ],
        'android-other': [
          'Your Android browser doesn\'t support speech recognition',
          'Open this page in <strong>Chrome for Android</strong> (pre-installed on most)',
          'Or install <strong>Microsoft Edge</strong> from Play Store',
          'All other app features work'
        ],
        'desktop-firefox': [
          'Firefox on desktop doesn\'t support speech recognition',
          'Open this page in <strong>Chrome</strong>, <strong>Edge</strong>, <strong>Safari</strong> (Mac) or <strong>Opera</strong>',
          'All other features (listening to audio, translation) work in Firefox'
        ],
        'desktop-brave': [
          'Brave blocks speech recognition for privacy',
          'Click the <strong>shield icon 🦁</strong> and lower shields for this site',
          'Reload the page',
          'If it still doesn\'t work, open the page in <strong>Chrome</strong> or <strong>Edge</strong>'
        ],
        default: [
          'Open this page in <strong>Chrome</strong>, <strong>Edge</strong>, <strong>Safari</strong> or <strong>Opera</strong>',
          'On Android: use <strong>Chrome</strong> or <strong>Edge</strong>',
          'On iPhone/iPad: use <strong>Safari</strong> with iOS 14.5+',
          'All other app features work in any browser'
        ]
      }
    },
    'sr-network': {
      title: '📡 Speech recognition network error',
      lead: 'Speech recognition needs Internet access to Google\'s voice servers. This usually fails on corporate networks that block certain services:',
      steps: {
        'ios-safari': [
          'Check that you have Internet (open any other website to confirm)',
          'If you\'re on corporate WiFi (academy, hospital, office): the firewall may be blocking the voice servers',
          'Quick fix: <strong>disable WiFi</strong> and use mobile data',
          'Try recording again — it should work with mobile data',
          'For corporate WiFi, ask the admin to unblock <em>speech.googleapis.com</em>'
        ],
        'android-chrome': [
          'Check that you have Internet by opening any other website',
          'If you\'re on corporate WiFi (academy, office): the firewall may be blocking Google servers',
          'Quick fix: <strong>disable WiFi</strong> and use mobile data',
          'Try recording again — it should work with mobile data',
          'For corporate WiFi, ask the admin to unblock <em>speech.googleapis.com</em>'
        ],
        'desktop-windows': [
          'Check your Internet connection',
          'If you\'re on a corporate or academic network, the firewall may be blocking voice servers',
          'If you have a phone with data, share the connection via tethering and try with that network',
          'Other option: talk to IT to unblock <em>speech.googleapis.com</em>'
        ],
        'desktop-mac': [
          'Check your Internet connection',
          'If you\'re on a corporate or academic network, the firewall may be blocking voice servers',
          'Connect your iPhone/Android via personal hotspot and try with that connection',
          'Other option: talk to IT to unblock <em>speech.googleapis.com</em>'
        ],
        default: [
          'Check that you have Internet connection',
          'If you\'re on <strong>corporate WiFi</strong> (academy, hospital, office): the firewall may be blocking Google voice servers',
          'Quickest fix: <strong>disable WiFi</strong> and use mobile data from your phone',
          'Try again — it should work with mobile data'
        ]
      }
    },
    'sr-no-speech': {
      title: '🔇 No speech detected',
      lead: 'No sound was detected during recording:',
      steps: {
        'ios-safari': [
          'Speak louder and clearer when recording',
          'Bring the iPhone/iPad closer to your mouth (no need to touch, 20–30 cm is fine)',
          'Check that the iPhone silent switch is off (the switch on the side)',
          'If you have Bluetooth headphones connected, check that their mic is being used',
          'Try again from the beginning'
        ],
        'android-chrome': [
          'Speak louder and clearer',
          'Bring the phone closer to your mouth (20–30 cm)',
          'Check the microphone volume in Settings → Sound',
          'If you have Bluetooth headphones, try disconnecting them to use the phone microphone',
          'Try again'
        ],
        'desktop-windows': [
          'Speak louder and clearer',
          'Check that the correct microphone is selected: right-click the speaker icon → Sound settings → Input',
          'Turn up the microphone volume to 100%',
          'If using a headset, check that it\'s plugged in correctly',
          'Try again'
        ],
        'desktop-mac': [
          'Speak louder and clearer',
          'Check the microphone in <strong>System Settings → Sound → Input</strong>',
          'Turn up the input level',
          'If using AirPods or headphones, make sure they\'re connected correctly',
          'Try again'
        ],
        default: [
          'Speak louder and clearer',
          'Move closer to the microphone (20–30 cm)',
          'Check that the microphone is not physically muted',
          'Check that the correct microphone is selected in system settings',
          'Try again'
        ]
      }
    },
    'tts-not-supported': {
      title: '🔊 Text-to-speech not available',
      lead: 'Your browser cannot play TTS audio:',
      steps: {
        'ios-safari': [
          'Make sure you have <strong>iOS 7 or newer</strong> (all modern iPhones have it)',
          'Check that the iPhone is not in silent mode (side switch)',
          'Turn up the device volume',
          'If you don\'t hear anything, restart Safari (close the tab and reopen)'
        ],
        'android-chrome': [
          'Make sure Chrome is up to date',
          'Turn up the media volume on the phone',
          'If you don\'t hear anything, restart Chrome',
          'If still not working, install "Google Text-to-Speech" from Play Store'
        ],
        default: [
          'Open the page in <strong>Chrome</strong>, <strong>Edge</strong>, <strong>Safari</strong> or <strong>Firefox</strong>',
          'If you\'re already using one of those, check your system volume',
          'Reload the page'
        ]
      }
    },
    'media-not-supported': {
      title: '⚠️ Media access not available',
      lead: 'Your browser does not support microphone access. This usually happens when:',
      steps: {
        'ios-safari': [
          'Make sure you have <strong>iOS 11 or newer</strong> for microphone access in Safari',
          'Check that you\'re opening the page via <strong>HTTPS</strong> (URL starting with https://)',
          'If the URL starts with http:// microphone won\'t work — use the https version',
          'If you open the file from your iPhone (file://), it won\'t work — needs a web server'
        ],
        'android-chrome': [
          'Check the URL starts with <strong>https://</strong> (not http)',
          'If you open a local file (file://), it won\'t work — needs a web server',
          'Update Chrome to the latest version',
          'If using mobile data, check that you have signal'
        ],
        default: [
          'The page must be opened over <strong>HTTPS</strong> (URL starting with https://)',
          'If you open the file locally (file://) microphone won\'t work',
          'Solution: upload the page to a web server (Netlify, GitHub Pages...) and open it from the public URL',
          'Also check that your browser is up to date'
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

  // Try each candidate key until we find matching steps
  const candidates = getStepKeyCandidates();
  let steps = null;
  for (let i = 0; i < candidates.length; i++) {
    if (data.steps[candidates[i]]) {
      steps = data.steps[candidates[i]];
      break;
    }
  }
  // Final fallback
  if (!steps) steps = data.steps.default || Object.values(data.steps)[0] || [];

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

// Platform detection
const isIOS     = /iPhone|iPad|iPod/i.test(ua) || (/Mac/.test(ua) && navigator.maxTouchPoints > 1);
const isAndroid = /Android/i.test(ua);
const isMac     = /Macintosh/i.test(ua) && !isIOS;
const isWindows = /Windows/i.test(ua);
const isLinux   = /Linux/i.test(ua) && !isAndroid;

// Browser detection — order matters: check specific UA fragments first
// iOS variants use specific UA tokens (apart from Safari, they all run WebKit underneath)
const isIOSChrome  = isIOS && /CriOS\//i.test(ua);     // Chrome on iOS
const isIOSFirefox = isIOS && /FxiOS\//i.test(ua);     // Firefox on iOS
const isIOSEdge    = isIOS && /EdgiOS\//i.test(ua);    // Edge on iOS
const isIOSOpera   = isIOS && /OPiOS\//i.test(ua);     // Opera on iOS
const isIOSOther   = isIOS && (isIOSChrome || isIOSFirefox || isIOSEdge || isIOSOpera);
const isIOSSafari  = isIOS && !isIOSOther;             // Pure Safari on iOS

// Android variants
const isSamsungBrowser = isAndroid && /SamsungBrowser/i.test(ua);
const isAndroidFirefox = isAndroid && /Firefox/i.test(ua);
const isAndroidEdge    = isAndroid && /EdgA\//i.test(ua);
const isAndroidOpera   = isAndroid && /OPR\//i.test(ua);
const isAndroidChrome  = isAndroid && /Chrome/i.test(ua) &&
                         !isSamsungBrowser && !isAndroidFirefox &&
                         !isAndroidEdge && !isAndroidOpera;

// Desktop variants
const isFirefox = !isAndroid && !isIOS && /Firefox/i.test(ua);
const isEdge    = !isIOS && !isAndroid && /Edg\//i.test(ua);
const isOpera   = !isIOS && !isAndroid && /OPR\//i.test(ua);
const isSafari  = !isIOS && !isAndroid && /^((?!chrome|android|crios|fxios).)*safari/i.test(ua) && !isEdge && !isOpera;
const isChrome  = !isIOS && !isAndroid && /Chrome/i.test(ua) && !isEdge && !isOpera;

// Brave detection: async via navigator.brave.isBrave()
let isBrave = false;
if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
  navigator.brave.isBrave().then(function(v) {
    isBrave = !!v;
    checkSpeechRecognitionSupport();
  }).catch(function() {});
}

function getBrowserName() {
  // iOS variants
  if (isIOSSafari)  return 'Safari (iPhone/iPad)';
  if (isIOSChrome)  return 'Chrome (iPhone/iPad)';
  if (isIOSFirefox) return 'Firefox (iPhone/iPad)';
  if (isIOSEdge)    return 'Edge (iPhone/iPad)';
  if (isIOSOpera)   return 'Opera (iPhone/iPad)';
  // Android variants
  if (isSamsungBrowser) return 'Samsung Internet (Android)';
  if (isAndroidFirefox) return 'Firefox (Android)';
  if (isAndroidEdge)    return 'Edge (Android)';
  if (isAndroidOpera)   return 'Opera (Android)';
  if (isAndroidChrome)  return 'Chrome (Android)';
  if (isAndroid)        return 'Android';
  // Desktop variants
  if (isBrave)   return 'Brave';
  if (isEdge)    return 'Edge';
  if (isOpera)   return 'Opera';
  if (isFirefox) return 'Firefox';
  if (isSafari)  return 'Safari (Mac)';
  if (isChrome)  return 'Chrome';
  return lang === 'es' ? 'tu navegador' : 'your browser';
}

// Map detected browser/OS to a key used in ERROR_HELP.steps
function getBrowserKey() {
  // iOS — always check iOS first, since iOS browsers are all WebKit
  if (isIOSSafari)  return 'ios-safari';
  if (isIOSChrome)  return 'ios-chrome';
  if (isIOSFirefox || isIOSEdge || isIOSOpera) return 'ios-other';
  if (isIOS)        return 'ios-other';

  // Android
  if (isAndroidChrome)  return 'android-chrome';
  if (isAndroidFirefox) return 'android-firefox';
  if (isSamsungBrowser) return 'android-samsung';
  if (isAndroid)        return 'android-other';

  // Desktop — match OS first for system-level errors
  if (isBrave)   return 'desktop-brave';
  if (isEdge)    return 'desktop-edge';
  if (isOpera)   return 'desktop-chrome';   // Opera shares Chrome UI for permissions
  if (isFirefox) return 'desktop-firefox';
  if (isSafari)  return 'desktop-safari';
  if (isChrome)  return 'desktop-chrome';

  // Fallback by OS
  if (isWindows) return 'desktop-windows';
  if (isMac)     return 'desktop-mac';
  return 'default';
}

// Build a candidate list of keys to try (most specific first, then fallbacks)
function getStepKeyCandidates() {
  const key = getBrowserKey();
  const fallbacks = [key];
  // OS-level fallbacks (for mic-blocked-system etc.)
  if (key.indexOf('desktop-') === 0) {
    if (isWindows) fallbacks.push('desktop-windows');
    if (isMac)     fallbacks.push('desktop-mac');
  }
  // Always include 'default' at the end
  if (fallbacks.indexOf('default') === -1) fallbacks.push('default');
  return fallbacks;
}

// Show a non-blocking banner when speech recognition isn't available
function checkSpeechRecognitionSupport() {
  if (SR && !isFirefox && !isBrave && !isAndroidFirefox && !isIOSOther) return;

  const banner = document.getElementById('compatBanner');
  if (!banner) return;

  let msg;
  // iOS Chrome/Firefox/Edge → they all use WebKit so SR may not work
  if (isIOSChrome || isIOSFirefox || isIOSEdge || isIOSOpera) {
    msg = lang === 'es'
      ? `⚠️ En iPhone/iPad funciona mejor con <strong>Safari</strong>. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">Ver más</button>`
      : `⚠️ On iPhone/iPad this works best in <strong>Safari</strong>. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">Learn more</button>`;
  } else if (isAndroidFirefox) {
    msg = lang === 'es'
      ? `⚠️ <strong>Firefox para Android</strong> no soporta el reconocimiento de voz. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">Ver soluciones</button>`
      : `⚠️ <strong>Firefox for Android</strong> does not support speech recognition. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">See solutions</button>`;
  } else if (isFirefox) {
    msg = lang === 'es'
      ? `⚠️ <strong>Firefox</strong> no soporta el reconocimiento de voz. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">Ver soluciones</button>`
      : `⚠️ <strong>Firefox</strong> does not support speech recognition. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">See solutions</button>`;
  } else if (isBrave) {
    msg = lang === 'es'
      ? `⚠️ <strong>Brave</strong> bloquea el reconocimiento de voz. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">Cómo activarlo</button>`
      : `⚠️ <strong>Brave</strong> blocks speech recognition. <button class="banner-link" onclick="showErrorHelp('sr-not-supported')">How to enable it</button>`;
  } else if (!SR) {
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
let interimText  = '';        // current interim (in-progress) text
let restartTimer = null;
let finalizeTimer = null;     // waits for late final results after stop
let finalized    = false;     // ensure finalize fires only once per session
let micGranted   = false;

// Pick the best alternative from a SpeechRecognitionResult
function pickBestAlternative(result) {
  if (result.length <= 1) return result[0].transcript;
  let best = result[0].transcript;
  let bestScore = -1;
  for (let i = 0; i < result.length; i++) {
    const alt = result[i];
    // Score = confidence × text length (favor longer, more confident)
    const score = (alt.confidence || 0.5) * Math.max(alt.transcript.length, 1);
    if (score > bestScore) { bestScore = score; best = alt.transcript; }
  }
  return best;
}

function buildRecognition() {
  if (!SR) return null;
  const r = new SR();
  r.lang             = 'en-US';
  r.interimResults   = true;
  r.continuous       = false;
  r.maxAlternatives  = 3;  // get multiple options, pick best

  r.onresult = function(e) {
    let newInterim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const result = e.results[i];
      const transcript = pickBestAlternative(result);
      if (result.isFinal) {
        accumulated += transcript + ' ';
      } else {
        newInterim += transcript;
      }
    }
    interimText = newInterim;
    const live = (accumulated + interimText).trim();
    $('youSaid').textContent = live || T('listening');
    $('transcriptBox').classList.add('visible');
  };

  r.onerror = function(e) {
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

  r.onend = function() {
    clearTimeout(restartTimer);
    if (isRecording) {
      // Still recording: continuous=false restarts after each utterance
      restartTimer = setTimeout(safeStart, 200);
      return;
    }
    setBtnStopped();
    // User stopped: try to use whatever transcript we have (final OR interim)
    finalizeRecording();
  };

  return r;
}

// Use accumulated final text, OR fall back to interim if final is empty
function getBestTranscript() {
  const final = accumulated.trim();
  if (final) return final;
  if (interimText.trim()) return interimText.trim();
  return '';
}

function finalizeRecording() {
  if (finalized) return;
  finalized = true;
  clearTimeout(finalizeTimer);

  const transcript = getBestTranscript();
  if (transcript) {
    showComparison(transcript);
  } else {
    const youSaidEl = $('youSaid');
    if (youSaidEl.textContent.startsWith('🎤') || youSaidEl.textContent === '—') {
      youSaidEl.innerHTML = errorWithHelp(T('nothingDetected'), 'sr-no-speech');
    }
  }
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
  interimText  = '';
  finalized    = false;
  isRecording  = true;
  clearTimeout(restartTimer);
  clearTimeout(finalizeTimer);

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
  setBtnStopped();

  // Show interim text immediately so user sees something happened
  const interim = interimText.trim();
  if (!accumulated.trim() && interim) {
    $('youSaid').textContent = interim;
  }

  // Call stop() which triggers onend asynchronously
  try { recognition && recognition.stop(); } catch(_) {}

  // SAFETY NET: if onend doesn't fire within 1.2s, finalize manually.
  // Also handles the case where the final result arrives after onend (short phrases bug).
  clearTimeout(finalizeTimer);
  finalizeTimer = setTimeout(function() {
    if (!isRecording) finalizeRecording();
  }, 1200);
}

function resetRecording() {
  isRecording = false;
  finalized   = false;
  clearTimeout(restartTimer);
  clearTimeout(finalizeTimer);
  try { recognition && recognition.abort(); } catch(_) {}
  recognition = null;
  accumulated = '';
  interimText = '';
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

// Free mode recording — extra state
let freeInterimText = '';
let freeFinalizeTimer = null;
let freeFinalized = false;

function buildFreeRecognition() {
  if (!SR) return null;
  const r = new SR();
  r.lang = 'en-US'; r.interimResults = true; r.continuous = false; r.maxAlternatives = 3;

  r.onresult = function(e) {
    let newInterim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const result = e.results[i];
      const transcript = pickBestAlternative(result);
      if (result.isFinal) freeAccumulated += transcript + ' ';
      else newInterim += transcript;
    }
    freeInterimText = newInterim;
    const live = (freeAccumulated + freeInterimText).trim();
    $('freeYouSaid').textContent = live || T('listening');
    $('freeTranscriptBox').classList.add('visible');
  };

  r.onerror = function(e) {
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

  r.onend = function() {
    clearTimeout(freeRestartTimer);
    if (freeIsRecording) {
      freeRestartTimer = setTimeout(freeSafeStart, 200);
      return;
    }
    setFreeBtnStopped();
    finalizeFreeRecording();
  };
  return r;
}

function getFreeBestTranscript() {
  const final = freeAccumulated.trim();
  if (final) return final;
  if (freeInterimText.trim()) return freeInterimText.trim();
  return '';
}

function finalizeFreeRecording() {
  if (freeFinalized) return;
  freeFinalized = true;
  clearTimeout(freeFinalizeTimer);

  const transcript = getFreeBestTranscript();
  if (transcript) {
    showFreeComparison(transcript);
  } else {
    const el = $('freeYouSaid');
    if (el.textContent.startsWith('🎤') || el.textContent === '—') {
      el.innerHTML = errorWithHelp(T('nothingDetected'), 'sr-no-speech');
    }
  }
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
  freeInterimText = '';
  freeFinalized   = false;
  freeIsRecording = true;
  clearTimeout(freeRestartTimer);
  clearTimeout(freeFinalizeTimer);

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
  setFreeBtnStopped();

  // Show interim text immediately
  const interim = freeInterimText.trim();
  if (!freeAccumulated.trim() && interim) {
    $('freeYouSaid').textContent = interim;
  }

  try { freeRecognition && freeRecognition.stop(); } catch(_) {}

  // Safety net: finalize within 1.2s if onend doesn't fire
  clearTimeout(freeFinalizeTimer);
  freeFinalizeTimer = setTimeout(function() {
    if (!freeIsRecording) finalizeFreeRecording();
  }, 1200);
}

function resetFreeRecording() {
  freeIsRecording = false;
  freeFinalized   = false;
  clearTimeout(freeRestartTimer);
  clearTimeout(freeFinalizeTimer);
  try { freeRecognition && freeRecognition.abort(); } catch(_) {}
  freeRecognition = null;
  freeAccumulated = '';
  freeInterimText = '';
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

// Pronunciation mode recording — extra state
let pronInterimText = '';
let pronFinalizeTimer = null;
let pronFinalized = false;

function buildPronRecognition() {
  if (!SR) return null;
  const r = new SR();
  r.lang = 'en-US'; r.interimResults = true; r.continuous = false; r.maxAlternatives = 3;

  r.onresult = function(e) {
    let newInterim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const result = e.results[i];
      const transcript = pickBestAlternative(result);
      if (result.isFinal) pronAccumulated += transcript + ' ';
      else newInterim += transcript;
    }
    pronInterimText = newInterim;
    const live = (pronAccumulated + pronInterimText).trim();
    $('pronYouSaid').textContent = live || T('listening');
    $('pronTranscriptBox').classList.add('visible');
  };

  r.onerror = function(e) {
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

  r.onend = function() {
    clearTimeout(pronRestartTimer);
    if (pronIsRecording) {
      pronRestartTimer = setTimeout(pronSafeStart, 200);
      return;
    }
    setPronBtnStopped();
    finalizePronRecording();
  };
  return r;
}

function getPronBestTranscript() {
  const final = pronAccumulated.trim();
  if (final) return final;
  if (pronInterimText.trim()) return pronInterimText.trim();
  return '';
}

function finalizePronRecording() {
  if (pronFinalized) return;
  pronFinalized = true;
  clearTimeout(pronFinalizeTimer);

  const transcript = getPronBestTranscript();
  if (transcript) {
    showPronFeedback(transcript);
  } else {
    const el = $('pronYouSaid');
    if (el.textContent.startsWith('🎤') || el.textContent === '—') {
      el.innerHTML = errorWithHelp(T('nothingDetected'), 'sr-no-speech');
    }
  }
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
  pronInterimText = '';
  pronFinalized   = false;
  pronIsRecording = true;
  clearTimeout(pronRestartTimer);
  clearTimeout(pronFinalizeTimer);

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
  setPronBtnStopped();

  // Show interim text immediately
  const interim = pronInterimText.trim();
  if (!pronAccumulated.trim() && interim) {
    $('pronYouSaid').textContent = interim;
  }

  try { pronRecognition && pronRecognition.stop(); } catch(_) {}

  // Safety net for short words: wait up to 1.5s for late finals
  clearTimeout(pronFinalizeTimer);
  pronFinalizeTimer = setTimeout(function() {
    if (!pronIsRecording) finalizePronRecording();
  }, 1500);
}

function resetPronRecording() {
  pronIsRecording = false;
  pronFinalized   = false;
  clearTimeout(pronRestartTimer);
  clearTimeout(pronFinalizeTimer);
  try { pronRecognition && pronRecognition.abort(); } catch(_) {}
  pronRecognition = null;
  pronAccumulated = '';
  pronInterimText = '';
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
