const doble_tiro_primario = {
  type: "ListWithDetail",
  label: "CELDA DOBLE TIRO PRIMARIO",
  scope: "#/properties/doble_tiro_primario",
  options: {
    detail: {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/id_dtp",
              label: "Nombre / Ubicación / Referencia",
            }
          ]
        },
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
              options: {
                multi: true
              }
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/fotos_dtp",
              label: "Fotos"
            }
          ]
        }
      ]
    }
  }
};
const correccion = {
  type: "ListWithDetail",
  label: "CELDA CORRECCION DE F.P",
  scope: "#/properties/correccion",
  options: {
    detail: {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/id_corre",
              label: "Nombre / Ubicación / Referencia",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/marca_rele_corre",
              label: "Marca Relé",
            },
            {
              type: "Control",
              scope: "#/properties/referencia_corre",
              label: "Referencia",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/totalizador_corre",
              label: "Totalizador",
            },
            {
              type: "Control",
              scope: "#/properties/factor_corre",
              label: "Factor de P",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/bancos_fijos_corre",
              label: "N° Bancos Fijos",
            },
            {
              type: "Control",
              scope: "#/properties/bancos_moviles_corre",
              label: "N° Bancos Móviles",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/calibre_corre",
              label: "Calibre conductores",
            },
            {
              type: "Control",
              scope: "#/properties/relacion_corre",
              label: "Relación TC",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/observ_corre",
              label: "Observaciones generales",
              options: {
                multi: true
              }
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/fotos_corre",
              label: "Fotos"
            }
          ]
        }
      ]
    }
  }
};
const media_baja = {
  type: "ListWithDetail",
  label: "CELDA MEDIDA EN MEDIA O BAJA TENSIÓN",
  scope: "#/properties/media_baja",
  options: {
    detail: {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/id_mb",
              label: "Nombre / Ubicación / Referencia",
            },
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
              label: "N° de TC 1",
            },
            {
              type: "Control",
              scope: "#/properties/num_tc2_mb",
              label: "N° de TC 2",
            },
            {
              type: "Control",
              scope: "#/properties/num_tc3_mb",
              label: "N° de TC 3",
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
              label: "N° de TP 1",
            },
            {
              type: "Control",
              scope: "#/properties/num_tp2_mb",
              label: "N° de TP 2",
            },
            {
              type: "Control",
              scope: "#/properties/num_tp3_mb",
              label: "N° de TP 3",
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
              options: {
                multi: true
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/fotos_mb",
              label: "Fotos"
            }
          ]
        }
      ]
    }
  }
};
const seccionador = {
  type: "ListWithDetail",
  label: "CELDA SECCIONADOR",
  scope: "#/properties/seccionador",
  options: {
    detail: {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/id_seccionador",
              label: "Nombre / Ubicación / Referencia",
            }
          ]
        },
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
              scope: "#/properties/referencia_seccionador",
              label: "Referencia",
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
              scope: "#/properties/cuchillas_seccionador",
              label: "Posee cuchillas de puesta tierra",
              options: {
                format: "radio"
              }
            },
            {
              type: "Control",
              scope: "#/properties/palanca_seccionador",
              label: "Posee palanca de accionamiento",
              options: {
                format: "radio"
              }
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
              options: {
                multi: true
              }
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/fotos_seccionador",
              label: "Fotos"
            }
          ]
        }
      ]
    }
  }
};
const transferencia = {
  type: "ListWithDetail",
  label: "CELDA TRANSFERENCIA",
  scope: "#/properties/transferencia",
  options: {
    detail: {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/id_cia",
              label: "Nombre / Ubicación / Referencia",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/marca_cia",
              label: "Marca",
            },
            {
              type: "Control",
              scope: "#/properties/tipo_cia",
              label: "Tipo",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/capacidad_cia",
              label: "Capacidad",
            },
            {
              type: "Control",
              scope: "#/properties/estado_cia",
              label: "Estado",
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/distribucion_cia",
              label: "Posee distribución",
              options: {
                format: "radio"
              }
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/rele_2759_cia",
              label: "Relé de transferencia 27/59",
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/rele_81_cia",
              label: "Relé 81",
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/calibre_conductores_cia",
              label: "Calibre conductores",
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/observ_cia",
              label: "Observaciones generales",
              options: {
                multi: true
              }
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/fotos_cia",
              label: "Fotos"
            }
          ]
        }
      ]
    }
  }
};
const transformador = {
  type: "ListWithDetail",
  label: "CELDA TRANSFORMADOR DE POTENCIA",
  scope: "#/properties/transformador",
  options: {
    detail: {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/id_dor",
              label: "Nombre / Ubicación / Referencia",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/marca_dor",
              label: "Marca",
            },
            {
              type: "Control",
              scope: "#/properties/tipo_dor",
              label: "Tipo",
            },
            {
              type: "Control",
              scope: "#/properties/rel_trans_dor",
              label: "Relación de transformación"
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/capacidad_dor",
              label: "Capacidad",
            },
            {
              type: "Control",
              scope: "#/properties/num_epm_dor",
              label: "Número EPM",
            },
            {
              type: "Control",
              scope: "#/properties/num_serie_dor",
              label: "Número de serie"
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/capacidad_tot_dor",
              label: "Capacidad totalizador y corriente de Cortocircuito",
            },
            {
              type: "Control",
              scope: "#/properties/icc_dor",
              label: "Icc"
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/calibre_baja_dor",
              label: "Calibre conductores en baja tensión",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/calibre_media_dor",
              label: "Calibre conductores en media tensión",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/foso_dor",
              label: "Posee foso (aplica trf aceite)",
              options: {
                format: "radio"
              }
            },
            {
              type: "Control",
              scope: "#/properties/dps_alta_dor",
              label: "Posee DPS o pararrayos en el lado de alta",
              options: {
                format: "radio"
              }
            },
            {
              type: "Control",
              scope: "#/properties/dps_baja_dor",
              label: "Posee DPS o pararrayos en el lado de baja",
              options: {
                format: "radio"
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/ano_fabricacion_dor",
              label: "Año fabricación"
            },
            {
              type: "Control",
              scope: "#/properties/peso_dor",
              label: "Peso (Kg)"
            },
            {
              type: "Control",
              scope: "#/properties/conexion_dor",
              label: "Grupo Conexión"
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/adfq_dor",
              label: "ADFQ",
              options: {
                format: "radio"
              }
            },
            {
              type: "Control",
              scope: "#/properties/pcb_dor",
              label: "PCB",
              options: {
                format: "radio"
              }
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/gases_dor",
              label: "Cromatografía de gases",
              options: {
                format: "radio"
              }
            },
            {
              type: "Control",
              scope: "#/properties/ttr_dor",
              label: "TTR",
              options: {
                format: "radio"
              }
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/prueba_dor",
              label: "Prueba de aislamiento e índice de polarización",
              options: {
                format: "radio"
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Group",
              scope: "#/properties/prueba",
              label: "Reporte de pruebas",
              elements: [
                {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/prueba/properties/at_tierra",
                      label: "(GΩ) AT-Tierra",
                    },
                    {
                      type: "Control",
                      scope: "#/properties/prueba/properties/bt_tierra",
                      label: "(GΩ) BT-Tierra",
                    }
                  ]
                },
                {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/prueba/properties/at_bt",
                      label: "(GΩ) AT-BT",
                    },
                    {
                      type: "Control",
                      scope: "#/properties/prueba/properties/minutos",
                      label: "AT-BT (MΩ) 10 minutos",
                    }
                  ]
                },
                {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/prueba/properties/valor",
                      label: "Valor índice de polarización",
                    },
                    {
                      type: "Control",
                      scope: "#/properties/prueba/properties/diagnostico",
                      label: "Diagnóstico",
                    }
                  ]
                },
              ],
              rule: {
                effect: "SHOW",
                condition: {
                  scope: "#/properties/prueba_dor",
                  schema: { const: true }
                }
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/observ_dor",
              label: "Observaciones generales",
              options: {
                multi: true
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/fotos_dor",
              label: "Fotos"
            }
          ]
        }
      ]
    }
  }
};
const contadores = {
  type: "ListWithDetail",
  label: "CELDA CONTADORES",
  scope: "#/properties/contadores",
  options: {
    detail: {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/id_cont",
              label: "Nombre / Ubicación / Referencia",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/num_celdas_cont",
              label: "N° Celdas de Medidores",
            },
            {
              type: "Control",
              scope: "#/properties/num_medidores_cont",
              label: "N° Medidores por tablero",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/tipo_medidores_cont",
              label: "Tipo de Medidores y capacidad",
              options: {
                multi: true
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/marca_medidores_cont",
              label: "Marca de los medidores",
              options: {
                multi: true
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/calibre_conductores_cont",
              label: "Calibre conductores",
              options: {
                multi: true
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/totalizador_cont",
              label: "Totalizador principal de cada celda",
              options: {
                multi: true
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/observ_cont",
              label: "Observaciones generales",
              // className: "observ",
              options: {
                multi: true
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/fotos_cont",
              label: "Fotos"
            }
          ]
        }
      ]
    }
  }
};
const tablero = {
  type: "ListWithDetail",
  label: "TABLERO DE PROTECCIONES",
  scope: "#/properties/tablero",
  options: {
    detail: {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/nombre_tab",
              label: "Nombre del Tablero",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/capacidad_tab",
              label: "Capacidad totalizador",
            },
            {
              type: "Control",
              scope: "#/properties/cortocircuito_tab",
              label: "I cortocircuito",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/marca_tab",
              label: "Marca",
            },
            {
              type: "Control",
              scope: "#/properties/protecciones_tab",
              label: "N° de protecciones en el tablero",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/tiene_dps_tab",
              label: "Posee DPS",
              options: {
                format: "radio"
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/dps_tab",
              label: "Especificaciones DPS",
              rule: {
                effect: "SHOW",
                condition: {
                  scope: "#/properties/tiene_dps_tab",
                  schema: { enum: ["Sí"] }
                }
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/barrajes_tab",
              label: "Posee protección de barrajes (lamina de policarbonato u otras)",
            },
            {
              type: "Control",
              scope: "#/properties/peligro_tab",
              label: "Existe marcación de peligro (calcomanía rayo)",
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/observ_tab",
              label: "Observaciones generales",
              options: {
                multi: true
              }
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/fotos_tab",
              label: "Fotos"
            }
          ]
        }
      ]
    }
  }
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
          ]
        },
        {
          type: "Group",
          label: "Gabinetes que componen la subestación",
          elements: [
            {
              type: "Group",
              elements: [
                doble_tiro_primario,
                correccion,
                media_baja,
                seccionador,
                transferencia,
                transformador,
                contadores,
                tablero
                // {
                //   type: "Control",
                //   scope: "#/properties/equipos",
                //   label: "Equipos",
                //   options: {
                //     detail: {
                //       type: "VerticalLayout",
                //       elements: [
                //         {
                //           type: "Label",
                //           text: "Person Info",
                //         },
                //       ],
                //     },
                //   },
                // }
              ]
            }
          ],
        },
        {
          type: "Group",
          elements: [
            {
              type: "Control",
              scope: "#/properties/observ_generales",
              label: "Observaciones generales",
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