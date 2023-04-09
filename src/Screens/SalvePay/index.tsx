import React, { useState } from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
    ScrollView,
    Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Profile } from '../../components/Profile';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { CriptoData } from '../../constants/CriptoData';
import Status from '../../components/Status';

const Saldo = 'R$ 365.600,00'




function Header(){
  
  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
    GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf'),
    GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf')
  });

  if (!loaded) {
    return null;
  }

  return(
    <SafeAreaView style={{flexDirection:'row', marginTop: 20, marginLeft: 10}}>
        <Profile/>
        <View style={{marginLeft: 20, marginTop:5}}>
          <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15}}>Bom dia!</Text>
          <Text style={{fontFamily: 'GilroyBold', fontSize: 18}}>Matheus Henrique👋</Text>
        </View>

        <TouchableOpacity style={{backgroundColor: `rgba(72, 72, 73, 0.4)`, width: 50, height:50, alignSelf:'center', justifyContent:'center', alignItems:'center', borderRadius:30, marginLeft: 60}}>
          <Ionicons name="ios-notifications-sharp" size={25} color="#ffffff" />
        </TouchableOpacity>
    </SafeAreaView>
  )
}

function Balance(){
  return(
    <View style={{ marginTop: 30, marginLeft:10}}>
      <Text style={{fontFamily:'GilroySemiBold', fontSize: 17, color: 'gray'}}>Saldo</Text>
      <Text style={{fontFamily:'GilroyBold', fontSize: 30, marginTop:5}}>{Saldo}</Text>
      <TouchableOpacity style={{height: 56, width:56, backgroundColor: '#2675EC', borderRadius:10, left: 330, top: -50, alignItems:'center', justifyContent:'center'}}>
        <Ionicons name="download-outline" size={40} color="white" style={{left: 1, top:-2}}/>
      </TouchableOpacity>
    </View>
  )
}

function CardCripto(){
  const [trending, setTrending] = useState(CriptoData)
    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 20,
                width: 200,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 10,
                backgroundColor: '#F9FAFB',
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
        >
            <View style={{flexDirection: 'row',}}>
              <View style={{width: 50, height:50, borderRadius: 30, marginLeft:-20, top: -20, right: 20}}>
                <Image source={item.image} style={{width: '100%', height: '100%', marginTop:-10}}/>
              </View>
                <View style={{marginLeft: 3, justifyContent: 'center', marginTop:-20,}}>
                   <Text style={{ fontSize: 18, fontFamily: 'GilroyBold' }}>{item.sigla}</Text>
                   <Text style={{ fontSize: 15, fontFamily: 'GilroySemiBold', color:'gray'}}>{item.name}</Text>
                   <Text style={{ fontSize: 18, fontFamily: 'GilroySemiBold', top:20, left: -65}}>{item.value}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

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
  )
}

function Cripto(){
  return(
    <View>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontFamily:'GilroySemiBold', fontSize: 18, color:'gray', marginLeft: 10}}>My Assets</Text>
        <Text style={{fontFamily:'GilroySemiBold', color: '#2675EC', marginLeft:240}}>View All</Text>
      </View>
      <CardCripto/>
    </View>
  )
}

function QuickSend(){
  return(
    <View>
      <Text style={{fontFamily: 'GilroySemiBold', color:'gray', fontSize: 18, marginTop: 20, left: 10}}>Quick Send</Text>
      <View style={{marginTop: 10}}>
        <Status/>
      </View>
    </View>
  )
}

function RecentActivity(){
  return(
    <View>
      <View style={{flexDirection:'row', marginLeft: 6, top: 10}}>
        <Ionicons name="add-circle" size={65} color="#0AC200"/>
          <View style={{marginTop:10, flexDirection:'row'}}>
            <Text style={{fontFamily:'GilroyBold'}}>Pix Recebido</Text>
            <Text style={{left: 160, fontFamily:'GilroyBold', color:'#0AC200'}}>+$100.00</Text>
          </View>
          <View style={{marginTop:35, flexDirection:'row', left: -155}}>
            <Text style={{fontFamily:'GilroySemiBold'}}>9:30am - Aug 5th 2022</Text>
            <Text style={{marginLeft: 30, fontFamily:'GilroySemiBold'}}>Pix bem sucedido</Text>
          </View>
      </View>
      <View style={{flexDirection:'row', marginLeft: 9, marginTop: 20}}>
        <AntDesign name="minuscircle" size={55} color="#e31e10" />
        <View style={{marginTop:10, flexDirection:'row', left: 10}}>
            <Text style={{fontFamily:'GilroySemiBold'}}>Compra Realizada</Text>
            <Text style={{left: 120, fontFamily:'GilroyBold', color: '#e31e10'}}>-$450.00</Text>
          </View>
          <View style={{marginTop:35, flexDirection:'row', left: -188}}>
            <Text style={{fontFamily:'GilroySemiBold'}}>9:30am - Aug 5th 2022</Text>
            <Text style={{marginLeft: 30, fontFamily:'GilroySemiBold'}}>Compra Realizada</Text>
          </View>
      </View>
    </View>
  )
}


export function SalvePay(){
  return (
    <ScrollView style={{backgroundColor:'#ffffff'}}>
      <Header/>
      <Balance/>
      <Cripto/>
      <QuickSend/>
      <Text style={{fontFamily: 'GilroySemiBold', color:'gray', fontSize: 18, marginTop: 20, left: 10}}>Recent Activity</Text>
      <RecentActivity/>
      <RecentActivity/>
      <RecentActivity/>
      <RecentActivity/>
    </ScrollView>
  );
}