import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/shop/CartScreen";

const CartNav = createNativeStackNavigator();

function CartNavigation() {
  return (
    <CartNav.Navigator screenOptions={{ headerTitle: "Cart" }} initialRouteName="CartScreen">
      <CartNav.Screen name="CartScreen" component={CartScreen} />
    </CartNav.Navigator>
  );
}

export default CartNavigation;
