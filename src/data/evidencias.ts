
export interface Evidencia {
    slug: string;
    titulo: string;
    imagen: string;
    imagenAlt: string;
    categoria: string;
    descripcion: string;
    contexto: string;
    desarrollo: string;
    aprendizajes: string[];
}

export const evidencias: Evidencia[] = [
    {
        slug: "modelo-entidad-relacion",
        titulo: "Modelo entidad-relación: Caso plataforma de Streaming",
        imagen: "MER_Streaming.png",
        imagenAlt: "Diagrama del modelo entidad-relación",
        categoria: "Bases de datos",
        descripcion: "Desarollo Modelo entidad relacion sobre el ejercicio de plataforma de streaming",
        contexto: "La universidad deseaba trabajar en la creacion de una plataforma de streaming, en donde se pudiera visualizar contenido con diferentes tipos de categoria, ademas de que se pudieran guardar datos como el historial de busqueda y vistas.",
        desarrollo: "Con base en el enunciado identificamos cinco entidades, para cada una sus atributos clave, demas atributos, las relaciones entre entidades y tambien cardinalidad.",
        aprendizajes: [
            "Identificación de entidades y atributos.",
            "Definición de relaciones y cardinalidades.",
            "Aplicación de conceptos del modelo entidad-relación."
        ]
    },
    {
        slug: "segunda-evidencia",
        titulo: "Modelo entidad-relación: Caso equipos audiovisuales",
        imagen: "Ejercicio2_quiz1.png",
        imagenAlt: "Imagen de la segunda evidencia",
        categoria: "Bases de datos",
        descripcion: "Diseño de un modelo entidad-relación (E-R) para representar la gestión de un almacén de equipos audiovisuales, contemplando el registro de referencias, unidades físicas, proveedores, usuarios y préstamos, así como el control de estados y reemplazos entre referencias.",
        contexto: "La actividad plantea la necesidad de desarrollar un modelo conceptual de base de datos para administrar el préstamo de equipos audiovisuales de una universidad. A partir de las reglas de negocio, se deben representar tanto las características de cada referencia y sus unidades físicas como la información de los usuarios, los préstamos y las relaciones de reemplazo entre equipos.",
        desarrollo: "La actividad plantea la necesidad de desarrollar un modelo conceptual de base de datos para administrar el préstamo de equipos audiovisuales de una universidad. A partir de las reglas de negocio, se deben representar tanto las características de cada referencia y sus unidades físicas como la información de los usuarios, los préstamos y las relaciones de reemplazo entre equipos.",
        aprendizajes: [
            "Identificación de entidades, atributos y relaciones a partir de reglas de negocio.",
            "Comprensión de entidades débiles y claves compuestas para identificar unidades dependientes de una referencia."
            "Representación de relaciones recursivas entre entidades de un mismo tipo."
        ]
    },
    {
        slug: "tercera-evidencia",
        titulo: "Transformación de un modelo entidad-relación extendido al modelo relacional – Terminal Portuaria Bahía Verde.",
        imagen: "Taller_reduccion.png",
        imagenAlt: "Imagen de la tercera evidencia",
        categoria: "Bases de datos",
        descripcion: "Transformación de un modelo conceptual E-R de una terminal portuaria al modelo relacional, aplicando reglas para representar atributos especiales, entidades débiles, relaciones complejas, especializaciones y restricciones estructurales, conservando la semántica del modelo original.",
        contexto: "La actividad plantea la transformación de un modelo conceptual previamente validado para gestionar las operaciones de una terminal portuaria. El modelo contempla importadores, servicios marítimos, recaladas, buques, operarios, contratistas y suministros, junto con sus respectivas relaciones y restricciones. El objetivo es trasladar esta estructura al modelo relacional sin alterar las reglas de negocio ni la información que representa.",
        desarrollo: "Se analizaron y aplicaron las reglas de transformación de atributos compuestos, multivaluados y derivados, así como de entidades débiles y relaciones N con atributos. También se abordó la transformación de relaciones ternarias y agregaciones, la representación de jerarquías de especialización parciales y solapadas, y el tratamiento de relaciones recursivas. Finalmente, se realizó un análisis crítico de un modelo transformado para identificar errores y evaluar sus consecuencias sobre la integridad y la semántica de los datos.",
        aprendizajes: [
            "Aplicación de reglas de transformación de modelos E-R y EER al modelo relacional.",
            "Manejo de atributos compuestos, multivaluados y derivados.",
            "Transformación de relaciones N, ternarias y agregaciones mediante nuevas entidades y claves.",
            "Representación de especializaciones parciales y solapadas.",
            "Identificación de errores de transformación y evaluación de su impacto en la integridad de los datos."
        ]
    }
];
