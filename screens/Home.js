import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, Text, Button } from 'galio-framework';

import Theme from "../constants/Theme";
import { I18n } from "../constants/locales";
// import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

function HomeScreen({ navigation }) {
  // const { getItem } = useAsyncStorage('@storage_user');

  const readItemFromStorage = async () => {
    // let item = await getItem();
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
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
  );
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
});

export default HomeScreen;
