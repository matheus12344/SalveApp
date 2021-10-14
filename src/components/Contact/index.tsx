import { useFonts } from 'expo-font';
import React , {useState} from 'react';

import {
  View, Image, Text, TouchableOpacity, FlatList
} from 'react-native';
import { fontFamily } from 'styled-system';

import avatar from '../../assets/avatar.png'
import avatarMamae from '../../assets/Contact/mamãe.png'
import avatarPapai from '../../assets/Contact/papai.png'
import avatarMiguel from '../../assets/Contact/miguel.png'
import mayara from '../../assets/Contact/Mayara.png'
import avatarAgatha from '../../assets/Contact/agatha.png'
import avatarIsaque from '../../assets/Contact/isaque.png'
import ViewMsg from '../../assets/Icons/Viewmessage.png'
import NotView from '../../assets/Icons/-Viewmessage.png'

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { Users } from '../../constants/ContactList';
import { useNavigation } from '@react-navigation/core';



export function Contact(){
    const navigation = useNavigation()
    const [trending, setTrending] = useState(Users)
    const renderItem = ({item, index}) => (
        <View>
            <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('Chatroom')}>
                    <View>
                        <Image source={item.profile} style={styles.avatar}/>
                        <View style={styles.name}>
                            <Text style={{ fontSize: 18, color: 'black', fontFamily: 'GilroyBold' }}>{item.name}</Text>  
                        </View>
                        <View style={styles.hour}>
                            <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>{item.hour}</Text>
                        </View>
                        <View style={styles.message}>
                            <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>{item.lastMessage}</Text>
                        <View style={styles.notification}>
                            <Text style={{fontFamily: 'GilroyRegular', fontSize: 18, color: '#FFFFFF'}}>{item.notification}</Text>
                        </View>
                    </View>
                    </View>
            </TouchableOpacity>
        </View>
    )

    const [loaded] = useFonts({
        GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
        GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf')
    });

      
      if (!loaded) {
        return null;
      }

  return (
    <View>
        <FlatList
            data={Users}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}

        />

    </View>
  );
}