import React, { useEffect, useState } from 'react';

import {
    Text,
  View, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, Animated, Keyboard
} from 'react-native';

import back from '../../assets/Icons/back.png'
import profile_menu from '../../assets/Icons/Profile_menu.png'

import { useFonts } from 'expo-font';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';


export function Chatroom({navigation}){
    const route = useRoute();
    const {name, image} = route.params
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);

  const keyboardDidShow = () => {
    Animated.timing(animatedValue, {
      toValue: -325 , // Altere o valor de acordo com a altura que você quiser subir
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const keyboardDidHide = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    transform: [{ translateY: animatedValue }],
  };
    function handleSendMessage() {
        if (messageText) {
          setMessages([...messages, messageText]);
          setMessageText('');
        }
      }

    const [loaded] = useFonts({
        GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
        GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf'),
        GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf')
    });

      
      if (!loaded) {
        return null;
      }

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
        <View style={{marginLeft: 20, marginTop: 60, flexDirection: 'row', height: 80}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={back} style={{marginTop: 23}}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={image} style={{height: 64, width: 64, borderRadius: 20, marginLeft: 20}}/>
            </TouchableOpacity>
            
            <Text style={{marginLeft: 25, fontFamily: 'GilroyBold', fontSize: 20, color:'black', marginTop: 10}}>{name}</Text>
            <Text style={{marginTop: 40, left: 120, color: '#2675EC', fontFamily: 'GilroySemiBold', fontSize: 16, position:'absolute'}}>Online</Text>
            <TouchableOpacity>
                <Image source={profile_menu} style={{ left: 140, marginTop: 20, position:'absolute'}}/>
            </TouchableOpacity>
        </View>

        <ScrollView keyboardShouldPersistTaps='always'>
         
            {messages.map((message, index) => (
            <View key={index} style={{backgroundColor: '#2675EC', width: 100, height: 50, borderRadius: 20, alignItems: 'center', justifyContent:'center', marginTop: 20, left:300 }}>
                <Text style={{fontFamily: 'GilroySemiBold', color: 'white'}}>{message}</Text>
            </View>
            ))}
             
        </ScrollView>
        <Animated.View style={[{ backgroundColor: '#FAFAFA', flexDirection: 'row', width: "90%", height: 70,top:690, borderRadius: 30, marginLeft: 20, justifyContent: 'flex-end',position: 'absolute' }, animatedStyle]}>
                <View>
                    <TextInput 
                        placeholder="Type your message..." 
                        placeholderTextColor="#848484" 
                        style={{flex:1, marginLeft: 10, color: '#848484', fontFamily: 'GilroyBold'}}
                        onChangeText={(text) => setMessageText(text)}
                        value={messageText}
                    />
                </View>
                    <TouchableOpacity>
                        <Entypo name="plus" size={30} color="#2675EC" style={{marginLeft: 30, marginTop: 20}}/>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MaterialIcons name="emoji-emotions" size={30} color="#2675EC" style={{marginLeft: 20, marginTop: 20}}/>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MaterialCommunityIcons name="camera" size={30} color="#2675EC" style={{marginLeft: 20, marginTop: 20}} onPress={() => navigation.navigate('Camera')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:50, height:50, borderRadius:30, alignItems:'center', justifyContent:'center',backgroundColor:'#2675EC', left: 15, top: 9}} onPress={handleSendMessage}>
                        <Ionicons name="send" size={28} color="white" />
                    </TouchableOpacity>
       </Animated.View>           
       
          
        
    </SafeAreaView>
  );
}