
import { useNavigation } from '@react-navigation/core';
import { useFonts } from 'expo-font';
import React from 'react';

import {
    Image,
    SafeAreaView,
    Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';
import photoChat from '../../assets/photoChat.png'
import { Profile } from '../../components/Profile';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { UsersFY } from '../../components/UsersFY';

export function ForYou(){
    const navigation = useNavigation()
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
    <SafeAreaView style={{backgroundColor:'#2675EC'}}>
      <Image source={photoChat} style={{width: '100%', height: '100%'}}/>
        <View style={{marginTop: 350, marginLeft:340, position:'absolute'}}>
          <UsersFY/>

          <TouchableOpacity>
            <AntDesign name="heart" size={40} color="white" style={{marginLeft: 10, marginTop: 30}}/>
            <Text style={{fontFamily: 'GilroyLight', color:"white", textAlign: 'center', justifyContent: 'center', marginTop: 2}}>11.1M</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="chatbox-ellipses" size={40} color="white" style={{marginLeft: 10, marginTop: 30}}/>
            <Text style={{fontFamily: 'GilroyLight', color:"white", textAlign: 'center', justifyContent: 'center', marginTop: 2}}>24.1M</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="share" size={40} color="white" style={{marginLeft: 10, marginTop: 30}}/>
            <Text style={{fontFamily: 'GilroyLight', color:"white", textAlign: 'center', justifyContent: 'center', marginTop: 2}}>24.3k</Text>
          </TouchableOpacity>

        </View>
        <View style={{flexDirection: 'row', marginTop: 30, position: 'absolute', marginLeft: 110}}>
            <TouchableOpacity>
                <Text style={{ color: 'white', fontFamily: 'GilroySemiBold', fontSize: 17}}>Following</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white', fontFamily: 'GilroySemiBold', fontSize: 17}}>   |   </Text>
            <TouchableOpacity>
                <Text style={{ color: 'white', fontFamily: 'GilroySemiBold', fontSize: 17}}>For You</Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  );
}