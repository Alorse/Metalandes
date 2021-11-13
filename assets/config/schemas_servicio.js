const hv = {
  type: "object",
  required: [
    "identificacion",
    "fecha",
    "ciudad",
    "contacto",
    "establecimiento",
  ],
  properties: {
    identificacion: {
      type: "string",
      minLength: 2,
      maxLength: 200
    },
    fecha: {
      type: "string",
      format: "date"
    },
    ciudad: {
      type: "string",
      minimum: 1,
      maximum: 20
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
          },
        }
      }
    },
    observ_generales: {
      type: "array",
      items: {
        type: "object",
        properties: {
          enunciados: {
            type: "string",
            options: {
              multi: true
            }
          }
        }
      }
    },
    fotos_generales: {
      type: "array",
      format: "media-capture",
    }
  }
};

export default {
    hv
};