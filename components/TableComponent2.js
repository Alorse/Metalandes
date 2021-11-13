import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from "react-native";
import schemaRoot from '../assets/config/schemas';
import "./table.css"

class TableComponent2 extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.item,
      data: {},
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
      console.log('async', this.state)
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }

  render() {
    return this.state.data && <Child 
        data={this.state.data}
        />
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
                  <>
                    <div className="col-100"><img  key={i} src={item.imagen} className="foto" /><span>{item.descripcion}</span></div>
                  </>
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
                    <li className="col-100">
                      <span>{item.enunciado}</span>
                      {item.fotos && (
                        <>
                          <br />
                          <img key={i} src={item.fotos} className="foto" />
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

  </div>
);

export default TableComponent2;