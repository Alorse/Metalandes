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
              scope: "#/properties/inspeccion_dtp",
              label: "Tipo de Inspección",
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
              scope: "#/properties/num_trans_corre",
              label: "Número Transformador Asociado",
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
              scope: "#/properties/lista_corre",
              label: "Celdas",
              options: {
                detail: {
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/paso",
                          label: "Tipo de paso",
                        },
                        {
                          type: "Control",
                          scope: "#/properties/estado",
                          label: "Estado",
                        },
                        {
                          type: "Control",
                          scope: "#/properties/proteccion",
                          label: "Protección",
                        },
                      ]
                    },
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/kvar",
                          label: "kVAr",
                        },
                        {
                          type: "Control",
                          scope: "#/properties/ir",
                          label: "IR",
                        },
                        {
                          type: "Control",
                          scope: "#/properties/is",
                          label: "IS",
                        },
                        {
                          type: "Control",
                          scope: "#/properties/it",
                          label: "IT",
                        },
                      ]
                    },
                  ]
                }
              }
            },
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
            // {
            //   type: "Control",
            //   scope: "#/properties/inspeccion_mb",
            //   label: "Tipo de Inspección",
            // }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/sellos_mb",
              label: "Estado de sellos",
            },
            {
              type: "Control",
              scope: "#/properties/estado_mb",
              label: "Estado General",
            },
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
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/inspeccion_seccionador",
              label: "Tipo de Inspección"
            },
            {
              type: "Control",
              scope: "#/properties/estado_seccionador",
              label: "Estado",
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
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
              label: "Capacidad (Amp)",
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
            }
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/rele_2759_cia",
              label: "Relé",
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/inspeccion_cia",
              label: "Tipo de Inspección",
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
              scope: "#/properties/capacidad_dor",
              label: "Capacidad",
            },
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/num_epm_dor",
              label: "Número EPM",
            },
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
          ]
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/estado_dor",
              label: "Estado",
            },
            {
              type: "Control",
              scope: "#/properties/equipotencializado_dor",
              label: "Neutro Equipotencializado a tierra",
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
              scope: "#/properties/sellos_cont",
              label: "Estado de sellos",
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