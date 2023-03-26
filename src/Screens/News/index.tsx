import { Profile } from '../../components/Profile';
import React from 'react';

import {
  Image,
    ScrollView,
    Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';
import { useFonts } from 'expo-font';
import immunization from '../../assets/immunization.jpg'

export function News(){
  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
    GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf'),
    GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf')
});
  return (
    <View style={{backgroundColor:'#ffffff'}}>
        <View style={{
          backgroundColor:'blue',
          height:400,
          borderBottomLeftRadius:40,
          borderBottomRightRadius:40,
        }}>
          <Image source={immunization} style={{height:400, width:'100%', opacity:0.8,borderBottomLeftRadius:40,borderBottomRightRadius:40,}}/>

          <View style={{
            marginTop:-380,
            marginLeft:15
          }}>
            <Profile/>
          </View>

          <View style={{
            backgroundColor: `rgba(136, 136, 143, 0.4)`,
            height: 35,
            width:155,
            marginLeft: 40,
            justifyContent: 'center',
            alignItems:'center',
            borderRadius:20,
            marginTop:90,
          }}>
            <Text style={{fontFamily: 'GilroySemiBold',fontSize:13,color:'#ffff'}}>News of the Day</Text>
          </View>

          <Text style={{fontFamily: 'GilroyBold',fontSize:25,color:'#ffff',marginLeft: 40,marginTop:20,marginRight:20}}>'V.I.P Immunization' for the Powerful and Their Cronies Rattles South America</Text>
          
          <TouchableOpacity style={{marginLeft: 40,marginTop:20}}>
            <Text style={{fontFamily: 'GilroyBold',fontSize:15,color:'#ffff'}}>Learn More</Text>
          </TouchableOpacity>
          
          <View style={{flexDirection:'row'}}>
            <Text style={{fontFamily: 'GilroyBold',fontSize:25,color:'black', marginTop:80, marginLeft:40}}>Breaking News</Text>
            <TouchableOpacity style={{marginLeft: 100,marginTop:85}}>
              <Text style={{fontFamily: 'GilroyBold',fontSize:20,color:'black'}}>More</Text>
            </TouchableOpacity>
          </View>
          
        </View>
    </View>
  );
}