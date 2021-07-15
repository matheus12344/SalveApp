import { useFonts } from 'expo-font';
import React from 'react';

import {
  View, Image, Text
} from 'react-native';
import { fontFamily } from 'styled-system';

import avatar from '../../assets/avatar.png'
import avatarMamae from '../../assets/mamãe.png'
import avatarPapai from '../../assets/papai.png'
import avatarMiguel from '../../assets/miguel.png'

import { theme } from '../../global/styles/theme';
import { styles } from './styles';


export function Contact(){

    const nome1 = 'Miguel Irmão'

    const nome2 = "Mamãe"

    const nome3 = "Papai"

    const [loaded] = useFonts({
        GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../assets/fonts/Gilroy-Light.otf')
    });

      
      if (!loaded) {
        return null;
      }

  return (
      <>
    
    <View style={styles.chat}>
        <Image source={avatarMiguel} style={styles.avatar}/>
        <View style={styles.name}>
            <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>{nome1}</Text>
        </View>
        
        <View style={styles.message}>
            <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
        </View>
    </View>
    
    <View style={styles.chat}>
    <Image source={avatarMamae} style={styles.avatar}/>
    <View style={styles.name}>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>{nome2}</Text>
    </View>
    
    <View style={styles.message}>
        <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
    </View>
    </View>

    <View style={styles.chat}>
        <Image source={avatarPapai} style={styles.avatar}/>
        <View style={styles.name}>
            <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>{nome3}</Text>
        </View>
        
        <View style={styles.message}>
            <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
        </View>
    </View>
    </>
  );
}