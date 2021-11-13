const hv = {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Informe de Servicios",
      elements: [
        {
          type: "Group",
          elements: [
            {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/identificacion",
                  label: "Identificación"
                },
                {
                  type: "Control",
                  scope: "#/properties/fecha"
                },
                {
                  type: "Control",
                  scope: "#/properties/ciudad"
                }
              ]
            },
            {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/contacto"
                },
              ]
            },
            {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/establecimiento"
                },
              ]
            },
            {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/asunto",
                  options: {
                    multi: true
                  }
                },
              ]
            },
          ]
        },
        {
          type: "Group",
          elements: [
            {
              type: "Control",
              scope: "#/properties/trabajos",
              label: "TRABAJOS EJECUTADOS",
              options: {
                multi: true
              }
            },
            {
              type: "Control",
              scope: "#/properties/fotos1",
              label: "Imágenes"
            }
          ]
        },
        {
          type: "Group",
          elements: [
            {
              type: "Control",
              scope: "#/properties/observ_generales",
              label: "CONSIDERACIONES GENERALES",
              options: {
                multi: true
              }
            },
            {
              type: "Control",
              scope: "#/properties/fotos_generales",
              label: "Fotos"
            }
          ]
        },
      ],
    }
  ]
};

export default {
    hv
};