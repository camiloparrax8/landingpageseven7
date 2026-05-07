/** Textos legales (footer · modales). */

export type LegalSublist = {
  heading: string;
  items: readonly string[];
};

export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  /** Párrafos que se muestran después de listas, si aplica. */
  tailParagraphs?: readonly string[];
  bullets?: readonly string[];
  sublists?: readonly LegalSublist[];
};

export type LegalDocument = {
  modalTitle: string;
  subtitle: string;
  sections: readonly LegalSection[];
};

export const PRIVACY_POLICY: LegalDocument = {
  modalTitle: "Política de tratamiento de datos personales",
  subtitle: "Seven Siete Company SAS",
  sections: [
    {
      title: "1. Identificación del responsable",
      paragraphs: [
        'Seven Siete Company SAS (en adelante, «Seven Siete»), es una sociedad comercial constituida conforme a las leyes de la República de Colombia, responsable del tratamiento de los datos personales recolectados a través de sus canales digitales y comerciales.',
        "Correo de contacto: info@seven7company.com",
      ],
    },
    {
      title: "2. Alcance",
      paragraphs: [
        "La presente política aplica a todas las bases de datos y/o archivos que contengan datos personales que sean objeto de tratamiento por parte de Seven Siete, incluyendo:",
      ],
      bullets: [
        "Sitio web",
        "Formularios digitales",
        "Plataformas desarrolladas",
        "Canales comerciales",
        "Relación con clientes, proveedores y aliados",
      ],
    },
    {
      title: "3. Marco legal",
      paragraphs: ["Esta política se fundamenta en:"],
      bullets: [
        "Artículo 15 de la Constitución Política de Colombia",
        "Ley 1581 de 2012",
        "Decreto 1377 de 2013",
        "Decreto 1074 de 2015",
        "Lineamientos de la Superintendencia de Industria y Comercio",
      ],
    },
    {
      title: "4. Definiciones clave",
      bullets: [
        "Dato personal: información que identifica o puede identificar a una persona.",
        "Dato sensible: información que afecta la intimidad (salud, creencias, etc.).",
        "Tratamiento: recolección, almacenamiento, uso, circulación o supresión.",
        "Titular: persona natural dueña de los datos.",
        "Responsable: quien decide sobre el tratamiento (Seven Siete).",
      ],
    },
    {
      title: "5. Datos que recolectamos",
      paragraphs: ["Seven Siete podrá recolectar:"],
      bullets: [
        "Nombre, empresa y cargo",
        "Correo electrónico",
        "Teléfono",
        "Información comercial",
        "Información entregada voluntariamente",
        "Datos de navegación (cookies, IP, comportamiento)",
      ],
    },
    {
      title: "6. Finalidades del tratamiento",
      paragraphs: ["Los datos personales serán utilizados para:"],
      sublists: [
        {
          heading: "Clientes y prospectos",
          items: [
            "Contacto y gestión comercial",
            "Presentación de propuestas",
            "Prestación de servicios tecnológicos",
            "Soporte y atención",
            "Facturación y cumplimiento contractual",
            "Envío de información comercial (previa autorización)",
          ],
        },
        {
          heading: "Proveedores y aliados",
          items: [
            "Evaluación, contratación y gestión",
            "Pagos y obligaciones legales",
            "Control administrativo",
          ],
        },
        {
          heading: "Analítica y operación",
          items: [
            "Mejora de servicios",
            "Métricas y comportamiento digital",
            "Seguridad y prevención de fraude",
          ],
        },
      ],
    },
    {
      title: "7. Datos sensibles",
      paragraphs: [
        "Seven Siete no solicita datos sensibles, salvo que sea estrictamente necesario, caso en el cual:",
      ],
      bullets: [
        "Se solicitará autorización expresa.",
        "El titular podrá no suministrarlos.",
      ],
    },
    {
      title: "8. Datos de menores",
      paragraphs: [
        "No se recolectan datos de menores de edad. En caso excepcional, se requerirá autorización de sus representantes legales.",
      ],
    },
    {
      title: "9. Uso de cookies",
      paragraphs: ["El sitio web utiliza cookies para:"],
      bullets: ["Analítica", "Experiencia de usuario", "Personalización"],
      tailParagraphs: ["El usuario puede gestionarlas desde su navegador."],
    },
    {
      title: "10. Transferencia y transmisión de datos",
      paragraphs: ["Seven Siete podrá compartir datos con:"],
      bullets: [
        "Proveedores tecnológicos (hosting, analítica, CRM)",
        "Aliados estratégicos",
        "Plataformas digitales",
      ],
      sublists: [
        {
          heading: "Siempre bajo:",
          items: ["Confidencialidad", "Cumplimiento legal", "Protección de la información"],
        },
      ],
    },
    {
      title: "11. Derechos del titular",
      paragraphs: ["El titular podrá:"],
      bullets: [
        "Conocer sus datos",
        "Actualizar o corregir",
        "Solicitar eliminación",
        "Revocar autorización",
        "Acceder gratuitamente",
      ],
    },
    {
      title: "12. Procedimiento para ejercer derechos",
      paragraphs: ["Correo: info@seven7company.com", "Plazos de respuesta:"],
      bullets: ["Consultas: 10 días hábiles", "Reclamos: 15 días hábiles"],
    },
    {
      title: "13. Seguridad de la información",
      paragraphs: [
        "Seven Siete implementa medidas técnicas (infraestructura, acceso), administrativas y organizacionales para proteger la información.",
      ],
    },
    {
      title: "14. Vigencia",
      paragraphs: [
        "Esta política rige desde su publicación y podrá ser modificada en cualquier momento.",
      ],
    },
  ],
};

export const TERMS_OF_USE: LegalDocument = {
  modalTitle: "Términos y condiciones de uso",
  subtitle: "Seven Siete Company SAS",
  sections: [
    {
      title: "1. Objeto",
      paragraphs: [
        "Regular el acceso y uso del sitio web de Seven Siete. El uso implica aceptación total de estos términos.",
      ],
    },
    {
      title: "2. Naturaleza del servicio",
      paragraphs: ["Seven Siete es una empresa de tecnología que ofrece:"],
      bullets: [
        "Desarrollo web",
        "Software a la medida",
        "Aplicaciones móviles",
        "Diseño de marca",
        "Transformación digital",
        "Analítica",
      ],
    },
    {
      title: "3. Uso del sitio",
      paragraphs: ["El usuario se compromete a:"],
      bullets: [
        "Usar el sitio legalmente",
        "No afectar su funcionamiento",
        "No intentar accesos indebidos",
        "No usar información con fines ilícitos",
      ],
    },
    {
      title: "4. Registro",
      paragraphs: ["De darse el caso, el usuario deberá:"],
      bullets: [
        "Proporcionar información veraz",
        "Proteger sus credenciales",
        "Asumir responsabilidad por su uso",
      ],
    },
    {
      title: "5. Propiedad intelectual",
      paragraphs: ["Todo el contenido es propiedad de Seven Siete:"],
      bullets: ["Código", "Diseño", "Marca", "Contenido"],
      tailParagraphs: ["Queda prohibida su reproducción sin autorización."],
    },
    {
      title: "6. Servicios tecnológicos",
      paragraphs: [
        "Los servicios podrán regirse por contratos independientes, acuerdos de desarrollo, licencias de uso y los demás instrumentos necesarios. La propiedad del software se definirá en dichos contratos.",
      ],
    },
    {
      title: "7. Licencia de uso",
      paragraphs: [
        "Se otorga una licencia limitada, no exclusiva y revocable.",
        "No se permite:",
      ],
      bullets: ["Ingeniería inversa", "Copia del software", "Uso indebido"],
    },
    {
      title: "8. Responsabilidad",
      paragraphs: ["Seven Siete no garantiza disponibilidad continua ni ausencia de errores."],
    },
    {
      title: "9. Limitación de responsabilidad",
      paragraphs: ["Seven Siete no será responsable por:"],
      bullets: [
        "Daños indirectos",
        "Pérdida de información",
        "Lucro cesante",
        "Decisiones del usuario",
      ],
    },
    {
      title: "10. Enlaces a terceros",
      paragraphs: [
        "Seven Siete no responde por el contenido externo ni por las políticas de sitios de terceros.",
      ],
    },
    {
      title: "11. Confidencialidad",
      paragraphs: [
        "La información será tratada con estándares profesionales de confidencialidad.",
      ],
    },
    {
      title: "12. Protección de datos",
      paragraphs: ["El uso del sitio implica aceptación de la política de privacidad."],
    },
    {
      title: "13. Modificaciones",
      paragraphs: ["Seven Siete podrá modificar estos términos en cualquier momento."],
    },
    {
      title: "14. Legislación aplicable",
      paragraphs: ["Regido por las leyes de la República de Colombia."],
    },
    {
      title: "15. Contacto",
      paragraphs: ["info@seven7company.com"],
    },
  ],
};
