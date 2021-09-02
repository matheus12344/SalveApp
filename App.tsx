import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';

import { Main } from './src/Screens/Main';
import { signIn } from './src/Screens/signIn/login';
import { Stories } from './src/Screens/Stories';          // Paginas
import Camera2 from './src/Screens/camera';
import { Music } from './src/Screens/Music';

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';            // Icones
import { MaterialIcons } from '@expo/vector-icons';
import { Search } from './src/Screens/Search';





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={signIn} />
      <Stack.Screen name="Stories" component={Stories} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavigationContainer independent={true}>
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
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="Pesquisar" component={Search}/>
        <Tab.Screen 
          name="Camera" 
          component={Camera2} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='add-circle' color={'black'} size={70} style={{marginLeft: 6, marginTop: -23, alignItems: 'center', justifyContent: 'center'}}/>
            ),
            tabBarVisible: false,
            tabBarBadgeStyle: {color: '#FFFFF'}
          }}
        />
        <Tab.Screen name="Stories" component={Stories}/>
        <Tab.Screen name="Músicas" component={Music}/>

      </Tab.Navigator>
    </NavigationContainer>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
