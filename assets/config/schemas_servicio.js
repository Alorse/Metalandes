const hv = {
  type: "object",
  required: [
    "identificacion",
    "fecha",
    "ciudad",
    "contacto",
    "establecimiento",
    "asunto",
    "trabajos"
  ],
  properties: {
    identificacion: {
      type: "string",
    },
    fecha: {
      type: "string",
      format: "date"
    },
    ciudad: {
      type: "string",
    },
    contacto: {
      type: "string"
    },
    establecimiento: {
      type: "string"
    },
    asunto: {
      type: "string"
    },
    trabajos: {
      type: "string"
    },
    fotos1: {
      type: "array",
      items: {
        type: "object",
        properties: {
          imagen: {
            type: "array",
            format: "media-capture",
          },
          descripcion: {
            type: "string",
            options: {
              multi: true
            }
          },
        },
        required: [
          "imagen",
          "descripcion"
        ]
      }
    },
    observ_generales: {
      type: "array",
      items: {
        type: "object",
        properties: {
          enunciado: {
            type: "string",
            options: {
              multi: true
            }
          },
          fotos: {
            type: "array",
            format: "media-capture",
          }
        }
      }
    },
  }
};

export default {
    hv
};