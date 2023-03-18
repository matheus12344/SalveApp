import { useFonts } from 'expo-font';
import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    Text,
  View
} from 'react-native';
import { CategoryStore } from '../../components/CategoryStore';
import { ItemStore } from '../../components/ItemStore';
import { Profile } from '../../components/Profile';
import { SearchBar } from '../../components/SearchBar';

import { styles } from './styles';

export function Store(){
    const [loaded] = useFonts({
        GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
        GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf')
    });
    
      
      if (!loaded) {
        return null;
      }
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <Text style={{fontFamily: 'GilroySemiBold', fontSize: 20, color:'#777777', marginLeft: 10}}>Giving home a</Text>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 20, color: '#4e4e4e', marginLeft: 10}}>New look</Text>
        
        <View style={{flexDirection: 'row', alignItems:'flex-end', justifyContent:'flex-end', marginTop:-50, marginRight: 5}}>
            <View style={{marginRight: 10}}>
                <SearchBar/>
            </View>
            <Profile/>
        </View>

        <View style={{marginTop:30, marginLeft: 10}}>
            <Text style={{fontFamily: 'GilroySemiBold', fontSize: 18}}>Category</Text>
            <CategoryStore/>
        </View>

        <Text style={{fontFamily: 'GilroyBold', fontSize: 18, color: 'black', marginTop: 30, marginLeft: 10}}>Top</Text>
        
        <ItemStore/>
        
        <Text style={{fontFamily: 'GilroyBold', fontSize: 18, color: 'black', marginTop: 30, marginLeft: 10}}>Best Seller</Text>

        <ItemStore/>

        <Text style={{fontFamily: 'GilroyBold', fontSize: 18, color: 'black', marginTop: 30, marginLeft: 10}}>Room</Text>

        <ItemStore/>

    </ScrollView>
  );
}