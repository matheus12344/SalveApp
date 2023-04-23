import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeBaseProvider } from 'native-base';

import { Main } from './src/Screens/Main';
import { Login } from './src/Screens/signIn/login';
import { Stories } from './src/Screens/Stories';          // Paginas
import Camera2 from './src/Screens/camera';
import { Music } from './src/Screens/Music';

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';            // Icones
import { MaterialIcons } from '@expo/vector-icons';
import { Search } from './src/Screens/Search';
import { MainStackNavigator } from './src/navigation/StackNavigator';
import BottomTabNavigator from './src/navigation/TabNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Stories" component={Stories} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
    
    </NativeBaseProvider>
  );
}
