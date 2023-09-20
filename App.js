import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import mainStore from "./store/store";

import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  return (
    <Provider store={mainStore}>
      <NativeBaseProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
