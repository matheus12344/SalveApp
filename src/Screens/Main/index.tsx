import React from 'react';

import {
  View, Image
} from 'react-native';

import Plus from '../../assets/Plus.png';

import { styles } from './styles';

export function Main(){
  return (
    <View>
      <View style={styles.container}>
        Hello!
        <Image source={Plus}/>
      </View>
    </View>
  );
}