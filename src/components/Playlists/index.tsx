import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {playlistData} from '../../constants/PlaylistData';

import { styles } from './styles';

export function Playlist(){
  
    const [trending, setTrending] = useState(playlistData)
    const navigation = useNavigation()
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 5,
                width: 180,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                height: 205,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
            onPress={() => navigation.navigate('PlaylistRoom', {
                name: item.name,
                image: item.image,
                audioUri: item.music
            })}
        >
            <View style={{flexDirection: 'row',}}>
                <View style={{marginLeft: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={item.image} style={{height: 140, width: 150, borderRadius: 10, marginTop: 5}}/>
                    <Text style={{ fontSize: 15, color: 'black', fontFamily: 'GilroyBold', marginRight: 40, marginLeft: -15 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, color: 'gray', fontFamily: 'GilroyRegular',  marginLeft: -40 }}>{item.uploadTime}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
            contentContainerStyle={{marginTop: 8}}
            data={playlistData}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
        />

    </View>
  );
}