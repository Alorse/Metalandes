import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import {
    materialRenderers,
    materialCells
  } from '@jsonforms/material-renderers';
import { RNCells, RNRenderers } from "../jsonforms";
import { JsonForms } from '@jsonforms/react';
import { Block } from "galio-framework";
import schemaRoot from '../assets/config/schemas';
import uiSchemaRoot from '../assets/config/uischemas';
import { Button } from "../components/";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import Ajv from "ajv"
import MediaCaptureControl, {
  MediaCaptureControlTester,
} from "../components/Upload/MediaCaptureControl";

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: MediaCaptureControlTester, renderer: MediaCaptureControl },
];


const initialData = {};
var schema = schemaRoot.hv
var uiSchema = uiSchemaRoot.hv
var flag = true
var item_id = null

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
ajv.addFormat('media-capture', {
  type: 'string'
})

function CreateReportScreen({ route, navigation }) {
  const { itemId, type, title } = route.params;
  item_id = itemId;
  
  useEffect(() => {
    navigation.setOptions({ title: type == 'new' ?  'Nuevo ' + title : title })
  });


  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards(itemId, navigation)}
      </ScrollView>
    </Block>
  );
}

function handleSubmit(data) {
  const validate = ajv.compile(schema)
  const valid = validate(data)
  if (!valid) {
    return false
  } else {
    storeData(data)
    return true
  }
}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    let key = item_id ? item_id : '@reporte_' + new Date().getTime()
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}

function renderCards(itemId, navigation) {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [successful, setSuccessful] = useState(false);
  if (itemId) {
    setTimeout(function(){
      if (flag){
        getReport()
      }
      flag = false
    }, 10)
  }
  const getReport = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem(itemId)
      jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null
      setData(jsonValue)
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }

  const handleClickOpen = () => {
    setSuccessful(handleSubmit(data))
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (successful){
      navigation.navigate('Reportes', { type: 'Mantenimiento' })
    }
  };

  const JsonFormOnChange = (data) => {
    console.log(data);
    setData(data)
  };
  
  return (
    <>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={({ data, _errors }) => JsonFormOnChange(data)}
        ajv={ajv}
      />
      <Block right>
        <Button color="success" onPress={handleClickOpen}>
          {itemId ? 'ACTUALIZAR' : 'GUARDAR'}
        </Button>
      </Block>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {successful ? "Reporte guardado con exito!" : "Tienes campos obligatorios sin completar"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onPress={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CreateReportScreen;
