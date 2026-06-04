export const DRIVER_BIOS = {
  alonso: {
    description: "El asturiano no proviene de una dinastía rica; su padre trabajaba en una fábrica de explosivos y le construyó su primer kart. A base de puro talento, escaló hasta convertirse en bicampeón mundial (2005 y 2006) y es el gran veterano del deporte, compitiendo desde la era de los motores V10 hasta los actuales híbridos pesados.\n\nEs pasional, volcánico y absolutamente implacable. Posee un nivel de exigencia superlativo tanto para él como para su equipo. Su odio visceral hacia la derrota permanece intacto a pesar de las décadas (\"el volcán sigue ahí\").",
    quote: "\"Siempre he girado el volante de forma agresiva en el centro de la curva, y a partir de ahí me guío por las sensaciones de mis manos. Si me quitas eso, estoy muerto.\"",
    technicalData: {
      drivingStyle: "Su firma histórica es un estilo contraintuitivo: da un tirón inicial increíblemente violento y agresivo al volante al entrar a la curva para inducir un ligero subviraje. Exige una dirección asistida muy pesada porque toda la información de agarre la lee exclusivamente a través de las palmas de sus manos.",
      educationalConcept: {
        title: "Lectura del Agarre a través de la Dirección",
        explanation: "Posee una capacidad legendaria para leer el agarre (grip) mediante la retroalimentación física de la dirección. Si el volante se ablanda, sabe que perdió adherencia; si se endurece, el tren delantero agarró y se prepara para controlar un derrape trasero. Su visión periférica le permite procesar la carrera completa (pantallas, rivales) a más de 300 km/h."
      }
    },
    stats: { experiencia: 5.0, ritmoClasificacion: 4.5, ritmoCarrera: 5.0, defensaAgresividad: 5.0, gestionNeumaticos: 4.5, calificacionGeneral: 4.8 },
    rivalries: [{ rivalName: "Lewis Hamilton", wins: 32, losses: 53, description: "En 2007 protagonizaron una guerra civil dentro de McLaren que terminó costándoles el título a ambos, forjando una tensión y un respeto mutuo histórico que perdura hasta el día de hoy." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Fernando_Alonso"
  },
  hamilton: {
    description: "De orígenes muy humildes en Stevenage, Inglaterra. Su padre tenía múltiples trabajos para pagarle el karting. Fue apadrinado por McLaren desde la niñez, convirtiéndose en el primer piloto negro de la historia y destrozando todos los récords estadísticos (7 títulos, más de 100 victorias).\n\nFuera de la pista es polifacético, enfocado en la moda y el activismo social. Dentro del equipo es obsesivo con la mejora continua, interrogando a los ingenieros constantemente y sin creer en el mito de que es \"solo talento natural\".",
    quote: "\"Conduzco agresivamente porque a veces mi coche no es lo suficientemente rápido y tengo que empujar y ser agresivo. Si tuviera un coche con el que pudiera pasear, no tendría que ser tan agresivo.\"",
    technicalData: {
      drivingStyle: "Es el maestro de la adaptabilidad. Afirma que altera su memoria muscular y su técnica cada año según los neumáticos y el chasis. Prefiere una configuración que le permita rotar el auto bruscamente en el medio de la curva para acelerar antes.",
      educationalConcept: {
        title: "Trail Braking Tardío",
        explanation: "Es el rey indiscutido del Trail Braking tardío (soltar el freno gradualmente mientras se entra a la curva) y un experto gestionando la degradación térmica de los neumáticos sin sacrificar el ritmo general."
      }
    },
    stats: { experiencia: 5.0, ritmoClasificacion: 5.0, ritmoCarrera: 5.0, defensaAgresividad: 4.5, gestionNeumaticos: 5.0, calificacionGeneral: 4.9 },
    rivalries: [{ rivalName: "Max Verstappen", wins: 105, losses: 62, description: "La temporada 2021 fue el choque de dos épocas, resultando en accidentes severos, tensión política y uno de los finales más polémicos y duros en la historia del deporte." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Lewis_Hamilton"
  },
  verstappen: {
    description: "Pura dinastía de carreras. Su padre (Jos Verstappen) fue piloto de F1 y su madre (Sophie Kumpen) una campeona internacional de karting. Fue sometido a un régimen de entrenamiento espartano desde los 4 años y debutó en F1 con tan solo 17 años.\n\nPragmático, directo y sin filtros. Está obsesionado únicamente con ganar y carece de interés por la política o los juegos mediáticos. Su intimidación en pista es pasiva: sus rivales saben que, en una frenada, él no cederá.",
    quote: "\"Corro para ganar, no para participar.\"",
    technicalData: {
      drivingStyle: "Prefiere configuraciones de monoplazas con una cantidad brutal de agarre en el morro (front-end) y un eje trasero que derrapa constantemente (sobreviraje extremo). Frena irracionalmente tarde y usa ese sobreviraje como un arma para rotar el auto.",
      educationalConcept: {
        title: "La Ventana Operativa Neurológica",
        explanation: "Mientras otros pilotos se congelan o chocan cuando el auto se vuelve inestable de atrás, el cerebro de Max procesa y domina esas alteraciones térmicas y físicas de forma automática."
      }
    },
    stats: { experiencia: 4.8, ritmoClasificacion: 5.0, ritmoCarrera: 5.0, defensaAgresividad: 5.0, gestionNeumaticos: 4.5, calificacionGeneral: 4.9 },
    rivalries: [{ rivalName: "Lewis Hamilton y Charles Leclerc", wins: 62, losses: 105, description: "Con Leclerc viene batallando desde los karts en Europa, pero fue con Hamilton con quien rompió la hegemonía de Mercedes en 2021." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Max_Verstappen"
  },
  leclerc: {
    description: "Nacido en Mónaco, creció rodeado de las carreras pero debió ganarse su lugar mediante la Academia de Pilotos de Ferrari, cumpliendo el sueño de su padrino deportivo (Jules Bianchi) y el de su propio padre, a quienes perdió antes de brillar.\n\nTremendamente carismático y elegante, pero salvajemente autocrítico. Cuando comete un error, es el primero en insultarse por la radio. Su vulnerabilidad emocional transparenta su búsqueda tortuosa de la perfección.",
    quote: "\"No voy a cambiar mi estilo de manejo, sé por qué los demás son rápidos, pero mi enfoque se mantiene.\"",
    technicalData: {
      drivingStyle: "Necesita un frente del vehículo que \"muerda\" el asfalto. Aborrece el subviraje (que el auto no gire) y tolera enormes márgenes de inestabilidad en la parte trasera, siempre y cuando sea predecible.",
      educationalConcept: {
        title: "Ritmo a Una Vuelta",
        explanation: "Es capaz de conjurar milésimas de segundo en clasificaciones (\"Mr. Saturday\"), exprimiendo compuestos de neumáticos que aparentemente ya no tienen nada que ofrecer mediante configuraciones muy extremas."
      }
    },
    stats: { experiencia: 4.0, ritmoClasificacion: 5.0, ritmoCarrera: 4.5, defensaAgresividad: 4.0, gestionNeumaticos: 4.0, calificacionGeneral: 4.5 },
    rivalries: [{ rivalName: "Max Verstappen", wins: 8, losses: 62, description: "Una rivalidad natural e intensa forjada en el karting que se ha trasladado, con agresividad pero respeto, a la cúspide de la Fórmula 1." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Charles_Leclerc"
  },
  sainz: {
    description: "Dinastía de leyenda. Hijo de Carlos Sainz Sr. (bicampeón mundial de Rally). Tuvo una educación atípica de pilotaje en tierra, bajo lluvia y con llantas lisas (slicks), lo que desarrolló sus instintos de control.\n\nEl \"Caballero de las carreras\" y un verdadero estratega. Analítico, inteligente y un líder nato dentro de las fábricas. Conocido mundialmente como el \"Smooth Operator\", bromea al respecto pero personifica esa calma bajo presión.",
    quote: "\"Disfruto conducir en mojado más que en seco porque la conducción se vuelve menos matemática y más sobre sentir el auto e improvisar sobre la marcha.\"",
    technicalData: {
      drivingStyle: "Extremadamente liso, fluido y maleable. Su experiencia en los rallyes lo hace depender de las sensaciones de su espina dorsal en lugar del volante rígido, dándole un control total en condiciones adversas.",
      educationalConcept: {
        title: "Improvisación y Lectura de Carrera",
        explanation: "Es capaz de pensar independientemente del muro de ingenieros, cuestionar estrategias y gestionar neumáticos mientras compite en el grupo líder bajo asfalto húmedo."
      }
    },
    stats: { experiencia: 4.0, ritmoClasificacion: 4.0, ritmoCarrera: 4.5, defensaAgresividad: 4.5, gestionNeumaticos: 4.5, calificacionGeneral: 4.3 },
    rivalries: [{ rivalName: "Charles Leclerc", wins: 4, losses: 8, description: "Mantuvieron un intenso pulso interno en Ferrari, enfrentando la inteligencia y constancia de Sainz contra la velocidad pura de Leclerc." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Carlos_Sainz_Jr."
  },
  norris: {
    description: "Una de las grandes estrellas modernas de Gran Bretaña. Apoyado desde joven, escaló velozmente las categorías formativas hasta convertirse en el piloto franquicia de McLaren.\n\nExteriormente es el bromista del paddock y muy popular con las nuevas generaciones, pero internamente es un piloto que se castiga duramente cuando falla. Es muy transparente con la prensa respecto a sus emociones.",
    quote: "\"En 200 años a nadie le va a importar. Todos estaremos muertos. Aún me importa (ganar), y por eso a veces me enojo y me decepciono de mí mismo.\"",
    technicalData: {
      drivingStyle: "Equilibrado, según sus propias palabras no es \"excesivamente agresivo\". Prefiere un auto firme, pero ha demostrado una enorme capacidad para domar monoplazas con serios problemas de subviraje crónico.",
      educationalConcept: {
        title: "Maleabilidad Intraintuitiva",
        explanation: "McLaren ha diseñado históricamente autos que frenan y giran de manera muy antinatural, y Norris ha sabido exprimir el máximo crono adaptándose por encima de sus propias preferencias."
      }
    },
    stats: { experiencia: 3.5, ritmoClasificacion: 4.8, ritmoCarrera: 4.5, defensaAgresividad: 4.0, gestionNeumaticos: 4.5, calificacionGeneral: 4.5 },
    rivalries: [{ rivalName: "Oscar Piastri", wins: 3, losses: 2, description: "Comparten equipo y han encendido la interna en McLaren (las famosas \"Reglas Papaya\") batallando por el estatus de líder." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Lando_Norris"
  },
  russell: {
    description: "Piloto británico que se ganó su lugar brillando en las categorías junior y pasando años difíciles en la parte baja de la parrilla con Williams antes de que Mercedes lo reclamara como el sucesor de Hamilton.\n\nExtremadamente educado, corporativo (fue director de la asociación de pilotos) y dueño de un vocabulario británico muy peculiar (\"Blimey\", \"Crikey\"). Sin embargo, detrás del traje es intensamente competitivo y calculador.",
    quote: "\"¡Blimey, blimey, blimey! Hay trabajo por hacer, sigamos empujando.\"",
    technicalData: {
      drivingStyle: "Natural, preciso y enfocado en la entrada de la curva. Su estilo orgánico ha encajado excepcionalmente bien con los complejos y pesados monoplazas de efecto suelo actuales.",
      educationalConcept: {
        title: "Extractor de Clasificaciones",
        explanation: "Desde sus días arrastrando al débil equipo Williams a la Q3, demostró una capacidad técnica asombrosa para poner las llantas en temperatura ideal a una sola vuelta."
      }
    },
    stats: { experiencia: 3.5, ritmoClasificacion: 4.8, ritmoCarrera: 4.2, defensaAgresividad: 4.5, gestionNeumaticos: 4.0, calificacionGeneral: 4.4 },
    rivalries: [{ rivalName: "Lewis Hamilton y Valtteri Bottas", wins: 2, losses: 105, description: "Debió destronar a Bottas y luego medir su talento frente al heptacampeón del mundo dentro del mismo garaje." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/George_Russell_(piloto)"
  },
  perez: {
    description: "Proveniente de México, tuvo que abandonar su país muy joven para buscar suerte en Europa. Respaldado por su inmenso talento y el apoyo de sus patrocinadores, luchó durante años en la clase media hasta ganarse su asiento en Red Bull.\n\nLa resiliencia personificada. Históricamente logra sus mejores carreras cuando está contra las cuerdas o cuando parece que su trayectoria en la F1 está acabada.",
    quote: "\"Lo que te define no es lo que haces, es la forma en la que te levantas después de caer.\"",
    technicalData: {
      drivingStyle: "Suavidad suprema con el acelerador. Evita el patinaje de los neumáticos traseros al salir de las curvas, lo que le permite mantener la tracción mecánica intacta.",
      educationalConcept: {
        title: "Ministro de Defensa",
        explanation: "La gestión de neumáticos y defensa. Pérez puede alargar sus stints (tandas) mucho más que la competencia y es un muro casi impenetrable para los autos que intentan adelantarlo."
      }
    },
    stats: { experiencia: 4.5, ritmoClasificacion: 3.5, ritmoCarrera: 4.0, defensaAgresividad: 5.0, gestionNeumaticos: 5.0, calificacionGeneral: 4.2 },
    rivalries: [{ rivalName: "Esteban Ocon", wins: 6, losses: 1, description: "Tuvieron una enemistad tan explosiva y destructiva cuando corrían en Force India que el equipo debió prohibirles pelear en pista tras múltiples choques." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Sergio_P%C3%A9rez"
  },
  piastri: {
    description: "Prodigio australiano que ganó la Fórmula 3 y la Fórmula 2 de manera consecutiva en su primer intento. Tras un drama legal monumental con Alpine, ingresó a McLaren.\n\nHielo puro. Es calculador, inexpresivo y descarta activamente que las emociones dicten su ritmo. Su calma es a veces incomprendida, pues encubre a un competidor letal y despiadado.",
    quote: "\"Tengo emociones... Simplemente, siendo franco, creo que un exceso de emociones no es muy útil. Solo porque sea tranquilo no significa que no sea despiadado.\"",
    technicalData: {
      drivingStyle: "Inmutable. Posee un estilo fluido, el cual se niega a alterar o entrar en pánico cuando el coche pierde rendimiento, manteniendo las mismas entradas de freno y volante.",
      educationalConcept: {
        title: "Telemetría Inalterable",
        explanation: "Fortaleza psicológica y telemetría inalterable. Mientras otros sobreconducen y destrozan las gomas buscando ritmo perdido, Piastri mantiene la técnica constante protegiendo el compuesto."
      }
    },
    stats: { experiencia: 2.0, ritmoClasificacion: 4.5, ritmoCarrera: 4.2, defensaAgresividad: 4.5, gestionNeumaticos: 4.0, calificacionGeneral: 4.3 },
    rivalries: [{ rivalName: "Lando Norris", wins: 2, losses: 3, description: "Desafió el estatus de Norris como \"primer piloto\" de McLaren en su año de novato, exigiendo igualdad de condiciones." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Oscar_Piastri"
  },
  albon: {
    description: "Piloto tailandés-británico. Vivió un drama cuando Red Bull lo despidió sin asiento, dejándolo fuera de la F1. Logró regresar con Williams, convirtiéndose en el pilar y líder del equipo.\n\nAmable, reflexivo y muy inteligente. Antes de competir, utiliza visualizaciones estrictas para caminar sobre la \"cuerda floja\" de la adrenalina sin pasarse ni quedarse corto.",
    quote: "\"Me gusta tener un auto con un buen tren delantero: bastante ágil, directo.\"",
    technicalData: {
      drivingStyle: "De toque gentil, aunque exige fervientemente que el coche posea un tren delantero hiperreactivo y directo para poder atacar las curvas.",
      educationalConcept: {
        title: "Lectura del Subviraje vs Sobreviraje",
        explanation: "Posee la habilidad de \"conducir por encima\" de los problemas del coche (como lo hace Alonso) extrayendo ritmo de máquinas que otros considerarían inconducibles."
      }
    },
    stats: { experiencia: 3.5, ritmoClasificacion: 4.5, ritmoCarrera: 4.0, defensaAgresividad: 4.0, gestionNeumaticos: 4.0, calificacionGeneral: 4.1 },
    rivalries: [{ rivalName: "Pierre Gasly", wins: 0, losses: 1, description: "Una rivalidad simbólica por ser los sobrevivientes de la \"trituradora\" del segundo asiento de Red Bull y cómo ambos reconstruyeron sus carreras en el mediocampo." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Alexander_Albon"
  },
  ocon: {
    description: "Tuvo el camino más duro. Proviniendo de una familia sin recursos, sus padres vendieron su casa y vivieron en una caravana viajando por Europa para poder pagarle su carrera en el karting.\n\nRocoso, duro e inflexible. Forjado por la necesidad de no fallar jamás ante los sacrificios familiares, es un piloto que detesta ceder espacio y que defiende ferozmente lo suyo.",
    quote: "\"No tengo arrepentimientos porque tengo (...) un equipo 100% detrás de mí, que me escuchará. Me siento querido y deseado.\"",
    technicalData: {
      drivingStyle: "Directo y extremadamente agresivo en el combate cuerpo a cuerpo. Rara vez perdona un vértice cuando se encuentra peleando la posición, ya sea contra un rival u otro compañero de equipo.",
      educationalConcept: {
        title: "Defensa Posicional de Codos Anchos",
        explanation: "La defensa posicional de la vieja escuela. Utiliza una técnica de \"codos anchos\", posicionando su coche en los ángulos más difíciles para romperle la aerodinámica al que lo sigue."
      }
    },
    stats: { experiencia: 4.0, ritmoClasificacion: 4.0, ritmoCarrera: 4.0, defensaAgresividad: 5.0, gestionNeumaticos: 3.5, calificacionGeneral: 4.0 },
    rivalries: [{ rivalName: "Pierre Gasly", wins: 1, losses: 1, description: "Antiguos mejores amigos en la infancia que, debido a la presión del karting y del ascenso a la F1, transmutaron su afecto en una rivalidad gélida y tensa." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Esteban_Ocon"
  },
  gasly: {
    description: "Piloto francés que, tras ser descendido dolorosamente de Red Bull, reconstruyó su confianza logrando una milagrosa victoria con AlphaTauri antes de mudarse como líder a Alpine.\n\nEs emotivo, sensible y corre impulsado por una misión. La trágica muerte en pista de su gran amigo de la infancia, Anthoine Hubert, marcó su enfoque de la vida y dedica todas sus ambiciones a su memoria.",
    quote: "\"La vida no siempre es lógica y justa, así que aprecia a las personas que amas y cuidas mientras puedas...\"",
    technicalData: {
      drivingStyle: "Analítico y constante, requiere que el monoplaza le transmita confianza progresiva en el tren trasero para poder empujar al límite.",
      educationalConcept: {
        title: "Maximización de Puntos",
        explanation: "Rara vez comete errores graves los domingos, logrando exprimir resultados sólidos consistentemente con maquinarias de zona media."
      }
    },
    stats: { experiencia: 4.0, ritmoClasificacion: 4.2, ritmoCarrera: 4.0, defensaAgresividad: 4.0, gestionNeumaticos: 4.0, calificacionGeneral: 4.0 },
    rivalries: [{ rivalName: "Esteban Ocon", wins: 1, losses: 1, description: "El destino los forzó a compartir garaje en Alpine tras años de enemistad, probando ser una convivencia explosiva y al límite." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Pierre_Gasly"
  },
  stroll: {
    description: "Su entrada al deporte fue facilitada por el gigantesco músculo financiero de su padre, el multimillonario Lawrence Stroll, saltando directamente desde la F3 europea a la F1.\n\nA pesar de lidiar constantemente con el estigma de ser un \"piloto de pago\", su motor no es la necesidad, sino un deseo profundamente competitivo de desafiar sus propios límites.",
    quote: "\"Me despierto por la mañana y voy a correr porque quiero empujarme a mí mismo, desafiarme a mí mismo, mejorar cada día.\"",
    technicalData: {
      drivingStyle: "Muy instintivo. Depende menos de las gráficas de datos y más del talento reaccionario del momento.",
      educationalConcept: {
        title: "Intuición en Arrancadas y Lluvia",
        explanation: "Las arrancadas de primera vuelta y el control en asfalto resbaladizo. Posee una intuición envidiable para encontrar tracción en las primeras curvas, recuperando múltiples posiciones en los metros iniciales."
      }
    },
    stats: { experiencia: 4.0, ritmoClasificacion: 3.5, ritmoCarrera: 3.5, defensaAgresividad: 4.0, gestionNeumaticos: 3.5, calificacionGeneral: 3.6 },
    rivalries: [{ rivalName: "Fernando Alonso", wins: 0, losses: 32, description: "Compartir escudería con un bicampeón ha puesto su rendimiento bajo la lupa extrema." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Lance_Stroll"
  },
  hulkenberg: {
    description: "Veterano alemán que lo ganó todo en categorías junior (F3, GP2). Se mantuvo como una figura estable y altamente respetada de la parrilla, hoy liderando el naciente proyecto oficial de Audi.\n\nEl \"chico divertido\" del paddock. Es directo, no se toma a sí mismo demasiado en serio y sabe aligerar la tensión. Es visto por los jefes de equipo como un par de \"manos seguras\".",
    quote: "\"Espero que no terminemos despistándonos como bananas al final.\"",
    technicalData: {
      drivingStyle: "Clínico y prolijo. No sobreconduce el coche ni exige los neumáticos más allá del límite térmico.",
      educationalConcept: {
        title: "Extracción a una vuelta seca",
        explanation: "Aunque posee el récord de más carreras sin un podio, Hülkenberg tiene la capacidad mágica de colocar coches deficientes en el Top 10 durante las sesiones de clasificación (Q3)."
      }
    },
    stats: { experiencia: 5.0, ritmoClasificacion: 4.8, ritmoCarrera: 4.0, defensaAgresividad: 4.0, gestionNeumaticos: 3.5, calificacionGeneral: 4.1 },
    rivalries: [{ rivalName: "Kevin Magnussen", wins: 0, losses: 0, description: "Se cruzaron y se insultaron fuertemente en el pasado (2017), pero maduraron y se convirtieron en una gran y leal dupla en Haas." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Nico_H%C3%BClkenberg"
  },
  bottas: {
    description: "Corredor finlandés de gran frialdad que saltó al estrellato con Williams antes de ganarse el asiento más codiciado de la década en Mercedes, acompañando a Hamilton. Hoy aporta su veteranía al nuevo equipo Cadillac F1.\n\nSu arco personal es fascinante: pasó de ser el corporativo y contenido \"Bottas 2.0\", a un individuo completamente desinhibido y libre (\"Bottas 3.0\"), luciendo un corte mullet y repartiendo su pasión con el ciclismo.",
    quote: "\"A quien corresponda: jódanse.\"",
    technicalData: {
      drivingStyle: "Precisión robótica. Es uno de los pocos mortales capaces de igualar o superar el ritmo a una vuelta de Lewis Hamilton sin derrapar o bloquear neumáticos.",
      educationalConcept: {
        title: "Calibración Térmica",
        explanation: "Calibración de temperatura en llantas blandas y maestría en las salidas lanzadas."
      }
    },
    stats: { experiencia: 5.0, ritmoClasificacion: 4.8, ritmoCarrera: 4.0, defensaAgresividad: 3.5, gestionNeumaticos: 4.0, calificacionGeneral: 4.2 },
    rivalries: [{ rivalName: "Lewis Hamilton", wins: 10, losses: 105, description: "Durante años se empujó mentalmente al vacío intentando destronar los tiempos de pole de su propio compañero de equipo." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Valtteri_Bottas"
  },
  colapinto: {
    description: "Talento silvestre de Argentina. Carecía del presupuesto gigantesco de sus rivales y luchó por subsistir en Europa hasta que su representante y Williams creyeron en él, resurgiendo la pasión de millones de sudamericanos.\n\nFresco, carismático y desinhibido frente a las cámaras, aportando un humor atípico a la sala de prensa. Sin embargo, bajo el casco, procesa la presión como un veterano gracias a un duro entrenamiento psicológico de resiliencia.",
    quote: "\"Yo no soy ítalo-argentino: yo soy argentino.\"",
    technicalData: {
      drivingStyle: "Biomecánicamente hostil en categorías junior; peleaba activamente con la dirección al entrar a la curva. Ha tenido que refinar ese instinto para fluir con el asfalto.",
      educationalConcept: {
        title: "Adaptación Aerodinámica de Bajos",
        explanation: "Aprendió rapidísimo a \"dormir\" sus instintos agresivos para no quebrar el delicado suelo perimetral de los actuales Fórmula 1, manteniendo así la carga aerodinámica constante."
      }
    },
    stats: { experiencia: 1.0, ritmoClasificacion: 4.0, ritmoCarrera: 4.0, defensaAgresividad: 4.5, gestionNeumaticos: 3.5, calificacionGeneral: 3.8 },
    rivalries: [{ rivalName: "Oliver Bearman", wins: 0, losses: 0, description: "Ambos son las nuevas joyas emergentes de la parrilla que irrumpieron para alterar el mercado de pilotos en pleno campeonato." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Franco_Colapinto"
  },
  lawson: {
    description: "Neozelandés respaldado por Red Bull. Construyó su currículum corriendo de todo, desde DTM hasta Super Fórmula japonesa, antes de ganarse su asiento titular siendo el sustituto perfecto de emergencia.\n\nFiero y determinado. No tiene rastros del \"complejo de inferioridad\" habitual de los novatos. Pilota como si llevara diez años en la categoría.",
    quote: "\"No estoy aquí para hacer amigos, estoy aquí para correr.\"",
    technicalData: {
      drivingStyle: "Combativo y sin titubeos.",
      educationalConcept: {
        title: "Adaptación a Ciegas",
        explanation: "Demostró que puede subirse a un auto que jamás probó y meterlo en los puntos en circuitos que requieren confianza extrema."
      }
    },
    stats: { experiencia: 1.0, ritmoClasificacion: 4.0, ritmoCarrera: 4.0, defensaAgresividad: 4.5, gestionNeumaticos: 3.5, calificacionGeneral: 3.9 },
    rivalries: [{ rivalName: "Yuki Tsunoda", wins: 0, losses: 0, description: "Batallando constantemente por probar quién merece acompañar a Verstappen en el futuro." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Liam_Lawson"
  },
  bearman: {
    description: "Prodigio absoluto del Reino Unido pulido por la Academia Ferrari. Es el primer novato de la historia que puntuó para dos escuderías diferentes (Ferrari y Haas) antes de tener siquiera su contrato titular definitivo.\n\nIncreíblemente maduro y hermético. Se despoja del ruido y la presión externa, apoyándose en su grupo de amigos cercanos dentro del deporte (como Kimi Antonelli y Gabriel Bortoleto) y manteniendo una compostura clínica.",
    quote: "\"Siempre mantener la calma y estar concentrado sin importar lo que suceda externamente.\"",
    technicalData: {
      drivingStyle: "Extremadamente pulido y lineal, cuidando el vértice sin agresividad excesiva.",
      educationalConcept: {
        title: "Control Emocional Neurológico",
        explanation: "Puede pilotar el sagrado coche de la Scuderia Ferrari en una pista crítica sin cometer un solo bloqueo de neumáticos."
      }
    },
    stats: { experiencia: 0.5, ritmoClasificacion: 4.0, ritmoCarrera: 4.0, defensaAgresividad: 4.0, gestionNeumaticos: 3.5, calificacionGeneral: 3.8 },
    rivalries: [{ rivalName: "Franco Colapinto y Andrea Kimi Antonelli", wins: 0, losses: 0, description: "La gran batalla de los novatos del futuro." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Oliver_Bearman"
  },
  antonelli: {
    description: "Italiano, hijo del ex piloto Marco Antonelli. Mercedes lo firmó a los 11 años. Su talento forzó al equipo a saltarse la F3 y ascenderlo con 18 años directo a la F1 tras la partida de Lewis Hamilton.\n\nModesto, humilde y extremadamente tranquilo. A pesar de los focos que le exigen llenar los zapatos del máximo campeón histórico, Antonelli no sobredimensiona el momento y confía en su \"estado de flujo\" (flow state).",
    quote: "\"Es el mejor sentimiento honestamente, especialmente cuando conduces naturalmente. Tu mente está completamente libre, solo estás concentrado y no hay nada más en tu cabeza.\"",
    technicalData: {
      drivingStyle: "Clínico. Prefiere una configuración que ofrezca mucho agarre delantero pero que se torne en un subviraje dócil si se sobrepasa el límite, de manera idéntica al gusto de Hamilton.",
      educationalConcept: {
        title: "Estado de Flujo",
        explanation: "Pilota con la mente despejada, sintiendo el coche orgánicamente sin necesidad de sobreanalizar (\"cuando conduces naturalmente... todo viene súper fácil\")."
      }
    },
    stats: { experiencia: 1.0, ritmoClasificacion: 4.5, ritmoCarrera: 4.0, defensaAgresividad: 3.5, gestionNeumaticos: 4.0, calificacionGeneral: 3.8 },
    rivalries: [{ rivalName: "George Russell", wins: 0, losses: 2, description: "Al entrar en el equipo alemán, Antonelli deberá medirse contra uno de los talentos más puros y consolidados de su generación." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Andrea_Kimi_Antonelli"
  },
  bortoleto: {
    description: "A los 11 años, dejó Brasil y a su familia para mudarse a Italia en busca de gloria. Ganó la F3 y la F2 bajo el amparo de la gestión de Fernando Alonso, logrando que Audi lo reclutara como titular.\n\nÉtica de trabajo pura. Es capaz de aterrizar de un fin de semana de F1 y subirse horas a su simulador en casa para corregir errores microscópicos. Un perfeccionista que admira obsesivamente a Senna y Verstappen.",
    quote: "\"Cuando disfrutas lo que estás haciendo y realmente lo haces con amor, puedes hacerlo muy bien. Cada vez que me doy cuenta de que no estoy disfrutando tanto como debería, me aseguro de volver atrás y hacer las cosas correctamente.\"",
    technicalData: {
      drivingStyle: "Equilibrado, aunque destaca que no tiene ningún problema en sacar los codos, ser hostil y jugar al mismo juego sucio si otros pilotos son agresivos con él.",
      educationalConcept: {
        title: "Reseteo Estratégico",
        explanation: "Si comete un error o no disfruta del flujo de la carrera, posee la madurez para recomponer su temperatura de llantas y reiniciar sus ataques."
      }
    },
    stats: { experiencia: 1.0, ritmoClasificacion: 4.0, ritmoCarrera: 4.2, defensaAgresividad: 4.0, gestionNeumaticos: 4.0, calificacionGeneral: 3.8 },
    rivalries: [{ rivalName: "Nico Hülkenberg", wins: 0, losses: 0, description: "Su gran referente interno para medir su talento en su año de debut con Sauber/Audi." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Gabriel_Bortoleto"
  },
  hadjar: {
    description: "Franco-argelino nacido en París. A diferencia de las dinastías automovilísticas, él viene de un estricto linaje de científicos en física cuántica. Subcampeón de F2, Red Bull y VCARB apostaron fuerte por él integrándolo al equipo principal.\n\nIntenso y feroz (\"Le Petit Prost\"). Hadjar no se guarda nada; si el coche no responde o no gana, su hambre de triunfo lo hace estallar de furia. Comparte esa determinación alienante de la juventud de Verstappen.",
    quote: "\"¡Agresivo! Soy de frenar tarde, también llevo mucha velocidad a las curvas. Ese es mi estilo.\"",
    technicalData: {
      drivingStyle: "Muy agresivo. Prefiere frenar en el último instante posible y arrastrar una enorme velocidad al vértice de la curva (carry speed).",
      educationalConcept: {
        title: "Tolerancia a Inestabilidad Trasera",
        explanation: "Su tolerancia a convivir con la inestabilidad límite del eje trasero, rasgo clave y esencial que exige la filosofía de diseño del ingeniero Adrian Newey en Red Bull."
      }
    },
    stats: { experiencia: 0.5, ritmoClasificacion: 4.0, ritmoCarrera: 4.0, defensaAgresividad: 4.5, gestionNeumaticos: 3.5, calificacionGeneral: 3.8 },
    rivalries: [{ rivalName: "Max Verstappen", wins: 0, losses: 0, description: "Una rivalidad de aprendizaje; es su referente de mentalidad, pero también el muro que debe escalar." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Isack_Hadjar"
  },
  lindblad: {
    description: "Piloto británico de madre india y padre sueco. Promesa brutal de Red Bull desde los 13 años. Ganó en su debut en F3 a los 16 y saltó a la F1 rompiendo los esquemas de edad a los 18.\n\nConfianza arrasadora. Cuando era apenas un niño de 5 años en el karting, se cruzó a Lando Norris y le prometió que estaría corriendo contra él en F1. Cumplió su palabra.",
    quote: "\"En la pista soy agresivo y me gusta aprovechar las oportunidades. Tomo riesgos y no soy de quedarme de brazos cruzados.\"",
    technicalData: {
      drivingStyle: "Inquieto y oportunista. Rehúsa a \"quedarse sentado\", optando siempre por tomar los riesgos en pista si divisa un espacio por donde cruzar.",
      educationalConcept: {
        title: "Curva de Aprendizaje Vertical",
        explanation: "Sobrevivió a los saltos categóricos aprendiendo rápidamente en monoplazas con gomas frías y configuraciones nuevas en tiempo récord."
      }
    },
    stats: { experiencia: 0.5, ritmoClasificacion: 4.0, ritmoCarrera: 3.5, defensaAgresividad: 4.5, gestionNeumaticos: 3.5, calificacionGeneral: 3.7 },
    rivalries: [{ rivalName: "Liam Lawson", wins: 0, losses: 0, description: "Al llegar como novato, deberá medirse internamente para ver quién domina Racing Bulls." }],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Arvid_Lindblad"
  },
  zhou: {
    description: "Habiendo marcado un hito histórico como el primer piloto titular chino en la historia de la Fórmula 1, Zhou Guanyu construyó una reputación fundamentada en la suavidad y el profesionalismo. Lejos de verse presionado a sobreconducir un monoplaza Sauber con limitaciones mecánicas, Zhou destacó por conservar el material intacto, evitando colisiones innecesarias y ejecutando una gestión muy precisa del desgaste de los neumáticos. En el paddock, su interés por la moda y el respeto irrestricto hacia el equipo técnico fortalecieron enormemente sus vínculos laborales.",
    quote: "\"Mantengo el perfil bajo y dejo que el trabajo hable por mí.\""
  },
  tsunoda: {
    description: "El piloto de Racing Bulls (apoyado por Honda) inyecta un carisma electrizante a la categoría reina. Al inicio de su carrera, su temperamento volcánico y sus gritos histriónicos por la radio amenazaban con opacar su rendimiento, algo que él mismo admitía sin tapujos. Sin embargo, bajo la tutela de los ingenieros de Faenza y el programa de desarrollo de Red Bull, Tsunoda experimentó una metamorfosis deportiva sobresaliente. Supo canalizar esa agresividad inherente para ganar consistencia, reducir errores y consolidarse como un piloto veloz, valiente y altamente capacitado para dominar los difíciles combates del mediocampo.",
    quote: "\"Solo soy un chico gritón.\"",
    stats: { experiencia: 3.0, ritmoClasificacion: 4.2, ritmoCarrera: 4.0, defensaAgresividad: 4.5, gestionNeumaticos: 3.5, calificacionGeneral: 4.0 },
    rivalries: [{ rivalName: "Liam Lawson", wins: 0, losses: 0, description: "En el férreo entorno de Red Bull, batallan por demostrar internamente en cada sesión de carrera quién merece la promoción final al codiciado asiento principal de la marca." }]
  },
  magnussen: {
    description: "El vikingo danés abandera el automovilismo rudo, directo y de la \"vieja escuela\". Al volante de los distintos equipos que representó (especialmente Haas), su estilo de defender la posición involucra codos anchos y cero concesiones; una negativa rotunda a ceder terreno que frecuentemente le ha acarreado polémicas con los comisarios. Magnussen detesta las tácticas conservadoras; su grado de compromiso en la pista es visceral, habiendo declarado que, si bien puede haber sido sacado de contexto, su voluntad de \"morir\" por un resultado refleja su entrega sin límites. Es franco y rechaza rotundamente alternativas más \"suaves\" al motor a combustión.",
    quote: "\"Daré todo. Moriré en el auto.\"",
    stats: { experiencia: 4.5, ritmoClasificacion: 4.0, ritmoCarrera: 3.5, defensaAgresividad: 5.0, gestionNeumaticos: 3.5, calificacionGeneral: 3.8 },
    rivalries: [{ rivalName: "Nico Hülkenberg", wins: 0, losses: 0, description: "Tras años de hostilidad verbal en el paddock, se unieron bajo el techo de la estructura de Guenther Steiner convirtiéndose en grandes compañeros con estilos muy distintos." }]
  }
};

export const getDriverBio = (driverId) => {
  let id = driverId?.toLowerCase() || '';
  if (id.includes('_')) {
    id = id.split('_').pop();
  }
  
  return DRIVER_BIOS[id] || {
    description: "Un piloto dedicado y enfocado, compitiendo al más alto nivel.",
    quote: "\"Siempre empujando al límite.\""
  };
};
