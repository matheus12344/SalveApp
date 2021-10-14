import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "../Screens/Main";
import { ContactView } from "../Screens/ContactView";
import { Chatroom } from "../Screens/Chatroom";



const Stack = createStackNavigator();

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
      <Stack.Screen name="Chatroom" component={Chatroom}/>
      <Stack.Screen name="Contact" component={ContactView} />
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

export { MainStackNavigator, ContactStackNavigator };
