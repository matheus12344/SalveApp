import { useFonts } from 'expo-font';
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  FlatList
} from 'react-native';
import { HeaderMusic } from '../../components/HeaderMusic';
import { Playlist } from '../../components/Playlists';
import { SearchBox } from '../../components/SearchBox';
import { Podcasts } from '../../components/Podcasts'

import { styles } from './styles';
import { CategoryMusic } from '../../components/CategoryMusic';
import { MusicPlayer } from '../../components/MusicPlayer';

export function Music(){
  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
    GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf')
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
          <>
            <HeaderMusic/>
            <Text style={{marginLeft: 20,fontSize: 23,fontFamily: 'GilroyBold'}}>Boa Noite</Text>
            <Playlist/>
            <SearchBox/>
            <Podcasts/>
            <CategoryMusic/>
          </>
        )} 
      />
      <MusicPlayer/>
    </>
  );
}