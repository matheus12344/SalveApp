import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {CategoryMusicData} from '../../constants/CategoryMusicData';

import { styles } from './styles';

export function CategoryMusic(){
  
    const [trending, setTrending] = useState(CategoryMusicData)
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 18,
                width: 175,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 1 : 0,
                marginRight: 10,
                borderRadius: 10,
                backgroundColor: item.color,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 26
            }}
        >
            <View style={{flexGrow: 1,}}>
                <View style={{marginLeft: 1, justifyContent: 'center', alignItems: 'center', marginTop:-11}}>
                   <Text style={{ fontSize: 18, color: '#FFFFFF', fontFamily: 'GilroyBold' }}>{item.name}</Text>
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
        <Text style={{marginLeft: 20,fontSize: 20,fontFamily: 'GilroyBold', marginTop: 18}}>Categorias</Text>
        <FlatList
            contentContainerStyle={{marginTop: 3}}
            data={CategoryMusicData}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: 20}}
        />

    </View>
  );
}