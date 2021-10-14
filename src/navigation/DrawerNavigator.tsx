import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import { View, Image } from "react-native";

import { Profile } from "../components/Profile";
import { DrawerContent } from "../Screens/drawerContent";
import { calls } from "../Screens/calls";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="Calls" component={calls}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;