
export interface Criterion {
  id: string;
  description: string;
}

export const EVALUATION_CRITERIA: Criterion[] = [
  { id: "TEC.4.1.1", description: "Idear y planificar soluciones tecnológicas emprendedoras que generen valor, basándose en el análisis de necesidades, y aplicando estrategias de trabajo colaborativo y técnicas de ideación." },
  { id: "TEC.4.1.2", description: "Aplicar estrategias colaborativas de gestión de proyectos, utilizando técnicas de prototipado y herramientas digitales de planificación y control." },
  { id: "TEC.4.2.1", description: "Analizar el diseño de un producto, evaluando su adecuación a las necesidades del usuario, la demanda del mercado y su ciclo de vida." },
  { id: "TEC.4.2.2", description: "Fabricar productos y soluciones tecnológicas, aplicando herramientas de diseño asistido por ordenador y recursos electrónicos, y seleccionando materiales y técnicas de fabricación adecuadas." },
  { id: "TEC.4.3.1", description: "Intercambiar información y fomentar el trabajo en equipo mediante el uso de herramientas digitales colaborativas de comunicación." },
  { id: "TEC.4.3.2", description: "Presentar y difundir propuestas y soluciones tecnológicas de manera efectiva e inclusiva, seleccionando el formato y los canales de comunicación más adecuados." },
  { id: "TEC.4.4.1", description: "Diseñar, construir, controlar y simular sistemas automáticos programables y robots para la resolución de problemas, aplicando conocimientos sobre arquitectura de sistemas, componentes electrónicos y lenguajes de programación." },
  { id: "TEC.4.4.2", description: "Integrar aplicaciones informáticas y tecnologías digitales emergentes como el Internet de las Cosas (IoT) o la Inteligencia Artificial (IA) en proyectos tecnológicos." },
  { id: "TEC.4.5.1", description: "Resolver tareas mediante el uso y configuración de herramientas digitales aplicadas, analizando su funcionamiento y seleccionando la más adecuada en función de la tarea." },
  { id: "TEC.4.6.1", description: "Hacer un uso responsable y ético de la tecnología con criterios de sostenibilidad, analizando el impacto ambiental y social del desarrollo tecnológico." },
  { id: "TEC.4.6.3", description: "Identificar y valorar la repercusión de proyectos tecnológicos de carácter social, analizando su contribución a la mejora de la calidad de vida y al desarrollo sostenible." },
];

export interface Practice {
  id: string;
  title: string;
  category: string;
  criteria: string[];
  isHighlighted?: boolean;
  blogUrl?: string;
}

export const CATEGORIES = [
  "LEDs y Salidas Digitales",
  "Entradas Digitales (Pulsadores)",
  "Sensores Analógicos (LDR/Color)",
  "Potenciómetros y Control Manual",
  "Ultrasonidos y Distancia",
  "Motores y Servomotores",
  "Visualización y Pantallas",
  "Sonido",
  "Bluetooth y Control App",
  "Proyectos Integradores",
  "Robótica Móvil"
];

export const PRACTICES: Practice[] = [
  // CATEGORY: LEDs y Salidas Digitales
  { id: "P01_L", title: "Conexión de un Led", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P01_L.%20Conexi%C3%B3n%20de%20un%20Led" },
  { id: "P02A_L", title: "Encendido de 3 Leds", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02A_L.%20Encendido%20de%203%20Leds" },
  { id: "P02B_L", title: "Secuencia con Leds", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02B_L.%20Secuencia%20con%20Leds" },
  { id: "P02C_L", title: "Secuencia con Leds (C)", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02C_L.%20Secuencia%20con%20Leds" },
  { id: "P02D_L", title: "Secuencia con Leds (D)", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02D_L.%20Secuencia%20con%20Leds" },
  { id: "P02E_L", title: "Secuencia con Leds Funciones", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02E_L.%20Secuencia%20con%20Leds%20Func" },
  { id: "P02F_L", title: "Secuencia con Leds Vbles", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02F_L.%20Secuencia%20con%20Leds%20Vbles" },
  { id: "P02G_L", title: "Secuencia con Leds brillo", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02G_L.%20Secuencia%20con%20Leds%20brillo" },
  { id: "P02H_L", title: "Secuencia con leds (H)", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02H_L.%20Secuencia%20con%20leds" },
  { id: "P02I_L", title: "Secuencia con leds (I)", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P02I_L.%20Secuencia%20con%20leds" },
  { id: "P04_L", title: "Código Morse con 1 Led", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P04_L.%20C%C3%B3digo%20Morse%20con%201%20Led" },
  { id: "P45_Nx", title: "Neopixel Semáforo F1", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P45_Nx.%20Neopixel%20Sem%C3%A1foro%20F1" },
  { id: "P46_Nx", title: "Neopixel Coche Fantástico", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P46_Nx.%20Neopixel%20Coche%20Fant%C3%A1stico" },
  { id: "P47_Nx", title: "Neopixel Subir Intensidad", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P47_Nx.%20Neopixel%20Subir%20Intensidad" },
  { id: "P48_Nx", title: "Neopixel Nos Chocamos", category: "LEDs y Salidas Digitales", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P48_Nx.%20Neopixel%20%22Nos%20Chocamos%22" },

  // CATEGORY: Entradas Digitales
  { id: "P05_I", title: "Encendido de 1 Led al pulsar interruptor", category: "Entradas Digitales (Pulsadores)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P05_I.%20Encendido%20de%201%20Led%20al%20pulsar%20interruptor" },
  { id: "P06_I", title: "Control de 3 Leds con 2 interruptores", category: "Entradas Digitales (Pulsadores)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P06_I.%20control%20de%203%20Leds%20con%202%20interruptores" },
  { id: "P07_I", title: "Contador de pulsaciones", category: "Entradas Digitales (Pulsadores)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P07_I.%20Contador%20de%20pulsaciones%20del%20interruptor" },
  { id: "P08_MK", title: "Conexiones Makey", category: "Entradas Digitales (Pulsadores)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P08_MK.%20Conexiones%20Makey" },
  { id: "P25_I", title: "Sensor de inclinación", category: "Entradas Digitales (Pulsadores)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P25_I.%20Sensor%20de%20inclinaci%C3%B3n" },

  // CATEGORY: Sensores Analógicos
  { id: "P09_SC", title: "Obtenemos el color de un objeto", category: "Sensores Analógicos (LDR/Color)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P09_SC.%20Obtenemos%20el%20color%20de%20un%20objeto" },
  { id: "P10_LDR", title: "Leer valor sensor analógico LDR", category: "Sensores Analógicos (LDR/Color)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P10_LDR.%20Leer%20el%20valor%20de%20un%20sensor%20anal%C3%B3gico%20LDR" },
  { id: "P11_LDR", title: "Control de Led con LDR", category: "Sensores Analógicos (LDR/Color)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P11_LDR.%20Control%20de%20Led%20con%20sensor%20anal%C3%B3gico%20LDR" },
  { id: "P12_LDR", title: "Encendido progresivo de leds", category: "Sensores Analógicos (LDR/Color)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P12_LDR.%20Encendido%20progresivo%20de%20leds%20seg%C3%BAn%20nivel%20de%20Leds" },
  { id: "P13_LDR", title: "Barrera Láser con LDR", category: "Sensores Analógicos (LDR/Color)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P13_LDR.%20Barrera%20L%C3%A1ser%20con%20LDR" },
  { id: "P31_SON", title: "Encendido de led con aplauso", category: "Sensores Analógicos (LDR/Color)", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P31_SON.%20Encendido%20de%20led%20con%20aplauso" },

  // CATEGORY: Potenciómetros
  { id: "P14_POT", title: "Variar intensidad de Led con potenciómetro", category: "Potenciómetros y Control Manual", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P14_POT.%20Variar%20intensidad%20a%20tramos%20de%20Led%20con%20potenci%C3%B3metro" },
  { id: "P15_POT", title: "Ajustar brillo automático con potenciómetro", category: "Potenciómetros y Control Manual", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P15_POT.%20Ajustar%20brillo%20autom%C3%A1tico%20de%20led%20con%20potenci%C3%B3metro" },
  { id: "P16_POT", title: "Control 5 leds con potenciómetro", category: "Potenciómetros y Control Manual", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P16_POT.%20control%205%20leds%20con%20potenci%C3%B3metro" },
  { id: "P29_JT", title: "Encender Leds con Joystick", category: "Potenciómetros y Control Manual", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P29_JT.%20Encender%20Leds%20con%20control%20de%20Joystick" },
  { id: "P30_JT", title: "Control velocidad motor con Joystick", category: "Potenciómetros y Control Manual", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P30_JT.%20Control%20de%20la%20velocidad%20de%20un%20motor%20con%20Joystick" },

  // CATEGORY: Ultrasonidos
  { id: "P17_ULTRA", title: "Leer distancia con ultrasonidos", category: "Ultrasonidos y Distancia", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P17_ULTRA.%20Leer%20distancia%20con%20ultrasonidos" },
  { id: "P18_ULTRA", title: "Leer distancia y mostrar en LCD", category: "Ultrasonidos y Distancia", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P18_ULTRA.%20Leer%20distancia%20con%20ultrasonidos%20y%20mostrar%20en%20LCD" },
  { id: "P19_ULTRA", title: "Sensor de aparcamiento completo", category: "Ultrasonidos y Distancia", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P19_ULTRA.%20Sensor%20de%20aparcamiento%20con%20pantalla%20luz%20y%20sonido" },
  { id: "P22_SERVO", title: "Control con ultrasonidos y Servo", category: "Ultrasonidos y Distancia", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P22_SERVO.%20Control%20con%20ultrasonidos%20y%20Servo" },

  // CATEGORY: Motores
  { id: "P20_SERVO", title: "Giro básico servomotor", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P20_SERVO.%20Giro%20b%C3%A1sico%20de%20un%20servomotor" },
  { id: "P21A_SERVO", title: "Control giro servo a tramos", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P21A_SERVO.%20Control%20del%20giro%20de%20un%20servo%20a%20tramos" },
  { id: "P21B_SERVO", title: "Control servo continuo", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P21B_SERVO.%20Control%20del%20giro%20de%20un%20servo%20continuo" },
  { id: "P23_SERVO", title: "Control servo con potenciómetro", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P23_SERVO.%20Control%20de%20un%20servo%20con%20potenci%C3%B3metro" },
  { id: "P24_SERVO", title: "Control servo con PC", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P24_SERVO.%20Control%20servo%20con%20PC" },
  { id: "P26A_MOT", title: "Control avance y paro motor", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P26A_MOT.%20Control%20avance%20y%20paro%20de%201%20motor%20con%20interruptor" },
  { id: "P26B_MOT", title: "Control avance y retroceso motor", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P26B_MOT.%20Control%20avance%20y%20retroceso%20de%20motor%20con%20interruptor" },
  { id: "P27A_MOT", title: "Control de 2 motores", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P27A_MOT.%20Control%20de%202%20motores%20con%202%20interruptores" },
  { id: "P27B_MOT", title: "Control de velocidad de un motor", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P27B_MOT.%20Control%20de%20velocidad%20de%20un%20motor" },
  { id: "P49_PASO", title: "Giro de motor paso a paso", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P49_PASO.%20Giro%20de%20motor%20paso%20a%20paso" },
  { id: "P50_PASO", title: "Control giro paso a paso con pulsadores", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P50_PASO.%20Control%20del%20giro%20de%20motor%20con%20pulsadores" },
  { id: "P51_ENCOD", title: "Control giro motor paso a paso con encoder", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P51_ENCOD.%20Control%20del%20giro%20de%20motor%20paso%20a%20paso%20con%20encoder" },
  { id: "P52_RPM", title: "Obtener velocidad de un motor", category: "Motores y Servomotores", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P52_RPM.%20Obtener%20velocidad%20de%20un%20motor" },

  // CATEGORY: Visualización
  { id: "P28_LCD", title: "Mensajes en pantalla LCD", category: "Visualización y Pantallas", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P28_LCD.%20mostramos%20mensajes%20en%20pantalla%20LCD" },
  { id: "P32_MX", title: "Símbolos en matriz led 8x8", category: "Visualización y Pantallas", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P32_MX.%20Mostrar%20s%C3%ADmbolos%20o%20dibujos%20en%20matr%C3%ADz%20led%208x8." },
  { id: "P33_MX", title: "Nombre en matriz 8x8", category: "Visualización y Pantallas", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P33_MX.%20Mostrar%20nuestro%20nombre%20en%20matriz%20led%208x8" },
  { id: "P34_MX", title: "Cuadrados en aumento 8x8", category: "Visualización y Pantallas", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P34_MX.%20Mostrar%20cuadrados%20en%20aumento%20en%20matriz%20led%208x8" },
  { id: "P35_MX", title: "Flechas en matriz con Joystick", category: "Visualización y Pantallas", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P35_MX.%20Mostrar%20flechas%20en%20matriz%20Led%20con%20control%20de%20Joystick" },
  { id: "P36_C", title: "Adivina el número", category: "Visualización y Pantallas", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P36_C.%20Juego%20adivina%20el%20n%C3%BAmero" },
  { id: "P37_OLED", title: "Dibujos creados en OLED", category: "Visualización y Pantallas", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P37_OLED.%20Mostramos%20dibujos%20creados%20por%20nosotros" },

  // CATEGORY: Sonido
  { id: "P03_L", title: "Semáforo F1 con sonido", category: "Sonido", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P03_L.%20Sem%C3%A1foro%20F1%20con%20sonido" },
  { id: "P38_Z", title: "Escala musical", category: "Sonido", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P38_Z.%20Escala%20musical" },
  { id: "P39_Z", title: "Melodías según pulsación", category: "Sonido", criteria: ["TEC.4.4.1", "TEC.4.5.1"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P39_Z.%20Elegir%20melod%C3%ADas%20seg%C3%BAn%20pulsemos" },

  // CATEGORY: Bluetooth
  { id: "P40_BT", title: "Control Led con Bluetooth", category: "Bluetooth y Control App", criteria: ["TEC.4.4.1", "TEC.4.5.1", "TEC.4.4.2"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P40_BT.%20Control%20de%20un%20Led%20con%20Bluetooth" },
  { id: "P41_BT", title: "Nivel luz led con Bluetooth", category: "Bluetooth y Control App", criteria: ["TEC.4.4.1", "TEC.4.5.1", "TEC.4.4.2"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P41_BT.%20Control%20del%20nivel%20de%20luz%20de%20led%20con%20bluetooth" },
  { id: "P42_BT", title: "Movimientos básicos Robot BT", category: "Bluetooth y Control App", criteria: ["TEC.4.4.1", "TEC.4.5.1", "TEC.4.4.2"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P42_BT.%20Movimientos%20b%C3%A1sicos%20Robot%20con%20bluetooth" },
  { id: "P43_BT", title: "Modificar APP control Robot", category: "Bluetooth y Control App", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.4.2"], isHighlighted: true, blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P43_BT.%20Mejoramos%20el%20control%20del%20robot%20modificando%20la%20APP" },
  { id: "P44_BT", title: "Velocidad motor con BT", category: "Bluetooth y Control App", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/P44_BT.%20Control%20de%20velocidad%20de%20un%20motor%20con%20BT.%20Mismo%20sentido" },

  // CATEGORY: Proyectos
  { id: "PROY01", title: "Tren luminoso y sonoro", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY01.%20Tren%20luminoso%20y%20sonoro" },
  { id: "PROY02", title: "Atracción de feria con balanceo", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY02.%20Atracci%C3%B3n%20de%20feria%20con%20balanceo." },
  { id: "PROY03", title: "Dispensador de gel", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2", "TEC.4.6.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY03.%20Dispensador%20de%20gel" },
  { id: "PROY04", title: "El átomo", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY04.%20El%20%C3%A1tomo" },
  { id: "PROY05", title: "Parking automático", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY05.%20Parking%20autom%C3%A1tico" },
  { id: "PROY06", title: "Puerta corredera", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY06.%20Puerta%20corredera" },
  { id: "PROY07", title: "Parque encendido automático", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.6.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY07.%20Parque%20encendido%20autom%C3%A1tico" },
  { id: "PROY08", title: "Limpiaparabrisas", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY08.%20Limpiaparabrisas" },
  { id: "PROY09", title: "Invernadero", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.6.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY09.%20Invernadero" },
  { id: "PROY10", title: "Barrera paso a nivel", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY10.%20Barrera%20paso%20a%20nivel" },
  { id: "PROY11", title: "Ascensor 2 plantas", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY11.%20Ascensor%20de%202%20plantas" },
  { id: "PROY12", title: "Casa inteligente", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.6.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY12.%20Casa%20inteligente" },
  { id: "PROY13", title: "Aerogenerador", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.6.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY13.%20Aerogenerador" },
  { id: "PROY14", title: "Puente levadizo", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY14.%20Puente%20levadizo" },
  { id: "PROY15", title: "Clasificador color", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.4.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY15.%20Clasificador%20color" },
  { id: "PROY16", title: "Grúa giratoria", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.2.2"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY16.%20Gr%C3%BAa%20giratoria" },
  { id: "PROY17", title: "Coche todoterreno", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY17.%20Coche%20todoterreno" },
  { id: "PROY18", title: "Radar ultrasonidos", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY18.%20Radar%20por%20ultrasonidos" },
  { id: "PROY19", title: "Seguidor solar", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.4.1", "TEC.4.6.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY19.%20Seguidor%20solar" },
  { id: "PROY20", title: "Piano makey", category: "Proyectos Integradores", criteria: ["TEC.4.1.1", "TEC.4.3.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/PROY20.%20Piano%20Makey" },

  // CATEGORY: Robótica
  { id: "R1", title: "Básico Robot", category: "Robótica Móvil", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/R1.%20B%C3%A1sico" },
  { id: "R2", title: "Robot Evita-Caídas", category: "Robótica Móvil", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/R2.%20Robot%20Evita-Ca%C3%ADdas" },
  { id: "R3", title: "Robot miedoso", category: "Robótica Móvil", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/R3.%20Robot%20miedoso" },
  { id: "R4", title: "Robot linterna con 2 LDR", category: "Robótica Móvil", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/R4.%20Robot%20linterna%20con%202%20LDR" },
  { id: "R5", title: "Robot evita-choques básico", category: "Robótica Móvil", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/R5.%20Robot%20evita-choques%20b%C3%A1sico" },
  { id: "R6", title: "Robot evita-choques mejorado", category: "Robótica Móvil", criteria: ["TEC.4.4.1", "TEC.4.5.1"], blogUrl: "https://practicasarduinoblocks.blogspot.com/search/label/R6.%20Robot%20evita-choques%20mejorado" },
];
