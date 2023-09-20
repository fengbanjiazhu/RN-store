import React from "react";
// import { useEffect } from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import mainStore from "./store/store";
import MainNavigation from "./navigation/mainNavigation";

import { useSelector } from "react-redux";
// import useSelector

// import { fetchProduct } from "./service/apiProducts";

export default function App() {
  // const data = useSelector((state) => state.product.availableProducts);

  // useEffect(() => {
  //   const fetchProductWrapper = async () => {
  //     await fetchProduct();
  //   };
  //   fetchProductWrapper();
  // }, []);

  return (
    <Provider store={mainStore}>
      <NativeBaseProvider>
        <NavigationContainer>
          {/* <Box flex={1} alignItems="center" justifyContent="center">
          <Text>Open up App.js to start working on your app!</Text>
        </Box> */}
          <MainNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
