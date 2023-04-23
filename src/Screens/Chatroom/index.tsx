import React, { useEffect, useState } from 'react';

import {
    Text,
  View, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, Animated, Keyboard, ActivityIndicator
} from 'react-native';  // base para tudo funcionar
import  Toast  from 'react-native-toast-message';


import { useFonts } from 'expo-font'; // fontes

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // importação de icones
import { useRoute } from '@react-navigation/native';
import back from '../../assets/Icons/back.png'
import profile_menu from '../../assets/Icons/Profile_menu.png'


import * as Crypto from 'expo-crypto';
import * as FileSystem from 'expo-file-system'; //criptografia de mensagens
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set, get, remove, update, onChildAdded, push } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCuIrezy8C6u6lbAlzGSloNg0olc5U2uYk",
  authDomain: "salveapp-84ee8.firebaseapp.com",
  databaseURL: "https://salveapp-84ee8-default-rtdb.firebaseio.com",
  projectId: "salveapp-84ee8",
  storageBucket: "salveapp-84ee8.appspot.com",
  messagingSenderId: "428314438319",
  appId: "1:428314438319:web:339ff1671aa5de98ae825a",
  measurementId: "G-8TRNX4W8SB"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

type Message = { text: string; createdAt: Date };

type ChatroomProps = {
  navigation: any;
};


export function Chatroom({navigation}: ChatroomProps){
    const route = useRoute();
    const {name, image, Contactid} = route.params // rotas
    const [messages, setMessages] = useState([]); 
    const [messageText, setMessageText] = useState('');
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));// variaveis de estado
    const [messageCount, setMessageCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const database = getDatabase(); // Chamando o Firebase para a operação

  useEffect(() => {
   const addlistener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
   const addlistenerhide =Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      addlistener.remove()
      addlistenerhide.remove()
    };
  }, []);

  const keyboardDidShow = () => {
    Animated.timing(animatedValue, {
      toValue: -325 , // Altere o valor de acordo com a altura que você quiser subir
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const keyboardDidHide = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    transform: [{ translateY: animatedValue }],
  };

  async function saveMessageToFirebase(message: Message) {
    try {
      const messagesRef = ref(database, `messages/${Contactid}`);
      await push(messagesRef, message);
    } catch (error) {
      console.log(error);
    }
  }
  
  

  
  async function loadMessagesFromFirebase(): Promise<Message[]> {
    try {
      const snapshot = await get(ref(database, `messages/${Contactid}`));
      const messages = [];
      if (snapshot.exists()) {
        const data = snapshot.val();
        for (const messageId in data) {
          const message = data[messageId];
          messages.push({ ...message, id: messageId });
        }
      }
      console.log('loadedMessages', messages);
      return messages;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
  async function addMessagesFromFirebase(existingMessages: Message[]): Promise<Message[]> {
  try {
    const snapshot = await get(ref(database, `messages/${Contactid}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const updatedMessages = [...existingMessages]; // fazer uma cópia do array existente
      for (const messageId in data) {
        const message = data[messageId];
        // verificar se a nova mensagem já existe no array copiado
        if (!existingMessages.find((m) => m.id === messageId)) {
          updatedMessages.push({ ...message, id: messageId }); // adicionar apenas se não existir
        }
      }
      console.log('addedMessages', updatedMessages);
      return updatedMessages; // retornar o array copiado com as novas mensagens adicionadas
    }
    return existingMessages; // se não houver mensagens novas, retornar o array existente
  } catch (error) {
    console.log(error);
    return existingMessages;
  }
}
  
  
  async function deleteMessagesFromFirebase() {
    try {
      await remove(ref(database, `messages/${Contactid}`));
      console.log(`Mensagens do contato ${Contactid} apagadas com sucesso!`);
      Toast.show({
        type: 'success',
        text1: 'Mensagens apagadas',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSendMessage() {
    if (messageText) {
      const newCount = messageCount + 1;
      const newMessage = { id: `${newCount}_${Contactid}`, text: messageText, createdAt: new Date() };
      const newMessages = messages.concat(newMessage);;
      setMessages(newMessages);
      setMessageText('');
      await saveMessageToFirebase(newMessage);
      setMessageCount(newCount);
    }
  }
  

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const loadedMessages = await addMessagesFromFirebase(messages);
      setMessages(loadedMessages);
      setLoading(false);
    }
    fetchData();
  }, [setLoading]);
  
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
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
        <View style={{marginLeft: 20, marginTop: 60, flexDirection: 'row', height: 80}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={back} style={{marginTop: 23}}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={image} style={{height: 64, width: 64, borderRadius: 20, marginLeft: 20}}/>
            </TouchableOpacity>
            
            <Text style={{marginLeft: 25, fontFamily: 'GilroyBold', fontSize: 20, color:'black', marginTop: 10}}>{name}</Text>
            <Text style={{marginTop: 40, left: 120, color: '#2675EC', fontFamily: 'GilroySemiBold', fontSize: 16, position:'absolute'}}>Online</Text>
            <TouchableOpacity>
                <Image source={profile_menu} style={{ left: 140, marginTop: 20, position:'absolute'}}/>
            </TouchableOpacity>
        </View>
        {messages === null ? (
          <ActivityIndicator />
        ) : (
        <ScrollView keyboardShouldPersistTaps='always'>
         
            {messages.map((message, index) => (
            <View key={index} style={{backgroundColor: '#2675EC', width: 100, height: 50, borderRadius: 20, alignItems: 'center', justifyContent:'center', marginTop: 20, left:300 }}>
                <Text style={{fontFamily: 'GilroySemiBold', color: 'white'}}>{message.text}</Text>
            </View>
            ))}
             
        </ScrollView>
        )}
        <Animated.View style={[{ backgroundColor: '#FAFAFA', flexDirection: 'row', width: "90%", height: 70,top:690, borderRadius: 30, marginLeft: 20, justifyContent: 'flex-end',position: 'absolute' }, animatedStyle]}>
                <View>
                    <TextInput 
                        placeholder="Type your message..." 
                        placeholderTextColor="#848484" 
                        style={{flex:1, marginLeft: 10, color: '#848484', fontFamily: 'GilroyBold'}}
                        onChangeText={(text) => setMessageText(text)}
                        value={messageText}
                    />
                </View>
                    <TouchableOpacity onPress={deleteMessagesFromFirebase}>
                        <Entypo name="plus" size={30} color="#2675EC" style={{marginLeft: 30, marginTop: 20}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MaterialIcons name="emoji-emotions" size={30} color="#2675EC" style={{marginLeft: 20, marginTop: 20}}/>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MaterialCommunityIcons name="camera" size={30} color="#2675EC" style={{marginLeft: 20, marginTop: 20}} onPress={() => navigation.navigate('Camera')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:50, height:50, borderRadius:30, alignItems:'center', justifyContent:'center',backgroundColor:'#2675EC', left: 15, top: 9}} onPress={handleSendMessage}>
                        <Ionicons name="send" size={28} color="white" />
                    </TouchableOpacity>
       </Animated.View>           
       
          
        
    </SafeAreaView>
  );
}