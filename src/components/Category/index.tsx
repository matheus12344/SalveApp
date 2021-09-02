import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { justifyContent } from 'styled-system';
import dummyData from '../../constants/dummy';

import { styles } from './styles';

export function Category(){
  
    const [trending, setTrending] = useState(dummyData.trendingCurrencies)
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 25,
                width: 170,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 10,
                backgroundColor: '#2675EC',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
        >
            <View style={{flexDirection: 'row',}}>
                <View style={{marginLeft: 8, justifyContent: 'center', alignItems: 'center'}}>
                   <Text style={{ fontSize: 18, color: '#FFFFFF', fontFamily: 'GilroyBold' }}>{item.currency}</Text>
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
            data={trending}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
        />

    </View>
  );
}