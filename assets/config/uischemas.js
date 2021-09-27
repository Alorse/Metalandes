const hv = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Group",
      "label": "HOJA DE VIDA SUBESTACION ELECTRICA",
      "elements": [
        {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/Indetificación"
            },
            {
              "type": "Control",
              "scope": "#/properties/Fecha"
            },
            {
              "type": "Control",
              "scope": "#/properties/Ciudad"
            }
          ]
        },
        {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/Contacto"
            },
          ]
        },
        {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/Establecimiento"
            },
          ]
        },
      ]
    },
    {
      "type": "Group",
      // "label": "Gabinetes que componen la subestación\n Total: <span id='amount'>1</span>",
      "label": "Gabinetes que componen la subestación",
      "elements": [
        {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/Equipos"
            }
          ]
        }
      ],
      // "rule": {
      //   "effect": "ENABLE",
      //   "condition": {
      //     "scope": "#/properties/committer",
      //     "schema": {
      //       "const": true
      //     }
      //   }
      // }
    },
    // {
    //   "type": "HorizontalLayout",
    //   "elements": [
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/height"
    //     },
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/gender"
    //     },
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/committer"
    //     }
    //   ]
    // },
  ],
  "options": {
    "variant": "stepper",
    "showNavButtons": true
  }
};

export default {
    hv
};