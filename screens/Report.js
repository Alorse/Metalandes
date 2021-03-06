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
      tx.executeSql('CREATE TABLE IF NOT EXISTS RECORDS (key INTEGER PRIMARY KEY AUTOINCREMENT, type, title, date, observations, city, person, plant, value TEXT)');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, city, person, plant, value) VALUES '
      + '(1, "Mantenimiento", "Mantenimiento de Prueba Full", "2021-12-10", "Esta es una prueba para tener un primer Mantenimiento creado cuando se inicializa la aplicaci??n.", "Manizales", "Andr??s Felipe Arias Lop??z", "Subestaci??n Centro Cultural", "' + encodeURI(jsonMantenimiento) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, city, person, plant, value) VALUES '
      + '(2, "Rutina", "Rutina de Prueba Full", "2021-12-11", "Esta es una prueba para tener una primer Rutina creada cuando se inicializa la aplicaci??n.", "Cali", "Andr??s Felipe Arias Lop??z", "Subestaci??n Centro Comercial", "' + encodeURI(jsonRutina) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, city, person, plant, value) VALUES '
      + '(4, "Rutina", "Rutina de Prueba 2", "2021-12-12", "Sabaneta", "Andr??s Felipe Arias Lop??z", "Subestaci??n Centro", "' + encodeURI(jsonRutina2) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, city, person, plant, value) VALUES '
      + '(3, "Servicio", "Servicio de Prueba Full", "2021-12-13", "Esta es una prueba para tener un primer Servicio creado cuando se inicializa la aplicaci??n.", "Medell??n", "Andr??s Felipe Arias Lop??z", "Subestaci??n Centro Monterrey", "' + encodeURI(jsonServicio) + '")');
    })
  } catch (e) {
    // saving error
    console.log('error', e)
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

  const uploadReport = async (event) => {
    const file = event.target.files.item(0)
    const text = await file.text();
    let json = JSON.parse(text);
    db.transaction(function (tx) {
      var sql = 'INSERT INTO RECORDS (type, title, date, observations, value, city, person, plant) ' + 
      'VALUES ("' + json.type 
        + '","' + encodeURI(json.title)
        + '","' + json.date 
        + '","' + encodeURI(json.observations)
        + '","' + encodeURI(JSON.stringify(json.value))
        + '","' + encodeURI(json.city)
        + '","' + encodeURI(json.person)
        + '","' + encodeURI(json.plant) + '")'
        tx.executeSql(sql, [], function(err){
          console.log("Ok", err);
        }, function(err){
          console.log("Error", err);
        });
    })
    console.log(json);
  };

  return (
    <Block flex center>
        <SafeAreaView style={{height:height-100}}>
        <ActivityIndicator 
          size="large" 
          animating={iData == null ? true : false}
          style={{display:iData == null ? 'inherit' : 'none'}}
          />
          <Accordion 
            style={styles.accordion}
            headerStyle={styles.listitemheader}
            contentStyle={styles.listitemcontent}
            dataArray={iData} />
          {/* Just for test, only works in web version,
              You can use it as an import, if you want to use it for production,
              you should change "<input type>" for a native component.
           */}
          {/* <input 
            type="file"
            onChange={uploadReport}
            /> */}
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
      <Dialog
        open={openBack[1]}
        onClose={() => handleCloseBack([null, false])}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ??Est??s seguro que quieres eliminar este {state.routes[1].params.type}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button small onPress={() => handleCloseBack([openBack[0], true])}>   S??   </Button>
          <Button small color="default" onPress={() => handleCloseBack([null, false])}>   No   </Button>
        </DialogActions>
      </Dialog>
    </Block>
  );
}

function downloadObjectAsJson(exportObj, exportName){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
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

  const downloadReport = () => {
    db.transaction(function (tx) {
      tx.executeSql(`SELECT * FROM RECORDS WHERE key = ?`, [item.key], function(tx, results){
        let json = results.rows.item(0)
        let jsonValue
        json.title = decodeURI(json.title)
        json.plant = decodeURI(json.plant)
        json.person = decodeURI(json.person)
        json.observations = decodeURI(json.observations)
        jsonValue = decodeURI(results.rows.item(0).value)
        jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null
        json.value = jsonValue
        console.log(json)
        downloadObjectAsJson(json, json.title)
      });
    });
  }
  
  return (
    <Block style={styles.itemContent}>
      <Text><strong>Indentificaci??n</strong>: {decodeURI(item.title)}</Text>
      <Text><strong>Contacto</strong>: {decodeURI(item.person)}</Text>
      <Text>{decodeURI(observ)}</Text>
      <Block row>
        <Block flex left>
        </Block>
        <Block>
          <Button small color="info" onPress={downloadReport}>
            DESCARGAR
          </Button>
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
