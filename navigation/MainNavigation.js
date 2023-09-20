import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FilterScreen from "../screens/FilterScreen";
import BottomNavigation from "./BottomNavigation";

const Drawer = createDrawerNavigator();

const FilterNav = createNativeStackNavigator();

const FilterScreenWrapper = () => {
  return (
    <FilterNav.Navigator screenOptions={{ headerTitle: "Filter" }} initialRouteName="FilterScreen">
      <FilterNav.Screen name="FilterScreen" component={FilterScreen} />
    </FilterNav.Navigator>
  );
};

function MainNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="bottomNavigation"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="bottomNavigation"
        drawerLabel="products"
        options={{ drawerLabel: "Meals" }}
        component={BottomNavigation}
      />
      <Drawer.Screen
        name="FilterNavigation"
        options={{ drawerLabel: "Filter" }}
        component={FilterScreenWrapper}
      />
    </Drawer.Navigator>
  );
}
export default MainNavigation;
