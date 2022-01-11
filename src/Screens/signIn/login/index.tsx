import { useFonts } from 'expo-font';
import React from 'react';

import {
  View,
  TextInput,
  Text,
  Image
} from 'react-native';
import logo from '../../../../assets/icon.png'

import { styles } from './styles';

export function Login(){
  const [loaded] = useFonts({
    GilroyBold: require('../../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../../assets/fonts/Gilroy-Light.otf'),
    GilroyRegular: require('../../../assets/fonts/Gilroy-Regular.ttf'),
    GilroySemiBold: require('../../../assets/fonts/Gilroy-SemiBold.ttf')
});

  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
        <Image source={logo} style={{height: 150, width: 150, marginTop: -400}}/>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 25}}>Salve</Text>
    </View>
  );
}