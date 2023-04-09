import { useFonts } from 'expo-font';
import React, { useState } from 'react';

import {
    FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NewsData } from '../../../../constants/NewsData';

export function ItemNews(){
  
    const [trending, setTrending] = useState(NewsData)
    const navigation = useNavigation()
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 5,
                width: 330,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 20,
                backgroundColor: '#ffffff',
                height: 360,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
            onPress={() => Linking.openURL(item.url)}
        >
            <View style={{flexDirection: 'row'}}>
                <View>     
                   <Image source={item.image} style={{width: 330, height: 190, marginLeft: 30, borderRadius: 20, marginRight:30, marginTop:-13}}/> 
                   <Text style={{ fontSize: 17, color: 'black', fontFamily: 'GilroyBold', marginLeft:30, marginTop:10}}>{item.title}</Text>
                   <View style={{marginLeft: 30, marginTop: 5}}>
                        <Text style={{fontFamily:'GilroySemiBold', color: 'gray'}}>{item.hour} - {item.by}</Text>
                   </View>
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