import { WhiteBalance } from 'expo-camera/build/Camera.types';
import { useFonts } from 'expo-font';
import React from 'react';

import {
    Image,
    Text,
  TouchableOpacity,
  View
} from 'react-native';
import { width } from 'styled-system';
import sofa from '../../assets/sofa.png'

import { styles } from './styles';

export function ItemDetails(){
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
        <Image source={sofa} style={{width: 400, height: 300}}/>
        <View style={{backgroundColor: '#2675EC', width:420, height:500, borderTopRightRadius: 30, borderTopLeftRadius: 30, marginLeft:-4}}>
            <View style={{marginLeft: 10, marginTop:20}}>
                <Text style={{fontFamily:'GilroyBold', color: 'white', fontSize:25}}>Wooden Sofa</Text>
                <Text style={{fontFamily:'GilroyBold', color: 'black', fontSize:20}}>R$ 500,00</Text>
            </View>
            <View style={{marginLeft: 10, marginTop:30}}>
                <Text style={{fontFamily:'GilroySemiBold', color: 'white', fontSize:20}}>Color</Text>
                <View style={{flexDirection:'row', marginTop:10}}>
                    <View style={{backgroundColor: 'white', width: 25, height: 25, marginLeft: 20, borderRadius: 15}}/>
                    <View style={{backgroundColor: 'gray', width: 25, height: 25, marginLeft: 20, borderRadius: 15}}/>
                    <View style={{backgroundColor: 'black', width: 25, height: 25, marginLeft: 20, borderRadius: 15}}/>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop:30}}>
                <Text style={{fontFamily:'GilroyBold', color: 'black', fontSize:20, marginLeft:15}}>Descrição</Text>
                <View style={{width: 80, height: 3, backgroundColor:'black', marginTop:30, marginLeft: -103}}/>
                <Text style={{fontFamily:'GilroyBold', color: 'white', fontSize:20, marginLeft:45}}>Especifiações</Text>
            </View>
            <View style={{width: '95%', marginLeft:15, marginTop: 10}}>
                <Text>The Sofa is made of comfortable and best quality Fabrics/Artificial Leather. Best quality Super Soft Foam. Frame & Floor Touch Material: Solid Mahogany Wood and Best quality Plywood.</Text>
            </View>

            <View>
                <View style={{flexDirection:'row'}}> 
                    <TouchableOpacity style={{backgroundColor: 'white', width:50, height: 60, alignItems:'center', justifyContent: 'center', borderTopLeftRadius: 20, borderBottomLeftRadius:20, marginTop: 60,marginLeft: 10,borderColor: 'black', borderWidth:1}}>
                            <Text style={{fontFamily:'GilroyBold', color: 'black', fontSize:20}}>-</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'white', width:50, height: 60, alignItems:'center', justifyContent: 'center',marginTop: 60,borderColor: 'black', borderWidth:1}}>
                        <Text style={{fontFamily:'GilroyBold', color: 'black', fontSize:20}}>1</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: 'white', width:50, height: 60, alignItems:'center', justifyContent: 'center', borderTopRightRadius: 20, borderBottomRightRadius:20, marginTop: 60,borderColor: 'black', borderWidth:1}}>
                            <Text style={{fontFamily:'GilroyBold', color: 'black', fontSize:20}}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor: 'white', width:120, height: 60, alignItems:'center', justifyContent: 'center', borderRadius: 20,marginTop: 60,marginLeft: 100}}>
                    <Text style={{fontFamily:'GilroyBold', color: 'black', fontSize:20}}>Comprar</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        </View>
    </View>
  );
}