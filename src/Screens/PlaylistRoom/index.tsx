import React from 'react';
import beachTrip from '../../assets/Playlists/beachTrip.png'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
import back from '../../assets/Icons/back.png'
import { useRoute } from '@react-navigation/native';

export function PlaylistRoom({navigation}){
    const route = useRoute()
    const {name, image} = route.params


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
          style={{backgroundColor: '#FFFFFF'}} 
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>(
          
              <View style={{backgroundColor:'#fff3f3bb', alignItems:'center'}}>
                <Image source={image} style={{height: 250, width:250, borderRadius:30, alignSelf:'center', top: 10}}/>
                <TouchableOpacity onPress={() => navigation.navigate('Music')} style={{position:'absolute', height: 50, width: 50, backgroundColor:'white', alignItems:'center', justifyContent:'center', borderRadius: 10, top: 10, left: 10}}>
                <Image source={back}/>
               </TouchableOpacity>
                <Text style={{fontFamily:'GilroyBold', marginTop: 10, fontSize: 20}}>{name}</Text>
                <Text style={{fontFamily: 'GilroyLight', fontSize: 15, textAlign:'center', top: 5}}>Uma infinidade de músicas para escutar em sua viagem para praia</Text>
                <View style={{flexDirection:'row', marginTop: 10}}>
                  <TouchableOpacity style={{backgroundColor:'#ffffff', height: 50, width: 50, alignItems:'center', justifyContent:'center', borderRadius:30, marginTop: 20, left: -65}}>
                    <Feather name="share-2" size={24} color="black" />
                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor:'#2675EC', height: 50, width: 150, alignItems:'center', justifyContent:'center', borderRadius:30, marginTop: 20}}>
                    <Text style={{color:'#ffffff', fontFamily: 'GilroyBold', fontSize: 18}}>Play</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor:'#ffffff', height: 50, width: 50, alignItems:'center', justifyContent:'center', borderRadius:30, marginTop: 20, left: 65}}> 
                    <Feather name="download" size={24} color="black" />
                  </TouchableOpacity>
                </View>

                <Text style={{fontFamily:'GilroyBold', marginTop: 30, fontSize: 20, left: -140}} >Song List</Text>
                <Tracks/>
                <View style={{height:120, width:'100%'}}/>
              </View>
            
          )} 
        />
        <MusicPlayer/>
      </>

  );
}