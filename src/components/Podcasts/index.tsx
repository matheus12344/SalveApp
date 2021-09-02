import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {PodcastData} from '../../constants/PodcastData';

import { styles } from './styles';

export function Podcasts(){
  
    const [trending, setTrending] = useState(PodcastData)
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: -15  ,
                width: 180,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 5,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                height: 250,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
        >
            <View style={{flexDirection: 'row',}}>
                <View style={{marginLeft: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={item.image} style={{height: 140, width: 150, borderRadius: 10}}/>
                    <Text style={{ fontSize: 15, color: 'black', fontFamily: 'GilroyBold', marginRight: 40, marginLeft: -15 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, color: 'gray', fontFamily: 'GilroyRegular',  marginLeft: -65 }}>{item.eps}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    const [loaded] = useFonts({
        GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
        GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf'),
        GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf')
    });

      
      if (!loaded) {
        return null;
      }
  return (
    <View>
        <Text style={{marginLeft: 20,fontSize: 20,fontFamily: 'GilroyBold', marginTop: 10}}>Podcast's</Text>
        <FlatList
            contentContainerStyle={{marginTop: 8}}
            data={PodcastData}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity>
            <Text style={{marginLeft: 20,fontSize: 15,fontFamily: 'GilroySemiBold', marginTop: 2, color: '#2675EC'}}>Browse All</Text>
        </TouchableOpacity>
    </View>
  );
}