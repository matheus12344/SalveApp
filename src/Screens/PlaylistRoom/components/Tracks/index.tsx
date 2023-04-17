import { useFonts } from 'expo-font';
import React , {useState} from 'react';

import {
  View, Image, Text, TouchableOpacity, FlatList
} from 'react-native';


import avatar from '../../../../assets/avatar.png'
import { theme } from '../../../../global/styles/theme';
import { styles } from './styles';
import { songs } from '../../../../constants/Model/Data';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome } from '@expo/vector-icons';



export function Tracks(){
    const navigation = useNavigation()
    const [trending, setTrending] = useState(songs)
    const renderItem = ({item, index}) => (
        <View>
            <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('MusicRoom', {
                title: item.title,
                artists: item.artists,
                image: item.image
            })}>
                    <View>
                        <Image source={item.image} style={styles.avatar}/>
                        <View style={styles.name}>
                            <Text style={{ fontSize: 18, color: 'black', fontFamily: 'GilroyBold' }}>{item.title}</Text>  
                        </View>
                        <View style={styles.hour}>
                            <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>{item.hour}</Text>
                        </View>
                        <View style={styles.message}>
                            <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>{item.artists}</Text>
                            <View style={styles.notification}>
                                <FontAwesome name="heart" size={24} color="#2675EC" />
                            </View>
                        </View>
                    </View>
            </TouchableOpacity>
        </View>
    )

    const [loaded] = useFonts({
        GilroyBold: require('../../../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../../../assets/fonts/Gilroy-Light.otf'),
        GilroyRegular: require('../../../../assets/fonts/Gilroy-Regular.ttf')
    });

      
      if (!loaded) {
        return null;
      }

  return (
    <View>
        <FlatList
            data={songs}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}

        />

    </View>
  );
}