/* ────────────────────────────────────────────────────────────────
   Efemérides · Guardia Civil
   - Fechas verificadas (aniversarios reales) → coinciden con el día.
   - Resto de días → tema rotatorio (sin afirmar "hoy hace X años").
   ──────────────────────────────────────────────────────────────── */

/* Aniversarios con fecha exacta. Clave "MM-DD". */
const EPH_ANNIVERSARIES = {
  '01-12': {
    year: 1942,
    tag: 'Anniversario',
    title: 'Se promulga la Ley 28/1942 de reorganización del Cuerpo.',
    text: 'En plena posguerra, la Ley de 15 de marzo de 1940 y posteriores disposiciones fijan la estructura moderna del Cuerpo. La Guardia Civil queda definida como instituto armado de naturaleza militar, dependiente para sus servicios del Ministerio de la Gobernación, manteniendo su carácter castrense en organización, disciplina y régimen.',
    footer: ['Reorganización', 'Posguerra'],
  },
  '02-08': {
    year: 1913,
    tag: 'Patrona',
    title: 'La Virgen del Pilar es declarada Patrona del Cuerpo.',
    text: 'Por Real Orden de 8 de febrero de 1913 se nombra oficialmente a la Virgen del Pilar Patrona de la Guardia Civil. Desde ese día, el 12 de octubre se celebra como festividad mayor en cuarteles de toda España y en cuantos lugares del mundo despliegan unidades del Cuerpo.',
    footer: ['Real Orden 1913', 'Virgen del Pilar'],
  },
  '03-21': {
    year: 1988,
    tag: 'Naturaleza',
    title: 'Nace el SEPRONA.',
    text: 'El Servicio de Protección de la Naturaleza se constituye en 1988 como unidad especializada en la persecución de delitos contra el medio ambiente, fauna, flora y patrimonio natural. Es hoy una referencia internacional, con presencia en operaciones contra el tráfico ilegal de especies y el expolio arqueológico.',
    footer: ['SEPRONA · 1988', 'Medio ambiente'],
  },
  '03-28': {
    year: 1844,
    tag: 'Acta fundacional',
    title: 'Se crea la Guardia Civil por Real Decreto.',
    text: 'El 28 de marzo de 1844, la reina Isabel II firma el Real Decreto que crea un cuerpo especial de fuerza armada de Infantería y Caballería con la denominación de Guardias Civiles, encargado de proteger personas y propiedades. Nace así la institución armada de naturaleza militar más antigua aún en activo en España.',
    footer: ['Real Decreto de 1844', 'Madrid'],
  },
  '05-13': {
    year: 1844,
    tag: 'Reorganización',
    title: 'Real Decreto de reorganización del Cuerpo.',
    text: 'El 13 de mayo de 1844, un segundo Real Decreto refunda y consolida el cuerpo creado dos meses antes, encomendando al II Duque de Ahumada su organización. Es la fecha que se considera punto de partida operativo del Cuerpo tal como llegó a desplegarse por toda España.',
    footer: ['13 de mayo de 1844', 'Duque de Ahumada'],
  },
  '06-23': {
    year: 1959,
    tag: 'Tráfico',
    title: 'La Agrupación de Tráfico se incorpora al Cuerpo.',
    text: 'La vigilancia y regulación del tráfico en vías interurbanas pasa formalmente a la Guardia Civil. Desde entonces, el motorista de Tráfico —casco blanco, motocicleta— se convierte en una de las imágenes más reconocibles de la institución.',
    footer: ['Agrupación de Tráfico', '1959'],
  },
  '07-25': {
    year: 1989,
    tag: 'Mujer en el Cuerpo',
    title: 'Las primeras 199 mujeres ingresan en la Guardia Civil.',
    text: 'En 1988 se publica la convocatoria que abre el Cuerpo a la mujer. En 1989 las primeras 199 aspirantes ingresan como guardias, iniciando un proceso de integración que culminaría con plena igualdad de acceso a todas las escalas y especialidades.',
    footer: ['1988 · Convocatoria', '1989 · Primer ingreso'],
  },
  '10-09': {
    year: 1844,
    tag: 'Cartilla',
    title: 'Se promulga la Cartilla del Guardia Civil.',
    text: 'Texto breve, casi austero, redactado bajo dirección del Duque de Ahumada. Fija las normas morales y profesionales del Cuerpo. Su redacción —limpia, sobria, exigente— ha sobrevivido a regímenes y constituciones como una de las piezas más singulares del derecho administrativo español.',
    footer: ['Cartilla · §I', 'Honor'],
  },
  '10-12': {
    year: null,
    tag: 'Patrona · Festividad',
    title: 'Día de la Virgen del Pilar.',
    text: 'Festividad mayor del Cuerpo. En cuarteles, comandancias y unidades en misión exterior se conmemora a la Patrona con actos religiosos, militares y de homenaje a los caídos. Es el día grande de la Guardia Civil.',
    footer: ['Patrona', '12 de octubre'],
  },
  '12-20': {
    year: 1845,
    tag: 'Cartilla · §III',
    title: '"El honor es mi divisa."',
    text: 'En el frontispicio moral de la Cartilla, redactada por el Duque de Ahumada, queda fijada la divisa que cada guardia jura cumplir: el honor como guía profesional y personal. No es una proclama: es la regla diaria del servicio.',
    footer: ['Divisa', 'Cartilla del Guardia'],
  },
};

/* Pool genérico — temas del Cuerpo. Se rotan en días sin aniversario. */
const EPH_GENERIC = [
  {
    year: 1844,
    tag: 'Lema',
    title: '"Todo por la Patria."',
    text: 'Tres palabras grabadas en piedra sobre la puerta de cada cuartel. Resumen del compromiso del Cuerpo: el servicio al país por encima de todo lo demás. Es la divisa que cada guardia jura cumplir desde el primer día.',
    footer: ['Divisa', 'Cuartel'],
  },
  {
    year: 1942,
    tag: 'Academia',
    title: 'Baeza, cantera de oficiales del Cuerpo.',
    text: 'La Academia de Guardias y Suboficiales de Baeza, en Jaén, se consolida como uno de los centros de formación de referencia de la Guardia Civil. Por sus aulas han pasado decenas de miles de guardias y suboficiales, formados en disciplina, derecho y servicio.',
    footer: ['Academia · Baeza', 'Jaén'],
  },
  {
    year: 1965,
    tag: 'Montaña',
    title: 'Las primeras unidades de Montaña.',
    text: 'Tras los rescates pioneros en los Pirineos, se formaliza un servicio especializado en intervención en alta montaña. Hoy, los Especialistas en Montaña (EREIM) operan en los macizos más exigentes de la Península y son referencia europea en rescate.',
    footer: ['EREIM', 'Rescate'],
  },
  {
    year: 1992,
    tag: 'Misión exterior',
    title: 'La Guardia Civil bajo bandera de la ONU.',
    text: 'Desde la década de los noventa, el Cuerpo despliega unidades en misiones internacionales bajo bandera de Naciones Unidas y otras organizaciones. Hoy participa en operaciones de paz, formación de policías locales y lucha contra el crimen transfronterizo en cuatro continentes.',
    footer: ['Misión internacional', 'ONU'],
  },
  {
    year: 1844,
    tag: 'Tradición',
    title: 'El tricornio, identidad heredada.',
    text: 'Pieza original del uniforme de gala, el tricornio acompaña al Cuerpo desde su fundación. Hoy se reserva para actos solemnes y desfiles oficiales: es uno de los símbolos más reconocibles de la Guardia Civil.',
    footer: ['Uniforme de gala', 'Símbolo'],
  },
  {
    year: 1844,
    tag: 'Mando',
    title: 'El Duque de Ahumada, primer Director General.',
    text: 'Francisco Javier Girón, II Duque de Ahumada, es nombrado Inspector General del nuevo cuerpo. Es él quien redacta la Cartilla, define la moral del servicio y traza la doctrina que sigue vertebrando la institución casi dos siglos después.',
    footer: ['Duque de Ahumada', 'Inspección General'],
  },
  {
    year: 1942,
    tag: 'Mar',
    title: 'El Servicio Marítimo, vigilancia de costas.',
    text: 'La vigilancia de costas y aguas interiores se incorpora a las competencias del Cuerpo. Décadas después, el Servicio Marítimo se ha convertido en una unidad puntera en lucha contra narcotráfico, inmigración irregular y delitos transfronterizos.',
    footer: ['Servicio Marítimo', 'Costas'],
  },
  {
    year: 1844,
    tag: 'Doctrina',
    title: '"El servicio no termina hasta que termina."',
    text: 'Una de las máximas heredadas de la Cartilla. El Cuerpo se construyó sobre la idea de un servicio constante, no negociable. Es lo que distingue, en el lenguaje del Cuerpo, al "guardia" del que simplemente trabaja en horario.',
    footer: ['Cartilla', 'Ética del servicio'],
  },
  {
    year: 2007,
    tag: 'Igualdad',
    title: 'Plena igualdad de acceso para la mujer.',
    text: 'Tras casi dos décadas de incorporación progresiva, en 2007 se consolida la plena igualdad de acceso de la mujer a todas las escalas y especialidades del Cuerpo, sin restricciones de plantilla ni de destino.',
    footer: ['Plena igualdad', '2007'],
  },
  {
    year: 1844,
    tag: 'Cartilla',
    title: '"Sea el guardia tan considerado en sus tratos…".',
    text: 'La Cartilla del Guardia Civil dedica un capítulo entero al trato con el ciudadano. Su redacción —sorprendentemente moderna para 1844— sigue siendo material de estudio en escuelas de policía de toda Europa.',
    footer: ['Cartilla · §VII', 'Trato al ciudadano'],
  },
  {
    year: 2026,
    tag: 'Hoy',
    title: 'Más de 182 años de servicio ininterrumpido.',
    text: 'Desde 1844, la Guardia Civil es la institución armada de carácter militar más antigua de cuantas siguen en activo en España. Una continuidad casi sin parangón en Europa, que da forma a la identidad del Cuerpo y a la confianza que en él deposita la ciudadanía.',
    footer: ['1844 — hoy', 'Servicio'],
  },
  {
    year: null,
    tag: 'Despliegue',
    title: 'Más de dos mil acuartelamientos.',
    text: 'El despliegue de la Guardia Civil cubre prácticamente todo el territorio nacional. Aldeas, valles, costas, fronteras: en muchos lugares de España, el cuartel es desde hace generaciones el primer (y a veces único) punto de seguridad pública del municipio.',
    footer: ['Despliegue territorial', 'España'],
  },
];

const MONTH_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const WEEKDAY_ES = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

function pad2(n){ return String(n).padStart(2,'0'); }

function dayOfYear(d){
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d - start;
  return Math.floor(diff / (1000*60*60*24));
}

function getEphemeride(date = new Date()){
  const key = `${pad2(date.getMonth()+1)}-${pad2(date.getDate())}`;
  if (EPH_ANNIVERSARIES[key]){
    return { ...EPH_ANNIVERSARIES[key], date, anniversary: true };
  }
  const idx = dayOfYear(date) % EPH_GENERIC.length;
  return { ...EPH_GENERIC[idx], date, anniversary: false };
}

Object.assign(window, { EPH_ANNIVERSARIES, EPH_GENERIC, MONTH_ES, WEEKDAY_ES, dayOfYear, getEphemeride });
