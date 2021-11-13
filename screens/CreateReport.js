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
import schemaRutina from '../assets/config/schemas_rutina';
import schemaServicio from '../assets/config/schemas_servicio';
import uiSchemaRoot from '../assets/config/uischemas';
import uiSchemaRutina from '../assets/config/uischemas_rutina';
import uiSchemaServicio from '../assets/config/uischemas_servicio';
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
import { HeaderBackButton } from '@react-navigation/elements';

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: MediaCaptureControlTester, renderer: MediaCaptureControl },
];


const initialData = {};
var schema = schemaRoot.hv
var uiSchema = uiSchemaRoot.hv
var schema_rutina = schemaRutina.rutina
var uiSchema_rutina = uiSchemaRutina.hv
var schema_servicio = schemaServicio.hv
var uiSchema_servicio = uiSchemaServicio.hv
var flag = true
var item_id = null
var type_ = null

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
ajv.addFormat('media-capture', {
  type: 'string'
})

function CreateReportScreen({ route, navigation }) {
  const { itemId, mode, type, title } = route.params;
  item_id = itemId;
  type_ = type;
  
  useEffect(() => {
    navigation.setOptions({ 
      title: mode == 'new' ?  'Nuevo ' + type : title,
      headerLeft: (props) => (
        <HeaderBackButton
          {...props}
          onPress={() => {
            if (itemId) {
              window.location.reload();
            } else {
              navigation.goBack()
            }
          }}
        />
      ),
    })
  });


  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards(itemId, type, navigation)}
      </ScrollView>
    </Block>
  );
}

function handleSubmit(data) {
  var schemaType = schema
  if (type_ == 'Rutina'){
    schemaType = schema_rutina
  }
  if (type_ == 'Servicio') {
    schemaType = schema_servicio
  }
  const validate = ajv.compile(schemaType)
  const valid = validate(data)
  if (!valid) {
    return false
  } else {
    storeData(data)
    return true
  }
}

const storeData = async (value) => {
  let fkey = type_ == 'Servicio' ? '@servicio_' : type_ == 'Rutina' ? '@rutina_' : '@reporte_'
  try {
    const jsonValue = JSON.stringify(value)
    let key = item_id ? item_id : fkey + new Date().getTime()
    await AsyncStorage.setItem(key, jsonValue)
    console.log(jsonValue)
  } catch (e) {
    // saving error
    console.log(e)
    console.log("Local Storage is full, Please empty data");
  }
}

function renderCards(itemId, type, navigation) {
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
    if (itemId && successful) {
      setTimeout(() => {
        window.location.reload();
      }, 700)
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (successful){
      navigation.navigate('Reportes', { type: 'Mantenimiento' })
    }
  };

  const JsonFormOnChange = (data) => {
    console.log(data)
    setData(data)
  };

  var schemaType = schema
  var uiSchemaType = uiSchema
  if (type == 'Rutina'){
    schemaType = schema_rutina
    uiSchemaType = uiSchema_rutina
  }
  if (type == 'Servicio') {
    schemaType = schema_servicio
    uiSchemaType = uiSchema_servicio
  }
  
  return (
    <>
      <JsonForms
        schema={schemaType}
        uischema={uiSchemaType}
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
            {successful ? "Guardado con exito!" : "Tienes campos obligatorios sin completar"}
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
