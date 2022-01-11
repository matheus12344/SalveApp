import { useFonts } from '@expo-google-fonts/inter';
import React from 'react';

import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { styles } from './styles';
import MusicPhoto from '../../assets/MusicPhoto.png'

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';


export function MusicRoom(){
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
    <SafeAreaView style={{backgroundColor: '#2675EC'}}>
        <View style={{justifyContent: 'center', alignItems:'center', marginTop: 15}}>
            <TouchableOpacity style={{marginLeft:-350}} onPress={() => navigation.navigate('Music')}>
                <Entypo name="chevron-down" size={30} color="white" />
            </TouchableOpacity>
            <Text style={{color: 'white', fontFamily:"GilroySemiBold", fontSize: 14, marginTop: -30}}>PLAYING FROM TO</Text>
            <Text style={{color: 'white', fontFamily:"GilroyBold", fontSize: 18}}>QUEUE</Text>
            <Image source={MusicPhoto} style={{marginTop: 100, height: 300, width: 300, borderRadius: 10}}/>
        </View>

        <View style={{marginLeft:15, marginTop:20}}>
            <Text style={{color: 'white', fontFamily:"GilroyBold", fontSize: 20}}>Rewrite The Stars (With James Arthur & Anne-Marie)</Text>
            <Text style={{color: 'white', fontFamily:"GilroySemiBold", fontSize: 14, marginTop:5}}>James Arthur, Anne-Marie</Text>
            <TouchableOpacity>
                <AntDesign name="hearto" size={24} color="white" style={{marginLeft: 350, marginTop: -45}}/>
            </TouchableOpacity>
        </View>

        <View style={{backgroundColor: 'white', height: 5, width: '98%', marginLeft: 5, marginTop: 40}}/> 
        <Text style={{marginLeft: 7, color:'white', fontFamily:"GilroyLight"}}>0:35</Text>
        <Text style={{marginLeft: 370, marginTop: -19, color: 'white', fontFamily:"GilroyLight"}}>3:38</Text>

        <View style={{justifyContent: 'center', alignItems:'center'}}> 
            <AntDesign name="play" size={70} color="white" style={{marginTop: 40}}/>
            <AntDesign name="forward" size={40} color="white" style={{marginLeft: 250, marginTop: -55}}/>
            <AntDesign name="banckward" size={40} color="white" style={{marginLeft: -250, marginTop: -38}}/>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}> 
            <MaterialCommunityIcons name="share-variant" size={24} color="white" style={{marginLeft:10}}/>
            <MaterialIcons name="queue-music" size={24} color="white" style={{marginLeft: 350}}/>
            <MaterialCommunityIcons name="cast-connected" size={24} color="white" style={{marginLeft: -65}}/>
        </View>

        <View style={{backgroundColor: '#2675EC', height: 100}}/>

    </SafeAreaView>
  );
}