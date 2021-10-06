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
import { Block } from "galio-framework";
import schema from '../assets/config/schemas';
import uiSchema from '../assets/config/uischemas';
import { Button } from "../components/";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("screen");
const initialData = {};
var tales = schema.hv
var uiTales = uiSchema.hv

function CreateReportScreen({ route, navigation }) {
  const { itemId, type, title } = route.params;
  navigation.setOptions({ title: type == 'new' ?  'Nuevo ' + title : title })
  console.log(itemId)
  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards()}
      </ScrollView>
    </Block>
  );
}

function handleSubmit(data) {
  storeData('reportes', data)
}

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@reporte_' + new Date().getTime(), jsonValue)
  } catch (e) {
    // saving error
  }
}

function renderCards() {
  const [data, setData] = useState(initialData);

  return (
    <form onSubmit={handleSubmit}>
      <JsonForms
        schema={tales}
        uischema={uiTales}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, _errors }) => setData(data)}
      />
      <Block right>
        <Button color="success" onPress={() => handleSubmit(data)}>
          GUARDAR
        </Button>
      </Block>
    </form>
  );
}

export default CreateReportScreen;
