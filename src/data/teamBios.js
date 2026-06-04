export const TEAM_BIOS = {
  ferrari: {
    description: "Es el equipo histórico y sagrado por excelencia. Fundado por Enzo Ferrari, compiten ininterrumpidamente desde la temporada inaugural en 1950. Son la escudería más antigua, laureada y reverenciada de la historia. Ser llamado por Maranello es considerado el pináculo de la carrera de cualquier piloto, como lo demuestra la llegada del siete veces campeón Lewis Hamilton para 2025/2026.\n\nViven bajo la inmensa y a menudo asfixiante presión de toda Italia y su voraz prensa. Las victorias se celebran con campanas en Maranello; las derrotas son tragedias nacionales. Históricamente fue un ambiente muy político y emocional (operístico), aunque en la era reciente han intentado instaurar una cultura sin culpas para proteger a sus ingenieros de la toxicidad.",
    quote: "\"Essere Ferrari\" (Ser Ferrari). Significa tener el coraje para competir, con integridad, pasión y determinación.",
    technicalData: {
      designPhilosophy: "Fieles a la mítica frase de Enzo (\"La aerodinámica es para personas que no saben construir motores\"), Ferrari históricamente confió en la fuerza bruta de sus propulsores V12. Hoy, como constructor integral, su ventaja reside en fabricar absolutamente todo (chasis y motor) bajo un mismo techo en Italia, permitiendo una integración perfecta.",
      educationalConcept: {
        title: "Caja de cambios semiautomática (Paddle Shift)",
        explanation: "En 1989, con el modelo Ferrari 640 diseñado por John Barnard, Ferrari introdujo los cambios de marcha en el volante mediante levas (paddle shift). Esto revolucionó el deporte, permitiendo a los pilotos mantener ambas manos en el volante y cambiar de marcha sin embrague convencional (solo en las salidas), un estándar hoy en día en todo el automovilismo mundial."
      }
    },
    rivalries: [{ rivalName: "McLaren Mastercard F1 Team", wins: 16, losses: 10, description: "La histórica batalla entre la mítica escudería italiana y el constructor británico de Woking ha definido múltiples décadas de la categoría reina." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Scuderia_Ferrari"
  },
  mercedes: {
    description: "Aunque la marca compitió en los 50s (ganando con Fangio), su iteración moderna comenzó en 2010. Representan al gigante automotriz corporativo y dictaron la mayor dinastía de la historia en la era turbohíbrida (2014-2021) ganando ocho títulos de constructores consecutivos.\n\nSe caracteriza por la \"precisión alemana\" y la infalible organización británica (bases en Brackley y Brixworth). Bajo el mando de Toto Wolff, perfeccionaron la cultura de \"no culpar al individuo, culpar al problema\" (no-blame culture), creando un entorno psicológicamente seguro para innovar sin miedo.",
    quote: "\"Das Beste oder nichts\" (Lo mejor o nada). Subraya su convicción de elitismo ingenieril.",
    technicalData: {
      designPhilosophy: "Su filosofía es el refinamiento absoluto y la simbiosis perfecta entre la unidad de potencia y la eficiencia aerodinámica. Construyen motores tan potentes y fiables que hoy proveen a McLaren, Williams y Alpine.",
      educationalConcept: {
        title: "Sistema DAS (Dual Axis Steering)",
        explanation: "En 2020, sorprendieron al mundo con un volante que el piloto podía empujar y tirar en las rectas para modificar la convergencia de las ruedas delanteras en movimiento. Esto les permitía calentar los neumáticos uniformemente en las rectas y mejorar el agarre en las curvas. Fue prohibido al año siguiente por su excesiva genialidad y coste."
      }
    },
    rivalries: [{ rivalName: "Oracle Red Bull Racing", wins: 8, losses: 6, description: "La gran rivalidad moderna y turbohíbrida. Mercedes dominó hasta que Red Bull, con Max Verstappen, les arrebató la corona en la agónica y polémica vuelta final de 2021." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Mercedes-Benz_en_Fórmula_1"
  },
  red_bull: {
    description: "Ingresaron en 2005 comprando Jaguar. Son la marca corporativa/energética que rompió el molde tradicional de los fabricantes de autos. Al principio se burlaban de ellos llamándolos \"una empresa de bebidas que hace fiestas\", pero rápidamente instauraron eras de dominio absoluto con Sebastian Vettel y Max Verstappen.\n\nTienen el ambiente de un depredador alfa y operan con la agilidad de una start-up. Son despiadados, pragmáticos y famosos por su exigente academia de pilotos dirigida por Helmut Marko, la cual no duda en despedir o descender a pilotos a mitad de temporada si no rinden. Tienen los mecánicos más rápidos del mundo (récords de paradas en boxes de menos de 2 segundos).",
    quote: "\"Box box box. Torque map one and box\". (Su máxima corporativa de 'Red Bull Gives You Wings' se traduce en pista como un ataque sin concesiones).",
    technicalData: {
      designPhilosophy: "Aerodinámica extrema. De la mano del genio Adrian Newey (históricamente), siempre priorizaron un agarre aerodinámico y mecánico superlativo. Para 2026, dan su mayor salto al fabricar su propio motor (Red Bull Ford Powertrains) para no depender de terceros.",
      educationalConcept: {
        title: "Simulación a velocidad cuántica (xROM)",
        explanation: "Para afrontar la desventaja de crear un motor desde cero para 2026 frente a Ferrari o Mercedes, Red Bull y Ford crearon el modelo xROM (Experimental Reduced Order Model), un programa alojado en Oracle Cloud que simula la física del motor 1,000 veces más rápido que el tiempo real, permitiendo a los pilotos probar el motor virtual antes de que exista físicamente."
      }
    },
    rivalries: [{ rivalName: "Mercedes-AMG Petronas F1 Team", wins: 6, losses: 8, description: "El choque cultural definitivo de la era moderna: la rebeldía de la empresa de bebidas energéticas contra el inmaculado corporativismo del gigante alemán." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Red_Bull_Racing"
  },
  mclaren: {
    description: "Fundado en 1963 por el piloto Bruce McLaren. Son garagistas legendarios, el segundo equipo más antiguo y exitoso de la historia. Su época dorada en los 80s y 90s con Senna y Prost forjó el mito del automovilismo moderno. Celebran su GP número 1000 en 2026.\n\nLiderados por Zak Brown, combinan la herencia purista británica con una fuerte presencia de cultura pop y marketing moderno (su característico color papaya). A nivel interno, es un equipo sumamente colaborativo y orientado a datos, sin la toxicidad política de otras eras.",
    quote: "\"Fearlessly Forward\" (Valientemente hacia adelante). En honor a Bruce McLaren quien decía: \"Hacer algo bien es tan valioso que morir intentando hacerlo mejor no puede ser una temeridad\".",
    technicalData: {
      designPhilosophy: "Adaptabilidad y correlación perfecta. Sus ingenieros se destacan por crear monoplazas muy dóciles y predecibles, con la mejor correlación de datos entre el túnel de viento y el circuito real.",
      educationalConcept: {
        title: "Monocasco de Fibra de Carbono",
        explanation: "En 1981, el visionario ingeniero John Barnard diseñó para ellos el McLaren MP4/1. Fue el primer coche de F1 construido íntegramente con un monocasco de fibra de carbono (en lugar de aluminio). Aunque al principio todos creían que el material se rompería como cristal en un choque, demostró ser increíblemente más ligero y exponencialmente más seguro, salvando incontables vidas y estandarizando este material en toda la industria automotriz y aeronáutica."
      }
    },
    rivalries: [{ rivalName: "Atlassian Williams F1 Team", wins: 10, losses: 9, description: "La rivalidad garagista británica pura por excelencia en los años 80 y 90." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/McLaren"
  },
  aston_martin: {
    description: "De orígenes humildes (antiguo Jordan, Force India, Racing Point), fueron comprados por el multimillonario canadiense Lawrence Stroll. Pasaron de ser un equipo sobreviviente a transformarse en un ambicioso gigante con estatus de equipo de fábrica oficial de Honda para 2026.\n\nAmbición desenfrenada. Hay una presión vertical y corporativa inmensa impulsada por los masivos recursos inyectados (nuevo túnel de viento y campus tecnológico). Reclutan talento implacablemente de equipos rivales.",
    quote: "\"Make A Mark\" (Deja una Marca). Representa su agresividad en pista y su compromiso con la sostenibilidad global. También usan: \"Hay mucho bajo la piel que no se puede ver\".",
    technicalData: {
      designPhilosophy: "Copiar y luego innovar. En el pasado fueron infames por crear el \"Mercedes Rosa\" (copiando el diseño del campeón), pero hoy su filosofía es la de vanguardia aerodinámica, buscando generar carga de maneras no convencionales bajo el liderazgo de figuras recién cazadas del paddock.",
      educationalConcept: {
        title: "Optimización asimétrica del presupuesto",
        explanation: "Antes de su opulencia actual, su hito fue demostrar cómo la eficiencia extrema (lograr ser 4tos en el mundial con una fracción del dinero de Ferrari) podía humillar a fabricantes enormes, usando piezas compradas y concentrándose en suspensiones interconectadas."
      }
    },
    rivalries: [{ rivalName: "BWT Alpine F1 Team", wins: 0, losses: 0, description: "Ambas son marcas de autos deportivos de élite compitiendo encarnizadamente por el dominio de la parrilla media-alta y el estatus." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Aston_Martin_en_Fórmula_1"
  },
  williams: {
    description: "Nacidos en 1977 bajo el ala de Sir Frank Williams, son el epítome del equipo familiar garagista convertido en titán. Ganaron 9 campeonatos mundiales, dominando los 90s. Recientemente rescatados de la bancarrota por Dorilton Capital.\n\nUn equipo en pleno renacimiento tecnológico. Bajo James Vowles, la cultura está pasando de la supervivencia analógica a una mentalidad de start-up de Silicon Valley, integrando analistas de datos de Google e IA.",
    quote: "\"Pattern of Thought\" (Patrón de Pensamiento). Introducido junto a su IA \"Claude\", reafirmando que la fusión entre inteligencia artificial y el instinto humano es el futuro de la velocidad.",
    technicalData: {
      designPhilosophy: "En su época dorada, Williams era el rey absoluto del motor potente y la tecnología inteligente emparejada con chasis funcionales. Hoy, su diseño depende del poderío del motor Mercedes y de reconstruir sus procesos algorítmicos.",
      educationalConcept: {
        title: "Suspensión Activa",
        explanation: "En 1992 (FW14B), crearon una suspensión controlada por computadoras que leía las irregularidades de la pista y ajustaba hidráulicamente la altura de cada rueda milisegundo a milisegundo. El coche siempre iba perfectamente paralelo al suelo, generando una carga aerodinámica letal. Era tan rápido que fue prohibido."
      }
    },
    rivalries: [{ rivalName: "McLaren Mastercard F1 Team", wins: 9, losses: 10, description: "La gran batalla por el orgullo británico." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Williams_Grand_Prix_Engineering"
  },
  alpine: {
    description: "Histórica sede en Enstone, Reino Unido (anteriormente Benetton y Renault), con su base de motores en Viry-Châtillon (Francia). Como Renault, dominaron la F1 derrotando a Schumacher en 2005/2006.\n\nCompleja y, a menudo, conflictiva. Históricamente divididos por el choque cultural y nacionalista entre el chasis británico y el motor francés. Esto culminó en la dolorosa decisión para 2026 de cerrar el desarrollo de su motor francés para convertirse en clientes de Mercedes.",
    quote: "\"Allez Alpine\". En su lado comercial, se amparan bajo el \"Pink is back on track\" de BWT.",
    technicalData: {
      designPhilosophy: "Tras abandonar su unidad de potencia, el equipo ahora abraza el pragmatismo absoluto. Su diseño estará enfocado 100% en exprimir al máximo el chasis y la aerodinámica acoplada al eficiente bloque Mercedes.",
      educationalConcept: {
        title: "Mass Damper (Amortiguador de Masas)",
        explanation: "En 2005 y 2006, Renault ocultó dentro de la nariz de su coche un cilindro que contenía un disco pesado (de unos 9 kg) suspendido entre dos resortes. Cuando el coche pasaba por los pianos vibrando, el peso interno rebotaba en sentido contrario, cancelando la vibración del chasis (harmonic absorber). Esto mantenía el alerón delantero pegado al suelo y les dio dos campeonatos del mundo antes de ser prohibido."
      }
    },
    rivalries: [{ rivalName: "Aston Martin Aramco F1 Team", wins: 0, losses: 0, description: "Una encarnizada lucha de la parte media-alta con los equipos británicos." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Alpine_F1_Team"
  },
  haas: {
    description: "Fundado en 2016 por el empresario estadounidense Gene Haas. Su legado moderno se cementa en haber roto las reglas de negocio tradicionales del paddock, siendo el puente entre EE. UU. y la F1 europea hasta la entrada de Cadillac.\n\nOriginalmente, una cultura ruda de supervivencia financiera de Carolina del Norte. Para 2026, con la mega inyección tecnológica de la automotriz japonesa Toyota (TGR), el ambiente ha adoptado el sistema Kaizen (mejora continua), enfocándose en el aprendizaje colaborativo de jóvenes ingenieros y pilotos.",
    quote: "\"Kaizen\" (Mejora Continua), introducido directamente por la mentalidad de Toyota Gazoo Racing.",
    technicalData: {
      designPhilosophy: "El modelo de partes transferibles. Haas no diseña su coche completo. Compran el motor, caja de cambios y suspensiones a Ferrari (legal por reglamento) y encargan la construcción de su chasis al gigante italiano Dallara. Esto les permite competir con una fracción del personal normal.",
      educationalConcept: {
        title: "Modelo de Negocio Haas",
        explanation: "Más que una pieza, su innovación fue hackear el reglamento de constructores. Demostraron que externalizar la manufactura a Dallara y comprar todo lo legal a Ferrari les permitía ser competitivos desde su carrera de debut sin construir una fábrica masiva."
      }
    },
    rivalries: [{ rivalName: "Visa Cash App Racing Bulls F1 Team", wins: 0, losses: 0, description: "Es la guerra de la eficiencia entre los clientes de Ferrari y la academia hermana de Red Bull." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Haas_F1_Team"
  },
  rb: {
    description: "Comprada por Red Bull en 2006 (antigua Minardi). Tienen la inusual característica de estar basados en Italia (Faenza) pero apoyados desde Inglaterra.\n\nSon el ecosistema más joven y de cultura pop/urbana de la parrilla, pero internamente operan como una máquina darwiniana. La presión es brutal: si eres un talento joven brillante, subes a Red Bull; si decepcionas, quedas fuera de la F1 para siempre.",
    quote: "Operan como la \"Plataforma de despegue de los futuros campeones\".",
    technicalData: {
      designPhilosophy: "Sinergia de grupo. Utilizan suspensiones traseras, cajas de cambios y, a partir de 2026, el motor Red Bull Ford DM01 diseñado por su hermano mayor, actuando como el conejillo de indias perfecto para el desarrollo motriz.",
      educationalConcept: {
        title: "La Academia Deportiva",
        explanation: "Han sido la incubadora de talento más eficiente de la historia moderna, puliendo a la fuerza diamantes en bruto como Sebastian Vettel, Daniel Ricciardo, Carlos Sainz y Max Verstappen."
      }
    },
    rivalries: [{ rivalName: "TGR Haas F1 Team", wins: 0, losses: 0, description: "Guerra de la eficiencia entre los clientes." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Scuderia_AlphaTauri"
  },
  audi: {
    description: "Entran en 2026. A diferencia de marcas que solo pegan su logo (como Alfa Romeo), Audi compró el histórico equipo Sauber al 100% para desembarcar como un monolítico constructor oficial.\n\nFieles a su sangre alemana, operan bajo un estricto orden, planificación a largo plazo y la eliminación total del caos. Su cultura exige eficiencia germánica desde el día uno bajo la lupa corporativa de Volkswagen.",
    quote: "\"Vorsprung durch Technik\" (A la vanguardia de la técnica). Su creencia doctrinaria de que la victoria solo llega a través de la innovación tecnológica.",
    technicalData: {
      designPhilosophy: "Integración Vertical. El chasis R26 se diseña y construye en Suiza (Hinwil), mientras que el intrincado motor de nueva generación se hace en Alemania (Neuburg), centralizando todas las decisiones técnicas para que ambos elementos nazcan como una sola pieza pensada mutuamente.",
      educationalConcept: {
        title: "Sistema MGU-K de Audi",
        explanation: "Toda su participación deportiva moderna (ganar en Le Mans y Dakar con motores híbridos) fue un enorme banco de pruebas tecnológico para concebir el motor generador cinético hiper-eficiente que exigen las nuevas reglas 50/50 eléctricas de 2026."
      }
    },
    rivalries: [{ rivalName: "Cadillac Formula 1 Team", wins: 0, losses: 0, description: "La guerra geopolítica e industrial moderna: Alemania vs Estados Unidos debutando el mismo año." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Audi"
  },
  cadillac: {
    description: "Ingresan en 2026 apoyados por el coloso General Motors y TWG Motorsports. Tras superar un rechazo inicial histórico de los europeos mediante músculo político y financiero, finalmente materializaron el sueño de una verdadera estructura y superpotencia americana en la parrilla.\n\nPragmatismo y agresividad estadounidense. Rechazan la burocracia europea a favor de acciones rápidas. Saben que tienen que \"ganarse el respeto\" en el paddock, usando como combustible la presión de representar al mercado norteamericano completo.",
    quote: "\"Rooted in innovation, built to push the sport forward\" (Arraigados en la innovación, construidos para impulsar el deporte hacia adelante).",
    technicalData: {
      designPhilosophy: "En su génesis, montan el motor de su rival histórico Ferrari para concentrar sus masivos recursos aerodinámicos (ayudados por Inteligencia Artificial TWG) en el chasis. En paralelo, preparan su propio y amenazante motor americano GM para 2028/2029.",
      educationalConcept: {
        title: "El Campus de Concord",
        explanation: "Para crear su motor, GM está construyendo en Carolina del Norte unas instalaciones monstruosas de 204,000 pies cuadrados y 150 millones de dólares dotada de los dinamómetros e IA más potentes del planeta, declarando la guerra tecnológica a Europa."
      }
    },
    rivalries: [{ rivalName: "Audi Revolut F1 Team", wins: 0, losses: 0, description: "La guerra geopolítica de Estados Unidos vs Alemania." }],
    wikipediaUrl: "https://es.wikipedia.org/wiki/Cadillac"
  },
  sauber: {
    description: "Equipo en transición que ha sido absorbido por Audi para el proyecto 2026.",
    quote: "\"Vorsprung durch Technik\" (A la vanguardia de la técnica)."
  },
  kick_sauber: {
    description: "Equipo en transición que ha sido absorbido por Audi para el proyecto 2026.",
    quote: "\"Vorsprung durch Technik\" (A la vanguardia de la técnica)."
  }
};

export const getTeamBio = (constructorId) => {
  let id = constructorId?.toLowerCase() || '';
  if (id === 'visa cash app rb' || id === 'rb') id = 'rb';
  if (id === 'aston martin') id = 'aston_martin';
  if (id === 'red bull' || id === 'red bull racing') id = 'red_bull';
  
  return TEAM_BIOS[id] || {
    description: "Un equipo con un legado importante en la Fórmula 1, trabajando incansablemente temporada tras temporada para optimizar sus monoplazas, mejorar la aerodinámica y maximizar el rendimiento en la búsqueda constante por la gloria en el campeonato de constructores.",
    quote: "\"Cada milésima de segundo cuenta en nuestra búsqueda por la perfección.\""
  };
};
