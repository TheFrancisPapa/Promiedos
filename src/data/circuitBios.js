export const CIRCUIT_BIOS = {
  albert_park: {
    description: "Enclavado en el corazón metropolitano de Melbourne, rodeando las aguas serenas de un lago artificial, el Circuito de Albert Park actúa como el heraldo tradicional de la primavera automovilística. La atmósfera de los fans australianos es eléctrica y festiva. El misticismo de Albert Park radica en ser el lugar de las revelaciones, donde la jerarquía invernal de los equipos queda expuesta por primera vez.",
    quote: "\"El lugar donde la jerarquía de invierno queda expuesta y la realidad del campeonato empieza.\"",
    technicalData: {
      trackType: "Semiurbano Rápido",
      setupFocus: "Tracción en curvas lentas y eficiencia en zonas de DRS.",
      educationalConcept: {
        title: "Asfalto Verde y Evolución de Pista",
        explanation: "Al ser un trazado semiurbano de calles públicas, el asfalto es resbaladizo al inicio del fin de semana (verde) y va acumulando goma sesión tras sesión, mejorando el agarre enormemente. Las recientes reformas eliminaron las curvas 9 y 10 para aumentar la velocidad punta y someter al piloto a fuerzas G laterales extremas."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_de_Albert_Park"
  },
  shanghai: {
    description: "Construido monumentalmente sobre un terreno pantanoso inestable mediante la inyección de miles de pilones, es una maravilla indiscutible de la ingeniería civil moderna. La pista destaca por su trazado inspirado en el carácter chino 'Shang' (ascender) y exige un equilibrio aerodinámico muy particular.",
    quote: "\"Un trazado monumental que destruye tus neumáticos delanteros si no tienes el equilibrio perfecto.\"",
    technicalData: {
      trackType: "Permanente Técnico (Front-limited)",
      setupFocus: "Carga aerodinámica frontal para proteger el neumático delantero izquierdo.",
      educationalConcept: {
        title: "El Caracol y la Degradación Frontal",
        explanation: "La icónica secuencia de curvas 1 a la 4 es una espiral descendente de radio perpetuamente cerrado. Los pilotos entran a altísima velocidad y pierden inercia, experimentando una carga G lateral constante que destroza el hombro del neumático delantero izquierdo (front-limited), exigiendo máxima adherencia delantera."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_Internacional_de_Shangh%C3%A1i"
  },
  suzuka: {
    description: "Reverenciado de forma unánime como la prueba de fuego definitiva y uno de los máximos desafíos del deporte mundial, Suzuka es un auténtico templo del automovilismo. Su misticidad radica en su inusual geometría en forma de ocho. Los aficionados japoneses son famosos por su devoción estoica y respeto religioso.",
    quote: "\"Si cometes un milimétrico error en el primer ápice, sufres las consecuencias por el resto de la pista.\"",
    technicalData: {
      trackType: "Permanente Clásico de Alta Velocidad (En forma de 8)",
      setupFocus: "Alta carga aerodinámica y un chasis con respuesta rápida en cambios de dirección.",
      educationalConcept: {
        title: "Flujo Aerodinámico en las Eses",
        explanation: "El primer sector exige un flujo y ritmo perfecto a través de las curvas en 'S'. Un mínimo error de trazada en la primera curva arruina la posición para todo el complejo. Sectores como la terrorífica curva 130R exigen una confianza absoluta en la adherencia (downforce) del vehículo a más de 300 km/h."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_de_Suzuka"
  },
  miami: {
    description: "Ubicado en el expansivo recinto del Hard Rock Stadium en los suburbios de Florida, el Autódromo Internacional de Miami encapsula el glamour contemporáneo y el espectáculo vibrante que define la Fórmula 1 moderna en Estados Unidos, con su famosa marina falsa y club de playa.",
    quote: "\"Glamour por fuera, pero un horno abrasivo e implacable en el asfalto.\"",
    technicalData: {
      trackType: "Urbano / Permanente Híbrido",
      setupFocus: "Equilibrio entre velocidad máxima para las rectas y tracción en el estrecho sector 2.",
      educationalConcept: {
        title: "Degradación Térmica en Pista",
        explanation: "El abrasador calor del asfalto recién pavimentado y la humedad extrema convierten la pista en un horno termodinámico. El sector central pasa debajo de una autopista y es extremadamente estrecho, exigiendo tracción mecánica para evitar los muros mientras los neumáticos se derriten."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Aut%C3%B3dromo_Internacional_de_Miami"
  },
  villeneuve: {
    description: "Ubicado en la isla artificial de Notre-Dame en Montreal, este trazado es un bastión histórico de la presencia de la Fórmula 1 en Norteamérica. La ciudad entera se paraliza en un festival urbano para acoger a las carreras.",
    quote: "\"Rozar el muro de los campeones es la frontera entre ser valiente y destrozar el coche.\"",
    technicalData: {
      trackType: "Semiurbano de Stop-and-Go",
      setupFocus: "Mínimo drag para las rectas, potencia máxima de frenada y salto agresivo de bordillos.",
      educationalConcept: {
        title: "Fatiga Térmica de Frenos (Brake Fade)",
        explanation: "Su naturaleza pura de 'stop-and-go' es una sucesión de largas rectas cortadas por fuertes frenadas. Esto lleva al sistema de frenos de carbono al límite absoluto de temperatura, provocando 'fade' (pérdida de poder de frenado) y culminando en la exigente chicane final protegida por el temido 'Muro de los Campeones'."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_Gilles_Villeneuve"
  },
  monaco: {
    description: "La joya indiscutida de la corona y la anomalía automovilística más venerada. Desafía toda lógica de seguridad moderna: es absurdamente estrecho, profundamente claustrofóbico y carece de zonas de escape. Pilotar híbridos de mil caballos por las calles del Principado exige concentración sobrehumana.",
    quote: "\"Correr en Mónaco es como andar en bicicleta por la sala de tu casa.\"",
    technicalData: {
      trackType: "Urbano Extremadamente Lento",
      setupFocus: "Máxima carga aerodinámica (Max Downforce) y suspensiones modificadas.",
      educationalConcept: {
        title: "Ángulo de Dirección Modificado",
        explanation: "Para poder negociar la famosísima y lentísima horquilla de Loews, los equipos deben alterar la geometría física de la suspensión delantera, permitiendo que el volante gire más grados de lo habitual, mientras configuran el auto con alerones que actúan como auténticas paredes contra el viento para ganar adherencia."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_de_M%C3%B3naco"
  },
  catalunya: {
    description: "Enclavado en Montmeló, ha fungido durante más de tres décadas como el laboratorio aerodinámico por excelencia. Su diseño pragmático desnuda inmediatamente cualquier deficiencia fundamental del chasis de un monoplaza.",
    quote: "\"Si tu coche es rápido en Barcelona, será rápido en casi cualquier parte del mundo.\"",
    technicalData: {
      trackType: "Permanente de Referencia (All-rounder)",
      setupFocus: "Equilibrio aerodinámico perfecto y cuidado del neumático delantero izquierdo.",
      educationalConcept: {
        title: "Cargas G Sostenidas",
        explanation: "El icónico curvón 3 en subida expone el cuello de los pilotos a fuerzas G laterales severas y prolongadas, mientras castiga térmicamente la llanta exterior. Recientemente se eliminó la chicane del último sector, restaurando un vertiginoso final a fondo que expone la estabilidad a alta velocidad."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_de_Barcelona-Catalunya"
  },
  red_bull_ring: {
    description: "Rodeado por el idílico paisaje alpino de Estiria, este circuito contrasta su brevísima longitud con un desnivel topográfico engañosamente desafiante. Las gradas vibran bajo un mar de humo naranja de la afición neerlandesa.",
    quote: "\"Diez curvas de pura presión donde un error de una décima te cuesta cinco posiciones en parrilla.\"",
    technicalData: {
      trackType: "Permanente Corto y Ondulado",
      setupFocus: "Tracción mecánica en pendientes de subida y estabilidad de frenado en bajada.",
      educationalConcept: {
        title: "Compresión y Descompresión Aerodinámica",
        explanation: "Su agresiva topografía exige capacidad de tracción cuesta arriba hacia la curva 3, seguida de curvas rápidas ciegas en bajada. Estos cambios de elevación alteran repentinamente cómo el flujo de aire aplasta el coche contra el asfalto, causando inestabilidad repentina y castigos por exceder límites de pista."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Red_Bull_Ring"
  },
  silverstone: {
    description: "La venerable cuna histórica y epicentro espiritual de la Fórmula 1. Construido sobre un antiguo aeródromo de la Segunda Guerra Mundial, su naturaleza abierta somete a los coches a fuertes y traicioneros vientos cruzados.",
    quote: "\"Maggotts y Becketts son una sinfonía física de dirección a más de 250 km/h.\"",
    technicalData: {
      trackType: "Permanente Clásico Aerodinámico",
      setupFocus: "Estabilidad a alta velocidad y rigidez para soportar el Ground Effect.",
      educationalConcept: {
        title: "Sensibilidad Aerodinámica al Viento",
        explanation: "La secuencia enlazada de Maggotts y Becketts muestra el terrorífico potencial del efecto suelo. Al ser un aeródromo plano, las ráfagas de viento lateral mueven violentamente el centro de presión aerodinámica del monoplaza, requiriendo reflejos instantáneos de corrección mientras se soporta el dolor del cuello."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_de_Silverstone"
  },
  spa: {
    description: "Una serpenteante cinta de asfalto gris por los densos bosques de las Ardenas. Es el trazado más largo de la temporada y genera un microclima propio, donde puede llover en una curva y estar seco en otra.",
    quote: "\"Sumergirse en Eau Rouge y salir con vida hacia Kemmel es la sensación más sublime del mundo.\"",
    technicalData: {
      trackType: "Permanente Muy Largo de Alta Velocidad",
      setupFocus: "Baja/Media carga aerodinámica para velocidad punta, manteniendo estabilidad en el segundo sector.",
      educationalConcept: {
        title: "Fuerzas G Verticales (Eau Rouge)",
        explanation: "El descenso y escalada ciega en Raidillon comprime la suspensión hasta su límite físico y aplasta el cuerpo del piloto contra el asiento con extremas fuerzas G verticales. Requiere un setup firme que no roce peligrosamente el asfalto (bottoming out) en la bajada."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_de_Spa-Francorchamps"
  },
  hungaroring: {
    description: "Apodado el 'Mónaco sin muros', es un anfiteatro polvoriento que no ofrece un solo momento de respiro. La carencia de largas rectas significa que la refrigeración de los híbridos es una tarea crítica bajo el abrasador calor del verano magiar.",
    quote: "\"No hay dónde esconderse; es una vuelta tras otra en un sauna asfixiante.\"",
    technicalData: {
      trackType: "Permanente Muy Revirado y Lento",
      setupFocus: "Máxima carga aerodinámica y enfoque en tracción de baja velocidad.",
      educationalConcept: {
        title: "Refrigeración Térmica Crítica (Cooling)",
        explanation: "Al no haber largas zonas de aceleración a fondo para que el aire frío golpee los radiadores a gran velocidad, disipar el calor del motor y de los frenos incandescentes se vuelve un rompecabezas vital. Adelantar en pista es arduo, lo que transfiere toda la presión a la estrategia de pits (undercut)."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Hungaroring"
  },
  zandvoort: {
    description: "Un circuito costero implacable de la vieja escuela incrustado en dunas de arena. Es ciego y estrecho, rodeado de trampas de grava. El ambiente trasciende el deporte para ser un gigantesco y asfixiante festival de música electrónica dominado por humo naranja.",
    quote: "\"Entrar al peralte a fondo y sentir cómo te empuja hacia el cielo es algo fuera de este mundo.\"",
    technicalData: {
      trackType: "Permanente Estrecho Ondulado (Peraltado)",
      setupFocus: "Carga alta para dominar las chicanes de arena resbaladiza.",
      educationalConcept: {
        title: "Curvas Peraltadas Asimétricas",
        explanation: "La curva final Arie Luyendyk tiene 18 grados de inclinación (banking). Esta geometría física contrarresta la fuerza centrífuga, permitiendo al monoplaza trazar a velocidad vertiginosa con el DRS abierto. Esto somete la goma exterior del neumático a presiones aplastantes únicas."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_de_Zandvoort"
  },
  monza: {
    description: "Conocido reverencialmente como 'El Templo de la Velocidad', situado en el antiguo parque real. Está marcado por el fervor febril casi religioso de los Tifosi que inundan el asfalto teñido de rojo tras la carrera bajo el monumental podio suspendido.",
    quote: "\"Ir rápido aquí es fácil; lo difícil es lograr que el auto frene a tiempo.\"",
    technicalData: {
      trackType: "Permanente Ultrashort de Extra Alta Velocidad",
      setupFocus: "Mínima carga aerodinámica (Low-drag) absoluta y frenos ultra potentes.",
      educationalConcept: {
        title: "Setup de Low-Drag Extremo",
        explanation: "Los ingenieros utilizan alerones traseros tan delgados que parecen invisibles para reducir la resistencia al viento y rozar los 350 km/h. Como sacrificio, el auto carece de adherencia aerodinámica al frenar, haciéndose increíblemente nervioso e inestable en chicanes como Ascari."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Autodromo_Nazionale_di_Monza"
  },
  madring: {
    description: "La espectacular y debatida adición de la Fórmula 1 moderna en Madrid. Un innovador circuito semiurbano que abraza el recinto ferial IFEMA y cruza subterráneamente túneles oscuros bajo autopistas elevadas, respaldado por el fervor pasional del público ibérico.",
    quote: "\"Un macro-complejo logístico que promete ser el estándar global de las próximas décadas.\"",
    technicalData: {
      trackType: "Semiurbano Extremo",
      setupFocus: "Estabilidad a alta velocidad con capacidad de detenerse brutalmente.",
      educationalConcept: {
        title: "Peralte Demencial y Estrés Estructural",
        explanation: "Destaca arquitectónicamente 'La Monumental', una curva de 180 grados con un brutal gradiente de inclinación del 24% (casi el doble que Indianápolis). Somete la integridad de la carcasa Pirelli y el cuello del piloto a niveles de tensión isométrica inexplorados en la era moderna."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/F%C3%B3rmula_1"
  },
  baku: {
    description: "Un intrincado laberinto arquitectónico de contrastes esquizofrénicos. Fusiona la velocidad aterradora de un autódromo en su inmensa recta junto al mar, con la claustrofobia de un trazado medieval en la estrechísima y letal subida del castillo.",
    quote: "\"Bakú es donde el exceso de confianza termina estampado en un muro de piedra milenaria.\"",
    technicalData: {
      trackType: "Urbano de Dos Caras",
      setupFocus: "Compromiso imposible: bajo drag para la larga recta pero suficiente carga para los muros estrechos.",
      educationalConcept: {
        title: "Efecto Rebufo (Tow) Masivo",
        explanation: "La recta principal de más de 2 kilómetros permite a los coches perseguidores succionar el aire turbulento del coche delantero, neutralizando el arrastre del viento. Esto genera batallas de adelantamiento suicidas a final de recta y múltiples Safety Cars."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_callejero_de_Bak%C3%BA"
  },
  marina_bay: {
    description: "El test físico, mental y mecánico supremo del sudeste asiático disputado bajo la luz de potentes focos halógenos. Las abrasadoras temperaturas y el asfalto ultra bacheado envían espectaculares cortinas de chispas de titanio hacia el skyline de la ciudad.",
    quote: "\"Al final de la carrera, solo deseas que termine, perdiendo litros de sudor en la cabina.\"",
    technicalData: {
      trackType: "Urbano Nocturno Agotador",
      setupFocus: "Alta carga aerodinámica y suspensiones flexibles para absorber los baches letales.",
      educationalConcept: {
        title: "Humedad y Deshidratación Límite",
        explanation: "El calor y el 80% de humedad sostenida hacen que los pilotos lleguen a perder más de cuatro kilos de peso durante dos horas agónicas. Físicamente empuja el sistema cardiovascular de los atletas al borde del colapso, mientras el desgaste mental de pasar a milímetros del muro es constante."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_callejero_de_Marina_Bay"
  },
  americas: {
    description: "COTA se erige como el faro del éxito definitivo del automovilismo europeo en tierras estadounidenses. Un recinto colosal donde el evento es espectacularmente norteamericano, con estrellas de cine, enormes sombreros y barbacoas multitudinarias.",
    quote: "\"La primera curva es un salto al vacío que invita a lanzarte sin contemplaciones.\"",
    technicalData: {
      trackType: "Permanente Fluido y Bumpy",
      setupFocus: "Agilidad del chasis para las eses y tracción para el último sector trabado.",
      educationalConcept: {
        title: "Topografía Oscilante y Efecto Suelo",
        explanation: "El asfalto, construido sobre suelo arcilloso inestable de Texas, sufre abultamientos constantes. Estos baches complican la altura óptima del suelo requerida por los autos de efecto suelo modernos (porpoising), exigiendo suspensiones más altas que sacrifican adherencia aerodinámica general."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_de_las_Am%C3%A9ricas"
  },
  rodriguez: {
    description: "Ubicado a más de 2.200 metros sobre el nivel del mar, presenta un enigma físico y aerodinámico sin parangón en el campeonato. Correr rodeado por las decenas de miles de apasionados que atestan el gigantesco estadio del Foro Sol de México es una experiencia inigualable.",
    quote: "\"Se siente como manejar sobre hielo pero volando a una altitud extrema.\"",
    technicalData: {
      trackType: "Permanente de Alta Altitud",
      setupFocus: "Alerones de máximo tamaño rindiendo con el equivalente aerodinámico de Monza.",
      educationalConcept: {
        title: "La Paradoja de la Densidad Atmosférica",
        explanation: "La falta de oxígeno en la altura hace que el aire sea tan tenue que los paquetes aerodinámicos más voluminosos apenas logran generar fuerza descendente. Además, la privación de aire asfixia a los motores de combustión y reduce drásticamente el flujo vital hacia los radiadores, requiriendo aberturas máximas de ventilación."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez"
  },
  interlagos: {
    description: "Sinónimo de drama histórico en pista y clima caótico, el circuito paulista discurre en armonía orgánica por una zona de desniveles donde los ecos de Senna son ensordecedores entre el incesante repique de la percusión brasileña en las laderas.",
    quote: "\"Interlagos nunca decide las cosas fácilmente; te roba la victoria o te corona en la última vuelta.\"",
    technicalData: {
      trackType: "Permanente Orgánico Corto (Antihorario)",
      setupFocus: "Balance entre el drag elevado de las largas subidas a fondo y el grip mecánico del sector medio.",
      educationalConcept: {
        title: "Curvas Antihorarias y Fatiga del Cuello",
        explanation: "Al girar preponderantemente hacia la izquierda durante todo el recorrido, los músculos del hemisferio izquierdo del cuello de los pilotos (acostumbrados a girar a la derecha en el resto de circuitos) se inflaman por la fatiga severa, agravado por la infame S de Senna en bajada."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace"
  },
  vegas: {
    description: "El espectáculo hipercapitalista definitivo a 340 km/h por el neón de la famosa avenida Strip. Una carrera que se corre entrada la gélida noche del sábado local bajo la imponente luz cibernética de la gigantesca Sphere.",
    quote: "\"Sobrevivir a la primera curva fría del Strip es apostar al negro en la ruleta.\"",
    technicalData: {
      trackType: "Urbano Nocturno Gélido",
      setupFocus: "Alerones sumamente bajos para alcanzar altas velocidades y priorizar entrada en calor de frenos.",
      educationalConcept: {
        title: "Déficit Térmico de la Goma",
        explanation: "La peligrosa caída de la temperatura ambiental del desierto nocturno enfría brutalmente la superficie del asfalto. A tan baja temperatura, el caucho Pirelli pierde su elasticidad adhesiva y se vuelve quebradizo, haciendo que las zonas de frenada fuertes sean un caos de neumáticos bloqueados que se niegan a detener el coche."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_callejero_de_Las_Vegas"
  },
  losail: {
    description: "Reconvertido de su origen motero, es un implacable trazado abrasivo en el desierto oriental donde las fuerzas laterales son constantes y destructivas bajo una abrumadora batería halógena.",
    quote: "\"Cinco kilómetros de lucha extrema donde el cuello arde y no existe respiro visual ni físico.\"",
    technicalData: {
      trackType: "Permanente Abrasivo Nocturno",
      setupFocus: "Suspensión que no destruya la goma por los destructivos bordillos tipo pirámide.",
      educationalConcept: {
        title: "Fuerzas Laterales G Constantes",
        explanation: "La abundancia de curvas rápidas de enorme radio somete al chasis a estrés lateral continuo. Los bordillos de pirámide castigan estructuralmente el flanco (la pared lateral) de los neumáticos mientras el monoplaza aplasta el suelo, llevando a los Pirelli al límite de una falla catastrófica (pinchazo)."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_Internacional_de_Losail"
  },
  yas_marina: {
    description: "El fastuoso y artificial teatro donde el atardecer marca la apoteosis estacional de la F1. Cruzando por debajo del radiante hotel Yas y bordeando enormes yates, ha sido históricamente el brutal decisor de campeonatos inolvidables.",
    quote: "\"Aquí terminan las amistades de toda una temporada y se definen los legados eternos.\"",
    technicalData: {
      trackType: "Permanente Nocturno Híbrido",
      setupFocus: "Dicotomía de coche: rápido en el sector inicial, y pura tracción lenta al final.",
      educationalConcept: {
        title: "Transición Térmica de Atardecer a Noche",
        explanation: "Al comenzar bajo la tarde cálida y finalizar en la fría noche árabe iluminada, la temperatura del asfalto cae radicalmente a mitad de sesión. Esta transición cambia de golpe la adherencia de la pista, obligando al piloto a alterar progresivamente los ajustes en el volante mientras conduce."
      }
    },
    wikipediaUrl: "https://es.wikipedia.org/wiki/Circuito_Yas_Marina"
  }
};

export const getCircuitBio = (circuitId) => {
  const id = circuitId?.toLowerCase() || '';
  
  return CIRCUIT_BIOS[id] || {
    description: "Este histórico trazado es un desafío tanto para las máquinas como para los pilotos. A la espera de que se cargue la biografía detallada, sabemos que ofrece un espectáculo único en el calendario de la Fórmula 1, poniendo a prueba los límites de la aerodinámica y la gestión de neumáticos en condiciones cambiantes.",
    quote: "\"La victoria aquí pertenece al piloto que domina sus miedos y respeta los límites del asfalto.\""
  };
};
