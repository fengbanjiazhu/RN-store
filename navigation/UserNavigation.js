import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserScreen from "../screens/user/UserScreen";

const UserNav = createNativeStackNavigator();

function UserNavigation() {
  return (
    <UserNav.Navigator screenOptions={{ headerTitle: "User" }} initialRouteName="UserScreen">
      <UserNav.Screen name="UserScreen" component={UserScreen} />
    </UserNav.Navigator>
  );
}

export default UserNavigation;
