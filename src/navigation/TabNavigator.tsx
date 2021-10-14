import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";


import {AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons' //Icones

import { Main } from "../Screens/Main";
import Camera2 from "../Screens/camera";
import { Search } from "../Screens/Search"; //telas
import { Stories } from "../Screens/Stories";  
import { Music } from "../Screens/Music";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Stories') {
              iconName = focused ? 'aliwangwang' : 'aliwangwang-o1';
              return <AntDesign name={iconName} size={24} color={color}/>
            } else if (route.name === 'Músicas') {
              iconName = focused ? 'headset' : 'headset';
              return <MaterialIcons name={iconName} size={24} color={color} />
            } else if (route.name === 'Pesquisar') {
              iconName = focused ? 'search' : 'search';
              return <MaterialIcons name={iconName} size={24} color={color} />
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2675EC',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={MainStackNavigator} />
        <Tab.Screen name="Pesquisar" component={Search}/>
        <Tab.Screen 
          name="Camera" 
          component={Camera2} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='add-circle' color={'black'} size={59} style={{marginLeft: 6, marginTop: -23, alignItems: 'center', justifyContent: 'center', position: 'absolute'}}/>
            ),
            tabBarVisible: false,
            tabBarBadgeStyle: {color: '#FFFFF'}
          }}
        />
        <Tab.Screen name="Stories" component={Stories}/>
        <Tab.Screen name="Músicas" component={Music}/>
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;