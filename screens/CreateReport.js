import React, {useEffect, useState} from "react";
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
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Ajv from "ajv"

const initialData = {};
var tales = schema.hv
var uiTales = uiSchema.hv
var flag = true
var item_id = null

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

function CreateReportScreen({ route, navigation }) {
  const { itemId, type, title } = route.params;
  item_id = itemId
  navigation.setOptions({ title: type == 'new' ?  'Nuevo ' + title : title })

  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards(itemId, navigation)}
      </ScrollView>
    </Block>
  );
}

function handleSubmit(data) {
  const validate = ajv.compile(schema.hv)
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
  // useEffect(() => {
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
        console.log('asd',jsonValue);
        setData(jsonValue)
      } catch(e) {
        // error reading value
        console.log(e)
      }
    }
  // }, [data, setData]);

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
  
  return (
    <>
      <JsonForms
        schema={tales}
        uischema={uiTales}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, _errors }) => setData(data)}
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
