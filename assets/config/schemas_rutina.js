import schemaBase from './schemas';

var rutina = JSON.parse(JSON.stringify(schemaBase.hv))

const inspeccion = {
  type: "string",
  enum: [
    "Visual",
    "Operativa",
  ]
}
const estado = {
  type: "string",
  enum: [
    "Bueno",
    "Regular",
    "Inoperativo",
  ]
}
const sellos = {
  type: "string",
  enum: [
    "Buenos",
    "Algunos ausentes",
    "Sin sellos",
  ]
}
const si_no = {
  type: "string",
  enum: [
    "Sí",
    "No",
  ]
}

const number = {type: "number"}

// CELDA DOBLE TIRO PRIMARIO 
// Add
rutina.properties.doble_tiro_primario.items.properties.inspeccion_dtp = inspeccion
// Remove
delete rutina.properties.doble_tiro_primario.items.properties.TipoAccionamiento
delete rutina.properties.doble_tiro_primario.items.properties.MarcaRele
delete rutina.properties.doble_tiro_primario.items.properties.VoltajeAlto
delete rutina.properties.doble_tiro_primario.items.properties.VoltajeBajo
delete rutina.properties.doble_tiro_primario.items.properties.TensionDeControl
delete rutina.properties.doble_tiro_primario.items.properties.ano_fabricacion_dtp

// CELDA SECCIONADOR
// Add
rutina.properties.seccionador.items.properties.inspeccion_seccionador = inspeccion
rutina.properties.seccionador.items.properties.estado_seccionador = estado
// Remove
delete rutina.properties.seccionador.items.properties.cap_fus_hh_seccionador
delete rutina.properties.seccionador.items.properties.cuchillas_seccionador
delete rutina.properties.seccionador.items.properties.numero_serie_seccionador
delete rutina.properties.seccionador.items.properties.referencia_seccionador
delete rutina.properties.seccionador.items.properties.ano_fabricacion_seccionador
delete rutina.properties.seccionador.items.properties.inom_seccionador
delete rutina.properties.seccionador.items.properties.vnom_seccionador


// CELDA MEDIDA EN MEDIA O BAJA TENSION
// Add
// rutina.properties.media_baja.items.properties.inspeccion_mb = inspeccion
rutina.properties.media_baja.items.properties.estado_mb = estado
rutina.properties.media_baja.items.properties.sellos_mb = sellos
// Remove
delete rutina.properties.media_baja.items.properties.marca_tc_tp_mb
delete rutina.properties.media_baja.items.properties.num_tc1_mb
delete rutina.properties.media_baja.items.properties.num_tc2_mb
delete rutina.properties.media_baja.items.properties.num_tc3_mb
delete rutina.properties.media_baja.items.properties.rel_trans_tc_mb
delete rutina.properties.media_baja.items.properties.num_tp1_mb
delete rutina.properties.media_baja.items.properties.num_tp2_mb
delete rutina.properties.media_baja.items.properties.num_tp3_mb
delete rutina.properties.media_baja.items.properties.rel_trans_tp_mb
delete rutina.properties.media_baja.items.properties.mult_mb
delete rutina.properties.media_baja.items.properties.ano_fabricacion_mb
delete rutina.properties.media_baja.items.properties.calibre_mb

// TRANSFORMADOR DE POTENCIA 
// Add
rutina.properties.transformador.items.properties.estado_dor = estado
rutina.properties.transformador.items.properties.equipotencializado_dor = si_no
// Remove
delete rutina.properties.transformador.items.properties.rel_trans_dor
delete rutina.properties.transformador.items.properties.num_serie_dor
delete rutina.properties.transformador.items.properties.capacidad_tot_dor
delete rutina.properties.transformador.items.properties.icc_dor
delete rutina.properties.transformador.items.properties.calibre_baja_dor
delete rutina.properties.transformador.items.properties.calibre_media_dor
delete rutina.properties.transformador.items.properties.ano_fabricacion_dor
delete rutina.properties.transformador.items.properties.dps_baja_dor
delete rutina.properties.transformador.items.properties.peso_dor
delete rutina.properties.transformador.items.properties.conexion_dor
delete rutina.properties.transformador.items.properties.adfq_dor
delete rutina.properties.transformador.items.properties.pcb_dor
delete rutina.properties.transformador.items.properties.pcb_dor
delete rutina.properties.transformador.items.properties.gases_dor
delete rutina.properties.transformador.items.properties.ttr_dor
delete rutina.properties.transformador.items.properties.prueba_dor
delete rutina.properties.transformador.items.properties.prueba

// CELDA TRANSFERENCIA
// Add
rutina.properties.transferencia.items.properties.inspeccion_cia = inspeccion
rutina.properties.transferencia.items.properties.estado_cia = estado
// Remove
delete rutina.properties.transferencia.items.properties.posee_rele_81_cia
delete rutina.properties.transferencia.items.properties.rele_81_cia
delete rutina.properties.transferencia.items.properties.calibre_conductores_cia

// CELDA CORRECCION DE F.P
// Add
rutina.properties.correccion.items.properties.num_trans_corre = {
  type: "string",
}
rutina.properties.correccion.items.properties.lista_corre = {
  type: "array",
  items: {
    type: "object",
    properties: {
      paso: {
        type: "string",
        enum: [
          "Fijo",
          "Móvil"
        ]
      },
      estado: estado,
      proteccion: {type: "string"},
      kvar: {
        type: "number",
        enum: [
          2, 2.5, 3, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100
        ]
      },
      ir: {type: "string"},
      is: {type: "string"},
      it: {type: "string"},
    }
  }
}
// Remove
delete rutina.properties.correccion.items.properties.bancos_fijos_corre
delete rutina.properties.correccion.items.properties.bancos_moviles_corre
delete rutina.properties.correccion.items.properties.bancos_moviles_corre
delete rutina.properties.correccion.items.properties.calibre_corre

// CELDA CONTADORES
// Add
rutina.properties.contadores.items.properties.sellos_cont = sellos
// Remove
delete rutina.properties.contadores.items.properties.calibre_conductores_cont

// TABLERO DE PROTECCIONES
// Add
rutina.properties.tablero.items.properties.vrs_tab = number
rutina.properties.tablero.items.properties.vst_tab = number
rutina.properties.tablero.items.properties.vtr_tab = number
rutina.properties.tablero.items.properties.vnt_tab = number
rutina.properties.tablero.items.properties.vrn_tab = number
rutina.properties.tablero.items.properties.vsn_tab = number
rutina.properties.tablero.items.properties.vtn_tab = number

rutina.properties.tablero.items.properties.transformador_tab = {type: "string"}
rutina.properties.tablero.items.properties.kva_tab = number

rutina.properties.tablero.items.properties.g_inom_tab = number
rutina.properties.tablero.items.properties.g_ir_tab = number
rutina.properties.tablero.items.properties.g_is_tab = number
rutina.properties.tablero.items.properties.g_it_tab = number
rutina.properties.tablero.items.properties.t_inom_tab = number
rutina.properties.tablero.items.properties.t_ir_tab = number
rutina.properties.tablero.items.properties.t_is_tab = number
rutina.properties.tablero.items.properties.t_it_tab = number
//delete rutina.properties.tablero

export default {
  rutina
};


