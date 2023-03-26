import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { justifyContent } from 'styled-system';
import { CategoryListData } from '../../constants/CategoryListData';
import dummyData from '../../constants/dummy';

import { styles } from './styles';

export function CategoryStore(){
  
    const [trending, setTrending] = useState(CategoryListData)
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 10,
                width: 100,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 10,
                backgroundColor: '#d0d0d0',
                height: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
        >
            <View style={{flexDirection: 'row',}}>
                <View style={{marginLeft: 3, justifyContent: 'center', alignItems: 'center', marginTop:-20,}}>
                   <Text style={{ fontSize: 15, color: 'black', fontFamily: 'GilroyBold' }}>{item.name}</Text>
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