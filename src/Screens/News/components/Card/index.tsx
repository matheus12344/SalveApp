import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { CategoryNews } from '../../../../constants/CategoryListData';

export function Card(){
  
    const [trending, setTrending] = useState(CategoryNews)
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 20,
                width: 140,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 10,
                backgroundColor: '#ffffff',
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
        >
            <View style={{flexDirection: 'row',}}>
                <View style={{marginLeft: 3, justifyContent: 'center', alignItems: 'center', marginTop:-20,}}>
                   <Text style={{ fontSize: 15, color: `${item.color}`, fontFamily: 'GilroyBold' }}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
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