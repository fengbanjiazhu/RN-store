import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const ProductNav = createNativeStackNavigator();

function ProductNavigation() {
  return (
    <ProductNav.Navigator
      screenOptions={{ headerTitle: "Products" }}
      initialRouteName="OverviewScreen"
    >
      <ProductNav.Screen name="OverviewScreen" component={ProductsOverviewScreen} />
      <ProductNav.Screen
        name="DetailScreen"
        component={ProductDetailScreen}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </ProductNav.Navigator>
  );
}

export default ProductNavigation;
