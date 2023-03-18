import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { justifyContent } from 'styled-system';
import {SportsData} from '../../constants/SportsData'


import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function SportsCard(){
  
    const [trending, setTrending] = useState(SportsData)
    const navigation = useNavigation()
    const renderItem = ({item, index}) => (
        <View
            style={{
                marginTop: 25,
                width: 150,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 10,
                backgroundColor: 'white',
                height: 130,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
        >
            <View style={{flexDirection: 'row',}}>
                <View>     
                   <Text style={{ fontSize: 35, color: '#2675EC', fontFamily: 'GilroyBold', marginLeft: 5 }}>{item.value}</Text>
                   <Text style={{ fontSize: 15, color: '#b6b5b5', fontFamily: 'GilroySemiBold', marginTop: 10 }}>{item.name}</Text>
                </View>
            </View>
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