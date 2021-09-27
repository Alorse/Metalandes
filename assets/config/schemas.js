const hv = {
  "type": "object",
  "required": [
    "Indetificación",
    "Fecha",
    "Ciudad",
  ],
  "properties": {
    "Indetificación": {
      "type": "number",
      "minLength": 2,
      "maxLength": 20
    },
    "Fecha": {
      "type": "string",
      "format": "date"
    },
    "Ciudad": {
      "type": "string",
      "minimum": 1,
      "maximum": 20
    },
    "Contacto": {
      "type": "string"
    },
    "Establecimiento": {
      "type": "string"
    },
    "Equipos": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "Equipo": {
            "type": "string",
            "enum": [
              "CELDA CORRECCION DE F.P",
              "CELDA DOBLE TIRO PRIMARIO",
              "CELDA MEDIDA EN MEDIA O BAJA TENSION",
              "CELDA SECCIONADOR",
              "CELDA TRANSFERENCIA",
              "CELDA TRANSFORMADOR DE POTENCIA",
              "CELDA CONTADORES",
              "TABLERO DE PROTECCIONES",
            ]
          },
          "Cantidad": {
            "type": "integer"
          },
        }
      }
    },
    // "gender": {
    //   "type": "string",
    //   "enum": [
    //     "Male",
    //     "Female",
    //     "Undisclosed"
    //   ]
    // },
    // "height": {
    //   "type": "number"
    // },
    // "dateOfBirth": {
    //   "type": "string",
    //   "format": "date"
    // },
    // "rating": {
    //   "type": "integer"
    // },
    // "committer": {
    //   "type": "boolean"
    // },
    // "address": {
    //   "type": "object",
    //   "properties": {
    //     "street": {
    //       "type": "string"
    //     },
    //     "streetnumber": {
    //       "type": "string"
    //     },
    //     "postalCode": {
    //       "type": "string"
    //     },
    //     "city": {
    //       "type": "string"
    //     }
    //   }
    // }
  }
};

export default {
    hv
};