import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "../Screens/Main";
import { Sports } from "../Screens/Sports";
import { Chatroom } from "../Screens/Chatroom";
import { Login, signIn } from "../Screens/signIn/login";
import { MusicRoom } from "../Screens/MusicRoom";
import { Music } from "../Screens/Music";
import { ForYou } from "../Screens/ForYou";
import { Search } from "../Screens/Search";
import { Store } from "../Screens/Store";
import { ItemDetails } from "../Screens/ItemDetails";
import { News, Users } from "../Screens/News";
import { PlaylistRoom } from "../Screens/PlaylistRoom";
import { Settings } from "../Screens/Settings";



const Stack = createStackNavigator();

const LoginNavigator = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerShown: false
      }}
    >
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  )
  }
    

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="login" component={LoginNavigator}/>
      <Stack.Screen name="Chatroom" component={Chatroom}/>
      <Stack.Screen name="MusicRoom" component={MusicRoom}/>
      <Stack.Screen name="Music" component={Music}/>
      <Stack.Screen name="ForYou" component={ForYou} />
      <Stack.Screen name="Pesquisar" component={Search} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="Sports" component={Sports} />
      <Stack.Screen name="Users" component={News} />
      <Stack.Screen name="PlaylistRoom" component={PlaylistRoom} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator, LoginNavigator };
