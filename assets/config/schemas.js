const equipos = [
  "CELDA CONTADORES",
  "CELDA CORRECCION DE F.P",
  "CELDA DOBLE TIRO PRIMARIO",
  "CELDA MEDIDA EN MEDIA O BAJA TENSIÓN",
  "CELDA SECCIONADOR",
  "CELDA TRANSFERENCIA",
  "CELDA TRANSFORMADOR DE POTENCIA",
  "TABLERO DE PROTECCIONES",
];
const si_no = {
  type: "string",
  enum: [
    "Sí",
    "No",
  ]
};
const correccion = {
  marca_rele_corre: {
    type: "string",
    enum: [
      "ABB",
      "Disproel",
      "Elico",
      "ICAR",
      "Lovato",
      "Schneider",
      "Siemens",
      "YHZ",
      "Otro"
    ]
  },
  referencia_corre: {
    type: "string",
  },
  totalizador_corre: {
    type: "string",
  },
  factor_corre: {
    type: "string",
  },
  bancos_fijos_corre: {
    type: "integer",
  },
  bancos_moviles_corre: {
    type: "integer",
  },
  calibre_corre: {
    type: "integer",
  },
  relacion_corre: {
    type: "integer",
  },
  observ_corre: {
    type: "string",
  },
};
const doble_tiro_primario = {
  marca_dtp: {
    type: "string",
    enum: [
      "ABB",
      "BBC",
      "Celco",
      "Demitas",
      "Eaton",
      "Elimsan",
      "G&W",
      "General Electric",
      "Hyundai",
      "Merlin Gerin",
      "Ormazabal",
      "Sarel",
      "Schneider Electric",
      "Socol",
      "Xikai",
      "Otro"
    ]
  },
  tipo_dtp: {
    type: "string",
    enum: [
      "Aceite",
      "Aire",
      "SF6",
      "Vacio",
    ]
  },
  cap_fus_hh_dtp: {
    type: "string",
    enum: [
      "2Amp",
      "4 Amp",
      "6.3 Amp",
      "10 Amp",
      "16 Amp",
      "20 Amp",
      "25 Amp",
      "31.5 Amp",
      "40 Amp",
      "50 Amp",
      "63 Amp",
      "80 Amp",
      "100 Amp",
      "125 Amp",
      "160 Amp",
      "No tiene"
    ]
  },
  "NumeroCircuitoPreferencial": {
    type: "string",
  },
  "NumeroCircuitoEmergencia": {
    type: "string",
  },
  "TipoAccionamiento": {
    type: "string",
    enum: [
      "Automático",
      "Manual",
    ]
  },
  estado_dtp: {
    type: "string",
    enum: [
      "Bueno",
      "Regular",
      "Inoperativo",
    ]
  },
  "MarcaRele": {
    type: "string",
  },
  "VoltajeAlto": {
    type: "string",
  },
  "VoltajeBajo": {
    type: "string",
  },
  "TensionDeControl": {
    type: "string",
    enum: [
      "12VDC","25VDC","125VDC","25VAC","120VAC","220VAC"
    ]
  },
  ano_fabricacion_dtp: {
    type: "integer",
    minLength: 4,
    maxLength: 4,
  },
  observ_dtp: {
    type: "string",
  },
};
const media_baja = {
  tipo_mb: {
    type: "string",
    enum: [
      "Indirecta",
      "Semidirecta",
    ]
  },
  marca_medidor_md: {type: "string"},
  referencia_mb: {type: "string"},
  marca_tc_tp_mb: {
    type: "string",
    enum: [
      "ABB",
      "AMEO",
      "Arteche",
      "ATEL",
      "Rymel",
      "Schneider",
    ]
  },
  num_tc1_mb: {type: "string"},
  num_tc2_mb: {type: "string"},
  num_tc3_mb: {type: "string"},
  rel_trans_tc_mb: {type: "string"},
  num_tp1_mb: {type: "string"},
  num_tp2_mb: {type: "string"},
  num_tp3_mb: {type: "string"},
  rel_trans_tp_mb: {type: "string"},
  mult_mb: {type: "string"},
  ano_fabricacion_mb: {
    type: "integer",
    minLength: 4,
    maxLength: 4,
  },
  calibre_mb: {type: "string"},
  observ_mb: {type: "string"},
};
const seccionador = {
  marca_seccionador: doble_tiro_primario.marca_dtp,
  tipo_seccionador: doble_tiro_primario.tipo_dtp,
  cap_fus_hh_seccionador: doble_tiro_primario.cap_fus_hh_dtp,
  cuchillas_seccionador: si_no,
  numero_serie_seccionador: {
    type: "string",
  },
  referencia_seccionador:{
    type: "string",
  },
  palanca_seccionador: si_no,
  ano_fabricacion_seccionador: {
    type: "integer",
    minLength: 4,
    maxLength: 4,
  },
  inom_seccionador:{
    type: "string",
  },
  vnom_seccionador:{
    type: "string",
  },
  observ_seccionador:{
    type: "string",
  },
};
const transferencia = {
  marca_cia: {
    type: "string",
    enum: [
      "ABB",
      "Mitsubishi",
      "Siemens",
      "Schneider",
      "LS",
      "Chint",
      "Eaton",
      "Hyundai",
      "Lovato Gerin",
      "Otro"
    ]
  },
  tipo_cia: {
    type: "string",
    enum: [
      "Interruptor",
      "Conmutador",
      "Contactor",
      "Manual"
    ]
  },
  capacidad_cia: {
    type: "string",
  },
  estado_cia: {
    type: "string",
    enum: [
      "Operativo",
      "Inoperativo"
    ]
  },
  distribucion_cia: si_no,
  rele_2759_cia: {
    type: "object",
    properties: {
      marca: {
        type: "string",
      },
      referencia: {
        type: "string",
      },
    }
  },
  rele_81_cia: {
    type: "object",
    properties: {
      marca: {
        type: "string",
      },
      referencia: {
        type: "string",
      },
    }
  },
  calibre_conductores_cia: {
    type: "string",
  },
  observ_cia: {
    type: "string",
  },
};
const transformador = {
  marca_dor: {
    type: "string",
    enum: [
      "ABB",
      "AWA",
      "Andina de Transformadores",
      "FMF",
      "FYR",
      "Magnetron",
      "Rymel",
      "Siemens",
      "Sierra",
      "Suntec",
      "Tesla",
      "WEG",
      "Otro"
    ]
  },
  tipo_dor: {
    type: "string",
    enum: [
      "Aceite",
      "Seco Clase F",
      "Seco Clase H",
    ]
  },
  rel_trans_dor: {type: "string"},
  capacidad_dor: {
    type: "string",
    enum: [
      "10 kVA","15 kVA","20 kVA","30 kVA","45 kVA","50 kVA","75 kVA",
      "100 kVA","112.5 kVA","125 kVA","150 kVA","175 kVA","200 kVA","225 kVA",
      "300 kVA","400 kVA","500 kVA","630 kVA","750 kVA","800 kVA","1000 kVA",
      "1250 kVA","1600 kVA","2000 kVA","2500 kVA","3000 kVA","4000 kVA","5000 kVA",
      "Otro"
    ]
  },
  num_epm_dor: {type: "string"},
  num_serie_dor: {type: "string"},
  capacidad_tot_dor: {type: "string"},
  icc_dor: {type: "string"},
  calibre_baja_dor: {type: "string"},
  calibre_media_dor: {type: "string"},
  foso_dor: si_no,
  dps_alta_dor: si_no,
  ano_fabricacion_dor: {
    type: "integer",
    minLength: 4,
    maxLength: 4,
  },
  dps_baja_dor: si_no,
  peso_dor: {type: "string"},
  conexion_dor: {
    type: "string",
    enum: [
      "Dd0","Dd5","Dd11",
      "Dy0","Dy5","Dy11",
      "Dyn0","Dyn5","Dyn11",
      "Yd0","Yd5","Yd11",
      "Ynd0","Ynd5","Ynd11",
      "Yny0","Yny5","Yny11",
      "Ynyn0","Ynyn5","Ynyn11",
    ]
  },
  adfq_dor: si_no,
  pcb_dor: si_no,
  gases_dor: si_no,
  ttr_dor: si_no,
  prueba_dor: {
    type: "boolean"
  },
  prueba: {
    type: "object",
    properties: {
      at_tierra: {
        type: "number"
      },
      bt_tierra: {
        type: "number"
      },
      at_bt: {
        type: "number"
      },
      minutos: {
        type: "number"
      },
      valor: {
        type: "number"
      },
      diagnostico: {
        type: "string",
        enum: [
          "Aislamiento muy bueno",
          "Aislamiento bueno",
          "Aislamiento dudoso",
          "Aislamiento insuficiente",
        ]
      },
    }
  },
  observ_dor: {type: "string"},
};
const contadores = {
  num_celdas_cont: {
    type: "integer"
  },
  num_medidores_cont: {
    type: "integer"
  },
  tipo_medidores_cont: {
    type: "string"
  },
  marca_medidores_cont: {
    type: "string"
  },
  calibre_conductores_cont: {
    type: "string"
  },
  totalizador_cont: {
    type: "string"
  },
  observ_cont: {
    type: "string"
  },
};
const tablero = {
  nombre_tab: {
    type: "string"
  },
  capacidad_tab: {
    type: "string"
  },
  cortocircuito_tab: {
    type: "string"
  },
  marca_tab: {
    type: "string",
    enum: [
      "ABB",
      "Mitsubishi",
      "Siemens",
      "Schneider",
      "LS",
      "Chint",
      "Eaton",
      "Hyundai",
      "Lovato",
      "Otro"
    ]
  },
  protecciones_tab: {
    type: "integer"
  },
  tiene_dps_tab: si_no,
  dps_tab: {
    type: "string"
  },
  barrajes_tab: si_no,
  peligro_tab: si_no,
  observ_tab: {
    type: "string"
  }
};

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
      maxLength: 20
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
    // equipos: {
    //   type: "array",
    //   items: {
    //     type: "object",
    //     properties: {
    //       tipo: {
    //         type: "string",
    //         enum: equipos,
    //         // default: equipos[4]
    //       },
    //       cantidad: {
    //         type: "integer"
    //       },
    //     }
    //   }
    // }
    contadores: {
      type: "array",
      items: {
        type: "object",
        properties: contadores
      }
    },
    tablero: {
      type: "array",
      items: {
        type: "object",
        properties: tablero
      }
    },
    transformador: {
      type: "array",
      items: {
        type: "object",
        properties: transformador
      }
    },
    correccion: {
      type: "array",
      items: {
        type: "object",
        properties: correccion
      }
    },
    doble_tiro_primario: {
      type: "array",
      items: {
        type: "object",
        properties: doble_tiro_primario
      }
    },
    media_baja: {
      type: "array",
      items: {
        type: "object",
        properties: media_baja
      }
    },
    seccionador: {
      type: "array",
      items: {
        type: "object",
        properties: seccionador
      }
    },
    transferencia: {
      type: "array",
      items: {
        type: "object",
        properties: transferencia
      }
    },
    observ_generales: {
      type: "string"
    },
    mediaCapture: {
      type: "array",
      format: "media-capture",
    }
  }
};

export default {
    hv
};