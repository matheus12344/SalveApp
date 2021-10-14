import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { Profile } from '../../components/Profile';
import { useFonts } from 'expo-font';

import ContactIcon from '../../assets/Icons/Contacts.png'
import Calls from '../../assets/Icons/Vector.png'
import FAQ from '../../assets/Icons/FAQ.png'
import Save from '../../assets/Icons/Rectangle37.png'
import Invite from '../../assets/Icons/Invite_friends.png'
import Settings from '../../assets/Icons/Settings.png'
import Back from '../../assets/Icons/back.png'
import { calls } from '../calls';



export function DrawerContent(props){
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
    <>
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
            <Image source={Back} style={{marginLeft: 20, marginTop: 23}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={Settings} style={{marginLeft: 190, marginTop: 20}}/>
        </TouchableOpacity>
        
    </View>
    <View style={{marginTop: 60, marginLeft: 10, flexDirection: 'row'}}>
        <Profile/>
        <Text style={{marginTop: 5, marginLeft: 10, fontFamily: 'GilroyBold', fontSize: 20, color: '#2675EC'}}>Matheus</Text>
        <Text style={{marginTop: 30, marginLeft: -89, fontFamily: 'GilroyBold', fontSize: 20, color: '#2675EC'}}>Henrique</Text>
    </View>
    <View>
        <TouchableOpacity style={{marginTop: 50, marginLeft: 10}}>
            <Image source={ContactIcon} style={{marginTop: 10, marginLeft: 10}}/>
            <Text style={{marginLeft: 50, marginTop: -25, fontFamily: 'GilroyBold', fontSize: 20, color: '#2675EC'}}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20, marginLeft: 10}} >
            <Image source={Calls} style={{marginTop: 10, marginLeft: 5}}/>
            <Text style={{marginLeft: 50, marginTop: -35, fontFamily: 'GilroyBold', fontSize: 20, color: '#2675EC'}}>Calls</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 25, marginLeft: 10}}>
            <Image source={Save} style={{marginTop: 10, marginLeft: 10}}/>
            <Text style={{marginLeft: 50, marginTop: -25, fontFamily: 'GilroyBold', fontSize: 20, color: '#2675EC'}}>Save Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 25, marginLeft: 10}}>
            <Image source={Invite} style={{marginTop: 10, marginLeft: 3}}/>
            <Text style={{marginLeft: 50, marginTop: -25, fontFamily: 'GilroyBold', fontSize: 20, color: '#2675EC'}}>Invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 25, marginLeft: 10}}>
            <Image source={FAQ} style={{marginTop: 10, marginLeft: 10}}/>
            <Text style={{marginLeft: 50, marginTop: -25, fontFamily: 'GilroyBold', fontSize: 20, color: '#2675EC'}}>Salve FAQ</Text>
        </TouchableOpacity>
    </View>
    </>
  );
}