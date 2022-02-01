import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import { Block, theme, Accordion, Text } from "galio-framework";
import { Button } from "../components/";
import MantenimientoExample from '../assets/config/example.json';
import RutinaExample from '../assets/config/example_rutina.json';
import RutinaExample2 from '../assets/config/example2.json';
import ServicioExample from '../assets/config/example_servicio.json';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

const { width, height } = Dimensions.get("screen");

var db = openDatabase('metalapp', '1.0', 'Metalandes App', 50 * 1024 * 1024); 

var data = [];
var type_ = null

const getAllKeys = async (navigation, setIData, setOpenBack) => {
  var state = navigation.getState()
  type_ = state.routes[1].params.type
  data = [] // Reset Object

  db.transaction(function (tx) {
    tx.executeSql('SELECT key, type, title, date, city, person, plant, observations FROM RECORDS WHERE type = "' + type_ + '"', [], function (tx, results) {
      var len = results.rows.length, i;
      for (i = 0; i < len; i++) {
        var title = results.rows.item(i).plant != "" ? decodeURI(results.rows.item(i).plant) : results.rows.item(i).title
        title = title + ' - ' + results.rows.item(i).date
        data.push({
          title: title,
          content: renderContent(
            navigation,
            results.rows.item(i),
            setOpenBack
          )
        })
      }
      setIData(data)
    }, null); 
  });
}

const storeExample = async () => {
  try {
    const jsonMantenimiento = JSON.stringify(MantenimientoExample)
    const jsonRutina = JSON.stringify(RutinaExample)
    const jsonRutina2 = JSON.stringify(RutinaExample2)
    const jsonServicio = JSON.stringify(ServicioExample)
    db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS RECORDS (key INTEGER PRIMARY KEY AUTOINCREMENT, type, title, date, observations, value TEXT)');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, city, person, plant, value) VALUES '
      + '(1, "Mantenimiento", "Mantenimiento de Prueba Full", "2021-12-10", "Esta es una prueba para tener un primer Mantenimiento creado cuando se inicializa la aplicación.", "Manizales", "Andrés Felipe Arias Lopéz", "Subestación Centro Cultural", "' + encodeURI(jsonMantenimiento) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, city, person, plant, value) VALUES '
      + '(2, "Rutina", "Rutina de Prueba Full", "2021-12-11", "Esta es una prueba para tener una primer Rutina creada cuando se inicializa la aplicación.", "Cali", "Andrés Felipe Arias Lopéz", "Subestación Centro Comercial", "' + encodeURI(jsonRutina) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, city, person, plant, value) VALUES '
      + '(4, "Rutina", "Rutina de Prueba 2", "2021-12-12", "Sabaneta", "Andrés Felipe Arias Lopéz", "Subestación Centro", "' + encodeURI(jsonRutina2) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, city, person, plant, value) VALUES '
      + '(3, "Servicio", "Servicio de Prueba Full", "2021-12-13", "Esta es una prueba para tener un primer Servicio creado cuando se inicializa la aplicación.", "Medellín", "Andrés Felipe Arias Lopéz", "Subestación Centro Monterrey", "' + encodeURI(jsonServicio) + '")');
    })
    db.transaction(function (tx) {
      tx.executeSql('ALTER TABLE RECORDS ADD COLUMN city TEXT NOT NULL DEFAULT ""');
      tx.executeSql('ALTER TABLE RECORDS ADD COLUMN person TEXT NOT NULL DEFAULT ""');
      tx.executeSql('ALTER TABLE RECORDS ADD COLUMN plant TEXT NOT NULL DEFAULT ""');
    })
  } catch (e) {
    // saving error
  }
}


function ReportScreen({ navigation }) {
  const [iData, setIData] = useState(null);
  var state = navigation.getState()
  const [openBack, setOpenBack] = useState([null, false]);
  storeExample()
  getAllKeys(navigation, setIData, setOpenBack)
  
  useEffect(() => {
    navigation.setOptions({ title: state.routes[1].params.type + 's' })
  });

  const handleCloseBack = (status) => {
    if (status[1]) {
      db.transaction(function (tx) {
        tx.executeSql(`DELETE FROM RECORDS WHERE key = ?`, [status[0]]);
        console.log('Delete ' + status[0])
        setOpenBack([null, false]);
      });
    } else {
      setOpenBack([null, false]);
    }
  };

  return (
    <Block flex center>
        <SafeAreaView style={{height:height-200}}>
          <Accordion 
            style={styles.accordion}
            headerStyle={styles.listitemheader}
            contentStyle={styles.listitemcontent}
            dataArray={iData} />
          <Block flex-end middle right>
            <Button
              round
              onlyIcon
              shadowless
              icon="plus"
              iconFamily="Font-Awesome"
              iconColor={theme.COLORS.WHITE}
              iconSize={theme.SIZES.BASE * 1.625}
              color="success"
              onPress={() => navigation.navigate('new', 
              {
                itemId: null,
                mode: 'new',
                type: state.routes[1].params.type
              }
              )}
            />
          </Block>
        </SafeAreaView>
      <ActivityIndicator size="large" animating={iData == null ? true : false} />
      <Dialog
        open={openBack[1]}
        onClose={() => handleCloseBack([null, false])}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estás seguro que quieres eliminar este {state.routes[1].params.type}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button small onPress={() => handleCloseBack([openBack[0], true])}>   Sí   </Button>
          <Button small color="default" onPress={() => handleCloseBack([null, false])}>   No   </Button>
        </DialogActions>
      </Dialog>
    </Block>
  );
}

function renderContent(navigation, item, setOpenBack) {
  var observ = item.observations ? item.observations : 'Sin Observaciones'
  var title = item.plant != "" ? decodeURI(item.plant) : item.title
  title = title + ' - ' + item.date
  var state = navigation.getState()
  const generateReport = () => {
    navigation.navigate('generate', 
    {
      itemId: item.key,
      title: title,
      type: state.routes[1].params.type,
    }
  )
  }

  const editReport = () => {
    var state = navigation.getState()
    navigation.navigate('new', 
      {
        itemId: item.key,
        mode: 'edit',
        type: state.routes[1].params.type,
        title: title
      }
    )
  }

  const deleteReport = () => {
    setOpenBack([item.key, true])
  }
  
  return (
    <Block style={styles.itemContent}>
      <Text><strong>Indentificación</strong>: {decodeURI(item.title)}</Text>
      <Text><strong>Contacto</strong>: {decodeURI(item.person)}</Text>
      <Text>{decodeURI(observ)}</Text>
      <Block row>
        <Block flex left>
        </Block>
        <Block>
          <Button small color="success" onPress={generateReport}>
            GENERAR REPORTE
          </Button>
        </Block>
        <Block>
          <Button small color="default" onPress={editReport}>
            EDITAR
          </Button>
        </Block>
        <Block>
          <Button small color="error" onPress={deleteReport}>
            ELIMINAR
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
  },
  itemContent: {
    width: width,
    paddingRight:40,
  },
  content: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    textAlign: 'justify'
  },
  group: {
    paddingTop: theme.SIZES.BASE
  },
  accordion: {
    marginTop: 22,
    borderRadius: 0,
    marginRight:10,
    paddingRight:0,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0)',
    width: width-10,
    shadowColor: "'rgba(0,0,0,0)'",
  },
  listitemheader: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: 'white',
    padding: 15,
  },
  listitemcontent: {
    backgroundColor: 'rgba(200,200,200,0.3)',
    padding: 15,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: '#ee6e73',                                    
    position: 'absolute',                                        
    right: 10,
    bottom: 0
  },
});

export default ReportScreen;
