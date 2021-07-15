import React from 'react';



import {
  View, Image, Text
} from 'react-native';


import Plus from '../../assets/Plus.png';
import Search from '../../assets/Search.png';
import Menu from '../../assets/Menu.png';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { Contact } from '../../components/Contact';

export function Main(){
  return (
    <View style={{backgroundColor: "#FFFFFF"}}>
      <Header/>
      <Contact/>

    </View>
  );
}