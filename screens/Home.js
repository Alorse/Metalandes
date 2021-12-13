import React, { useState, useEffect }  from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Block, Button, Text } from 'galio-framework';
import ping from 'web-pingjs';

import Theme from "../constants/Theme";
import logo from '../assets/logo_300.png'; 

function HomeScreen({ navigation }) {

  const [server, setServer] = useState(null);

  useEffect(() => {
    ping('http://0.0.0.0:8080').then(function(delta) {
    // ping('https://googleee.com/').then(function(delta) {
      console.log('Ping time was ' + String(delta) + ' ms');
      setServer(true)
    }).catch(function(err) {
      setServer(false)
      console.error('Could not ping remote URL', err);
    });
  });

  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
        flex
        center
        style={[styles.group, { paddingBottom: Theme.SIZES.BASE * 5 }]}
      >
          <br />
          <img src={logo} />
          <br /><br />
          <Block>
            <Block key={`mantenimientos`}>
              <Button 
                style={styles.report_btn}
                color="#01161C"
                onPress={() => navigation.navigate('Reportes', { type: 'Mantenimiento' })}
                >
                  Mantenimientos
              </Button>
            </Block>
            <Block key={`rutinas`}>
              <Button style={styles.report_btn}
                color="#012C3D"
                onPress={() => navigation.navigate('Reportes', { type: 'Rutina' })}
                >Rutinas</Button>
            </Block>
            <Block key={`servicios`}>
              <Button 
                style={styles.report_btn}
                color="#5bc0de"
                onPress={() => navigation.navigate('Reportes', { type: 'Servicio' })}
                >Servicios</Button>
            </Block>
          </Block>
        </Block>
        <Block style={styles.server}>
          <Text>
          Servidor: 
            <Text style={server ? styles.green : styles.red}>
              {server ? " Encendido" : " Apagado"}
            </Text>
          </Text>
        </Block>
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: Theme.SIZES.BASE,
    paddingHorizontal: Theme.SIZES.BASE * 2,
    marginTop: 22,
  },
  report_btn:{
    width: 300
  },
  group: {
    paddingTop: Theme.SIZES.BASE
  },
  server:{
    alignItems: "center"
  },
  red: {
    color: "red",
    fontWeight: 'bold'
  },
  green: {
    color: "green",
    fontWeight: 'bold'
  }
});

export default HomeScreen;
