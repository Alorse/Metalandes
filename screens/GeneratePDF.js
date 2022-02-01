import React, { useState, useEffect } from "react";
import {
  ScrollView
} from "react-native";
import { Block } from "galio-framework";
import { Button, Table1, Table2 } from "../components/";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

var item_id = null
var ftype = null

function GeneratePDFScreen({ route, navigation }) {

  const { itemId, title, type } = route.params;
  item_id = itemId;
  ftype = type;
  const [html, setHTML] = useState();
  
  useEffect(() => {
    navigation.setOptions({ title: 'PDF: ' + decodeURI(title) })
  });


  const renderTable = () => {
    let table;
    if (type == 'Servicio') {
      table = <Table2 item={item_id} type={ftype} ref={(response) => setHTML(response)} />
    } else {
      table = <Table1 item={item_id} type={ftype} ref={(response) => setHTML(response)} />
    }

    return table
  }

  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Block right>
          {renderTable()}
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
