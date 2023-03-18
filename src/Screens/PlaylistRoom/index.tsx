import React from 'react';
import beachTrip from '../../assets/Playlists/beachTrip.png'
import { FontAwesome } from '@expo/vector-icons';


import {
    FlatList,
    Image,
    ScrollView,
    Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';
import { Tracks } from './components/Tracks';
import { useFonts } from 'expo-font';
import { MusicPlayer } from '../../components/MusicPlayer';

export function PlaylistRoom(){
    const [loaded] = useFonts({
        GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
        GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf')
    });

      
      if (!loaded) {
        return null;
      }
  return (
    <>
    <FlatList
        ListHeaderComponent={() => (
            <View style={{backgroundColor: 'white'}}>
            <Image source={beachTrip} style={{marginTop: 45, width: '95%', height: 400, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginLeft: 10}}/>
            <Text style={{position:'absolute', marginTop: 350, marginLeft: 20, fontSize: 30, fontFamily: 'GilroyBold'}}>Beach Trip</Text>
            <Text style={{position:'absolute', marginTop: 390, marginLeft: 20, fontSize: 15, fontFamily: 'GilroyBold', color: 'white'}}>85h 35min</Text>
            <Text style={{position:'absolute', marginTop: 390, marginLeft: 140, fontSize: 15, fontFamily: 'GilroyBold', color: 'white'}}>5M Likes</Text>
            
            <TouchableOpacity style={{width:70, height:70, borderRadius: 35 ,backgroundColor:'#2675EC', position: 'absolute', marginTop:370, marginLeft:300}}>
                <FontAwesome name="play-circle" size={82} color="#ffffff" style={{marginTop: -7}}/>
            </TouchableOpacity>
            <Tracks/>
        </View>
        )} 
    />
    <MusicPlayer/>
    </>
  );
}