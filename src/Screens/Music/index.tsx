import { useFonts } from 'expo-font';
import React from 'react';

import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { HeaderMusic } from '../../components/HeaderMusic';
import { Playlist } from '../../components/Playlists';
import { SearchBox } from '../../components/SearchBox';
import { Podcasts } from '../../components/Podcasts'

import { styles } from './styles';
import { CategoryMusic } from '../../components/CategoryMusic';

export function Music(){
  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf')
});

  
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}} showsVerticalScrollIndicator={false}>
      <HeaderMusic/>
      <Text style={{marginLeft: 20,fontSize: 23,fontFamily: 'GilroyBold'}}>Boa Noite</Text>
      <Playlist/>
      <SearchBox/>
      <Podcasts/>
      <CategoryMusic/>
    </ScrollView>
  );
}