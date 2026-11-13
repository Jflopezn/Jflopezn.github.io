
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
        {
        slug: "modelo-logico-terminal-portuaria",
        titulo: "Modelo lógico en Oracle Data Modeler: Terminal Portuaria Bahía Verde",
        imagen: "Modelo_Logico_taller_reduccion.png",
        imagenAlt: "Modelo lógico de la Terminal Portuaria Bahía Verde en notación Barker, construido en Oracle Data Modeler",
        categoria: "Bases de datos",
        descripcion: "Construcción del modelo lógico de la Terminal Portuaria Bahía Verde en Oracle Data Modeler, a partir del modelo entidad-relación ya simplificado con las reglas de reducción a tablas.",
        contexto: "Esta evidencia es el paso intermedio del taller de reducción a tablas de la terminal portuaria. Después de aplicar las reglas de reducción sobre el modelo conceptual en notación de Chen, el modelo se llevó a Oracle Data Modeler. Allí se representa como modelo lógico, que es el punto de partida para generar el modelo relacional con sus tablas y claves. El objetivo era aprender a usar la herramienta y a leer y construir un modelo en la notación que esta utiliza.",
        desarrollo: "El modelo se construyó en notación Barker, la que usa Oracle Data Modeler. En esta notación cada entidad se dibuja como un rectángulo redondeado con sus atributos. El símbolo # marca los atributos que forman el identificador, el asterisco indica que un atributo es obligatorio y la o indica que es opcional. En las relaciones, la pata de gallo señala el lado 'muchos'. La línea continua indica participación obligatoria y la punteada, participación opcional. Primero se crearon las entidades fuertes del caso: Servicio, Recalada, Buque, Certificado, Importador, Bodega, Operario, Contratista y Suministro. Luego se incluyeron como entidades las estructuras que surgieron de la reducción. Correo, Sede y Equipo_Estibador provienen de atributos multivaluados. Embarque, Cuadrilla y Supervisión reemplazan relaciones de muchos a muchos y conservan sus atributos propios. Abastecimiento reemplaza la relación ternaria entre contratista, recalada y suministro. La especialización de Operario se representó dibujando a Estibador y Gruero dentro del supertipo, que es la forma en que la herramienta modela los subtipos. Por último, se definieron las relaciones entre entidades con su cardinalidad y su participación, como preparación para generar el modelo relacional.",
        aprendizajes: [
            "Uso de Oracle Data Modeler para construir un modelo lógico.",
            "Lectura e interpretación de la notación Barker: identificadores, atributos obligatorios y opcionales, cardinalidad y participación.",
            "Representación en la herramienta de las entidades que resultan de la reducción a tablas: multivaluados, relaciones M:N y relaciones ternarias.",
            "Modelado de supertipos y subtipos en Oracle Data Modeler.",
            "Comprensión del modelo lógico como paso intermedio entre el modelo conceptual y el modelo relacional."
        ]
    },
        {
        slug: "normalizacion-caso-hospitalizacion",
        titulo: "Normalización: Caso hospitalización",
        imagen: "Normalizacion_Hospitalizacion.png",
        imagenAlt: "Diagrama de dependencias funcionales del esquema de hospitalización y tablas resultantes de la normalización",
        categoria: "Bases de datos",
        descripcion: "Análisis y normalización de un esquema de hospitalización: dependencias funcionales, anomalías, paso a 2FN y 3FN, y evaluación de FNBC.",
        contexto: "El taller presentó una tabla única con la que un hospital registra a sus pacientes hospitalizados, junto con la cama, el ala, la especialidad y los datos del médico tratante. La tabla mezcla información de varias entidades y repite datos en cada hospitalización, lo que la hace propensa a inconsistencias.",
        desarrollo: "Primero se definió la clave como la combinación del paciente y su fecha de ingreso, ya que un paciente puede hospitalizarse varias veces. Luego se identificaron las dependencias funcionales: una completa, una parcial (el nombre del paciente) y dos transitivas (el ala a través de la cama y el contacto del médico a través del médico). También se justificó por qué la especialidad no determina el ala. Con eso se concluyó que el esquema estaba en 1FN y se describieron sus anomalías de inserción, actualización y eliminación. En la normalización, el primer paso separó la tabla PACIENTE para llegar a 2FN. El segundo separó las tablas CAMA y MÉDICO para llegar a 3FN, dejando en HOSPITALIZACIÓN las claves foráneas correspondientes. Al final se verificó que todo determinante es clave candidata, por lo que el esquema también cumple FNBC. Con base en el volumen de operaciones del contexto, se argumentó por qué no conviene desnormalizar.",
        aprendizajes: [
            "Definición de la clave de un esquema a partir de las reglas del negocio.",
            "Identificación de dependencias funcionales completas, parciales y transitivas, y descarte de las que no se cumplen.",
            "Normalización paso a paso hasta 3FN, indicando claves primarias y foráneas.",
            "Verificación de FNBC revisando que todo determinante sea clave candidata.",
            "Evaluación del equilibrio entre normalización y rendimiento con datos de uso reales."
        ]
    },
        {
        slug: "normalizacion-caso-ordenes",
        titulo: "Normalización: Caso órdenes de compra",
        imagen: "Normalizacion_Ordenes.png",
        imagenAlt: "Diagrama de dependencias funcionales, pasos de normalización y tablas finales del caso órdenes de compra",
        categoria: "Bases de datos",
        descripcion: "Normalización de una tabla de órdenes de compra hasta la tercera forma normal, identificando sus dependencias funcionales y aplicando cada regla paso a paso.",
        contexto: "El ejercicio parte de una tabla que registra en un solo lugar las órdenes de compra, los clientes que las realizan y los artículos que incluye cada una, con su cantidad y precio. Como una orden contiene varios artículos, los datos de la orden y del cliente se repiten en varias filas, y los datos de un artículo se repiten en cada orden donde aparece.",
        desarrollo: "Primero se definió la clave de la tabla como la combinación del número de orden y el número de artículo. Luego se clasificaron las dependencias funcionales. La cantidad depende de la clave completa. La fecha y el cliente dependen solo de la orden, y el nombre y el precio del artículo dependen solo del artículo, por lo que ambas son parciales. Los datos del cliente son transitivos, porque llegan a la orden a través de su identificador. Con eso se aplicaron las reglas en orden. En 1FN se separó el grupo repetido de artículos en una tabla que incluye la clave de la orden. En 2FN se creó la tabla de artículos para eliminar la dependencia parcial. En 3FN se creó la tabla de clientes para eliminar la dependencia transitiva. El resultado son cuatro tablas, Órdenes, Clientes, Artículos y Artículos_Órdenes, relacionadas mediante claves foráneas y sin datos repetidos.",
        aprendizajes: [
            "Identificación de grupos repetidos y su eliminación para cumplir la primera forma normal.",
            "Clasificación de dependencias funcionales en completas, parciales y transitivas.",
            "Aplicación de las reglas de 2FN y 3FN creando tablas nuevas con las claves de las que dependen los atributos.",
            "Verificación del resultado con datos reales para comprobar que la información ya no se repite."
        ]
    },
        {
        slug: "algebra-relacional-empleados-universidades",
        titulo: "Álgebra relacional: Empleados y universidades",
        imagen: "Algebra_Relacional.png",
        imagenAlt: "Esquema de relaciones y expresiones de álgebra relacional para ocho consultas sobre empleados y universidades",
        categoria: "Bases de datos",
        descripcion: "Diseño de expresiones de álgebra relacional para resolver ocho consultas sobre empleados, universidades y jefes, usando selección, proyección, join, renombramiento, diferencia, producto cartesiano y división.",
        contexto: "El ejercicio plantea un esquema con empleados, las universidades en las que trabajan con su sueldo mensual, y sus jefes. A partir de él se pidieron consultas de dificultad creciente: desde buscar los empleados de una universidad hasta encontrar a quienes ganan más que todos los empleados de otra, o las universidades presentes en todas las ciudades donde está la Universidad Nacional.",
        desarrollo: "Para las consultas básicas se combinaron la selección, para filtrar por universidad o sueldo, la proyección y el join natural. Hubo que cuidar que empleado y universidad comparten el atributo ciudad, así que se proyectó universidad antes de unir. Así se evitó que el join igualara las ciudades sin querer, salvo en la consulta donde esa igualdad era justamente la condición. Para comparar la dirección del empleado con la de su jefe se usó el renombramiento. También se dejó explícita una relación entre empleado y jefe que el esquema no incluía. Las consultas con negación se resolvieron con diferencia de conjuntos sobre los códigos. La consulta de ganar más que cualquier empleado se resolvió con producto cartesiano y diferencia, buscando primero a quienes no cumplen la condición. Por último, la consulta de las universidades presentes en todas las ciudades de la Universidad Nacional se resolvió con la operación de división.",
        aprendizajes: [
            "Uso combinado de selección, proyección y join natural para responder consultas sobre varias relaciones.",
            "Identificación de atributos con el mismo nombre que alteran el resultado de un join natural.",
            "Aplicación del renombramiento para comparar atributos de dos relaciones distintas.",
            "Resolución de consultas con negación y de tipo 'todos' mediante diferencia de conjuntos y división.",
            "Detección de información faltante en un esquema y planteamiento de supuestos para poder resolver una consulta."
        ]
    },
        {
        slug: "consultas-sql-esquema-hr",
        titulo: "Consultas SQL: Esquema HR de Oracle",
        imagen: "Consultas_sql.png",
        imagenAlt: "Consulta SQL ejecutada sobre el esquema HR de Oracle con su resultado",
        categoria: "Bases de datos",
        descripcion: "Hoja de trabajo de consultas SQL sobre el esquema HR de Oracle, con joins, agrupaciones, funciones de agregación, expresiones CASE y subconsultas correlacionadas.",
        contexto: "El ejercicio se trabajó sobre el esquema de ejemplo HR de Oracle. Este esquema relaciona empleados, departamentos, cargos, historial laboral y la ubicación geográfica de cada departamento, que llega hasta el país y la región. A partir de él se pidieron consultas de dificultad creciente, desde listar empleados con su continente hasta un reto que combina varias condiciones sobre el departamento de cada empleado.",
        desarrollo: "Las primeras consultas recorren la cadena de tablas empleado, departamento, ubicación, país y región mediante joins. Cuando el enunciado pide todos los empleados se usa LEFT JOIN, para no perder a quienes no tienen departamento asignado. Se usó una autorrelación de la tabla de empleados para mostrar a cada uno junto a su manager. Con GROUP BY y HAVING se contaron empleados por país, y con FETCH FIRST WITH TIES se obtuvieron los cinco departamentos con mayor suma de salarios, respetando los empates. También se aplicaron funciones de agregación como SUM, MAX, MIN y STDDEV, el operador LIKE para buscar patrones en el nombre y una expresión CASE para clasificar salarios por rangos. Por último, las subconsultas correlacionadas permitieron comparar a cada empleado con el promedio, el salario máximo y la fecha de contratación más antigua de su propio departamento. En el reto se usó NOT EXISTS para descartar a quienes tienen subordinados.",
        aprendizajes: [
            "Diferencia entre JOIN y LEFT JOIN, y cuándo usar cada uno según lo que pide el enunciado.",
            "Uso de autorrelaciones para consultar jerarquías dentro de una misma tabla.",
            "Agrupación de resultados con GROUP BY y filtrado de grupos con HAVING.",
            "Uso de funciones de agregación, expresiones CASE y búsqueda de patrones con LIKE.",
            "Construcción de subconsultas correlacionadas y uso de NOT EXISTS para combinar varias condiciones."
        ]
    },
        {
        slug: "documento-identidad-como-clave-primaria",
        titulo: "Investigación: ¿Por qué no usar el documento de identidad como clave primaria?",
        imagen: "Clave_Primaria_Documento.png",
        imagenAlt: "Cualidades de una buena clave primaria, ejemplo del problema de usar el documento de identidad y diseño recomendado",
        categoria: "Bases de datos (Investigación tema)",
        descripcion: "Tema de investigación sobre la elección de claves primarias para identificar personas y los problemas de usar un documento de identidad para ese fin.",
        contexto: "A partir de una lectura sobre diseño de bases de datos relacionales, investigué qué hace buena a una clave primaria y por qué identificar personas con un número de documento, aunque parezca la opción natural, puede traer problemas. El tema complementa lo visto en clase sobre claves candidatas, claves primarias e integridad de entidad. Fuente: Harrington, J. L. Relational Database Design and Implementation.",
        desarrollo: "La lectura parte de una idea clave: para recuperar cualquier dato de una base relacional basta con conocer la tabla, la columna y la clave primaria de la fila. Por eso la clave debe ser única y nunca nula, una restricción que se conoce como integridad de entidad. El documento de identidad parece cumplir con eso, pero falla en la práctica. Una persona puede no tener documento al momento de registrarse, como un estudiante extranjero recién llegado, y el número puede cambiar con el tiempo. En Colombia, por ejemplo, muchas personas tuvieron un número en la tarjeta de identidad y otro distinto en la cédula. Además, un mismo número puede repetirse entre distintos tipos de documento. El libro describe un caso real en el que un estudiante recibió un número temporal y, cuando obtuvo el definitivo, sus notas quedaron repartidas entre los dos. Al revisar su historial, el sistema indicaba que le faltaba un semestre completo. A esto se suma el riesgo de seguridad: guardar documentos como clave expone información sensible y facilita la suplantación de identidad, algo que en Colombia regula la Ley 1581 de 2012 de protección de datos personales. La alternativa es usar una clave sin significado generada por el sistema, como un código de estudiante, y guardar el documento como un atributo más, con una restricción de unicidad sobre el tipo y el número.",
        aprendizajes: [
            "Una buena clave primaria debe ser única, nunca nula, inmutable y no exponer datos sensibles.",
            "Un identificador que parece natural, como el documento de identidad, puede fallar por casos que el diseño no anticipó.",
            "Cambiar el valor de una clave primaria obliga a corregir todas las filas que la referencian, con riesgo de dejar datos inconsistentes.",
            "Las claves generadas por el sistema permiten conservar el documento como dato y garantizar su unicidad con una restricción UNIQUE."
        ]
    },
        {
        slug: "vistas-bases-de-datos",
        titulo: "Investigación: Vistas en bases de datos relacionales",
        imagen: "Vistas.png",
        imagenAlt: "Diagrama de cómo funciona una vista, sus ventajas y un ejemplo en SQL sobre el esquema HR",
        categoria: "Bases de datos (Investigación tema)",
        descripcion: "Tema de investigación sobre las vistas: qué son, cómo funcionan, por qué conviene usarlas y qué limitaciones tienen, con un ejemplo aplicado al esquema HR de Oracle.",
        contexto: "Para complementar lo trabajado en clase con consultas SQL, investigué el mecanismo de las vistas a partir del libro Relational Database Design and Implementation de Jan L. Harrington. El objetivo era entender cómo una base de datos puede ofrecer distintas formas de ver la misma información sin duplicarla.",
        desarrollo: "Una vista es una consulta guardada con un nombre. No almacena datos: cada vez que se usa, el motor ejecuta su consulta sobre las tablas base. Por eso su información siempre está actualizada y se le llama tabla virtual. Una vista puede reunir datos de varias tablas y mostrar solo algunas filas y columnas. Además, crearla o eliminarla no afecta a las tablas base. El libro plantea tres razones para usarlas. La primera es la seguridad, porque se puede dar acceso a la vista sin dar acceso a las tablas completas. La segunda es la simplicidad, porque los usuarios sin conocimientos técnicos consultan una sola tabla sin conocer los joins que hay detrás. La tercera es la reutilización de consultas complejas que se usan con frecuencia. También tienen límites. Muchas vistas solo sirven para consultar, especialmente las que usan joins o agrupaciones. Además, eliminar una vista afecta a los programas y a las otras vistas que dependen de ella. Como complemento, revisé las vistas materializadas, que sí guardan el resultado para ganar velocidad a cambio de tener que refrescarlo. Para aplicarlo, creé una vista sobre el esquema HR que reúne a cada empleado con su departamento y su país. Luego la consulté como si fuera una tabla y le otorgué permisos de lectura a un usuario.",
        aprendizajes: [
            "Una vista guarda la consulta y no los datos, por lo que siempre muestra información actualizada.",
            "Las vistas sirven para restringir el acceso a la información, simplificar el esquema para los usuarios y reutilizar consultas complejas.",
            "No todas las vistas permiten modificar datos, y eliminar una puede afectar a programas y a otras vistas.",
            "Las vistas materializadas son una alternativa cuando el rendimiento importa más que tener los datos al instante.",
            "Aplicación de CREATE VIEW y GRANT sobre un esquema real."
        ]
    },
         {
        slug: "origen-acid-harder-reuter",
        titulo: "Investigación: ¿De dónde viene el término ACID?",
        imagen: "Origen_ACID.png",
        imagenAlt: "Propiedades ACID, tipos de fallo y acciones de recuperación, políticas STEAL y FORCE, y su relación con Oracle, según Härder y Reuter (1983)",
        categoria: "Bases de datos (Investigación tema)",
        descripcion: "Tema de investigación sobre el artículo que acuñó el término ACID y sobre cómo una base de datos se recupera de un fallo sin perder ni corromper la información.",
        contexto: "En clase vimos que las transacciones deben cumplir las propiedades ACID. Para entender de dónde salen esas propiedades, investigué el artículo original: Härder, T. y Reuter, A. (1983), Principles of Transaction-Oriented Database Recovery, ACM Computing Surveys, 15(4), 287–317. El objetivo era comprender no solo qué significa cada propiedad, sino qué hace el motor por dentro para garantizarlas.",
        desarrollo: "El artículo propone un marco de términos para describir y comparar las técnicas de recuperación de los sistemas de bases de datos. Para eso parte de la transacción: una secuencia de operaciones que debe ejecutarse como una unidad. De ahí salen las cuatro propiedades que los autores agrupan bajo el acrónimo ACID: atomicidad, consistencia, aislamiento y durabilidad. Luego distinguen tres tipos de fallo, cada uno con su propia acción de recuperación. Si falla una transacción, basta con deshacer sus cambios (Transaction UNDO). Si falla el sistema y se pierde la memoria, hay que deshacer las transacciones incompletas y rehacer las confirmadas que no alcanzaron a llegar al disco (Global UNDO y Partial REDO). Si se daña el disco, se rehace todo a partir de una copia de archivo y del log (Global REDO). Después clasifican las técnicas según cómo se maneja el buffer. Con la política STEAL, una página modificada puede escribirse en disco antes del COMMIT, por lo que se necesita información para deshacer (UNDO). Con NO FORCE, los cambios confirmados no se escriben en disco de inmediato, por lo que se necesita información para rehacer (REDO). Los motores actuales combinan STEAL y NO FORCE porque es lo más eficiente, a cambio de mantener ambos tipos de log. Por último, relacioné estas ideas con Oracle: los segmentos UNDO permiten el ROLLBACK y que otras sesiones lean la versión confirmada de los datos, y los redo logs, que se escriben antes de confirmar el COMMIT, son los que garantizan la durabilidad.",
        aprendizajes: [
            "El término ACID nació en un artículo sobre recuperación ante fallos, no solo sobre transacciones.",
            "Cada tipo de fallo (de transacción, del sistema o del disco) requiere una estrategia de recuperación distinta.",
            "Las políticas STEAL y FORCE determinan si el motor necesita información para deshacer, para rehacer o para ambas cosas.",
            "Los segmentos UNDO y los redo logs de Oracle son la aplicación práctica de estas ideas.",
            "Comprender cómo funciona el motor por dentro ayuda a justificar mejor las decisiones de diseño de una transacción."
        ]
    },
];
