// Todo el contenido del portfolio está acá. Para cambiar un texto, un link
// o una tecnología, editá este archivo; los componentes no tienen textos fijos.

// Tecnologías: clave → [nombre visible, archivo en /public/logos]
export const tecnologias = {
  node: ['Node.js', 'nodedotjs'],
  express: ['Express', 'express'],
  socket: ['Socket.io', 'socketdotio'],
  prisma: ['Prisma', 'prisma'],
  mongoose: ['Mongoose', 'mongoose'],
  zod: ['Zod', 'zod'],
  vitest: ['Vitest', 'vitest'],
  python: ['Python', 'python'],
  django: ['Django', 'django'],
  pytorch: ['PyTorch', 'pytorch'],
  tf: ['TensorFlow', 'tensorflow'],
  keras: ['Keras', 'keras'],
  sklearn: ['scikit-learn', 'scikitlearn'],
  pandas: ['pandas', 'pandas'],
  numpy: ['NumPy', 'numpy'],
  scipy: ['SciPy', 'scipy'],
  jupyter: ['Jupyter', 'jupyter'],
  streamlit: ['Streamlit', 'streamlit'],
  colab: ['Google Colab', 'googlecolab'],
  pg: ['PostgreSQL', 'postgresql'],
  mongo: ['MongoDB', 'mongodb'],
  redis: ['Redis', 'redis'],
  firebase: ['Firebase', 'firebase'],
  git: ['Git', 'git'],
  github: ['GitHub', 'github'],
  gha: ['GitHub Actions', 'githubactions'],
  railway: ['Railway', 'railway'],
  render: ['Render', 'render'],
  vercel: ['Vercel', 'vercel'],
  next: ['Next.js', 'nextdotjs'],
  arduino: ['Arduino', 'arduino'],
  mediapipe: ['MediaPipe', 'mediapipe'],
  opencv: ['OpenCV', 'opencv'],
  twilio: ['Twilio', 'twilio'],
  gmaps: ['Google Maps', 'googlemaps'],
};

// Convierte 'node express pg' en [{ nombre, logo }, ...]
export const techs = (claves) =>
  claves.split(' ').map((k) => ({ nombre: tecnologias[k][0], logo: `/logos/${tecnologias[k][1]}.svg` }));

export const perfil = {
  nombre: 'Samuel Nakab Mollo',
  nombreCorto: ['Samuel', 'Nakab Mollo'],
  iniciales: 'SN',
  rol: ['Backend', 'AI Developer'],
  descripcion:
    'Estudiante de último año en ORT y jugador de básquet. Me gusta resolver problemas desarrollando software y usando la lógica.',
};

// Órbita del inicio: anillo exterior (6) e interior (4)
export const orbita = {
  exterior: techs('python pytorch pg tf redis node'),
  interior: techs('django sklearn express pandas'),
};

export const cinta = techs(
  'node express socket prisma python django pytorch tf keras sklearn pandas numpy pg redis firebase mongo next github railway vercel arduino mediapipe'
);

export const habilidades = [
  {
    etiqueta: 'backend',
    titulo: 'Node.js',
    icono: '/logos/nodedotjs.svg',
    texto: 'APIs REST, tiempo real con WebSockets, ORMs, validación y testing.',
    techs: techs('express socket prisma mongoose zod vitest'),
    color: 'var(--rojo)',
    fondoIcono: 'var(--tinte-rojo)',
  },
  {
    etiqueta: 'backend · ia · datos',
    titulo: 'Python',
    icono: '/logos/python.svg',
    texto: 'Backends con Django, machine learning, deep learning y análisis de datos.',
    techs: techs('django pytorch tf keras sklearn pandas numpy scipy jupyter streamlit'),
    color: 'var(--amarillo)',
    fondoIcono: 'var(--tinte-amarillo)',
  },
  {
    etiqueta: 'soporte',
    titulo: 'Datos e infra',
    icono: '/logos/postgresql.svg',
    texto: 'Bases de datos, control de versiones y deploy.',
    techs: techs('pg mongo redis firebase git github gha railway vercel'),
    color: 'var(--durazno)',
    fondoIcono: 'var(--tinte-durazno)',
  },
];

export const proyectosLaborales = [
  {
    numero: '01',
    etiqueta: 'laboral · logística · equipo de 3',
    color: 'var(--rojo)',
    titulo: 'Fleter',
    resumen:
      'Plataforma para que las PyMEs argentinas registren y sigan de punta a punta los viajes que hacen con sus fleteros de confianza.',
    detalles: [
      ['El problema', 'las PyMEs no saben dónde está su mercadería ni cuánto gastan en logística; todo pasa por WhatsApp.'],
      ['Qué hice', 'la arquitectura y todo el backend: API REST, WebSockets, GPS y ETA en vivo con tráfico, precios, remitos en PDF, permisos y CI/CD con staging y producción.'],
      ['Objetivo', 'trazabilidad y control administrativo de la logística de cada PyME.'],
    ],
    techs: techs('node express pg prisma redis socket firebase gmaps railway'),
    captura: { src: '/capturas/fleter.webp', ancho: 1440, alto: 810, alt: 'Fleter: detalle de un viaje con el recorrido en el mapa, estado y precio estimado' },
    link: { url: 'https://fleter.com.ar', texto: 'fleter.com.ar' },
  },
  {
    numero: '02',
    etiqueta: 'laboral · analítica comercial',
    color: 'var(--durazno)',
    titulo: 'SaleScope',
    resumen: 'Suite de análisis comercial para supermercados, pensada para presentarle las ventas a un directorio.',
    detalles: [
      ['Qué hace', 'ventas diarias, mensuales y anuales, segmentación por precio, impacto de promociones, búsqueda de productos e insights automáticos.'],
      ['Para quién', 'gerentes de supermercados, directorios y equipos de ventas y pricing.'],
      // ['Qué hice', 'completar con tu parte en el proyecto'],
    ],
    techs: techs('django pg render vercel'),
    captura: { src: '/capturas/salescope.webp', ancho: 1440, alto: 810, alt: 'SaleScope: gráfico de ventas diarias de un producto, con los días de promoción resaltados' },
    link: { url: 'https://salescope-lemon.vercel.app', texto: 'salescope-lemon.vercel.app' },
  },
];

export const proyectosPersonales = [
  {
    numero: '03',
    etiqueta: 'personal · finanzas · ML',
    color: 'var(--amarillo)',
    titulo: 'Trading bot',
    resumen:
      'Analiza acciones argentinas cada 5 minutos en horario de mercado y muestra precios, señales y predicciones en un dashboard. No opera: es solo análisis.',
    puntos: [
      'Puntaje con z-score, RSI, Bandas de Bollinger y volumen.',
      'Gráficos de velas con medias móviles, señales y portfolio.',
      'Modelos Ridge, SARIMA, GARCH, Monte Carlo, Heston y XGBoost.',
      'Bot en Node.js, dashboard en Next.js y modelos en Python.',
    ],
    techs: techs('node python next sklearn gha twilio railway vercel'),
    captura: { src: '/capturas/trading-bot.webp', ancho: 1340, alto: 812, alt: 'Trading bot: dashboard con el gráfico de velas de YPFD y sus medias móviles' },
    link: { url: 'https://dashboardbot-phi.vercel.app', texto: 'dashboardbot-phi.vercel.app' },
  },
  {
    numero: '04',
    etiqueta: 'personal · data science',
    color: 'var(--verde-suave)',
    titulo: 'Predictor de PBI',
    resumen: 'Pronostica el PBI de cada país hasta 2030 y compara 11 modelos, con una web que muestra todo el análisis.',
    puntos: [
      'Modelos estadísticos (ARIMA, ETS, Theta, Kalman, Prophet), de ML (Random Forest, LightGBM), una red LSTM y un ensamble.',
      'Backtest 2017–2021 y prueba real contra 2022–2023.',
      'Pronóstico a 2030 con intervalo del 80 %, sobre datos del Banco Mundial.',
    ],
    techs: techs('python colab pandas numpy'),
    captura: { src: '/capturas/predictor-pbi.webp', ancho: 1440, alto: 960, alt: 'Predictor de PBI: pronóstico del PBI de Argentina a 2030 comparando los modelos Theta, LightGBM y LSTM' },
    link: { url: 'https://gdp-forecast-lab.vercel.app', texto: 'gdp-forecast-lab.vercel.app' },
  },
];

export const proximamente = {
  numero: '05',
  etiqueta: 'robótica · visión por computadora',
  titulo: 'Mano robótica',
  resumen: 'Mano impresa en 3D que copia los movimientos de la tuya en tiempo real, sin guantes ni sensores: solo una cámara.',
  puntos: [
    'MediaPipe detecta la mano y Python calcula cuánto se flexiona cada dedo.',
    'Un Arduino recibe esos valores y mueve 5 servos, uno por dedo.',
    'Ya funcionan la visión y una prueba con LEDs; las piezas están impresas.',
  ],
  flujo: 'cámara → MediaPipe → Python → Arduino → 5 servos',
  techs: techs('python mediapipe opencv arduino'),
};

// Si un link queda vacío (''), esa tarjeta no se muestra.
export const contacto = [
  { red: 'whatsapp', texto: '+54 11 2536-5163', url: 'https://wa.me/5491125365163', icono: '/logos/whatsapp.svg', color: '#25d366' },
  { red: 'mail', texto: 'samuelnakab@gmail.com', url: 'https://mail.google.com/mail/?view=cm&to=samuelnakab@gmail.com', icono: '/logos/gmail.svg', color: '#ea4335' },
  { red: 'linkedin', texto: 'Samuel N', url: '', icono: '/logos/linkedin.svg', color: '#0a66c2' },
  { red: 'instagram', texto: 'samu.nakab', url: 'https://www.instagram.com/samu.nakab/', icono: '/logos/instagram.svg', color: '#e4405f' },
];
