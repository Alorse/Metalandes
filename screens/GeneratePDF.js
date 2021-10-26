import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet
} from "react-native";
import { Block, theme } from "galio-framework";
import { Button } from "../components/";
import * as Print from 'expo-print';
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

var item_id = null

const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
`;

const createAndSavePDF = async (html) => {
  try {
    const { uri } = await Print.printToFileAsync({ html: html });
    if (Platform.OS === "ios") {
      await Sharing.shareAsync(uri);
    } else {
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        console.log('aqui');
        await MediaLibrary.createAssetAsync(uri);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

function GeneratePDFScreen({ route, navigation }) {

  const { itemId, title } = route.params;
  item_id = itemId;
  
  useEffect(() => {
    navigation.setOptions({ title: 'PDF: ' + title })
  });

  const handleClickOpen = () => {
    createAndSavePDF(htmlContent)
  };

  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Block right>
          <Button color="success" onPress={handleClickOpen}>
            Generar Reporte
          </Button>
        </Block>
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
  }
});

export default GeneratePDFScreen;
