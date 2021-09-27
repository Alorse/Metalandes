const si_no = {
  type: "string",
  enum: [
    "Sí",
    "No",
  ]
};
const correccion = {

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
      "Xikai"
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

};
const transformador = {

};
const contadores = {

};
const tablero_protecciones = {

};

const hv = {
  type: "object",
  required: [
    "indentificacion",
    "Fecha",
    "Ciudad",
    "Contacto",
    "Establecimiento",
  ],
  properties: {
    "indentificacion": {
      type: "number",
      minLength: 2,
      maxLength: 20
    },
    "Fecha": {
      type: "string",
      "format": "date"
    },
    "Ciudad": {
      type: "string",
      "minimum": 1,
      "maximum": 20
    },
    "Contacto": {
      type: "string"
    },
    "Establecimiento": {
      type: "string"
    },
    equipos: {
      type: "array",
      items: {
        type: "object",
        properties: {
          tipo: {
            type: "string",
            enum: [
              "CELDA CORRECCION DE F.P",
              "CELDA DOBLE TIRO PRIMARIO",
              "CELDA MEDIDA EN MEDIA O BAJA TENSIÓN",
              "CELDA SECCIONADOR",
              "CELDA TRANSFERENCIA",
              "CELDA TRANSFORMADOR DE POTENCIA",
              "CELDA CONTADORES",
              "TABLERO DE PROTECCIONES",
            ]
          },
         cantidad: {
            type: "integer"
          },
        }
      }
    },
    // doble_tiro_primario
    // marca_dtp: doble_tiro_primario.marca,
    // tipo_dtp: doble_tiro_primario.tipo,
    // cap_fus_hh_dtp: doble_tiro_primario.cap_fus_hh,
    // "NumeroCircuitoPreferencial": doble_tiro_primario['NumeroCircuitoPreferencial'],
    // "NumeroCircuitoEmergencia": doble_tiro_primario['NumeroCircuitoEmergencia'],
    // "TipoAccionamiento": doble_tiro_primario['TipoAccionamiento'],
    // estado_dtp: doble_tiro_primario.estado,
    // "MarcaRele": doble_tiro_primario['MarcaRele'],
    // "VoltajeAlto": doble_tiro_primario['VoltajeAlto'],
    // "VoltajeBajo": doble_tiro_primario['VoltajeBajo'],
    // "TensionDeControl": doble_tiro_primario['TensionDeControl'],
    // ano_fabricacion_dtp: doble_tiro_primario.ano_fabricacion,
    // observ_dtp: doble_tiro_primario.observ,
    // //Seccionador
    // marca_seccionador: seccionador.marca,
    // tipo_seccionador: seccionador.tipo,
    // cap_fus_hh_seccionador: seccionador.cap_fus_hh,
    // cuchillas_seccionador: seccionador.cuchillas,
    // numero_serie_seccionador: seccionador.numero_serie,
    // referencia_seccionador: seccionador.referencia,
    // palanca_seccionador: seccionador.palanca,
    // ano_fabricacion_seccionador: seccionador.ano_fabricacion,
    // inom_seccionador: seccionador.inom,
    // vnom_seccionador: seccionador.vnom,
    // observ_seccionador: seccionador.observ
  }
};

export default {
    hv,
    doble_tiro_primario,
    seccionador,
    media_baja
};