// ===============================
// Archivo unificado de productos
// ===============================
window.data = {
  // ---------------------------
  // Receptáculos de ducha
  // ---------------------------
  receptaculos: [
    {
      name: "Receptáculo Ducha 70×70 cm",
      category: "receptáculo",
      length: 70,
      width: 70,
      jets: 0,
      motor: "N/A",
      description: "Receptáculo de ducha cuadrado, 70×70 cm, perfil bajo de solo 9 cm, en acrílico sanitario resistente.",
      features: [
        "Acrílico sanitario de fácil limpieza",
        "Perfil ultra bajo",
        "Antideslizante",
        "Disponible en varios colores"
      ]
    },
    {
      name: "Receptáculo Ducha 80×80 cm",
      category: "receptáculo",
      length: 80,
      width: 80,
      jets: 0,
      motor: "N/A",
      description: "Receptáculo cuadrado de 80 × 80 cm, altura 12 cm, ideal para duchadores modernos.",
      features: [
        "Acrílico sanitario reforzado",
        "Textura antideslizante",
        "Gran durabilidad",
        "Fácil instalación"
      ]
    },
    {
      name: "Receptáculo Ducha 90×90 cm",
      category: "receptáculo",
      length: 90,
      width: 90,
      jets: 0,
      motor: "N/A",
      description: "Receptáculo cuadrado de 90 × 90 cm, altura 12 cm, diseño elegante y funcional.",
      features: [
        "Gran resistencia al impacto",
        "Acabado antideslizante",
        "Compatible con desagüe estándar",
        "Fácil mantenimiento"
      ]
    },
    {
      name: "Receptáculo Ducha 100×100 cm",
      category: "receptáculo",
      length: 100,
      width: 100,
      jets: 0,
      motor: "N/A",
      description: "Receptáculo cuadrado con gran superficie de 100 × 100 cm y 12 cm de alto, ideal para duchas generosas.",
      features: [
        "Amplia superficie",
        "Seguridad antideslizante",
        "Construcción robusta",
        "Estético y práctico"
      ]
    }
  ],

  // ---------------------------
  // Minipiscinas / Spa
  // ---------------------------
  minipiscinas: [
    {
      name: "Minipiscina Spa Compacta",
      category: "spa",
      length: 200,
      width: 200,
      jets: 18,
      motor: "2 HP",
      description: "Minipiscina compacta ideal para terrazas y patios. Diseñada para brindar la experiencia de un spa en espacios reducidos.",
      features: [
        "Capacidad para 3-4 personas",
        "Acrílico sanitario de alta resistencia",
        "Sistema de hidromasaje y burbujas",
        "Iluminación LED integrada",
        "Instalación sencilla en interiores o exteriores"
      ]
    },
    {
      name: "Minipiscina Spa Deluxe",
      category: "spa",
      length: 220,
      width: 220,
      jets: 24,
      motor: "2.5 HP",
      description: "Minipiscina premium con mayor capacidad y tecnología avanzada de spa. Perfecta para compartir momentos de relax.",
      features: [
        "Capacidad para 4-5 personas",
        "Sistema de calefacción incluido",
        "Jets de acero inoxidable regulables",
        "Panel de control digital",
        "Opcional cromoterapia LED"
      ]
    }
  ],

  // ---------------------------
  // Hidromasajes (id 1 al 42)
  // ---------------------------
  hidromasajes: [
{
        id: 1,
        name: "ECO 120×70",
        category: "eco",
        width: 70,
        length: 119,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Acrílico sanitario premium",
            "Sistema de hidromasaje eficiente",
            "Diseño compacto",
            "Ideal para espacios pequeños"
        ],
        description: "Modelo compacto perfecto para baños de tamaño reducido sin comprometer la calidad."
    },
    {
        id: 2,
        name: "ECO 130",
        category: "eco",
        width: 70,
        length: 129,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Acrílico sanitario premium",
            "4 jets de hidromasaje",
            "Motor eficiente 1/2 HP",
            "Acabado de primera calidad"
        ],
        description: "Versión extendida de la línea ECO con mayor comodidad de uso."
    },
    {
        id: 3,
        name: "ECO 140",
        category: "eco",
        width: 70,
        length: 138,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Mayor espacio para relajación",
            "4 jets estratégicamente ubicados",
            "Motor confiable 1/2 HP",
            "Diseño ergonómico"
        ],
        description: "El equilibrio perfecto entre tamaño y funcionalidad en la línea ECO."
    },
    {
        id: 4,
        name: "MINIMALISTA 140",
        category: "minimalista",
        width: 75,
        length: 140,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Diseño minimalista elegante",
            "Líneas limpias y modernas",
            "Mayor ancho para confort",
            "Perfecto para baños modernos"
        ],
        description: "Diseño contemporáneo que combina estética moderna con funcionalidad superior."
    },
    {
        id: 5,
        name: "ECO 150",
        category: "eco",
        width: 70,
        length: 149,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Tamaño estándar popular",
            "Excelente relación precio-calidad",
            "4 jets de hidromasaje",
            "Durabilidad comprobada"
        ],
        description: "El modelo más popular de la línea ECO, ideal para la mayoría de espacios."
    },
    {
        id: 6,
        name: "RELAX 150×70",
        category: "relax",
        width: 70,
        length: 150,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Diseño enfocado en relajación",
            "Ergonomía optimizada",
            "Jets posicionados estratégicamente",
            "Experiencia de spa en casa"
        ],
        description: "Diseñado específicamente para maximizar la experiencia de relajación."
    },
    {
        id: 7,
        name: "MINIMALISTA 150",
        category: "minimalista",
        width: 75,
        length: 150,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Estética minimalista premium",
            "Mayor ancho para confort",
            "Diseño atemporal",
            "Calidad de construcción superior"
        ],
        description: "Elegancia minimalista con el espacio perfecto para una experiencia premium."
    },
    {
        id: 8,
        name: "RIO 150×75",
        category: "rio",
        width: 75,
        length: 150,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Diseño inspirado en la naturaleza",
            "Ancho generoso de 75cm",
            "Comodidad excepcional",
            "Acabados naturales"
        ],
        description: "Inspirado en la fluidez de los ríos, ofrece una experiencia natural y relajante."
    },
    {
        id: 9,
        name: "ANATOMICA 151×77",
        category: "anatomica",
        width: 77,
        length: 151,
        jets: 4,
        motor: "1/2 HP",
        shape: "anatomic",
        features: [
            "Diseño anatómico ergonómico",
            "Se adapta al cuerpo humano",
            "Comodidad superior",
            "Soporte lumbar integrado"
        ],
        description: "Diseño ergonómico que se adapta perfectamente a la anatomía humana."
    },
    {
        id: 10,
        name: "DUNA 150×80",
        category: "duna",
        width: 80,
        length: 150,
        jets: 4,
        motor: "1/2 HP",
        shape: "rectangular",
        features: [
            "Ancho generoso de 80cm",
            "Máximo confort",
            "Diseño moderno",
            "Espacio amplio para relajarse"
        ],
        description: "Con su ancho generoso, ofrece el máximo espacio para una relajación completa."
    },
    {
        id: 11,
        name: "ECO 160",
        category: "eco",
        width: 70,
        length: 159,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "6 jets de hidromasaje",
            "Motor más potente 3/4 HP",
            "Mayor longitud",
            "Experiencia mejorada"
        ],
        description: "Versión ampliada de la línea ECO con mayor potencia y jets adicionales."
    },
    {
        id: 12,
        name: "RELAX 160×70",
        category: "relax",
        width: 70,
        length: 160,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "6 jets para relajación profunda",
            "Motor 3/4 HP potente",
            "Longitud extendida",
            "Terapia de hidromasaje avanzada"
        ],
        description: "Mayor longitud y potencia para una experiencia de relajación intensificada."
    },
    {
        id: 13,
        name: "MINIMALISTA 160",
        category: "minimalista",
        width: 75,
        length: 160,
        jets: 4,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Diseño minimalista extendido",
            "Mayor potencia del motor",
            "Líneas elegantes",
            "Funcionalidad premium"
        ],
        description: "La evolución del diseño minimalista con mayor potencia y espacio."
    },
    {
        id: 14,
        name: "RIO 160×75",
        category: "rio",
        width: 75,
        length: 160,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "6 jets naturales",
            "Flujo armonioso",
            "Mayor longitud",
            "Experiencia tipo spa"
        ],
        description: "Versión extendida que ofrece una experiencia de hidromasaje más completa."
    },
    {
        id: 15,
        name: "DUNA 160×80",
        category: "duna",
        width: 79,
        length: 162,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Espacio máximo",
            "6 jets estratégicos",
            "Confort superior",
            "Diseño contemporáneo"
        ],
        description: "El máximo en espacio y comodidad con diseño contemporáneo."
    },
    {
        id: 16,
        name: "ANATOMICA 165×77",
        category: "anatomica",
        width: 77,
        length: 165,
        jets: 6,
        motor: "3/4 HP",
        shape: "anatomic",
        features: [
            "Diseño anatómico extendido",
            "6 jets ergonómicos",
            "Soporte corporal completo",
            "Terapia dirigida"
        ],
        description: "Diseño anatómico extendido para máximo soporte y comodidad corporal."
    },
    {
        id: 17,
        name: "ANATOMICA 165×90",
        category: "anatomica",
        width: 90,
        length: 165,
        jets: 6,
        motor: "3/4 HP",
        shape: "anatomic",
        features: [
            "Ancho excepcional de 90cm",
            "Diseño anatómico premium",
            "Espacio para dos personas",
            "Comodidad máxima"
        ],
        description: "Versión amplia que permite compartir la experiencia de relajación."
    },
    {
        id: 18,
        name: "ANATOMICA 165×120",
        category: "anatomica",
        width: 163,
        length: 119,
        jets: 8,
        motor: "1 HP",
        shape: "anatomic",
        features: [
            "8 jets de hidromasaje",
            "Motor potente 1 HP",
            "Diseño anatómico premium",
            "Para dos personas"
        ],
        description: "El modelo premium anatómico con máxima potencia y jets."
    },
    {
        id: 19,
        name: "ECO 170",
        category: "eco",
        width: 70,
        length: 170,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Máxima longitud ECO",
            "6 jets distribuidos",
            "Motor 3/4 HP",
            "Experiencia extendida"
        ],
        description: "El modelo ECO más largo para quienes buscan espacio adicional."
    },
    {
        id: 20,
        name: "RELAX 170×70",
        category: "relax",
        width: 70,
        length: 170,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Longitud máxima para relajación",
            "6 jets terapéuticos",
            "Diseño elongado",
            "Experiencia spa completa"
        ],
        description: "La máxima expresión de la línea RELAX con longitud extendida."
    },
    {
        id: 21,
        name: "MINIMALISTA 170",
        category: "minimalista",
        width: 75,
        length: 170,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Diseño minimalista alargado",
            "6 jets discretos",
            "Líneas puras",
            "Elegancia extendida"
        ],
        description: "Minimalismo en su máxima expresión con longitud premium."
    },
    {
        id: 22,
        name: "RIO 170×75",
        category: "rio",
        width: 75,
        length: 170,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Flujo natural extendido",
            "6 jets armoniosos",
            "Experiencia río largo",
            "Relajación profunda"
        ],
        description: "Como un río sereno, ofrece una experiencia de relajación extendida."
    },
    {
        id: 23,
        name: "MIKONOS 170",
        category: "mikonos",
        width: 80,
        length: 170,
        jets: 6,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Inspiración mediterránea",
            "Ancho confortable",
            "Diseño exclusivo",
            "Lujo europeo"
        ],
        description: "Inspirado en las aguas cristalinas del Mediterráneo."
    },
    {
        id: 24,
        name: "INFINITY 180×80",
        category: "infinity",
        width: 80,
        length: 180,
        jets: 8,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Diseño infinito",
            "8 jets premium",
            "Longitud máxima",
            "Experiencia sin límites"
        ],
        description: "Donde el diseño se encuentra con la funcionalidad infinita."
    },
    {
        id: 25,
        name: "INFINITY 180×90",
        category: "infinity",
        width: 90,
        length: 180,
        jets: 8,
        motor: "3/4 HP",
        shape: "rectangular",
        features: [
            "Espacio amplío",
            "8 jets distribuidos",
            "Comodidad infinita",
            "Para compartir"
        ],
        description: "Espacio infinito para una experiencia compartida de lujo."
    },
    {
        id: 26,
        name: "INFINITY 180×1.05",
        category: "infinity",
        width: 105,
        length: 180,
        jets: 8,
        motor: "1 HP",
        shape: "rectangular",
        features: [
            "Ancho excepcional",
            "Motor potente 1 HP",
            "8 jets de alta presión",
            "Experiencia premium"
        ],
        description: "Ancho excepcional con la potencia necesaria para una experiencia premium."
    },
    {
        id: 27,
        name: "ANATOMICA 180×90",
        category: "anatomica",
        width: 90,
        length: 180,
        jets: 8,
        motor: "3/4 HP",
        shape: "anatomic",
        features: [
            "Diseño anatómico largo",
            "8 jets ergonómicos",
            "Soporte corporal total",
            "Terapia avanzada"
        ],
        description: "Diseño anatómico extendido para terapia corporal completa."
    },
    {
        id: 28,
        name: "INFINITY 180×1.20",
        category: "infinity",
        width: 120,
        length: 180,
        jets: 8,
        motor: "1 1/2 HP",
        shape: "rectangular",
        features: [
            "Ancho máximo",
            "Motor súper potente",
            "8 jets de alta presión",
            "Lujo absoluto"
        ],
        description: "El máximo en ancho y potencia para una experiencia de lujo absoluto."
    },
    {
        id: 29,
        name: "ANATOMICA 180×120",
        category: "anatomica",
        width: 180,
        length: 120,
        jets: 8,
        motor: "1 1/2 HP",
        shape: "anatomic",
        features: [
            "Configuración premium",
            "8 jets anatómicos",
            "Motor máxima potencia",
            "Diseño revolucionario"
        ],
        description: "La revolución en diseño anatómico con máxima potencia."
    },
    {
        id: 30,
        name: "SAFIRO 180",
        category: "safiro",
        width: 120,
        length: 180,
        jets: 8,
        motor: "1 1/2 HP",
        shape: "rectangular",
        features: [
            "Diseño joya",
            "Acabados premium",
            "8 jets de lujo",
            "Motor potentísimo"
        ],
        description: "Como una joya preciosa, combina belleza y funcionalidad suprema."
    },
    {
        id: 31,
        name: "CURVA 180×120",
        category: "curva",
        width: 120,
        length: 180,
        jets: 8,
        motor: "1 1/2 HP",
        shape: "curved",
        features: [
            "Diseño curvilíneo",
            "Líneas suaves",
            "8 jets ergonómicos",
            "Estética única"
        ],
        description: "Las curvas perfectas que abrazan tu cuerpo en cada sesión."
    },
    {
        id: 32,
        name: "DUO 180×150",
        category: "duo",
        width: 150,
        length: 180,
        jets: 8,
        motor: "1 1/2 HP",
        shape: "rectangular",
        features: [
            "Diseñado para dos",
            "Espacio máximo",
            "8 jets distribuidos",
            "Experiencia compartida"
        ],
        description: "El hidromasaje perfecto para compartir momentos especiales en pareja."
    },
    {
        id: 33,
        name: "OCTOGONAL 180×150",
        category: "octogonal",
        width: 150,
        length: 180,
        jets: 8,
        motor: "1 1/2 HP",
        shape: "octagonal",
        features: [
            "Forma octogonal única",
            "Diseño geométrico",
            "8 jets posicionados",
            "Estética moderna"
        ],
        description: "Diseño geométrico octogonal que aporta un toque moderno y distintivo."
    },
    {
        id: 34,
        name: "ANATOMICA 190×90",
        category: "anatomica",
        width: 90,
        length: 190,
        jets: 8,
        motor: "1 HP",
        shape: "anatomic",
        features: [
            "Longitud máxima",
            "Diseño anatómico",
            "8 jets terapéuticos",
            "Motor potente"
        ],
        description: "El modelo anatómico más largo para máximo confort y terapia."
    },
    {
        id: 35,
        name: "ESQUINERO 130",
        category: "esquinero",
        width: 129,
        length: 129,
        jets: 7,
        motor: "3/4 HP",
        shape: "corner",
        features: [
            "Aprovecha esquinas",
            "Diseño inteligente",
            "7 jets optimizados",
            "Ahorro de espacio"
        ],
        description: "Diseño inteligente que aprovecha las esquinas para crear un oasis de relajación."
    },
    {
        id: 36,
        name: "ESQUINERO 140 CURVO",
        category: "esquinero",
        width: 140,
        length: 140,
        jets: 7,
        motor: "1 HP",
        shape: "corner-curved",
        features: [
            "Esquinero con curvas",
            "Diseño suave",
            "7 jets estratégicos",
            "Estética fluida"
        ],
        description: "Combina la funcionalidad esquinera con líneas curvas elegantes."
    },
    {
        id: 37,
        name: "ESQUINERO 140 RECTO",
        category: "esquinero",
        width: 140,
        length: 140,
        jets: 7,
        motor: "1 HP",
        shape: "corner-straight",
        features: [
            "Líneas rectas",
            "Diseño geométrico",
            "7 jets precisos",
            "Estilo minimalista"
        ],
        description: "Líneas rectas y precisas para un estilo minimalista en esquina."
    },
    {
        id: 38,
        name: "ESQUINERO 150",
        category: "esquinero",
        width: 149,
        length: 149,
        jets: 7,
        motor: "1 HP",
        shape: "corner",
        features: [
            "Tamaño medio esquinero",
            "Equilibrio perfecto",
            "7 jets distribuidos",
            "Funcionalidad óptima"
        ],
        description: "El equilibrio perfecto entre espacio y funcionalidad esquinera."
    },
    {
        id: 39,
        name: "ESQUINERO 160",
        category: "esquinero",
        width: 160,
        length: 160,
        jets: 7,
        motor: "1 1/2 HP",
        shape: "corner",
        features: [
            "Esquinero grande",
            "Motor súper potente",
            "7 jets de alta presión",
            "Máximo aprovechamiento"
        ],
        description: "El esquinero más grande con máxima potencia para una experiencia superior."
    },
    {
        id: 40,
        name: "REDONDA 150",
        category: "redonda",
        width: 150,
        length: 150,
        jets: 8,
        motor: "1 HP",
        shape: "round",
        features: [
            "Forma circular perfecta",
            "8 jets radiales",
            "Diseño único",
            "Experiencia envolvente"
        ],
        description: "La perfección circular que envuelve tu cuerpo en una experiencia única."
    },
    {
        id: 41,
        name: "REDONDA 160",
        category: "redonda",
        width: 159,
        length: 159,
        jets: 8,
        motor: "1 HP",
        shape: "round",
        features: [
            "Círculo amplio",
            "8 jets periféricos",
            "Movimiento libre",
            "Estética circular"
        ],
        description: "Amplitud circular que permite movimiento libre y relajación total."
    },
    {
        id: 42,
        name: "REDONDA 180",
        category: "redonda",
        width: 177,
        length: 177,
        jets: 8,
        motor: "1 1/2 HP",
        shape: "round",
        features: [
            "Círculo máximo",
            "Motor súper potente",
            "8 jets distribuidos",
            "Lujo circular"
        ],
        description: "El círculo perfecto de máximo tamaño con potencia superior."
    }
  ]
};
