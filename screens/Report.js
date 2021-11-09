import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView
} from "react-native";
//galio
import { Block, theme, Accordion, Text } from "galio-framework";
import { Button } from "../components/";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReportExample from '../assets/config/example.json';

const { width, height } = Dimensions.get("screen");

var data = [];

const getAllKeys = async (navigation) => {
  var state = navigation.getState()
  let type_ = state.routes[1].params.type
  let fkey = type_ == 'Servicio' ? '@servicio_' : type_ == 'Rutina' ? '@rutina_' : '@reporte_'
  let keys = []
  data = [] // Reset Object
  try {
    keys = await AsyncStorage.getAllKeys()
    let values
    try {
      values = await AsyncStorage.multiGet(keys)
      values.map(item => {
        if(item[0].includes(fkey)) {
          var report = JSON.parse(item[1])
          var title = report.identificacion + ' - ' + report.fecha
          data.push({
            title: title,
            content: renderContent(
              navigation,
              item[0],
              report
            )
          })
        }
      })
    } catch(e) {
      // read error
    }
  } catch(e) {
      // read error
  }
}

const storeExample = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@reporte_000', jsonValue)
  } catch (e) {
    // saving error
  }
}


function ReportScreen({ navigation }) {
  storeExample(ReportExample)
  getAllKeys(navigation)
  return (
    <Block flex center>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        {renderCards(navigation)}
      {/* </ScrollView> */}
    </Block>
  );
}

function renderCards(navigation) {
  var state = navigation.getState()
  
  const [iData, setIData] = useState([]);
  useEffect(
    () => {
      let timer1 = setTimeout(() => setIData(data), 1);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  useEffect(() => {
    navigation.setOptions({ title: state.routes[1].params.type + 's' })
  });

  return (
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
  );
}

function renderContent(navigation, item, report) {
  var observ = report.observ_generales ? report.observ_generales : 'Sin Observaciones'
  var title = report.identificacion + ' - ' + report.fecha
  var state = navigation.getState()
  const generateReport = () => {
    navigation.navigate('generate', 
    {
      itemId: item,
      title: title,
      type: state.routes[1].params.type,
    }
  )
  }

  const editReport = () => {
    var state = navigation.getState()
    navigation.navigate('new', 
      {
        itemId: item,
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
