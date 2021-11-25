import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, Text, Button } from 'galio-framework';

import Theme from "../constants/Theme";
import { I18n } from "../constants/locales";

const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

function HomeScreen({ navigation }) {
  const [localSize, setLocalSize] = useState();

  useEffect(() => {
    // setLocalSize(testLocalStorage())
  }, []);

  return (
    <>
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
        flex
        center
        style={[styles.group, { paddingBottom: Theme.SIZES.BASE * 5 }]}
      >
          <Text bold size={16} style={styles.title}>
            { I18n.categories }
          </Text>
          <Block>
            <Block key={`mantenimientos`}>
              <Button 
                style={styles.report_btn} color="#999"
                onPress={() => navigation.navigate('Reportes', { type: 'Mantenimiento' })}
                >
                  Mantenimientos
              </Button>
            </Block>
            <Block key={`rutinas`}>
              <Button style={styles.report_btn} color="#777"
                onPress={() => navigation.navigate('Reportes', { type: 'Rutina' })}
                >Rutinas</Button>
            </Block>
            <Block key={`servicios`}>
              <Button style={styles.report_btn} color="#555"
                onPress={() => navigation.navigate('Reportes', { type: 'Servicio' })}
                >Servicios</Button>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
    <Text style={styles.localSize}>{localSize}</Text>
    </>
  );
}

function testLocalStorage() {
  var timeStart = Date.now();
  var timeEnd, countKey, countValue, amountLeft, itemLength;
  var occupied = 3; //Shurav's comment on initial overhead
  var leftCount = 3;
//create localStorage entries until localStorage is totally filled and browser issues a warning.
  var i = 0;
  while (!error) {
      try {
//length of the 'value' was picked to be a compromise between speed and accuracy, 
// the longer the 'value' the quicker script and result less accurate. This one is around 2Kb 
          localStorage.setItem('testKey' + i, '11111111112222222222333333333344444444445555555555666661111111111222222222233333333334444444444555555555566666');
      } catch (e) {
          var error = e;
      }
      i++;
  }
//if the warning was issued - localStorage is full.
  if (error) {
//iterate through all keys and values to count their length
      for (var i = 0; i < localStorage.length; i++) {
          countKey = localStorage.key(i);
          countValue = localStorage.getItem(localStorage.key(i));
          itemLength = countKey.length + countValue.length;
//if the key is one of our 'test' keys count it separately
          if (countKey.indexOf("testKey") !== -1) {
              leftCount = leftCount + itemLength;
          }
//count all keys and their values
          occupied = occupied + itemLength;
      }
      ;
//all keys + values lenght recalculated to Mb
      occupied = (((occupied * 16) / (8 * 1024)) / 1024).toFixed(2);
//if there are any other keys then our 'testKeys' it will show how much localStorage is left
      amountLeft = occupied - (((leftCount * 16) / (8 * 1024)) / 1024).toFixed(2);
//iterate through all localStorage keys and remove 'testKeys'
      Object.keys(localStorage).forEach(function(key) {
          if (key.indexOf("testKey") !== -1) {
              localStorage.removeItem(key);
          }
      });

  }
  //calculate execution time
  var timeEnd = Date.now();
  var time = timeEnd - timeStart;
  //create message
  var message = 'Almacenamiento total: ' + occupied + 'MB \nAlmacenamiento disponible: ' + amountLeft + "MB";
  //put the message on the screen
  //document.getElementById('scene').innerText = message; //this works with Chrome,Safari, Opera, IE
  //document.getElementById('scene').textContent = message;  //Required for Firefox to show messages
  return message;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: Theme.COLORS.WHITE,
    marginVertical: Theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: Theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  categoryName: {
    // paddingTop: Theme.SIZES.BASE,
    paddingBottom: Theme.SIZES.BASE
  },
  localSize: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});

export default HomeScreen;
