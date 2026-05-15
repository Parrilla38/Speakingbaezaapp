/* ────────────────────────────────────────────────────────────────
   Data · Speaking Trainer
   Preguntas, hints, hooks compartidos y utilidades.
   ──────────────────────────────────────────────────────────────── */

/* ════════════════════ QUESTIONS ════════════════════ */

const QUESTIONS = [
  // ── 🔫 WEAPONS ──────────────────────────────────────────────
  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿En qué situaciones usarías un arma?', en: 'In what situations would you use a weapon?' },
    a: { es: 'Usaría un arma en una situación donde mi vida está en peligro, para proteger a alguien de un atacante, o para cazar animales.',
         en: 'I would use a weapon in a situation where my life is in danger, to protect someone else from an attacker, or to hunt animals.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Qué opinas sobre el uso de las armas?', en: 'What do you think about the use of weapons?' },
    a: { es: 'Estoy de acuerdo con el uso de armas, pero solo en situaciones especiales. Las armas son muy importantes para defendernos y son esenciales para mantener la seguridad en la sociedad si las usamos de forma responsable.',
         en: 'I agree with the use of weapons, but only in special situations. Weapons are very important to defend ourselves and others. They are also essential to maintain security in society if we use them in a responsible way.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Estás de acuerdo o en desacuerdo con el uso de armas? (respuesta negativa)', en: 'Do you agree or disagree with the use of weapons? (negative answer)' },
    a: { es: 'No estoy de acuerdo con el uso de armas, porque son la causa principal de accidentes y están relacionadas con la delincuencia en nuestro país. Solo las personas entrenadas o los profesionales deberían usar armas.',
         en: 'I disagree with the use of weapons, because they are the main cause of accidents and are related to crime in our country. Only trained people or professionals should use weapons.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Deberían las armas de fuego ser legales? (a favor)', en: 'Should guns be legal? (in favour)' },
    a: { es: 'Sí, las armas deberían ser legales, porque si se usan correctamente, ayudan a la gente a defenderse a sí misma, a sus familias y a sus propiedades.',
         en: 'Yes, guns should be legal, because if they are used properly, they help people defend themselves, their families and their properties.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Deberían las armas de fuego ser ilegales? (en contra)', en: 'Should guns be illegal? (against)' },
    a: { es: 'Sí, las armas deberían ser ilegales, porque pueden ser fáciles de encontrar y usadas por la gente equivocada. Creo que las armas deberían estar bajo una regulación estricta.',
         en: 'Yes, guns should be illegal, because they can be easy to find and used by the wrong people. I believe guns should be under strict regulation.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti el arma más peligrosa? (pistola)', en: 'What is the most dangerous weapon for you? (gun)' },
    a: { es: 'El arma más peligrosa es una pistola, porque cualquiera puede apretar un gatillo y es un arma que puede matar a una persona en pocos segundos.',
         en: 'The most dangerous weapon is a gun, because everybody can pull a trigger and it is a weapon that can kill a person in a few seconds.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti el arma más peligrosa? (cuchillo)', en: 'What is the most dangerous weapon for you? (knife)' },
    a: { es: 'El arma más peligrosa es un cuchillo, porque todo el mundo tiene uno en la cocina. Los cuchillos son fáciles de usar, porque no hace falta estar entrenado para causar una herida mortal.',
         en: 'The most dangerous weapon is a knife, because everybody has one in their kitchen. Knives are easy to use, because you do not have to be trained to cause a lethal wound.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti la mejor arma? (pistola)', en: 'What is the best weapon for you? (pistol)' },
    a: { es: 'Para mí, la mejor arma es una pistola. Es muy útil en una situación peligrosa y es muy ligera, así que puedo llevarla fácilmente.',
         en: 'For me, the best weapon is a pistol. It is very useful in a dangerous situation and it is very light, so I can carry it easily.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti la mejor arma? (arma nuclear)', en: 'What is the best weapon for you? (nuclear weapon)' },
    a: { es: 'Creo que la mejor arma es un arma nuclear. Tiene una capacidad destructiva única y es esencial para prevenir un conflicto mayor.',
         en: 'I think the best weapon is a nuclear weapon. It has a unique destructive capacity and it is essential to prevent a bigger conflict.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es para ti la mejor arma? (fusil de francotirador)', en: 'What is the best weapon for you? (sniper gun)' },
    a: { es: 'En mi experiencia, la mejor arma es un fusil de francotirador, porque es una de las armas más precisas y muy efectiva a larga distancia. Si la usan personas entrenadas, ayuda a evitar que otros resulten heridos.',
         en: 'In my experience, the best weapon is a sniper gun because it is one of the most precise weapons and it is very effective at long distances. If this weapon is used by trained people, it helps prevent other people from being harmed.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Qué tipo de armas puedes usar como Guardia Civil?', en: 'Which kinds of weapons can you use as a Civil Guard?' },
    a: { es: 'Como Guardia Civil, puedo usar una pistola, un sable, un cuchillo y una granada.',
         en: 'As a Civil Guard, I can use a pistol, a sword, a knife and a grenade.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Puedes nombrar las partes de un arma de fuego?', en: 'Can you name some parts of a gun?' },
    a: { es: 'Sí, las partes de un arma son: cañón, alza, punto de mira, culata, cargador, gatillo, munición, cartucho y bala.',
         en: 'Yes, the parts of a gun are: barrel, rear sight, front sight, butt, magazine, trigger, ammunition, cartridge and bullet.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Deberían la policía y los guardias civiles ir armados? (a favor)', en: 'Should police and civil guards be armed? (in favour)' },
    a: { es: 'Sí, deberían ir armados porque tienen que proteger a la gente y garantizar la seguridad en general. Si llevan armas, responderán mejor ante una situación peligrosa.',
         en: 'Yes, they should be armed because they have to protect people and ensure security in general. If they carry guns, they will respond better to a dangerous situation.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Deberían la policía y los guardias civiles ir armados? (en contra)', en: 'Should police and civil guards be armed? (against)' },
    a: { es: 'No, no deberían ir armados, porque si hay armas involucradas, la probabilidad de accidentes aumenta. Es mejor usar métodos no letales para tratar con los criminales. La mejor manera de evitar una situación peligrosa es la prevención.',
         en: 'No, they should not be armed, because if there are weapons involved, the probability of accidents increases. It is better to use non-lethal methods to deal with criminals. The best way to avoid a dangerous situation is prevention.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Crees que es importante que un guardia civil tenga un arma? (sí)', en: 'Do you think it is important for a civil guard to have a gun? (yes)' },
    a: { es: 'Sí, creo que es importante tener un arma en nuestro trabajo, porque es lo principal que va a protegernos de los criminales y ayuda a proteger a los demás.',
         en: 'Yes, I think it is important to have a gun in our job, because it is the main thing that is going to protect us from criminals and helps protect others.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Crees que es importante que un guardia civil tenga un arma? (no)', en: 'Do you think it is important for a civil guard to have a gun? (no)' },
    a: { es: 'No, no creo que sea importante que los guardias civiles tengan armas, porque podemos tratar con los criminales de manera no letal y prevenir accidentes. El uso de armas debería ser siempre el último recurso.',
         en: 'No, I do not think it is important for civil guards to have guns, because we can deal with criminals in non-lethal ways and prevent accidents from happening. The use of guns should be the last resort.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Crees que la gente necesita armas?', en: 'Do you think people need guns?' },
    a: { es: 'Siempre depende de la situación. Ciertos tipos de personas necesitan armas para protección personal, para su trabajo o para deporte. En general, la gente no necesita armas en su vida diaria, a menos que las circunstancias lo requieran.',
         en: 'It always depends on the situation. Certain kinds of people need guns for self-protection or for their jobs or sport. In general, people do not need guns in their daily life, unless it is required by the circumstances.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: '¿Cuál es la diferencia entre un arma y una pistola? Pon un ejemplo de cada una.', en: 'What is the difference between a weapon and a gun? Give an example of each one.' },
    a: { es: 'Un arma es cualquier objeto que se puede usar para hacer daño a alguien. Por ejemplo, un cuchillo. Una pistola es un tipo de arma que dispara balas. Por ejemplo, una pistola está diseñada para hacer daño a las personas.',
         en: 'A weapon is an object that can be used to hurt someone. For example, a knife: it can be used to chop or to stab someone. A gun is a kind of weapon that shoots bullets. For example, a pistol: a gun is designed to hurt people.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: 'Describe una pistola.', en: 'Describe a pistol.' },
    a: { es: 'Una pistola es un arma de fuego pequeña que se puede usar con una o dos manos. Las partes son: cañón, alza, punto de mira, cargador y gatillo. Las pistolas las usan normalmente los guardias civiles y la policía.',
         en: 'A pistol is a small gun that can be used with one or two hands. The parts of a pistol are: barrel, rear sight, front sight, magazine and trigger, among others. Pistols are normally used by civil guards and police in their job.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: 'Dime 2 o 3 aspectos positivos del uso de armas.', en: 'Tell me 2 or 3 positive aspects about the use of guns.' },
    a: { es: 'Las armas se pueden usar para protección personal. Las armas también son útiles para la caza. Además, son esenciales para que la policía y las fuerzas de seguridad mantengan el orden.',
         en: 'Guns can be used for self-protection. Guns are also useful for hunting. They are also essential for the police and security forces to keep order.' } },

  { topic: { es: '🔫 Armas', en: '🔫 Weapons' },
    q: { es: 'Dime 2 o 3 aspectos negativos del uso de armas.', en: 'Tell me 2 or 3 negative aspects about the use of guns.' },
    a: { es: 'Las armas están relacionadas con la violencia y la delincuencia. Las armas están implicadas en accidentes mortales. Además, su uso indebido puede causar consecuencias irreversibles.',
         en: 'Guns are related to violence and crime. Guns are involved in lethal accidents. Also, their misuse can cause irreversible consequences.' } },

  // ── 🚨 ORGANISED CRIME ─────────────────────────────────
  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el crimen organizado?', en: 'What is organised crime?' },
    a: { es: 'El crimen organizado es un grupo de personas que trabajan juntas para cometer delitos graves con el fin de obtener dinero. Suelen operar en diferentes ciudades o países. Usan violencia, intimidación y corrupción para proteger sus actividades ilegales.',
         en: 'Organised crime is a group of people who work together to commit serious crimes in order to get money. They usually operate in different cities or countries. They use violence, intimidation and corruption to protect their illegal activities. They often try to look like a legal business. They traffic drugs, weapons and people.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el crimen organizado? (definición alternativa)', en: 'What is organised crime? (alternative definition)' },
    a: { es: 'El crimen organizado es una actividad delictiva llevada a cabo por grupos estructurados de criminales que cooperan para cometer actividades ilegales con el fin de obtener dinero, poder o influencia.',
         en: 'Organised crime is criminal activity carried out by structured groups of criminals that cooperate to commit illegal activities in order to obtain money, power or influence. These groups usually operate internationally and for long periods of time.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué delitos están relacionados con los grupos organizados?', en: 'What crimes are related to organised groups?' },
    a: { es: 'Algunos delitos relacionados con grupos organizados son: tráfico de drogas, trata de seres humanos, contrabando, blanqueo de dinero, tráfico de armas, secuestro, extorsión y chantaje, y falsificación de documentos.',
         en: 'Some crimes commonly related to organised groups are: drug dealing, human trafficking, smuggling, money laundering, arms trafficking, kidnapping for ransom, extortion and blackmail, and forgery and document falsification.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es la corrupción?', en: 'What is corruption?' },
    a: { es: 'La corrupción es un comportamiento deshonesto, especialmente por parte de personas con poder. Suele implicar soborno o fraude.',
         en: 'Corruption is dishonest behaviour, especially by people in power. It usually involves bribery or fraud.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es la intimidación?', en: 'What is intimidation?' },
    a: { es: 'La intimidación es el acto de asustar a alguien para hacerle hacer algo.',
         en: 'Intimidation is the act of frightening someone to make them do something.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el soborno?', en: 'What is bribery?' },
    a: { es: 'El soborno es el acto de dar u ofrecer dinero o regalos para hacer que alguien haga algo ilegal o deshonesto.',
         en: 'Bribery is the act of giving or offering money or gifts to make someone do something illegal or dishonest.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es la extorsión?', en: 'What is extortion?' },
    a: { es: 'La extorsión es un delito en el que alguien obtiene dinero o algo valioso usando amenazas o la fuerza.',
         en: 'Extortion is a crime in which someone gets money or something valuable by using threats or force.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el fraude?', en: 'What is fraud?' },
    a: { es: 'El fraude es un delito en el que alguien engaña a la gente para obtener dinero, por ejemplo creando empresas falsas o documentos falsos.',
         en: 'Fraud is a crime in which someone deceives people in order to get money, for example by creating fake companies or false documents.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es el blanqueo de dinero?', en: 'What is money laundering?' },
    a: { es: 'El blanqueo de dinero es un delito en el que alguien oculta dinero obtenido ilegalmente metiéndolo en bancos o negocios para que parezca legal.',
         en: 'Money laundering is a crime in which someone hides illegally obtained money by putting it into banks or businesses so that it looks legal.' } },

  { topic: { es: '🚨 Crimen', en: '🚨 Crime' },
    q: { es: '¿Qué es la trata de seres humanos?', en: 'What is human trafficking?' },
    a: { es: 'La trata de seres humanos es un delito en el que se traslada a personas a otro lugar y se les obliga a trabajar o a prestar servicios.',
         en: 'Human trafficking is a crime in which people are moved to another place and forced to work or provide services.' } },

  // ── 🦹 CRIMES & CRIMINALS ──────────────────────────────
  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué crímenes y criminales conoces?', en: 'What crimes and criminals do you know?' },
    a: { es: 'Algunos delitos y criminales que conozco son: robo en domicilio y ladrón, atraco y atracador, hurto en tiendas y ladrón de tiendas, carterismo y carterista, secuestro y secuestrador, tráfico de drogas y narcotraficante, chantaje y chantajista, incendio provocado y pirómano.',
         en: 'Some crimes and criminals I know are: burglary and burglar, mugging and mugger, shoplifting and shoplifter, pickpocketing and pickpocket, kidnapping and kidnapper, drug dealing and drug dealer, blackmail and blackmailer, arson and arsonist, forgery and forger, and smuggling and smuggler.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: 'Dime tres delitos y sus criminales.', en: 'Tell me three crimes and their criminals.' },
    a: { es: 'Primero, atraco y atracador: un atracador es alguien que ataca a la gente en la calle y le quita el dinero. Segundo, hurto en tiendas y ladrón de tiendas. Tercero, secuestro y secuestrador: un secuestrador es alguien que se lleva a una persona por la fuerza y suele exigir un rescate.',
         en: 'First, mugging and mugger: a mugger is someone who attacks people in the street and takes their money. Second, shoplifting and shoplifter: a shoplifter is someone who takes things from a shop without paying for them. Third, kidnapping and kidnapper: a kidnapper is someone who takes a person by force and usually demands a ransom.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un atracador (mugger)?', en: 'What does a mugger do?' },
    a: { es: 'Un atracador es alguien que ataca a la gente en la calle y les quita el dinero.',
         en: 'A mugger is someone who attacks people in the street and takes their money.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un ladrón de tiendas (shoplifter)?', en: 'What does a shoplifter do?' },
    a: { es: 'Un ladrón de tiendas es alguien que se lleva cosas de una tienda sin pagar por ellas.',
         en: 'A shoplifter is someone who takes things from a shop without paying for them.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un secuestrador de aviones (hijacker)?', en: 'What does a hijacker do?' },
    a: { es: 'Un secuestrador de aviones es alguien que obliga al piloto a darle el control de un avión en mitad de un vuelo.',
         en: 'A hijacker is someone who forces the pilot to give them control of a plane in the middle of a journey.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un carterista (pickpocket)?', en: 'What does a pickpocket do?' },
    a: { es: "Un carterista es alguien que saca cosas del bolsillo o del bolso de otra persona.",
         en: "A pickpocket is someone who takes things out of somebody's pocket or bag." } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un joyrider (ladrón de coches imprudente)?', en: 'What does a joyrider do?' },
    a: { es: 'Un joyrider es alguien que roba un coche y lo conduce a gran velocidad.',
         en: 'A joyrider is someone who steals a car and drives it fast.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué hace un ladrón de viviendas (burglar)?', en: 'What does a burglar do?' },
    a: { es: 'Un ladrón de viviendas es alguien que entra en las casas para robar.',
         en: 'A burglar is someone who breaks into houses to steal.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el atraco (mugging)?', en: 'What is mugging?' },
    a: { es: 'Es un delito que consiste en atacar a la gente en la calle para quitarles el dinero.',
         en: 'It is a crime that consists of attacking people in the street to take their money.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el hurto en tiendas (shoplifting)?', en: 'What is shoplifting?' },
    a: { es: 'Es la acción de robar en una tienda sin pagar los artículos.',
         en: 'It is the action of stealing from a shop without paying for the items.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el secuestro de vehículos (hijacking)?', en: 'What is hijacking?' },
    a: { es: 'Consiste en tomar el control de un vehículo por la fuerza.',
         en: 'It consists of taking control of a vehicle by force.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el carterismo (pickpocketing)?', en: 'What is pickpocketing?' },
    a: { es: "Es un delito que consiste en robar del bolsillo o del bolso de alguien.",
         en: "It is a crime that consists of stealing from someone's pocket or bag." } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el joyriding?', en: 'What is joyriding?' },
    a: { es: 'Es la acción de robar un coche y conducirlo a gran velocidad por diversión.',
         en: 'It is the action of stealing a car and driving it fast for fun.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el robo en domicilio (burglary)?', en: 'What is burglary?' },
    a: { es: 'Consiste en entrar en las casas para robar, normalmente cuando no hay nadie dentro.',
         en: 'Burglary is a crime that consists of breaking into a house or building in order to steal something, usually when nobody is inside.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el robo con violencia (robbery)?', en: 'What is robbery?' },
    a: { es: 'El robo con violencia es un delito que consiste en sustraer algo usando la fuerza o amenazas.',
         en: 'Robbery is a crime that consists of stealing using force or threats.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el hurto (theft)?', en: 'What is theft?' },
    a: { es: 'El hurto es el delito de robar cosas sin usar la fuerza.',
         en: 'Theft is the crime of stealing things without using force.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el vandalismo?', en: 'What is vandalism?' },
    a: { es: 'El vandalismo es el delito de destruir o dañar propiedades de manera intencionada.',
         en: 'Vandalism is the crime of intentionally destroying or damaging property.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el secuestro (kidnapping)?', en: 'What is kidnapping?' },
    a: { es: 'El secuestro es el delito de llevarse a alguien por la fuerza y normalmente exigir un rescate.',
         en: 'Kidnapping is the crime of taking someone by force and usually demanding a ransom.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el chantaje (blackmail)?', en: 'What is blackmail?' },
    a: { es: 'El chantaje es el delito de exigir dinero a alguien a cambio de mantener un secreto.',
         en: 'Blackmail is the crime of demanding money to keep a secret.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el asesinato (murder)?', en: 'What is murder?' },
    a: { es: 'El asesinato es el delito de matar a otra persona de manera intencionada y premeditada.',
         en: 'Murder is the crime of intentionally and deliberately killing another person.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el contrabando (smuggling)?', en: 'What is smuggling?' },
    a: { es: 'El contrabando es el delito de mover mercancías o personas de un país a otro de manera ilegal.',
         en: 'Smuggling is the crime of moving goods or people from one country to another illegally.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el tráfico de drogas (drug dealing)?', en: 'What is drug dealing?' },
    a: { es: 'El tráfico de drogas es el delito de vender sustancias ilegales.',
         en: 'Drug dealing is the crime of selling illegal substances.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es la falsificación (forgery)?', en: 'What is forgery?' },
    a: { es: 'La falsificación es el delito de crear documentos o dinero falsos.',
         en: 'Forgery is the crime of making fake documents or money.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el incendio provocado (arson)?', en: 'What is arson?' },
    a: { es: 'El incendio provocado es el delito de prender fuego a una propiedad de manera intencionada.',
         en: 'Arson is the crime of intentionally setting fire to property.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el exceso de velocidad (speeding)?', en: 'What is speeding?' },
    a: { es: 'El exceso de velocidad es la infracción de conducir por encima del límite de velocidad establecido.',
         en: 'Speeding is the offence of driving above the established speed limit.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el terrorismo?', en: 'What is terrorism?' },
    a: { es: 'El terrorismo es el uso de la violencia, por ejemplo poner bombas, por motivos políticos o ideológicos.',
         en: 'Terrorism is the use of violence, for example setting off bombs, for political or ideological reasons.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es la estafa (swindle)?', en: 'What is a swindle?' },
    a: { es: 'La estafa es el delito de engañar a alguien para quitarle su dinero.',
         en: 'A swindle is the crime of deceiving someone to take their money.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es la violación (rape)?', en: 'What is rape?' },
    a: { es: 'La violación es el delito de forzar a alguien a tener relaciones sexuales.',
         en: 'Rape is the crime of forcing someone to have sex.' } },

  { topic: { es: '🦹 Delitos', en: '🦹 Crimes' },
    q: { es: '¿Qué es el homicidio (homicide)?', en: 'What is homicide?' },
    a: { es: 'El homicidio es el delito de matar a otra persona.',
         en: 'Homicide is the crime of killing another person.' } },

  // ── 🏠 BURGLARY ────────────────────────────────────────
  { topic: { es: '🏠 Robo en domicilio', en: '🏠 Burglary' },
    q: { es: '¿Está aumentando o disminuyendo el robo en viviendas donde vives? ¿Por qué?', en: 'Is burglary increasing or decreasing where you live? Why?' },
    a: { es: 'En mi opinión, el robo en viviendas está disminuyendo ligeramente, porque muchas casas ahora tienen cámaras de seguridad, sistemas de alarma y puertas blindadas. Además, la policía ha aumentado las patrullas y la vigilancia, lo que disuade a los ladrones.',
         en: 'In my opinion, burglary is slightly decreasing where I live because many houses now have security cameras, alarm systems and reinforced doors. Moreover, the police have increased patrols and surveillance, which discourages burglars from committing this crime.' } },

  { topic: { es: '🏠 Robo en domicilio', en: '🏠 Burglary' },
    q: { es: '¿Qué consejos darías a la gente para proteger su casa?', en: 'What advice could you give to people to protect their home?' },
    a: { es: 'La gente puede seguir varios consejos para proteger sus casas. Primero, instalar un sistema de alarma. Segundo, usar puertas resistentes y cerraduras de seguridad. Tercero, no dejar las ventanas abiertas cuando estás fuera. Cuarto, instalar cámaras de seguridad. Quinto, pedir a un vecino que vigile la casa cuando estás de vacaciones.',
         en: 'People can follow several tips to protect their homes. First, install a security alarm system. Second, use strong doors and security locks. Third, do not leave windows open when you are away. Fourth, install security cameras or motion sensors. Fifth, ask a neighbour to watch your house when you are on holiday. Sixth, avoid sharing your travel plans on social media.' } },

  // ── 🙋 PERSONALITY ─────────────────────────────────────
  { topic: { es: '🙋 Personalidad', en: '🙋 Personality' },
    q: { es: '¿Cómo eres? / ¿Cómo es tu personalidad?', en: 'What are you like? / How would you describe your personality?' },
    a: { es: 'Soy una persona trabajadora, tranquila y profesional. Soy responsable, disciplinado y muy organizado en mi trabajo diario. Además, soy amable y me llevo bien con la gente.',
         en: 'I am a hard-working, calm and professional person. I am responsible, disciplined and very organised in my daily work. In addition, I am friendly and I get along well with people.' } },

  { topic: { es: '🙋 Personalidad', en: '🙋 Personality' },
    q: { es: '¿Cómo es él/ella? / Descríbeme su personalidad.', en: 'What is he/she like? / How would you describe his/her personality?' },
    a: { es: 'Él/Ella es muy valiente, abierto/a y disciplinado/a. También es una persona responsable y comprometida con su trabajo, y siempre intenta ayudar a los demás.',
         en: 'He/She is very brave, outgoing and disciplined. He/She is also a responsible person, committed to his/her work, and always tries to help others.' } },

  { topic: { es: '🙋 Personalidad', en: '🙋 Personality' },
    q: { es: '¿Qué tipo de persona eres?', en: 'What kind of person are you?' },
    a: { es: 'Soy una persona honesta, comprometida y trabajadora. Me considero leal, paciente y con sentido del deber, cualidades muy importantes para un Guardia Civil.',
         en: 'I am an honest, committed and hard-working person. I consider myself loyal, patient and with a sense of duty, qualities that are very important for a Civil Guard.' } },

  { topic: { es: '🙋 Personalidad', en: '🙋 Personality' },
    q: { es: '¿Cuáles son tus mejores cualidades?', en: 'What are your best qualities?' },
    a: { es: 'Mis mejores cualidades son la responsabilidad, la disciplina y la honestidad. También soy una persona paciente y empática, y trabajo bien en equipo.',
         en: 'My best qualities are responsibility, discipline and honesty. I am also a patient and empathetic person, and I work well in a team.' } },

  // ── 👤 APPEARANCE ──────────────────────────────────────
  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: '¿Cuál es la diferencia entre "What is he like?" y "What does he look like?"', en: 'What is the difference between "What is he like?" and "What does he look like?"' },
    a: { es: 'La pregunta "what is he like?" se refiere a la personalidad y el carácter. Por ejemplo: es tranquilo, valiente y responsable. La pregunta "what does he look like?" se refiere a la apariencia física. Por ejemplo: es alto y delgado con el pelo corto y castaño.',
         en: 'The question what is he like refers to personality and character. For example he is calm, brave and responsible. The question what does he look like refers to physical appearance. For example he is tall and slim with short brown hair.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: '¿Cómo eres físicamente? / Descríbete físicamente.', en: 'What do you look like? / Can you describe yourself physically?' },
    a: { es: 'Soy alto y delgado. Tengo el pelo corto y castaño, y los ojos azules. Soy de complexión atlética y mido aproximadamente 1 metro 80.',
         en: 'I am tall and thin. I have short brown hair and blue eyes. I am of athletic build and I am approximately 1 metre 80 tall.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: '¿Tienes algún rasgo distintivo?', en: 'Do you have any distinctive features?' },
    a: { es: 'Sí, tengo algunos rasgos distintivos. Por ejemplo, tengo una pequeña cicatriz en la mano y llevo barba corta. Estos son los rasgos más fáciles de reconocer en mí.',
         en: 'Yes, I have some distinctive features. For example, I have a small scar on my hand and I wear a short beard. These are the easiest features to recognise on me.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: '¿Cómo describirías a una persona físicamente? (regla general)', en: 'How would you describe a person physically? (general rule)' },
    a: { es: 'Una persona se puede describir por su estatura, complexión, color y longitud del pelo, color de ojos, edad aproximada y cualquier rasgo distintivo como una barba, tatuajes o pecas.',
         en: 'A person can be described by their height, build, hair colour and length, eye colour, approximate age and any distinctive features such as a beard, tattoos or freckles.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: 'Describe la siguiente foto: hombre rubio de mediana edad con perilla.', en: 'Describe the following picture: middle-aged fair-haired man with a goatee.' },
    a: { es: 'Es de complexión delgada y parece de mediana edad. Es rubio, con el pelo liso y peinado hacia atrás, ligeramente canoso por los lados. Es un hombre de ojos azules, con perilla y bigote ligeros. En cuanto a su altura, parece medir alrededor de 1 metro 80.',
         en: 'He is of slender build and appears to be middle-aged. He is fair-haired with straight, slicked-back hair that is slightly graying at the sides. He is a blue-eyed man who is currently unshaven, with stubble, featuring a light goatee and moustache. Regarding his height, he looks to be about 1 metre 80.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: 'Describe la siguiente foto: adolescente morena con trenzas y pecas.', en: 'Describe the following picture: dark-haired teenage girl with braids and freckles.' },
    a: { es: 'Es de complexión delgada y tiene la piel clara. Es morena, con el pelo largo y negro recogido en dos trenzas y un flequillo. Es una chica de ojos oscuros y tiene pecas visibles por la nariz y las mejillas. Parece estar en la adolescencia.',
         en: 'She is of slender build and has pale skin. She is dark-haired with long, black hair styled in two braids with a fringe. She is a dark-eyed girl and, as a distinguishing feature, she has visible freckles across her nose and cheeks. Regarding her age, she appears to be in her teens, and her height is approximately 1 metre 55.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: 'Describe la siguiente foto: hombre caucásico rubio sin barba.', en: 'Describe the following picture: fair-haired Caucasian man, clean shaven.' },
    a: { es: 'Es caucásico y de complexión delgada. Es rubio, con el pelo corto y liso, que se está aclarando por la parte superior. Es un hombre de ojos azules y está afeitado. Parece tener cuarenta y muchos o ser de mediana edad.',
         en: 'He is Caucasian and has a slender build. He is fair-haired with straight, short hair that is thinning on top. He is a blue-eyed man and is clean shaven. Regarding his age, he appears to be in his late forties or middle-aged. His height is approximately 1 metre 75.' } },

  { topic: { es: '👤 Apariencia', en: '👤 Appearance' },
    q: { es: 'Describe la siguiente foto: mujer caucásica rubia con pelo corto ondulado.', en: 'Describe the following picture: fair-haired Caucasian woman with short wavy hair.' },
    a: { es: 'Es caucásica y de complexión delgada. Es rubia, con el pelo corto y ondulado que le llega a la mandíbula. Es una mujer de ojos azules y parece tener cuarenta y muchos o ser de mediana edad.',
         en: 'She is Caucasian and of slender build. She is fair-haired with wavy, short hair that reaches her jawline. She is a blue-eyed woman and appears to be in her late forties or middle-age. Regarding her height, she looks to be about 1 metre 68.' } },
];

/* ════════════════════ PRONUNCIATION HINTS ════════════════════ */

const HINTS = {
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
  ransom:'RAN-sum', valuable:'VAL-yoo-uh-bul',
  surveillance:'ser-VAY-luns',
  reinforced:'ree-in-FORST', patrols:'puh-TROLZ',
  society:'suh-SY-ih-tee', ensure:'en-SHOOR',
  professional:'pruh-FESH-uh-nul', professionals:'pruh-FESH-uh-nulz',
  trained:'TRAYND', lethal:'LEE-thul', wound:'WOOND',
  responsible:'rih-SPON-sih-bul', responsibility:'rih-spon-suh-BIL-ih-tee',
  discipline:'DIS-uh-plin', disciplined:'DIS-uh-plind',
  honest:'ON-ist', honesty:'ON-ih-stee',
  committed:'kuh-MIT-id', loyal:'LOY-ul',
  patient:'PAY-shunt', empathetic:'em-puh-THET-ik',
  appearance:'uh-PEER-uns', physical:'FIZ-ih-kul',
  height:'HYT', slender:'SLEN-der',
  freckles:'FREK-ulz', braids:'BRAYDZ',
  caucasian:'kaw-KAY-zhun', stubble:'STUB-ul',
  goatee:'go-TEE', moustache:'MUS-tash',
  jawline:'JAW-lyn', distinctive:'dis-TINK-tiv',
  thinning:'THIN-ing', graying:'GRAY-ing',
  unshaven:'un-SHAY-vun', beard:'BEERD',
  tattoo:'ta-TOO', tattoos:'ta-TOOZ',
  fringe:'FRINJ', defend:'di-FEND',
  protect:'pruh-TEKT', carry:'KAR-ee',
  regulation:'reg-yoo-LAY-shun', essential:'ih-SEN-shul',
  behaviour:'bih-HAYV-yer', violence:'VY-uh-luns',
  dishonest:'dis-ON-ist', attacker:'uh-TAK-er',
  threats:'THRETS', measures:'MEZH-erz',
  neighbour:'NAY-ber', holiday:'HOL-ih-day',
  influence:'IN-floo-uns', cooperate:'ko-OP-uh-rayt',
  internationally:'in-ter-NASH-uh-nuh-lee',
  apprehend:'ap-ri-HEND', suspect:'SUS-pekt',
  warrant:'WOR-unt', offence:'uh-FENS', offences:'uh-FENS-iz',
  statement:'STAYT-munt', seize:'SEEZ', perjury:'PER-juh-ree',
  curfew:'KER-fyoo', smuggler2:'SMUG-ler',
  discourage:'dis-KUR-ij', committing:'kuh-MIT-ing',
};

/* ════════════════════ STOP WORDS ════════════════════ */

const STOP_WORDS = new Set([
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

/* ════════════════════ UTILITIES ════════════════════ */

function normText(str) {
  return str.toLowerCase().replace(/[^a-z\s]/g, '').trim();
}

function calcScore(userText, correctText) {
  const userWords    = normText(userText).split(/\s+/).filter(Boolean);
  const correctWords = normText(correctText).split(/\s+/).filter(Boolean);
  const correctSet   = new Set(correctWords);
  const userSet      = new Set(userWords);

  const keyWords = correctWords.filter(w => !STOP_WORDS.has(w));

  // Fuzzy match: exact OR levenshtein-close (handles plural/tense/transcription errors)
  const fuzzyMatch = (kw) => {
    if (userSet.has(kw)) return true;
    if (kw.length <= 3) return false;
    const maxDist = kw.length >= 7 ? 2 : 1;
    for (const uw of userWords) {
      if (Math.abs(uw.length - kw.length) <= maxDist + 1 && levenshtein(kw, uw) <= maxDist) return true;
    }
    return false;
  };

  const matched    = keyWords.filter(fuzzyMatch);
  const matchedSet = new Set(matched);
  const score      = keyWords.length ? Math.round((matched.length / keyWords.length) * 100) : 0;

  const cls   = score >= 75 ? 'great' : score >= 45 ? 'good' : 'low';
  const emoji = score >= 75 ? '🌟'    : score >= 45 ? '👍'    : '💪';

  const missedHints = keyWords
    .filter(w => !matchedSet.has(w) && HINTS[w])
    .slice(0, 6)
    .map(w => ({ word: w, hint: HINTS[w] }));

  return { score, cls, emoji, userWords, correctWords, userSet, correctSet, keyWords, matched, matchedSet, missedHints };
}

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

const SPANISH_PRON_MAP = [
  ['tion','shon'],['sion','shon'],['ought','ot'],['augh','af'],
  ['ough','of'],['eigh','ei'],['tch','ch'],['ph','f'],
  ['th','z'],['sh','sh'],['ch','ch'],['ck','k'],
  ['wh','gu'],['qu','cu'],['ng','ng'],
  ['ee','i'],['ea','i'],['oo','u'],['ou','au'],
  ['ai','ei'],['ay','ei'],['oa','ou'],['oi','oi'],
  ['oy','oi'],['ie','ai'],
  ['a','a'],['e','e'],['i','i'],['o','o'],
  ['u','a'],['y','i'],['j','y'],['v','v'],
  ['w','u'],['z','s'],['h',''],['c','k'],
  ['x','ks'],['r','r'],
];

function buildEasyPron(text) {
  let result = text.toLowerCase();
  for (const [from, to] of SPANISH_PRON_MAP) {
    result = result.split(from).join(to);
  }
  result = result.replace(/(.)\1+/g, '$1');
  return result;
}

function buildPhonetic(text) {
  const lower = text.toLowerCase().trim();
  if (HINTS[lower]) return '/' + HINTS[lower].toLowerCase().replace(/-/g, ' · ') + '/';
  const words = lower.split(/\s+/);
  if (words.length > 1) {
    const parts = words.map(w => {
      const clean = w.replace(/[^a-z]/g, '');
      return HINTS[clean] ? HINTS[clean].toLowerCase().replace(/-/g, '·') : clean;
    });
    return '/' + parts.join(' ') + '/';
  }
  return '/' + buildEasyPron(lower) + '/';
}

/* ════════════════════ TTS ════════════════════ */

const _synth = window.speechSynthesis || null;
let _cachedVoice = null;
let _keepAlive = null;

function _getBestVoice() {
  if (!_synth) return null;
  if (_cachedVoice) return _cachedVoice;
  const voices = _synth.getVoices();
  if (!voices.length) return null;
  const PREF = [
    'Google US English',
    'Microsoft Aria Online (Natural) - English (United States)',
    'Microsoft Jenny Online (Natural) - English (United States)',
    'Microsoft Zira - English (United States)',
    'Samantha','Karen','Moira',
    'Google UK English Female',
  ];
  for (const name of PREF) {
    const v = voices.find(v => v.name === name);
    if (v) { _cachedVoice = v; return v; }
  }
  return voices.find(v => v.lang === 'en-US') ||
         voices.find(v => v.lang.startsWith('en')) ||
         voices[0] || null;
}

if (_synth && _synth.getVoices().length === 0) {
  _synth.onvoiceschanged = function() { _getBestVoice(); _synth.onvoiceschanged = null; };
} else if (_synth) {
  _getBestVoice();
}

function ttsSpeak(text, rate, onEnd) {
  if (!_synth) return;
  try { _synth.cancel(); } catch(_) {}
  clearInterval(_keepAlive);

  const utt = new SpeechSynthesisUtterance(text);
  utt.lang  = 'en-US';
  utt.rate  = Math.max(0.5, Math.min(2.0, rate || 1.0));
  utt.pitch = 1.05;
  utt.volume = 1;

  const go = () => {
    const v = _getBestVoice();
    if (v) utt.voice = v;
    utt.rate = Math.max(0.5, Math.min(2.0, rate || 1.0));
    _keepAlive = setInterval(() => {
      if (_synth.speaking && _synth.paused) _synth.resume();
    }, 8000);
    utt.onend   = () => { clearInterval(_keepAlive); if (onEnd) onEnd(); };
    utt.onerror = () => { clearInterval(_keepAlive); if (onEnd) onEnd(); };
    try { _synth.speak(utt); } catch(e) { console.warn('TTS:', e); }
  };

  if (_synth.getVoices().length > 0) {
    go();
  } else {
    let fired = false;
    const fb = setTimeout(() => { if (!fired) { fired = true; go(); } }, 800);
    _synth.onvoiceschanged = () => {
      if (fired) return;
      fired = true;
      clearTimeout(fb);
      _synth.onvoiceschanged = null;
      go();
    };
  }
}

function ttsStop() {
  if (!_synth) return;
  try { _synth.cancel(); } catch(_) {}
  clearInterval(_keepAlive);
}

/* ════════════════════ useSR HOOK ════════════════════ */
/*
 * Reconocimiento de voz multi-navegador.
 *
 * Estrategia por navegador:
 *  - Chrome / Edge / Opera (desktop): API nativa, modo `continuous = true`,
 *    interimResults, multi-alternativas con selección por confianza.
 *  - Safari (macOS, iOS, iPadOS): API webkit, modo single-shot con auto-restart
 *    porque `continuous` es inestable en iOS y a menudo cierra tras una pausa.
 *  - Brave: misma API que Chrome pero el servicio de Google está bloqueado por
 *    defecto. Se detecta el error `network`/`service-not-allowed` y se reporta
 *    al usuario con un mensaje específico.
 *  - Firefox: no soporta Web Speech API → isSupported = false.
 *
 *  Mejoras de precisión:
 *   - Selección de alternativas por confianza real (no por longitud).
 *   - Deduplicación de finales repetidos (Safari/iOS y Chrome auto-restart).
 *   - Capitalización/limpieza ligera tras el final.
 *   - Timer de finalización generoso (1500 ms) para no truncar al hablante
 *     lento, configurable vía start({ finalizeMs }).
 */

const SR_API = window.SpeechRecognition || window.webkitSpeechRecognition;

const UA = (navigator.userAgent || '').toLowerCase();
const IS_IOS      = /iphone|ipad|ipod/.test(UA) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const IS_SAFARI   = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);
const IS_FIREFOX  = /firefox|fxios/.test(UA);
const IS_EDGE     = /\bedg\//.test(UA);
const IS_CHROME   = /chrome|crios/.test(UA) && !IS_EDGE;
const IS_ANDROID  = /android/.test(UA);
// Brave: navigator.brave.isBrave() es asíncrono; detectamos best-effort.
const IS_BRAVE    = !!(navigator.brave && typeof navigator.brave.isBrave === 'function');

// Safari/iOS: continuous=true rompe a menudo. Usamos single-shot + auto-restart.
const USE_CONTINUOUS = !IS_IOS && !IS_SAFARI;

function _normalizeFinal(text) {
  if (!text) return '';
  // Colapsar espacios, recortar y arreglar capitalización inicial.
  let t = text.replace(/\s+/g, ' ').trim();
  // Eliminar repeticiones inmediatas de la misma palabra ("the the" → "the").
  t = t.replace(/\b(\w+)(\s+\1\b)+/gi, '$1');
  if (t.length) t = t.charAt(0).toUpperCase() + t.slice(1);
  return t;
}

function _pickAlternative(res) {
  // Elige la alternativa con mayor `confidence`. Si todas tienen 0
  // (Safari suele devolver 0), se queda con la primera (la del motor).
  let best = res[0];
  let bestConf = res[0].confidence || 0;
  for (let j = 1; j < res.length; j++) {
    const c = res[j].confidence || 0;
    if (c > bestConf) { bestConf = c; best = res[j]; }
  }
  return best.transcript || '';
}

function useSR() {
  const { useState, useEffect, useRef } = React;

  const srRef     = useRef(null);
  const stateRef  = useRef({
    isRecording: false,
    accumulated: '',     // texto final acumulado
    interim:     '',     // último parcial
    finalized:   false,
    lastFinal:   '',     // último chunk final, para dedup
    finalizeMs:  1500,
  });
  const timersRef = useRef({ restart: null, finalize: null, watchdog: null });
  const cbRef     = useRef({ onFinalize: null, onError: null });

  const [liveText, setLiveText] = useState('');
  const [recState, setRecState] = useState('idle'); // idle | listening | error

  function safeStart() {
    if (!srRef.current || !stateRef.current.isRecording) return;
    try { srRef.current.start(); }
    catch (e) {
      const msg = String(e && e.message || '');
      // "already started" se ignora; otros errores se loguean.
      if (!/already/i.test(msg)) console.warn('SR start:', msg);
    }
  }

  function getBest() {
    const f = stateRef.current.accumulated.trim();
    return _normalizeFinal(f || stateRef.current.interim.trim());
  }

  function doFinalize() {
    const s = stateRef.current;
    if (s.finalized) return;
    s.finalized = true;
    clearTimeout(timersRef.current.finalize);
    clearTimeout(timersRef.current.watchdog);
    setRecState('idle');
    const text = getBest();
    if (cbRef.current.onFinalize) cbRef.current.onFinalize(text);
  }

  function buildSR() {
    if (!SR_API) return null;
    const r = new SR_API();
    r.lang            = 'en-US';
    r.interimResults  = true;
    r.continuous      = USE_CONTINUOUS;
    r.maxAlternatives = 5;

    r.onresult = (e) => {
      let newInterim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res     = e.results[i];
        const chunk   = _pickAlternative(res);
        if (res.isFinal) {
          // Evita duplicar el mismo final (ocurre en Safari y tras auto-restart).
          const clean = chunk.trim();
          if (clean && clean !== stateRef.current.lastFinal) {
            stateRef.current.accumulated += clean + ' ';
            stateRef.current.lastFinal    = clean;
          }
        } else {
          newInterim += chunk;
        }
      }
      stateRef.current.interim = newInterim;
      const live = _normalizeFinal((stateRef.current.accumulated + newInterim).trim());
      setLiveText(live);
      setRecState('listening');
    };

    r.onerror = (e) => {
      const err = e && e.error;
      clearTimeout(timersRef.current.restart);

      // no-speech: el motor no detectó voz. Reintentar mientras grabe.
      if (err === 'no-speech' || err === 'audio-capture') {
        if (stateRef.current.isRecording) {
          timersRef.current.restart = setTimeout(safeStart, 350);
        }
        return;
      }
      // aborted: provocado por stop()/abort(). No es un error real.
      if (err === 'aborted') return;

      // network / service-not-allowed: típicos en Brave (Google blocked) o
      // sin conexión. not-allowed: el usuario denegó el micrófono.
      stateRef.current.isRecording = false;
      setRecState('error');
      if (cbRef.current.onError) cbRef.current.onError(err || 'unknown');
    };

    r.onend = () => {
      clearTimeout(timersRef.current.restart);
      if (stateRef.current.isRecording) {
        // En Safari/iOS y Chrome con `continuous=false` la sesión se cierra al
        // final de cada frase. Reabrimos rápido para no perder palabras.
        timersRef.current.restart = setTimeout(safeStart, IS_IOS ? 120 : 180);
        return;
      }
      doFinalize();
    };

    return r;
  }

  function start(onFinalize, onError, opts) {
    if (!SR_API) {
      if (onError) onError('sr-not-supported');
      return false;
    }
    cbRef.current.onFinalize = onFinalize;
    cbRef.current.onError    = onError;
    stateRef.current = {
      isRecording: true,
      accumulated: '',
      interim:     '',
      finalized:   false,
      lastFinal:   '',
      finalizeMs:  (opts && opts.finalizeMs) || 1500,
    };
    setLiveText('');
    setRecState('listening');
    clearTimeout(timersRef.current.restart);
    clearTimeout(timersRef.current.finalize);
    clearTimeout(timersRef.current.watchdog);

    try { srRef.current && srRef.current.abort(); } catch(_) {}
    srRef.current = buildSR();
    // Pequeño retardo: evita "InvalidStateError" si veníamos de un abort().
    timersRef.current.restart = setTimeout(safeStart, 250);
    return true;
  }

  function stop(onFinalize) {
    if (onFinalize) cbRef.current.onFinalize = onFinalize;
    stateRef.current.isRecording = false;
    clearTimeout(timersRef.current.restart);

    // Si solo tenemos interim, lo subimos como visible mientras esperamos final.
    const interim = stateRef.current.interim.trim();
    if (!stateRef.current.accumulated.trim() && interim) {
      setLiveText(_normalizeFinal(interim));
    }
    try { srRef.current && srRef.current.stop(); } catch(_) {}

    // Esperamos a que el motor entregue el último final; si tarda demasiado,
    // forzamos con lo que tengamos.
    clearTimeout(timersRef.current.finalize);
    timersRef.current.finalize = setTimeout(doFinalize, stateRef.current.finalizeMs);
    // Watchdog extra: si el motor no llama a `onend`, finalizamos igualmente.
    clearTimeout(timersRef.current.watchdog);
    timersRef.current.watchdog = setTimeout(doFinalize, stateRef.current.finalizeMs + 2000);
  }

  function reset() {
    stateRef.current = {
      isRecording: false, accumulated: '', interim: '',
      finalized: false, lastFinal: '', finalizeMs: 1500,
    };
    clearTimeout(timersRef.current.restart);
    clearTimeout(timersRef.current.finalize);
    clearTimeout(timersRef.current.watchdog);
    try { srRef.current && srRef.current.abort(); } catch(_) {}
    srRef.current = null;
    setLiveText('');
    setRecState('idle');
  }

  // Pausar/reanudar al cambiar la pestaña — algunos navegadores cortan audio
  // en background y no notifican; al volver re-arrancamos.
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) return;
      if (stateRef.current.isRecording && srRef.current) {
        clearTimeout(timersRef.current.restart);
        timersRef.current.restart = setTimeout(safeStart, 200);
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => () => { reset(); }, []);

  return {
    liveText, recState,
    start, stop, reset,
    isSupported: !!SR_API,
    browser: { IS_IOS, IS_SAFARI, IS_FIREFOX, IS_EDGE, IS_CHROME, IS_ANDROID, IS_BRAVE },
  };
}

/* expose */
Object.assign(window, {
  QUESTIONS, HINTS, STOP_WORDS,
  normText, calcScore, levenshtein,
  buildEasyPron, buildPhonetic,
  ttsSpeak, ttsStop, useSR, SR_API,
});
