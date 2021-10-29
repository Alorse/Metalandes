import React, { useState, useEffect } from "react";
import {
  ScrollView
} from "react-native";
import { Block } from "galio-framework";
import { Button, Table } from "../components/";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

var item_id = null

function GeneratePDFScreen({ route, navigation }) {

  const { itemId, title } = route.params;
  item_id = itemId;
  const [html, setHTML] = useState();
  
  useEffect(() => {
    navigation.setOptions({ title: 'PDF: ' + title })
  });

  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Block right>
          <Table item={item_id} ref={(response) => setHTML(response)} />
          <ReactToPrint content={() => html}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <Button color="success" onPress={handlePrint}>
                  Generar Reporte
                </Button>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
        </Block>
      </ScrollView>
    </Block>
  );
}

export default GeneratePDFScreen;
