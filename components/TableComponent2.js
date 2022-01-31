import React from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  Dimensions,
  ActivityIndicator
 } from "react-native";
import { Block } from 'galio-framework';
import "./table.css"
import logo from '../assets/logo_doc.jpg';

var db = openDatabase('metalapp', '1.0', 'Metalandes App', 50 * 1024 * 1024); 
class TableComponent2 extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.item,
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
      this.getReport()
  }

  getReport = async () => {
    try {
      let jsonValue;
      var _this = this;
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM RECORDS WHERE key = ' + _this.state.itemId, [], function (tx, results) {
          jsonValue = decodeURI(results.rows.item(0).value)
          jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null
          _this.setState({data: jsonValue})
          _this.setState({loading: false})
        }, null); 
      });
      // jsonValue = await AsyncStorage.getItem(this.state.itemId)
      // jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null
      // this.setState({data: jsonValue})
      // this.gabinetesCount()
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }

  render() {
    return (<>
      <Block flex center>
        <ActivityIndicator size="large" animating={this.state.loading} />
      </Block>
      { !this.state.loading && <Child
        data={this.state.data}
        />}
    </>)
  }
}

const { width } = Dimensions.get("screen");

const Child = ({data}) => (
  <div>
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
          <div className="row vertical">
            <div className="col-100"><span>Asunto</span> {data.asunto}</div>
          </div>
        </section>
    </div>
    <div className="page-break" />
    <div className="table" style={{width: width-20}}>
      <section className="thead vertical">
          <span className="uppercase">TRABAJOS EJECUTADOS</span>
      </section>
      <section className="tbody">
        <div className="row vertical uppercase">
          <div className="col-100 center height-auto">
            <p>{data.trabajos}</p>
          </div>
        </div>
        <div className="row vertical">
        {
          data.fotos1 && 
          (
            <>
              {data.fotos1.map((item, i) => {
                return (
                  <div className="block border-bottom" key={'trabajo' + i}>
                    <div className="block center">
                    {item.imagen.map((imagen, j) => {
                      return (
                        <img key={'foto_' + j} src={imagen} className="foto" />
                      )
                    })}
                    </div>
                    <p className="center">{item.descripcion}</p>
                  </div>
                )
              })}
            </>
          )
        }
        </div>
      </section>
    </div>

    <div className="page-break" />
    <div className="table" style={{width: width-20}}>
      <section className="thead vertical">
          <span className="uppercase">CONSIDERACIONES GENERALES</span>
      </section>
      <section className="tbody">
        <div className="row vertical">
        {
          data.observ_generales && 
          (
            <ul>
              {data.observ_generales.map((item, i) => {
                return (
                  <>
                    <li className="col-100 center"  key={'li' + i}>
                      <span>{item.enunciado}</span>
                      {item.fotos && (
                        <>
                          <br />
                          {item.fotos.map((imagen, j) => {
                            return (
                              <img key={'obvs_' + j} src={imagen} className="foto" />
                            )
                          })}
                        </>
                      )}
                    </li>
                  </>
                )
              })}
            </ul>
          )
        }
        </div>
      </section>
    </div>
    <header>
      <div>
        <img src={logo} />
      </div>
    </header>
    <div className="signature">
      <div className="page-break" />
      <p>METALANDES S.A.S</p>
      <p>Tel (574) 4446153 Ext. 112</p>
      <p>Cel. 3106682128</p>
      <p>Email <a href="mailto:servicios@metalandes.com">servicios@metalandes.com</a>, <a href="mailto:servicios2@metalandes.com">servicios2@metalandes.com</a> </p>
      <p><a href="https://www.metalandes.com">www.metalandes.com</a></p>
    </div>
    <footer>
      <div>
        <hr className="s9" />
        <p className="center">CR. 53 # 29C 73 TEL.: (574) 235 00 28 FAX.: (574)235 59 88   MEDELLÍN COLOMBIA.</p>
        <p className="center"><a href="mailto:servicios@metalandes.com">servicios@metalandes.com</a> <a href="https://www.metalandes.com">www.metalandes.com</a></p>
      </div>
    </footer>
  </div>
);

export default TableComponent2;