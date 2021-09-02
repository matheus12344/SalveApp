import { useFonts } from 'expo-font';
import React from 'react';

import {
  View, Image, Text, TouchableOpacity
} from 'react-native';
import { fontFamily } from 'styled-system';

import avatar from '../../assets/avatar.png'
import avatarMamae from '../../assets/Contact/mamãe.png'
import avatarPapai from '../../assets/Contact/papai.png'
import avatarMiguel from '../../assets/Contact/miguel.png'
import mayara from '../../assets/Contact/Mayara.png'
import avatarAgatha from '../../assets/Contact/agatha.png'
import avatarIsaque from '../../assets/Contact/isaque.png'
import ViewMsg from '../../assets/Icons/Viewmessage.png'
import NotView from '../../assets/Icons/-Viewmessage.png'

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';


export function Contact(){

    const nome1 = 'Miguel Irmão'

    const nome2 = "Mamãe"

    const nome3 = "Papai"
    

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
    <View style={styles.container}>
    
        <TouchableOpacity style={styles.chat}>
            <Image source={avatarMiguel} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>{nome1}</Text>
                <View style={styles.hour}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>15:00</Text>
                </View>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Mete o loko fi</Text>
                <View style={styles.notification}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 18, color: '#FFFFFF'}}>5</Text>
                </View>
            </View>
            
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.chat}>
            <Image source={avatarMamae} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>{nome2}</Text>
                <View style={styles.hour}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>10:00</Text>
                </View>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.notification}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 18, color: '#FFFFFF'}}>1</Text>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatarPapai} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>{nome3}</Text>
                <View style={styles.hour}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>17:00</Text>
                </View>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.notification}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 18, color: '#FFFFFF'}}>1</Text>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatarAgatha} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 22}}>Agatha minha Vida💙</Text>
                <View style={styles.hour}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>9:00</Text>
                </View>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>bom diaaa Vida 🥰🥰🥰</Text>
                <View style={styles.notification}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 18, color: '#FFFFFF'}}>1</Text>
                </View>
            </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.chat}>
            <Image source={avatarIsaque} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Isaquezin</Text>
                <View style={styles.hour}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>23:25</Text>
                </View>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.notification}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 18, color: '#FFFFFF'}}>1</Text>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
                <View style={styles.hour}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>15:00</Text>
                </View>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={ViewMsg}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
                <View style={styles.hour}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>15:00</Text>
                </View>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={NotView}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
                <View style={styles.hour}>
                    <Text style={{fontFamily: 'GilroyRegular', fontSize: 15, color: '#848484'}}>15:00</Text>
                </View>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={NotView}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={NotView}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={NotView}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={NotView}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={NotView}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={NotView}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chat}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.name}>
                <Text style={{fontFamily: 'GilroyBold', fontSize: 23}}>Teste</Text>
            </View>
            
            <View style={styles.message}>
                <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color: theme.colors.blue}}>Falaaaaaa Papitoo blz??</Text>
                <View style={styles.viewMessage}>
                    <Image source={NotView}/>
                </View>
            </View>
        </TouchableOpacity>
    
    </View>
    </ScrollView>
  );
}