import React, {useState} from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import {
    materialRenderers,
    materialCells
  } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import { Block, theme } from "galio-framework";
import schema from '../assets/config/schemas';
import uiSchema from '../assets/config/uischemas';

const { width, height } = Dimensions.get("screen");
const data = {
  fecha: new Date(),
  equipos: [
    {
      tipo: "CELDA SECCIONADOR",
      cantidad: 1,
    }
  ]
};
var tales = schema.hv
var uiTales = uiSchema.hv

function CreateReportScreen() {
  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards()}
      </ScrollView>
    </Block>
  );
}

function getDataForm(data) {
  var equipos = {};
  if(data.equipos.length > 0) {
    equipos = data.equipos
    // Reset Forms
    uiTales.elements[1].elements = []
    equipos.map((equipo) => {
      if(equipo.tipo !== undefined) {
        renderEquipos(equipo, "CELDA CONTADORES", schema.contadores, uiSchema.contadores)
        renderEquipos(equipo, "CELDA CORRECCION DE F.P", schema.correccion, uiSchema.correccion)
        renderEquipos(equipo, "CELDA DOBLE TIRO PRIMARIO", schema.doble_tiro_primario, uiSchema.doble_tiro_primario)
        renderEquipos(equipo, "CELDA MEDIDA EN MEDIA O BAJA TENSIÓN", schema.media_baja, uiSchema.media_baja)
        renderEquipos(equipo, "CELDA SECCIONADOR", schema.seccionador, uiSchema.seccionador)
        renderEquipos(equipo, "CELDA TRANSFORMADOR DE POTENCIA", schema.transformador, uiSchema.transformador)
        renderEquipos(equipo, "CELDA TRANSFERENCIA", schema.transferencia, uiSchema.transferencia)
        renderEquipos(equipo, "TABLERO DE PROTECCIONES", schema.tablero, uiSchema.tablero)
      }
    })
  }
}

function renderEquipos(equipo, type, shema, uiShema) {
  var cantidad = 0
  cantidad = equipo.cantidad !== undefined ? equipo.cantidad : 0
  if(equipo.tipo == type) {
    for(var i=0; i < cantidad; i++) {
      tales.properties = {...tales.properties, ...shema}
      uiTales.elements[1].elements.push(uiShema)
    }
  }
}

function fillScope(uiShema, slug, pos) {
  uiShema.elements.map((element) => {
    element.elements.map((ele) => {
      ele.scope = '#properties/' + slug + '/' + pos + '/' + ele.slug
    })
  })
  return uiShema
}

function renderCards() {
  // const [data, setData] = useState(data);

  return (
    <JsonForms
      schema={tales}
      uischema={uiTales}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data, _errors }) => getDataForm(data)}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
  },
  content: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    textAlign: 'justify'
  },
});
const styleContextValue = { styles: [
  {
    name: 'control.input',
    classNames: ['custom-input']
  },
  {
    name: 'array.input[type=integer]',
    classNames: ['custom-array-button']
  }
]};

export default CreateReportScreen;
