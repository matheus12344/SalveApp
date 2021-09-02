import React from 'react';

import {
    Image,
  TextInput,
  TouchableOpacity,
  View,
  
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { useFonts } from 'expo-font';

export function SearchBox(){
  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
    GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf')
});

  
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.SearchBox}>
        <TouchableOpacity >
            <Feather name="search" size={24} color="#FFFFFF" style={styles.SearchIcon}/>
        </TouchableOpacity>
        <TextInput placeholder="Artistas, músicas ou podcasts" placeholderTextColor="#FFFFFF" style={{marginLeft: 10, color: '#FFFFFF', fontFamily: 'GilroyBold', width: "100%"}}/>
    </View>
  );
}