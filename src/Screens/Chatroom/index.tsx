import React from 'react';

import {
    Text,
  View, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView
} from 'react-native';

import { styles } from './styles';
import avatar from '../../assets/avatar.png'
import back from '../../assets/Icons/back.png'
import profile_menu from '../../assets/Icons/Profile_menu.png'
import photoChat from '../../assets/photoChat.png'

import { useFonts } from 'expo-font';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Chatroom({navigation}){
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
        <View style={{marginLeft: 20, marginTop: 60, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={back} style={{marginTop: 23}}/>
            </TouchableOpacity>
            <Image source={avatar} style={{height: 64, width: 64, borderRadius: 20, marginLeft: 20}}/>
            <Text style={{marginLeft: 25, fontFamily: 'GilroyBold', fontSize: 20, color:'black', marginTop: 10}}>Teste</Text>
            <Text style={{marginTop: 40, marginLeft: -55, color: '#2675EC', fontFamily: 'GilroySemiBold', fontSize: 16}}>Online</Text>
            <TouchableOpacity>
                <Image source={profile_menu} style={{ marginLeft: 180, marginTop: 20}}/>
            </TouchableOpacity>
        </View>
        <ScrollView >
            <View style={{
                backgroundColor: '#2675EC', 
                width: 90, 
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 10,
                marginTop: 50, 
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15, 
                borderBottomRightRadius: 15, 
                borderBottomLeftRadius: 5
                }}>
                <Text style={{color: 'white', fontFamily: 'GilroySemiBold', fontSize: 15}}>Oi</Text>
            </View>

            <View style={{
                backgroundColor: '#E3DFDF', 
                width: 90,
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 300,
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15, 
                borderBottomRightRadius: 5, 
                borderBottomLeftRadius: 15
                }}>
                <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15}}>Oie</Text>
            </View>

            <View style={{
                backgroundColor: '#2675EC', 
                width: 180, 
                height: 350, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 10,
                marginTop: 50, 
                borderTopLeftRadius: 20, 
                borderTopRightRadius: 30, 
                borderBottomRightRadius: 30, 
                borderBottomLeftRadius: 10
                }}>
                <Image source={photoChat} style={{width: 180, height: 350, borderTopLeftRadius: 20, 
                borderTopRightRadius: 30, 
                borderBottomRightRadius: 30, 
                borderBottomLeftRadius: 5}}/>
            </View>

            <View style={{
                backgroundColor: '#2675EC', 
                width: 90, 
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 10,
                marginTop: 50, 
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15, 
                borderBottomRightRadius: 15, 
                borderBottomLeftRadius: 5
                }}>
                <Text style={{color: 'white', fontFamily: 'GilroySemiBold', fontSize: 15}}>Oi</Text>
            </View>

            <View style={{
                backgroundColor: '#E3DFDF', 
                width: 90,
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 300,
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15, 
                borderBottomRightRadius: 5, 
                borderBottomLeftRadius: 15
                }}>
                <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15}}>Oie</Text>
            </View>

            <View style={{
                backgroundColor: '#2675EC', 
                width: 90, 
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 10,
                marginTop: 50, 
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15, 
                borderBottomRightRadius: 15, 
                borderBottomLeftRadius: 5
                }}>
                <Text style={{color: 'white', fontFamily: 'GilroySemiBold', fontSize: 15}}>Oi</Text>
            </View>

            <View style={{
                backgroundColor: '#E3DFDF', 
                width: 90,
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 300,
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15, 
                borderBottomRightRadius: 5, 
                borderBottomLeftRadius: 15
                }}>
                <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15}}>Oie</Text>
            </View>

            <View style={{
                backgroundColor: '#2675EC', 
                width: 90, 
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 10,
                marginTop: 50, 
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15, 
                borderBottomRightRadius: 15, 
                borderBottomLeftRadius: 5
                }}>
                <Text style={{color: 'white', fontFamily: 'GilroySemiBold', fontSize: 15}}>Oi</Text>
            </View>

            <View style={{
                backgroundColor: '#E3DFDF', 
                width: 90,
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginLeft: 300,
                borderTopLeftRadius: 15, 
                borderTopRightRadius: 15, 
                borderBottomRightRadius: 5, 
                borderBottomLeftRadius: 15
                }}>
                <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15}}>Oie</Text>
            </View>

        </ScrollView>

        <View style={{backgroundColor: '#FAFAFA', flexDirection: 'row', width: "90%", height: 70, borderRadius: 30, marginLeft: 25, marginTop: 700, position: 'absolute'}}>
            <TextInput placeholder="Type your message..." placeholderTextColor="#848484" style={{marginLeft: 10, color: '#848484', fontFamily: 'GilroyBold'}}/>
            <TouchableOpacity >
                <Entypo name="plus" size={30} color="#2675EC" style={{marginLeft: 30, marginTop: 20}}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <MaterialIcons name="emoji-emotions" size={30} color="#2675EC" style={{marginLeft: 20, marginTop: 20}}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <MaterialCommunityIcons name="camera" size={30} color="#2675EC" style={{marginLeft: 20, marginTop: 20}}/>
            </TouchableOpacity>
           
        </View>
    </SafeAreaView>
  );
}