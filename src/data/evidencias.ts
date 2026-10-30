
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
            "Comprensión de entidades débiles y claves compuestas para identificar unidades dependientes de una referencia.",
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
    },
    {
        slug: "reduccion-a-tablas-libreria",
        titulo: "Reducción a tablas: Caso librería en línea",
        imagen: "Ejercicio1_reducciont.drawio.png",
        imagenAlt: "Modelo entidad-relación reducido del caso librería en línea",
        categoria: "Bases de datos",
        descripcion: "Aplicación de las reglas de reducción a tablas sobre el modelo entidad-relación de una librería en línea, como paso previo al modelo relacional.",
        contexto: "Se partió de un modelo entidad-relación de una librería que vende libros por internet. El modelo registra autores, editores, clientes, cestas de compra y almacenes, y la mayoría de sus relaciones eran de muchos a muchos (M:N).",
        desarrollo: "Primero se revisó que el modelo no tuviera atributos multivaluados, compuestos ni derivados. Luego, cada relación M:N se transformó en una entidad débil intermedia: Autoría, Edición, Detalle_Cesta, Inventario y Cesta_Cliente. Cada una quedó unida a sus entidades fuertes mediante dos relaciones 1:N. Por último, las relaciones se nombraron con verbos en infinitivo y se definieron las claves de cada entidad, de modo que el modelo quedó listo para pasar a tablas.",
        aprendizajes: [
            "Transformación de relaciones M:N en entidades intermedias con dos relaciones 1:N.",
            "Identificación de entidades débiles y de su dependencia de las entidades fuertes.",
            "Preparación del modelo entidad-relación para su paso al modelo relacional."
        ]
    },
    {
        slug: "reduccion-tablas-terminal-portuaria",
        titulo: "Reducción a tablas y modelo relacional: Terminal Portuaria Bahía Verde",
        imagen: "relacional_portuaria.png",
        imagenAlt: "Modelo relacional de la Terminal Portuaria Bahía Verde generado en Oracle Data Modeler",
        categoria: "Bases de datos",
        descripcion: "Transformación de un modelo entidad-relación extendido, con entidades débiles, relaciones ternarias y recursivas, agregación y especialización, hasta obtener el modelo relacional en Oracle Data Modeler.",
        contexto: "El caso parte de un modelo conceptual ya validado para una terminal portuaria. Este modelo registra los servicios marítimos y sus recaladas, los buques y sus certificados, los importadores y su carga, las cuadrillas de operarios, el abastecimiento de suministros por parte de contratistas y el almacenamiento de la carga en bodegas. El objetivo no era rediseñar el modelo, sino transformarlo aplicando las reglas de reducción a tablas.",
        desarrollo: "En la primera fase se simplificaron los atributos. El nombre del importador se separó en nombres y apellidos. Los correos del importador, las sedes del contratista y los equipos del estibador, que son multivaluados, pasaron a entidades débiles propias. Las antigüedades se eliminaron por ser derivadas, ya que pueden calcularse con las fechas que sí se conservan. En la segunda fase se transformaron las relaciones. Embarque, Cuadrilla y Supervisión, que eran relaciones M:N, se convirtieron en entidades intermedias. Cada una conserva sus atributos y tiene una clave formada por las claves de las entidades que une. La relación ternaria Abastece se reemplazó por la entidad Abastecimiento, identificada por contratista, recalada y suministro. La agregación Deposita quedó apoyada sobre Embarque, que se relaciona con Bodega. La recursiva Transborda, al ser 1:N, se resolvió con una clave foránea de Recalada hacia sí misma. La especialización de Operario se transformó con una tabla por subtipo y sin restricción de exclusividad, porque la jerarquía es parcial y solapada. Finalmente, el modelo se construyó en Oracle Data Modeler. Allí se marcaron las relaciones identificadoras y se ajustaron cardinalidades y participaciones. Luego se generó el modelo relacional con sus claves primarias y foráneas.",
        aprendizajes: [
            "Transformación de atributos compuestos, multivaluados y derivados antes de pasar a tablas.",
            "Conversión de relaciones M:N, ternarias y recursivas, y definición de las claves de las entidades resultantes.",
            "Uso de relaciones identificadoras para que las entidades débiles hereden la clave de sus entidades dueñas.",
            "Transformación de agregaciones y de jerarquías de especialización parciales y solapadas.",
            "Construcción del modelo lógico en Oracle Data Modeler y revisión de la ubicación de las claves foráneas en el modelo relacional."
        ]
    },
];
