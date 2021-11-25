import React from "react";
import { Dimensions } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Home from "../screens/Home";
import Elements from "../screens/Elements";
import AboutUs from "../screens/AboutUs";
import Reports from "../screens/Report";
import CreateReport from "../screens/CreateReport";
import GeneratePDF from "../screens/GeneratePDF";
// drawer
import { I18n } from '../constants/locales';

// header for screens
import { Header } from "../components";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name={I18n.pages.terms.title}
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title={I18n.pages.terms.title}
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name={I18n.pages.index.title}
        component={Home}
      />
    </Stack.Navigator>
  );
}

function AboutUsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen 
        name={I18n.pages.about.title}
        component={AboutUs}
      />
    </Stack.Navigator>
  );
}

function ReportsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name={props.route.params.type + 's'}
        component={Reports}
      />
    </Stack.Navigator>
  );
}

function CreateReportsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name={props.route.params.type}
        component={CreateReport}
      />
    </Stack.Navigator>
  );
}

export default function App(props) {
  return (
    // <Drawer.Navigator
    //   style={{ flex: 1 }}
    //   drawerContent={props => <CustomDrawerContent {...props} />}
    //   drawerStyle={{
    //     backgroundColor: "white",
    //     width: width * 0.8
    //   }}
    // >
    //   <Drawer.Screen name={I18n.pages.index.id} component={HomeStack} />
    //   <Drawer.Screen name={I18n.pages.about.id} component={AboutUsStack} />
    //   <Drawer.Screen name={I18n.pages.terms.id} component={ElementsStack} />
    //   <Drawer.Screen name={I18n.pages.reports.id} component={ReportsStack} />
    //   <Drawer.Screen name={I18n.pages.new.id} component={CreateReportsStack} />
    // </Drawer.Navigator>
    <Stack.Navigator>
        <Stack.Screen name="Metalandes" component={Home} />
        <Stack.Screen name="Reportes" component={Reports} />
        <Stack.Screen name="generate" component={GeneratePDF} />
        <Stack.Screen name={I18n.pages.new.id} component={CreateReport} />
    </Stack.Navigator>
  );
}

