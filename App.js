import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
// Before rendering any navigation stack
// import { enableScreens } from "react-native-screens";
// enableScreens();

import Screens from "./navigation/Screens";

function App() {
  return (
    <NavigationContainer>
      <GalioProvider>
        <Block flex>
          <Screens />
        </Block>
      </GalioProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;