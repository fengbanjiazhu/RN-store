import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ProductNavigation from "./ProductNavigation";
import CartNavigation from "./CartNavigation";
import UserNavigation from "./UserNavigation";

function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Products" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Products"
        component={ProductNavigation}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-restaurant" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigation}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-star" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserNavigation}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-star" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
