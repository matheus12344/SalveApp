import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


export function MusicPlayer(){
  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf')
});

  
  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.container}>
       <TouchableOpacity >
        <Foundation name="heart" size={30} color="white" style={styles.savebutton}/>
      </TouchableOpacity>
      <Text style={styles.Music}>Musica</Text>
      <Text style={styles.divide}>.</Text>
      <Text style={styles.artist}>Artista</Text>
      <TouchableOpacity>
        <Entypo name="controller-play" size={30} color="white" style={styles.playButton}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}