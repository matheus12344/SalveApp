import React from 'react';

import {
  View, Image, Text
} from 'react-native';

import Plus from '../../assets/Plus.png';
import Search from '../../assets/Search.png';
import Menu from '../../assets/Menu.png';

import { styles } from './styles';

export function Main(){
  return (
    <View>
      <View style={styles.container}>
        <Text>Hello!!</Text>
        <Image source={Plus}/>
        <Image source={Search}/>
        <Image source={Menu}/>
      </View>
    </View>
  );
}