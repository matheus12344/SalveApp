import React from 'react';    

import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import Status from '../../components/Status';

import { styles } from './styles';

export function Stories(){
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="never">
        <Header/>
        <View style={{backgroundColor: '#FFFFFF'}}>
          <Status/>
          <Post/>
        </View>
    </ScrollView>
  );
}