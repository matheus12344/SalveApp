import React from 'react';



import {
  View, Image, Text, ScrollView
} from 'react-native';


import Plus from '../../assets/Plus.png';
import Search from '../../assets/Search.png';
import Menu from '../../assets/Menu.png';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { Contact } from '../../components/Contact';
import { Category } from '../../components/Category';
import Drawer from '../../components/Drawer';

export function Main(){
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <Header/>
      <View style={{backgroundColor: '#FFFFFF'}}>
       <Category/>
      </View>
      <View style={{backgroundColor: '#FFFFFF'}}>
      <Contact/>
      </View>
      
    </ScrollView>
  );
}