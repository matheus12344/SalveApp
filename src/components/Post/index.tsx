import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useFonts } from 'expo-font';

import avatar from '../../assets/avatar.png'
import avatarMamae from '../../assets/Contact/mamãe.png'
import avatarPapai from '../../assets/Contact/papai.png'
import avatarMiguel from '../../assets/Contact/miguel.png'
import mayara from '../../assets/Contact/Mayara.png'
import avatarAgatha from '../../assets/Contact/agatha.png'
import avatarIsaque from '../../assets/Contact/isaque.png'
import beach from '../../assets/beach.png'
import PhotoMamae from '../../assets/Photos/PhotoMamae.png'

import { styles } from './styles';

import { 
  FontAwesome, 
  Ionicons, 
  AntDesign, 
  Entypo, 
  Feather,
  Fontisto, 
  MaterialCommunityIcons 
} from '@expo/vector-icons';

export function Post(){
    const [loaded] = useFonts({
        GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../assets/fonts/Gilroy-Light.otf'),
        GilroyRegular: require('../../assets/fonts/Gilroy-Regular.ttf'),
        GilroySemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf')
    });
    
      if (!loaded) {
        return null;
      }
    
  return (
    <ScrollView style={{marginTop: -5}} showsVerticalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
        <Image source={avatarMamae} style={styles.profile}/>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 20, marginTop: 20, marginLeft: 5}}>Mamãe</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={30} color="black"  style={{marginLeft: 235, marginTop: 20}}/>
        </TouchableOpacity>        
      </View>

      <View>
        <Image source={PhotoMamae} style={styles.photo}/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Entypo name="share" size={30} color="black" style={{marginLeft: 5, marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="chat" size={30} color="black" style={{marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="heart" size={30} color="red" style={{ marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bookmark-outline" size={30} color="#2675EC" style={{marginLeft: 230,marginRight: 15, marginTop: 2}} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15, marginLeft: 5, marginTop: 2}}>Mamãe: </Text>
        <Text style={{fontFamily: 'GilroyRegular', fontSize: 13, marginLeft: 3, marginTop: 4}}>Ta chegando nossos 19 anos de casados 🥰🥰🎉</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image source={avatar} style={styles.profile}/>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 20, marginTop: 20, marginLeft: 5}}>Teste</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={30} color="black"  style={{marginLeft: 255, marginTop: 20}}/>
        </TouchableOpacity>        
      </View>

      <View>
        <Image source={beach} style={styles.photo}/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Entypo name="share" size={30} color="black" style={{marginLeft: 5, marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="chat" size={30} color="black" style={{marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="heart" size={30} color="red" style={{ marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bookmark-outline" size={30} color="#2675EC" style={{marginLeft: 240,marginRight: 15, marginTop: 2}} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15, marginLeft: 5}}>Teste: </Text>
        <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, marginLeft: 7, marginTop: 1}}>Prainha né pai</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image source={avatar} style={styles.profile}/>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 20, marginTop: 20, marginLeft: 5}}>Teste</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={30} color="black"  style={{marginLeft: 255, marginTop: 20}}/>
        </TouchableOpacity>        
      </View>

      <View>
        <Image source={beach} style={styles.photo}/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Entypo name="share" size={30} color="black" style={{marginLeft: 5, marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="chat" size={30} color="black" style={{marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="heart" size={30} color="red" style={{ marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bookmark-outline" size={30} color="#2675EC" style={{marginLeft: 240,marginRight: 15, marginTop: 2}} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15, marginLeft: 5}}>Teste: </Text>
        <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, marginLeft: 7, marginTop: 1}}>Prainha né pai</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image source={avatar} style={styles.profile}/>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 20, marginTop: 20, marginLeft: 5}}>Teste</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={30} color="black"  style={{marginLeft: 255, marginTop: 20}}/>
        </TouchableOpacity>        
      </View>

      <View>
        <Image source={beach} style={styles.photo}/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Entypo name="share" size={30} color="black" style={{marginLeft: 5, marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="chat" size={30} color="black" style={{marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="heart" size={30} color="red" style={{ marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bookmark-outline" size={30} color="#2675EC" style={{marginLeft: 240,marginRight: 15, marginTop: 2}} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15, marginLeft: 5}}>Teste: </Text>
        <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, marginLeft: 7, marginTop: 1}}>Prainha né pai</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image source={avatar} style={styles.profile}/>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 20, marginTop: 20, marginLeft: 5}}>Teste</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={30} color="black"  style={{marginLeft: 255, marginTop: 20}}/>
        </TouchableOpacity>        
      </View>

      <View>
        <Image source={beach} style={styles.photo}/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Entypo name="share" size={30} color="black" style={{marginLeft: 5, marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="chat" size={30} color="black" style={{marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="heart" size={30} color="red" style={{ marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bookmark-outline" size={30} color="#2675EC" style={{marginLeft: 240,marginRight: 15, marginTop: 2}} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15, marginLeft: 5}}>Teste: </Text>
        <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, marginLeft: 7, marginTop: 1}}>Prainha né pai</Text>
      </View>


      <View style={{flexDirection: 'row'}}>
        <Image source={avatar} style={styles.profile}/>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 20, marginTop: 20, marginLeft: 5}}>Teste</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={30} color="black"  style={{marginLeft: 255, marginTop: 20}}/>
        </TouchableOpacity>        
      </View>

      <View>
        <Image source={beach} style={styles.photo}/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Entypo name="share" size={30} color="black" style={{marginLeft: 5, marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="chat" size={30} color="black" style={{marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="heart" size={30} color="red" style={{ marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bookmark-outline" size={30} color="#2675EC" style={{marginLeft: 240,marginRight: 15, marginTop: 2}} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15, marginLeft: 5}}>Teste: </Text>
        <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, marginLeft: 7, marginTop: 1}}>Prainha né pai</Text>
      </View>


      <View style={{flexDirection: 'row'}}>
        <Image source={avatar} style={styles.profile}/>
        <Text style={{fontFamily: 'GilroyBold', fontSize: 20, marginTop: 20, marginLeft: 5}}>Teste</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={30} color="black"  style={{marginLeft: 255, marginTop: 20}}/>
        </TouchableOpacity>        
      </View>

      <View>
        <Image source={beach} style={styles.photo}/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Entypo name="share" size={30} color="black" style={{marginLeft: 5, marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="chat" size={30} color="black" style={{marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="heart" size={30} color="red" style={{ marginRight: 15, marginTop: 2}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bookmark-outline" size={30} color="#2675EC" style={{marginLeft: 240,marginRight: 15, marginTop: 2}} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'GilroySemiBold', fontSize: 15, marginLeft: 5}}>Teste: </Text>
        <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, marginLeft: 7, marginTop: 1}}>Prainha né pai</Text>
      </View>


      
    </ScrollView>
  );
}