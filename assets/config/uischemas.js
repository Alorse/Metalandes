const doble_tiro_primario = {
  id: "dtp",
  type: "Group",
  label: "CELDA DOBLE TIRO PRIMARIO",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/marca_dtp",
          label: "Marca",
        },
        {
          type: "Control",
          scope: "#/properties/tipo_dtp",
          label: "Tipo",
        },
        {
          type: "Control",
          scope: "#/properties/cap_fus_hh_dtp",
          label: "Cap. Fusibles HH"
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/NumeroCircuitoPreferencial",
          label: "N° circuito preferencial",
        },
        {
          type: "Control",
          scope: "#/properties/NumeroCircuitoEmergencia",
          label: "N° circuito emergencia",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/TipoAccionamiento",
          label: "Tipo Accionamiento",
        },
        {
          type: "Control",
          scope: "#/properties/estado_dtp",
          label: "Estado",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/MarcaRele",
          label: "Marca relé 27/59 y/o PLC",
        },
        {
          type: "Control",
          scope: "#/properties/VoltajeAlto",
          label: "Voltaje alto",
        },
        {
          type: "Control",
          scope: "#/properties/VoltajeBajo",
          label: "Voltaje bajo",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/TensionDeControl",
          label: "Tensión de Control",
        },
        {
          type: "Control",
          scope: "#/properties/ano_fabricacion_dtp",
          label: "Año de Fabricación",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/observ_dtp",
          label: "Observaciones generales",
        },
      ]
    },
  ]
};

const correccion = {

};

const media_baja = {
  id: "md",
  type: "Group",
  label: "CELDA MEDIDA EN MEDIA O BAJA TENSIÓN",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/tipo_mb",
          label: "Tipo De Celda De Medida",
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/marca_medidor_md",
          label: "Marca Medidor",
        },
        {
          type: "Control",
          scope: "#/properties/referencia_mb",
          label: "Referencia",
        },
        {
          type: "Control",
          scope: "#/properties/marca_tc_tp_mb",
          label: "Marca TCs & TPs",
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/num_tc1_mb",
          label: "Numero de TC 1",
        },
        {
          type: "Control",
          scope: "#/properties/num_tc2_mb",
          label: "Numero de TC 2",
        },
        {
          type: "Control",
          scope: "#/properties/num_tc3_mb",
          label: "Numero de TC 3",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/rel_trans_tc_mb",
          label: "Relación de Transformación",
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/num_tp1_mb",
          label: "Numero de TC 1",
        },
        {
          type: "Control",
          scope: "#/properties/num_tp2_mb",
          label: "Numero de TC 2",
        },
        {
          type: "Control",
          scope: "#/properties/num_tp3_mb",
          label: "Numero de TC 3",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/rel_trans_tp_mb",
          label: "Relación de Transformación",
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/mult_mb",
          label: "Constante o factor de multiplicación",
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/ano_fabricacion_mb",
          label: "Año de fabricación",
        },
        {
          type: "Control",
          scope: "#/properties/calibre_mb",
          label: "Calibre de las Fases",
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/observ_mb",
          label: "Observaciones generales",
        }
      ]
    },
  ]
};
const seccionador = {
  id: "seccionador",
  type: "Group",
  label: "CELDA SECCIONADOR",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/marca_seccionador",
          label: "Marca",
        },
        {
          type: "Control",
          scope: "#/properties/tipo_seccionador",
          label: "Tipo",
        },
        {
          type: "Control",
          scope: "#/properties/cap_fus_hh_seccionador",
          label: "Cap. Fusibles HH"
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/cuchillas_seccionador",
          label: "Posee Cuchillas de puesta Tierra",
        },
        {
          type: "Control",
          scope: "#/properties/numero_serie_seccionador",
          label: "N° de serie del seccionador",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/referencia_seccionador",
          label: "Referencia",
        },
        {
          type: "Control",
          scope: "#/properties/palanca_seccionador",
          label: "Posee Palanca De Accionamiento",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/ano_fabricacion_seccionador",
          label: "Año de Fabricación",
        },
        {
          type: "Control",
          scope: "#/properties/inom_seccionador",
          label: "Inom (A)",
        },
        {
          type: "Control",
          scope: "#/properties/vnom_seccionador",
          label: "Vnom (KV)",
        },
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/observ_seccionador",
          label: "Observaciones generales",
        },
      ]
    },
  ]
};
const transferencia = {

};
const transformador = {

};
const contadores = {

};
const tablero_protecciones = {

};

const hv = {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Subestación eléctrica",
      elements: [
        {
          type: "Group",
          // label: "HOJA DE VIDA SUBESTACION ELECTRICA",
          elements: [
            {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/indentificacion",
                  label: "Indentificación"
                },
                {
                  type: "Control",
                  scope: "#/properties/Fecha"
                },
                {
                  type: "Control",
                  scope: "#/properties/Ciudad"
                }
              ]
            },
            {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/Contacto"
                },
              ]
            },
            {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/Establecimiento"
                },
              ]
            },
          ]
        },
        {
          type: "Group",
          // label: "Gabinetes que componen la subestación\n Total: <span id='amount'>1</span>",
          label: "Gabinetes que componen la subestación",
          elements: [
            {
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/equipos",
                  label: "Equipos"
                }
              ]
            }
          ],
        },
      ],
    },
    {
      type: "Category",
      label: "Detalle Equipos",
      elements: [
        // doble_tiro_primario,
        // seccionador,
      ],
    }
  ],
  options: {
    variant: "stepper",
    showNavButtons: true
  }
};

export default {
    hv,
    doble_tiro_primario,
    seccionador,
    media_baja
};