import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Home from "../screens/Home";
import Reports from "../screens/Report";
import CreateReport from "../screens/CreateReport";
import GeneratePDF from "../screens/GeneratePDF";
// drawer
import { I18n } from '../constants/locales';

const Stack = createNativeStackNavigator();


export default function App(props) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Metalandes" component={Home} />
        <Stack.Screen name="Reportes" component={Reports} />
        <Stack.Screen name="generate" component={GeneratePDF} />
        <Stack.Screen name={I18n.pages.new.id} component={CreateReport} />
    </Stack.Navigator>
  );
}

