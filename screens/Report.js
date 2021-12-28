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

const { width, height } = Dimensions.get("screen");

var db = openDatabase('metalapp', '1.0', 'Metalandes App', 50 * 1024 * 1024); 

var data = [];
var type_ = null

const getAllKeys = async (navigation, setIData) => {
  var state = navigation.getState()
  type_ = state.routes[1].params.type
  data = [] // Reset Object

  db.transaction(function (tx) {
    tx.executeSql('SELECT key, type, title, date, observations FROM RECORDS WHERE type = "' + type_ + '"', [], function (tx, results) {
      var len = results.rows.length, i;
      for (i = 0; i < len; i++) {
        var title = results.rows.item(i).title + ' - ' + results.rows.item(i).date
        data.push({
          title: title,
          content: renderContent(
            navigation,
            results.rows.item(i),
          )
        })
      }
      setIData(data)
      // console.log('data2', data)
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
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, value) VALUES (1, "Mantenimiento", "Mantenimiento de Prueba Full", "2021-12-10", "Esta es una prueba para tener un primer Mantenimiento creado cuando se inicializa la aplicación.", "' + encodeURI(jsonMantenimiento) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, value) VALUES (2, "Rutina", "Rutina de Prueba Full", "2021-12-11", "Esta es una prueba para tener una primer Rutina creada cuando se inicializa la aplicación.", "' + encodeURI(jsonRutina) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, value) VALUES (4, "Rutina", "Rutina de Prueba 2", "2021-12-12", "' + encodeURI(jsonRutina2) + '")');
      tx.executeSql('INSERT INTO RECORDS (key, type, title, date, observations, value) VALUES (3, "Servicio", "Servicio de Prueba Full", "2021-12-13", "Esta es una prueba para tener un primer Servicio creado cuando se inicializa la aplicación.", "' + encodeURI(jsonServicio) + '")');
    })
  } catch (e) {
    // saving error
  }
}


function ReportScreen({ navigation }) {
  const [iData, setIData] = useState(null);
  var state = navigation.getState()
  storeExample()
  getAllKeys(navigation, setIData)

  // useEffect(
  //   () => {
  //     let timer1 = setTimeout(() => setIData(data), 1000);
  //     return () => {
  //       clearTimeout(timer1);
  //     };
  //   },
  //   []
  // );
  
  useEffect(() => {
    navigation.setOptions({ title: state.routes[1].params.type + 's' })
  });
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
    </Block>
  );
}

function renderContent(navigation, item) {
  var observ = item.observations ? item.observations : 'Sin Observaciones'
  var title = item.title + ' - ' + item.date
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
  
  return (
    <Block style={styles.itemContent}>
      <Text>{observ}</Text>
      <Block row>
        <Block flex left>
        </Block>
        <Block>
          <Button small color="default" onPress={generateReport}>
            GENERAR REPORTE
          </Button>
        </Block>
        <Block>
          <Button small color="default" onPress={editReport}>
            EDITAR
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
