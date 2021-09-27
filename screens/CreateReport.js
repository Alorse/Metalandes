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
import { JsonFormsStyleContext } from '@jsonforms/vanilla-renderers';

const { width, height } = Dimensions.get("screen");
const data = {
  "Equipos": [
  {
    "Equipo": "CELDA SECCIONADOR",
    "Cantidad": 1,
  }
]};

function CreateReportScreen() {
  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards()}
      </ScrollView>
    </Block>
  );
}

function renderCards() {
  const [data2, setData] = useState();
  return (
    <JsonFormsStyleContext.Provider value={styleContextValue}>
      <JsonForms
        schema={schema.hv}
        uischema={uiSchema.hv}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, _errors }) => setData(data)}
      />
    </JsonFormsStyleContext.Provider>
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
