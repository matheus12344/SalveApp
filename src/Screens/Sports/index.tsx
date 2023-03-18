import { useFonts } from 'expo-font';
import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';



import CorinthiansSimbolo from '../../assets/CorinthiansSimbolo.png'
import PalmeirasSimbolo from '../../assets/PalmeirasSimbolo.png'
import { SportsCard } from '../../components/SportsCard';

export function Sports(){
  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
    GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf')
  });

  
  if (!loaded) {
    return null;
  }
  return (
    <ScrollView>

        <View style={{backgroundColor: '#191970', height: 350, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
          <Text style={{textAlign: 'center', marginTop: 30, fontFamily:'GilroyBold', fontSize:20, color: 'white'}}>Brasileirão Serie A</Text>
        </View>

      <View style={{
          flexDirection: 'row', 
          backgroundColor: 'white', 
          alignContent: 'center', 
          justifyContent: 'center',
          marginLeft: 20,
          marginRight: 10,
          marginTop: 80,
          borderRadius: 30,
          height: 350,
          width: '90%',
          position: 'absolute'
        }}>

        

        <View style={{justifyContent:'center', alignContent:'center', marginLeft: -20}}>
          <Image source={CorinthiansSimbolo} style={{width:100, height: 100}}/>
          <Text style={{color: 'black', fontFamily: 'GilroySemiBold', fontSize: 20, textAlign: 'center'}}>Corinthians</Text>
          <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 15, textAlign: 'center', color:'gray'}}>Casa</Text>
        </View>

        <View style={{marginTop: 20, height:50, marginRight: 100, position:'absolute'}}>
          <Text style={{color: 'black', fontFamily: 'GilroySemiBold',  fontSize: 20, textAlign: 'center',}}>Neo Quimica Arena</Text>
          <Text style={{color: 'gray', fontFamily: 'GilroySemiBold',  fontSize: 15, textAlign: 'center',marginTop: 5}}>Partida 50</Text>
          
        </View>

        <View style={{marginTop: 130, flexDirection: 'row',justifyContent:'center', alignContent:'center',marginLeft: 40,}}>
          <Text style={{color: 'black', fontFamily: 'GilroySemiBold',  fontSize: 25}}>3</Text>
          <Text style={{color: 'black', fontFamily: 'GilroySemiBold', marginLeft: 2, marginRight:2,  fontSize: 25}}>:</Text>
          <Text style={{color: 'black', fontFamily: 'GilroySemiBold',  fontSize: 25}}>1</Text>
        </View>

        <View style={{marginTop: 180, flexDirection: 'row',justifyContent:'center', alignContent:'center',marginLeft: -54, backgroundColor:'#7faef4', height: 50, width: 70, borderRadius: 10, borderColor:'#0f5bcef9', borderWidth:2}}>
          <Text style={{color: '#0f5bcef9', fontFamily: 'GilroySemiBold',  fontSize: 25, marginLeft: 5, marginTop: 5}}>90'</Text>
        </View>

        <View style={{justifyContent:'center', alignContent:'center'}}>
          <Image source={PalmeirasSimbolo} style={{width:100, height: 100, marginLeft: 23}}/>
          <Text style={{color: 'black', fontFamily: 'GilroySemiBold', fontSize: 20, textAlign: 'center', marginLeft: 20}}>Palmeiras</Text>
          <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 15, textAlign: 'center', marginLeft: 20, color: 'gray'}}>Visitante</Text>
        </View>
        <View style={{
          marginTop: 300,
          marginLeft: -200,
        }}>
         <Text style={{marginLeft: -135, color: 'gray', fontFamily: 'GilroySemiBold',  fontSize: 10,}}>15', 20', 45'(P) Róger Guedes</Text>
         <View style={{
            marginLeft: 80,
            marginTop: -15
          }}>
          <Text style={{marginLeft: 20, color: 'gray', fontFamily: 'GilroySemiBold',  fontSize: 10,}}>5' Rafael Veiga</Text>
         </View>
        </View>
      </View>

      <View style={{marginTop: 80}}>
        <SportsCard/>
      </View>

      <View>
        <Text>Classificação</Text>
        
      </View>

      
   </ScrollView>
    
  );
}