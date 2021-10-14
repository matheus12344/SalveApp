import React from 'react';

import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { styles } from './styles';

import { createDrawerNavigator, useDrawerStatus  } from '@react-navigation/drawer';

import Main from '../../Screens/Main'

const DrawerNavigation = createDrawerNavigator();
const isDrawerOpen = useDrawerStatus() === 'open';

import Menu from '../../assets/Icons/Menu.png'


function MyDrawer() {
  return (
    <DrawerNavigation.Navigator initialRouteName="Feed">
      <DrawerNavigation.Screen
        name="Home"
        component={Main}
        options={{ drawerLabel: 'Home' }}
      />
    </DrawerNavigation.Navigator>
  );
}

export function Drawer(){
  return (
    <View>
        <TouchableOpacity onPress={isDrawerOpen}>
            <Image source={Menu}/>
        </TouchableOpacity>
    </View>
  );
}