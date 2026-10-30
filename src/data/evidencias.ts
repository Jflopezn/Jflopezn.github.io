
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
        titulo: "Modelo entidad-relación",
        imagen: "evidencia1.png",
        imagenAlt: "Diagrama del modelo entidad-relación",
        categoria: "Bases de datos",
        descripcion: "Diseño conceptual de una base de datos.",
        contexto: "Actividad académica orientada al análisis y diseño conceptual de una base de datos a partir de un conjunto de requerimientos.",
        desarrollo: "Se identificaron las entidades, atributos y relaciones del sistema. Posteriormente, se establecieron las restricciones y cardinalidades necesarias para representar correctamente el dominio del problema.",
        aprendizajes: [
            "Identificación de entidades y atributos.",
            "Definición de relaciones y cardinalidades.",
            "Aplicación de conceptos del modelo entidad-relación."
        ]
    },
    {
        slug: "segunda-evidencia",
        titulo: "Segunda evidencia",
        imagen: "evidencia2.png",
        imagenAlt: "Imagen de la segunda evidencia",
        categoria: "Actividad académica",
        descripcion: "Descripción breve de la segunda evidencia.",
        contexto: "Explica aquí el contexto en el que se realizó esta actividad.",
        desarrollo: "Describe aquí el procedimiento, las decisiones tomadas y el contenido del trabajo.",
        aprendizajes: [
            "Primer aprendizaje.",
            "Segundo aprendizaje."
        ]
    },
    {
        slug: "tercera-evidencia",
        titulo: "Tercera evidencia",
        imagen: "evidencia3.png",
        imagenAlt: "Imagen de la tercera evidencia",
        categoria: "Actividad académica",
        descripcion: "Descripción breve de la tercera evidencia.",
        contexto: "Explica aquí el contexto de la actividad.",
        desarrollo: "Describe aquí cómo se desarrolló el trabajo.",
        aprendizajes: [
            "Primer aprendizaje.",
            "Segundo aprendizaje."
        ]
    }
];
