import { Profile } from '../../components/Profile';
import React from 'react';

import {
  Image,
    Linking,
    ScrollView,
    Text,
  TouchableOpacity,
  View
} from 'react-native';

import { useFonts } from 'expo-font';
import aviaonews from '../../assets/aviaonews.png'
import { ItemNews } from './components/ItemNews';
import { Card } from './components/Card';
import { Feather } from '@expo/vector-icons';

export function News(){
  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
    GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf'),
    GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf')
});
  return (
    <ScrollView style={{backgroundColor:'#ffffff'}}>
      <View style={{marginTop: 20, marginLeft: 10, flexDirection:'row'}}>
        <Profile/>
        <TouchableOpacity style={{marginLeft: 280, marginTop:10}}>
          <Feather name="menu" size={30} color="#2675EC" />
        </TouchableOpacity>
      </View>

      <Card/>

        <View style={{backgroundColor:'blue',height:450,width:'95%',borderBottomLeftRadius:40,borderRadius:40, alignSelf:'center', marginTop: 20}}>
          <Image source={aviaonews} style={{height:450, width:'100%',borderRadius:40}}/>
          

          <View style={{backgroundColor: `rgba(72, 72, 73, 0.4)`,height: 35,width:155,marginLeft: 40,justifyContent: 'center',alignItems:'center',borderRadius:20,marginTop:-250,}}>
            <Text style={{fontFamily: 'GilroySemiBold',fontSize:13,color:'#ffff'}}>News of the Day</Text>
          </View>

          <Text style={{fontFamily: 'GilroyBold',fontSize:25,color:'#ffff',marginLeft: 40,marginTop:20,marginRight:20}}>As simulações de ataque da China a Taiwan que deixam mundo em alerta</Text>
          
          <TouchableOpacity style={{marginLeft: 40,marginTop:20}} onPress={() => Linking.openURL('https://g1.globo.com/mundo/noticia/2023/04/09/as-simulacoes-de-ataque-da-china-a-taiwan-que-deixam-mundo-em-alerta.ghtml')}>
            <Text style={{fontFamily: 'GilroyBold',fontSize:15,color:'#ffff'}}>Learn More</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontFamily: 'GilroyBold',fontSize:25,color:'black', marginTop:40, marginLeft:40}}>Breaking News</Text>
            <TouchableOpacity style={{marginLeft: 100,marginTop:45}}>
              <Text style={{fontFamily: 'GilroyBold',fontSize:20,color:'black'}}>More</Text>
            </TouchableOpacity>
          </View>
            <ItemNews/>
    </ScrollView>
  );
}