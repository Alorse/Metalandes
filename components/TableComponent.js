import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from "react-native";
import schemaRoot from '../assets/config/schemas';
import "./table.css"

class TableComponent extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.item,
      data: {},
      equipos: schemaRoot.equipos,
      numGabinetes: 0
    };
  }

  componentDidMount() {
      this.getReport()
  }

  getReport = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem(this.state.itemId)
      jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null
      this.setState({data: jsonValue})
      this.gabinetesCount()
      console.log('async', this.state)
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }
  
  gabinetesCount() {
      var count = 0
      var gabinetes = this.state.data
      if (gabinetes.correccion) count = count + gabinetes.correccion.length
      if (gabinetes.doble_tiro_primario) count = count + gabinetes.doble_tiro_primario.length
      if (gabinetes.media_baja) count = count + gabinetes.media_baja.length
      if (gabinetes.seccionador) count = count + gabinetes.seccionador.length
      if (gabinetes.transferencia) count = count + gabinetes.transferencia.length
      if (gabinetes.transformador) count = count + gabinetes.transformador.length
      if (gabinetes.contadores) count = count + gabinetes.contadores.length
      if (gabinetes.tablero) count = count + gabinetes.tablero.length

      this.setState({numGabinetes: count})
  }

  render() {
    return this.state.data && <Child 
        data={this.state.data}
        equipos={this.state.equipos}
        numGabinetes={this.state.numGabinetes}
        />
  }
}

const { width } = Dimensions.get("screen");

const Child = ({data, equipos, numGabinetes}) => (
  <>
    <div className="table" style={{width: width-20}}>
        <section className="thead vertical">
            <span>HOJA DE VIDA SUBESTACIÓN ELÉCTRICA</span>
        </section>
        <section className="tbody">
          <div className="row vertical">
              <div className="col-30"><span>Identificación</span> {data.identificacion}</div>
              <div className="col-30"><span>Fecha</span> {data.fecha}</div>
              <div className="col-30 no-border"><span>Ciudad</span> {data.ciudad}</div>
          </div>
          <div className="row vertical">
              <div className="col-100"><span>Contacto</span> {data.contacto}</div>
          </div>
          <div className="row vertical">
              <div className="col-100"><span>Establecimiento</span> {data.establecimiento}</div>
          </div>
          <div className="row vertical uppercase">
              <div className="col-100 center height-auto">Gabinetes que componen la subestación ({numGabinetes})</div>
          </div>
          <div className="row vertical uppercase">
              <div className="col-100 height-auto">
                <ol type="1">
                    {data.doble_tiro_primario && <li>{equipos[2]} ({data.doble_tiro_primario.length})</li>}
                    {data.correccion && <li>{equipos[1]} ({data.correccion.length})</li>}
                    {data.media_baja && <li>{equipos[3]} ({data.media_baja.length})</li>}
                    {data.seccionador && <li>{equipos[4]} ({data.seccionador.length})</li>}
                    {data.transferencia && <li>{equipos[5]} ({data.transferencia.length})</li>}
                    {data.transformador && <li>{equipos[6]} ({data.transformador.length})</li>}
                    {data.contadores && <li>{equipos[0]} ({data.contadores.length})</li>}
                    {data.tablero && <li>{equipos[7]} ({data.tablero.length})</li>}
                </ol>
              </div>
          </div>
          <div className="row vertical uppercase">
            <div className="col-100 center height-auto">
              Observaciones generales
              <p>{data.observ_generales}</p>
            </div>
          </div>
          {
            data.fotos_generales && 
            (
              <>
                {data.fotos_generales.map((item, i) => {
                  return (<img  key={i} src={item} className="foto" />)
                })}
              </>
            )
          }
        </section>
    </div>
    {
      data.doble_tiro_primario && 
      (
        <>
          {data.doble_tiro_primario.map((item) => {
            return (
              <div className="table" style={{width: width-20}} key={item.id_cont}>
                <section className="thead vertical">
                    <span className="uppercase">{equipos[2]} ({item.id_dtp})</span>
                </section>
                <section className="tbody">
                  <div className="row vertical">
                      <div className="col-30"><span>Marca</span> {item.marca_dtp}</div>
                      <div className="col-30"><span>Tipo</span> {item.tipo_dtp}</div>
                      <div className="col-30 no-border"><span>Cap. Fusibles HH</span> {item.cap_fus_hh_dtp}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>N° circuito preferencial</span> {item.NumeroCircuitoPreferencial}</div>
                      <div className="col-50 no-border"><span>N° circuito emergencia</span> {item.NumeroCircuitoEmergencia}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>Tipo Accionamiento</span> {item.TipoAccionamiento}</div>
                      <div className="col-50 no-border"><span>Estado</span> {item.estado_dtp}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-30"><span>Marca relé 27/59 y/o PLC</span> {item.MarcaRele}</div>
                      <div className="col-30"><span>Voltaje alto</span> {item.VoltajeAlto}</div>
                      <div className="col-30 no-border"><span>Voltaje bajo</span> {item.VoltajeBajo}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>Tensión de Control</span> {item.TensionDeControl}</div>
                      <div className="col-50 no-border"><span>Año de fabricación</span> {item.ano_fabricacion_dtp}</div>
                  </div>
                  <div className="row vertical uppercase">
                      <div className="col-100 center height-auto">
                        Observaciones generales
                        <p>{item.observ_dtp}</p>
                      </div>
                  </div>
                </section>
              </div>
            )
          })}
        </>
      )
    }
    {
      data.correccion && 
      (
        <>
          {data.correccion.map((item) => {
            return (
              <div className="table" style={{width: width-20}} key={item.id_corre}>
                <section className="thead vertical">
                    <span className="uppercase">{equipos[0]} ({item.id_corre})</span>
                </section>
                <section className="tbody">
                  <div className="row vertical">
                      <div className="col-50"><span>Marca Relé</span> {item.marca_rele_corre}</div>
                      <div className="col-50 no-border"><span>Referencia</span> {item.referencia_corre}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>Totalizador</span> {item.totalizador_corre}</div>
                      <div className="col-50 no-border"><span>Factor de P</span> {item.factor_corre}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>N° Bancos Fijos</span> {item.bancos_fijos_corre}</div>
                      <div className="col-50 no-border"><span>N° Bancos Móviles</span> {item.bancos_moviles_corre}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>Calibre conductores</span> {item.calibre_corre}</div>
                      <div className="col-50 no-border"><span>Relación TC</span> {item.relacion_corre}</div>
                  </div>
                  <div className="row vertical uppercase">
                      <div className="col-100 center height-auto">
                        Observaciones generales
                        <p>{item.observ_corre}</p>
                      </div>
                  </div>
                </section>
              </div>
            )
          })}
        </>
      )
    }
    {
      data.media_baja && 
      (
        <>
          {data.media_baja.map((item) => {
            return (
              <div className="table" style={{width: width-20}} key={item.id_mb}>
                <section className="thead vertical">
                    <span className="uppercase">{equipos[3]} ({item.id_mb})</span>
                </section>
                <section className="tbody">
                  <div className="row vertical">
                    <div className="col-100"><span>Tipo De Celda De Medida</span> {item.tipo_mb}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-30"><span>Marca Medidor</span> {item.marca_medidor_md}</div>
                      <div className="col-30"><span>Referencia</span> {item.referencia_mb}</div>
                      <div className="col-30 no-border"><span>Marca TCs & TPs</span> {item.marca_tc_tp_mb}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-30"><span>N° de TC1</span> {item.num_tc1_mb}</div>
                      <div className="col-30"><span>N° de TC2</span> {item.num_tc2_mb}</div>
                      <div className="col-30 no-border"><span>N° de TC3</span> {item.num_tc3_mb}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-100"><span>Relación de Transformación</span> {item.rel_trans_tc_mb}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-30"><span>N° de TP1</span> {item.num_tp1_mb}</div>
                      <div className="col-30"><span>N° de TP2</span> {item.num_tp2_mb}</div>
                      <div className="col-30 no-border"><span>N° de TP3</span> {item.num_tp3_mb}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-100"><span>Relación de Transformación</span> {item.rel_trans_tp_mb}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-100"><span>Constante o factor de multiplicación</span> {item.mult_mb}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>Año de fabricación</span> {item.ano_fabricacion_mb}</div>
                      <div className="col-50 no-border"><span>Calibre de las Fases</span> {item.calibre_mb}</div>
                  </div>
                  <div className="row vertical uppercase">
                      <div className="col-100 center height-auto">
                        Observaciones generales
                        <p>{item.observ_mb}</p>
                      </div>
                  </div>
                </section>
              </div>
            )
          })}
        </>
      )
    }
    {
      data.seccionador && 
      (
        <>
          {data.seccionador.map((item) => {
            return (
              <div className="table" style={{width: width-20}} key={item.id_seccionador}>
                <section className="thead vertical">
                    <span className="uppercase">{equipos[4]} ({item.id_seccionador})</span>
                </section>
                <section className="tbody">
                  <div className="row vertical">
                      <div className="col-30"><span>Marca</span> {item.marca_seccionador}</div>
                      <div className="col-30"><span>Tipo</span> {item.tipo_seccionador}</div>
                      <div className="col-30 no-border"><span>Cap. Fusibles HH</span> {item.cap_fus_hh_seccionador}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>Referencia</span> {item.referencia_seccionador}</div>
                      <div className="col-50 no-border"><span>N° de serie del seccionador</span> {item.numero_serie_seccionador}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-50"><span>Posee cuchillas de puesta tierra</span> {item.cuchillas_seccionador}</div>
                      <div className="col-50 no-border"><span>Posee palanca de accionamiento</span> {item.palanca_seccionador}</div>
                  </div>
                  <div className="row vertical">
                      <div className="col-30"><span>Año de Fabricación</span> {item.ano_fabricacion_seccionador}</div>
                      <div className="col-30"><span>Inom (A)</span> {item.inom_seccionador}</div>
                      <div className="col-30 no-border"><span>Vnom (KV)</span> {item.vnom_seccionador}</div>
                  </div>
                  <div className="row vertical uppercase">
                      <div className="col-100 center height-auto">
                        Observaciones generales
                        <p>{item.observ_seccionador}</p>
                      </div>
                  </div>
                </section>
              </div>
            )
          })}
        </>
      )
    }
    {
      data.transferencia && 
      (
        <>
          {data.transferencia.map((item) => {
            return (
              <div className="table" style={{width: width-20}} key={item.id_cia}>
              <section className="thead vertical">
                <span className="uppercase">{equipos[5]} ({item.id_cia})</span>
              </section>
              <section className="tbody">
                <div className="row vertical">
                  <div className="col-50"><span>Marca</span> {item.marca_cia}</div>
                  <div className="col-50 no-border"><span>Tipo</span> {item.tipo_cia}</div>
                </div>
                <div className="row vertical">
                  <div className="col-50"><span>Capacidad</span> {item.capacidad_cia}</div>
                  <div className="col-50 no-border"><span>Estado</span> {item.estado_cia}</div>
                </div>
                <div className="row vertical">
                  <div className="col-100"><span>Posee distribución</span> {item.distribucion_cia}</div>
                </div>
                {item.rele_2759_cia && (
                  <>
                    <div className="row vertical uppercase">
                      <div className="col-100 center height-auto">Relé de transferencia 27/59</div>
                    </div>
                    <div className="row vertical">
                      <div className="col-50"><span>Marca</span> {item.rele_2759_cia ? item.rele_2759_cia.marca : ''}</div>
                      <div className="col-50 no-border"><span>Referencia</span> {item.rele_2759_cia ? item.rele_2759_cia.referencia : ''}</div>
                    </div>
                  </>
                )}
                {item.rele_81_cia && item.posee_rele_81_cia == "Sí" && (
                  <>
                    <div className="row vertical uppercase">
                      <div className="col-100 center height-auto">Relé 81</div>
                    </div>
                    <div className="row vertical">
                      <div className="col-50"><span>Marca</span> {item.rele_81_cia ? item.rele_81_cia.marca : ''}</div>
                      <div className="col-50 no-border"><span>Referencia</span> {item.rele_81_cia ? item.rele_81_cia.referencia : ''}</div>
                    </div>
                  </>
                )}
                <div className="row vertical">
                  <div className="col-100"><span>Calibre conductores</span> {item.calibre_conductores_cia}</div>
                </div>
                <div className="row vertical uppercase">
                  <div className="col-100 center height-auto">
                    Observaciones generales
                    <p>{item.observ_cia}</p>
                  </div>
                </div>
              </section>
            </div>
            )
          })}
        </>
      )
    }
    {
      data.transformador && 
      (
        <>
          {data.transformador.map((item) => {
            return (
              <div className="table" style={{width: width-20}} key={item.id_dor}>
              <section className="thead vertical">
                  <span className="uppercase">{equipos[6]} ({item.id_dor})</span>
              </section>
              <section className="tbody">
                <div className="row vertical">
                  <div className="col-30"><span>Marca</span> {item.marca_dor}</div>
                  <div className="col-30"><span>Tipo</span> {item.tipo_dor}</div>
                  <div className="col-30 no-border"><span>Relación de transformación</span> {item.rel_trans_dor}</div>
                </div>
                <div className="row vertical">
                  <div className="col-30"><span>Capacidad</span> {item.capacidad_dor}</div>
                  <div className="col-30"><span>Número EPM</span> {item.num_epm_dor}</div>
                  <div className="col-30 no-border"><span>Número de serie</span> {item.num_serie_dor}</div>
                </div>
                <div className="row vertical">
                  <div className="col-50"><span>Capacidad totalizador y corriente de Cortocircuito</span> {item.capacidad_tot_dor}</div>
                  <div className="col-50 no-border"><span>Icc</span> {item.icc_dor}</div>
                </div>
                <div className="row vertical">
                  <div className="col-50"><span>Calibre conductores en baja tensión</span> {item.calibre_baja_dor}</div>
                  <div className="col-50 no-border"><span>Calibre conductores en media tensión</span> {item.calibre_media_dor}</div>
                </div>
                <div className="row vertical">
                  <div className="col-30"><span>Posee foso (aplica trf aceite)</span> {item.foso_dor}</div>
                  <div className="col-30"><span>Posee DPS o pararrayos en el lado de alta</span> {item.dps_alta_dor}</div>
                  <div className="col-30 no-border"><span>Posee DPS o pararrayos en el lado de baja</span> {item.dps_baja_dor}</div>
                </div>
                <div className="row vertical">
                  <div className="col-30"><span>Año fabricación</span> {item.ano_fabricacion_dor}</div>
                  <div className="col-30"><span>Peso (Kg)</span> {item.peso_dor}</div>
                  <div className="col-30 no-border"><span>Grupo Conexión</span> {item.conexion_dor}</div>
                </div>
                <div className="row vertical">
                  <div className="col-25"><span>ADFQ</span> {item.adfq_dor}</div>
                  <div className="col-25"><span>PCB</span> {item.pcb_dor}</div>
                  <div className="col-25"><span>TTR</span> {item.ttr_dor}</div>
                  <div className="col-25 no-border width-auto"><span>Cromatografía de gases</span> {item.gases_dor}</div>
                </div>
                {/* <div className="row vertical">
                  <div className="col-100"><span>Prueba de aislamiento e índice de polarización</span> {item.prueba_dor}</div>
                </div> */}
                <div className="row vertical uppercase">
                  <div className="col-100 center height-auto">
                    Observaciones generales
                    <p>{item.observ_dor}</p>
                  </div>
                </div>
                {item.prueba_dor == true && (
                  <>
                    <div className="table small">
                      <section className="thead vertical">
                        <span>Parámetros a tener en cuenta en la prueba de aislamiento.</span>
                      </section>
                      <section className="tbody">
                        <div className="row vertical">
                          <div className="col-50">Valor del índice de polarización P1</div>
                          <div className="col-50 no-border">Diagnóstico</div>
                        </div>
                        <div className="row vertical">
                          <div className="col-50"><span>{"P1 > 4"}</span></div>
                          <div className="col-50 no-border"><span>Aislamiento muy bueno</span></div>
                        </div>
                        <div className="row vertical">
                          <div className="col-50"><span>{"1.5 < P < 4"}</span></div>
                          <div className="col-50 no-border"><span>Aislamiento bueno</span></div>
                        </div>
                        <div className="row vertical">
                          <div className="col-50"><span>{"1 < P1 < 1.5"}</span></div>
                          <div className="col-50 no-border"><span>Aislamiento dudoso</span></div>
                        </div>
                        <div className="row vertical">
                          <div className="col-50"><span>{"P1 < 1"}</span></div>
                          <div className="col-50 no-border"><span>Aislamiento insuficiente</span></div>
                        </div>
                      </section>
                    </div>
                    <div className="table small">
                      <section className="thead vertical">
                        <span>Reporte de pruebas</span>
                      </section>
                      <section className="tbody">
                        <div className="row vertical">
                          <div className="col-50"><span>(GΩ) AT-Tierra</span> {item.prueba.at_tierra}</div>
                          <div className="col-50 no-border"><span>(GΩ) BT-Tierra</span> {item.prueba.bt_tierra}</div>
                        </div>
                        <div className="row vertical">
                          <div className="col-50"><span>(GΩ) AT-BT</span> {item.prueba.at_bt}</div>
                          <div className="col-50 no-border"><span>AT-BT (MΩ) 10 minutos</span> {item.prueba.minutos}</div>
                        </div>
                        <div className="row vertical">
                          <div className="col-50"><span>Valor índice de polarización</span> {item.prueba.valor}</div>
                          <div className="col-50 no-border"><span>Diagnóstico</span> {item.prueba.diagnostico}</div>
                        </div>
                      </section>
                    </div>
                  </>
                )}
              </section>
            </div>
            )
          })}
        </>
      )
    }
    {
      data.contadores && 
      (
        <>
          {data.contadores.map((item) => {
            return (
              <div className="table" style={{width: width-20}} key={item.id_cont}>
                <section className="thead vertical">
                    <span className="uppercase">{equipos[0]} ({item.id_cont})</span>
                </section>
                <section className="tbody">
                  <div className="row vertical">
                    <div className="col-50"><span>N° Celdas de Medidores</span> {item.num_celdas_cont}</div>
                    <div className="col-50 no-border"><span>N° Medidores por tablero</span> {item.num_medidores_cont}</div>
                  </div>
                  <div className="row vertical">
                    <div className="col-100"><span>Tipo de Medidores y capacidad</span> {item.tipo_medidores_cont}</div>
                  </div>
                  <div className="row vertical">
                    <div className="col-100"><span>Marca de los medidores</span> {item.marca_medidores_cont}</div>
                  </div>
                  <div className="row vertical">
                    <div className="col-100"><span>Calibre conductores</span> {item.calibre_conductores_cont}</div>
                  </div>
                  <div className="row vertical">
                    <div className="col-100"><span>Totalizador principal de cada celda</span> {item.totalizador_cont}</div>
                  </div>
                  <div className="row vertical uppercase">
                    <div className="col-100 center height-auto">
                      Observaciones generales
                      <p>{item.observ_cont}</p>
                    </div>
                  </div>
                </section>
              </div>
            )
          })}
        </>
      )
    }
    {
      data.tablero && 
      (
        <>
          {data.tablero.map((item) => {
            return (
              <div className="table" style={{width: width-20}} key={item.nombre_tab}>
              <section className="thead vertical">
                  <span className="uppercase">{equipos[7]} ({item.nombre_tab})</span>
              </section>
              <section className="tbody">
                <div className="row vertical">
                  <div className="col-50"><span>Capacidad totalizador</span> {item.capacidad_tab}</div>
                  <div className="col-50 no-border"><span>I cortocircuito</span> {item.cortocircuito_tab}</div>
                </div>
                <div className="row vertical">
                  <div className="col-50"><span>Marca</span> {item.marca_tab}</div>
                  <div className="col-50 no-border"><span>N° de protecciones en el tablero</span> {item.protecciones_tab}</div>
                </div>
                <div className="row vertical">
                  <div className="col-100"><span>Posee DPS</span> {item.tiene_dps_tab}</div>
                </div>
                {item.tiene_dps_tab == 'Sí' && (
                  <div className="row vertical">
                    <div className="col-100"><span>Especificaciones DPS</span> {item.dps_tab}</div>
                  </div>
                )}
                <div className="row vertical">
                  <div className="col-50"><span>Posee protección de barrajes (lamina de policarbonato u otras)</span> {item.barrajes_tab}</div>
                  <div className="col-50 no-border"><span>Existe marcación de peligro (calcomanía rayo)</span> {item.peligro_tab}</div>
                </div>
                <div className="row vertical uppercase">
                      <div className="col-100 center height-auto">
                        Observaciones generales
                        <p>{item.observ_tab}</p>
                      </div>
                  </div>
              </section>
            </div>
            )
          })}
        </>
      )
    }
  </>
);

export default TableComponent;