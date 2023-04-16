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
import { CategoryListData, ItensStore } from '../../constants/CategoryListData';
import dummyData from '../../constants/dummy';

import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ItemStore(){
  
    const [trending, setTrending] = useState(ItensStore)
    const navigation = useNavigation()
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 25,
                width: 220,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 10,
                backgroundColor: '#d0d0d0',
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
            onPress={() => navigation.navigate('ItemDetails', {
              name: item.name,
              price: item.price,
              image: item.image,
              description: item.description
            })}
        >
            <View style={{flexDirection: 'row',}}>
                <View>     
                   <Image source={item.image} style={{width: 200, height: 100, marginLeft: 1, borderRadius: 5}}/> 
                   <Text style={{ fontSize: 17, color: 'black', fontFamily: 'GilroySemiBold' }}>{item.name}</Text>
                   <Text style={{ fontSize: 15, color: '#363636', fontFamily: 'GilroyBold', marginTop: 10 }}>{item.price}</Text>
                   <View style={{width: 30, height: 29, backgroundColor: '#2675EC', alignContent: 'center', justifyContent: 'center', borderRadius: 8, marginLeft: 180, marginTop:-20}}>
                     <Ionicons name="md-add-sharp" size={25} color="white" style={{marginLeft: 3}}/>
                   </View>
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