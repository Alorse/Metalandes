import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert
} from "react-native";
//galio
import { Block, Button, theme, Accordion, Text } from "galio-framework";

const { width, height } = Dimensions.get("screen");

const data = [
  { title: "Rosales", content: renderContent('Text 1') },
  { title: "Check", content: renderContent('Text 2') },
  { title: "EPM", content: renderContent() },
  { title: "Electro Caribe", content: renderContent() },
  { title: "Report #3", content: "Lorem ipsum dolor sit amet"}
];

function ReportScreen({  navigation }) {
  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {renderCards(navigation)}

      </ScrollView>
    </Block>
  );
}

function renderCards(navigation) {
  var state = navigation.getState()
  var type = state.routeNames[0] == 'Rutinas' ? 'Nueva Rutina' : 'Nuevo ' + state.routeNames[0].slice(0, -1)
  return (
    <Block style={{height:height-200}}>
      <Accordion 
        style={styles.accordion}
        headerStyle={styles.listitemheader}
        contentStyle={styles.listitemcontent}
        dataArray={data} />
      <Block flex-end middle right>
        <Button
          round
          onlyIcon
          shadowless
          icon="plus"
          iconFamily="Font-Awesome"
          iconColor={theme.COLORS.WHITE}
          iconSize={theme.SIZES.BASE * 1.625}
          color={theme.COLORS.SUCCESS}
          style={[styles.shadow]}
          onPress={() => navigation.navigate('new', { type: type })}
        />
      </Block>
    </Block>
  );
}

function renderContent(text) {
  const createTwoButtonAlert = () =>
  Alert.alert(
    "Eliminar reporte",
    "Esta seguro que desea eliminar el reporte?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  
  return (
    <Block>
      <Text>{text}</Text>
      <Text>Lorem ipsum dolor sit amet</Text>
      <Text>Lorem ipsum dolor sit amet</Text>
      <Block row space="evenly">
        <Block flex left style={{marginTop: 8}}>
        </Block>
        <Block>
          <Button size='small' center color="rgb(23, 43, 77)" onPress={createTwoButtonAlert}>
            Borrar
          </Button>
        </Block>
        <Block>
          <Button center color="rgb(23, 43, 77)">
            Editar
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
