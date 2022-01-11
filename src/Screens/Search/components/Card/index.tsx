import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { CardData } from '../../../../constants/CardData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';


export function Card(){
    const navigation = useNavigation()
    const [trending, setTrending] = useState(CardData)
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 18,
                width: 145,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 1 : 0,
                marginRight: 10,
                borderRadius: 20,
                backgroundColor: item.color,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 26
            }}
            onPress={()=> navigation.navigate(item.url) }
        >
            <View style={{flexDirection: 'row',}}>
                <View style={{marginLeft: 25, alignItems: 'center'}}>
                    <MaterialCommunityIcons name={item.icon} size={24} color="black" style={{marginLeft: -90}}/>
                   <Text style={{ fontSize: 15, color: 'black', fontFamily: 'GilroyBold', marginTop: -23}}>{item.name}</Text>
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
            contentContainerStyle={{marginTop: 3}}
            data={CardData}
            renderItem={renderItem}
            horizontal
            keyExtractor={item => `${item.id}`}
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: 20}}
        />

    </View>
  );
}