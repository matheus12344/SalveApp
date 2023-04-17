import React from 'react';
import {
    View, Image
  } from 'react-native';

import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import {styles} from './styles';
import { useFonts } from 'expo-font';
import { SearchBar } from '../SearchBar';

export function Header(props){


  const [loaded] = useFonts({
    GilroyBold: require('../../assets/fonts/Gilroy-Bold.ttf'),
    GilroyLight: require('../../assets/fonts/Gilroy-Light.otf')
});

  
  if (!loaded) {
    return null;
  }

    return(
    
    <View>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

        <Box safeAreaTop/>

        <HStack bg='#FFFFFF' px={1} py={3} justifyContent='space-between' alignItems='center'>
          <HStack space={4} alignItems='center'>
            <Text color="#2675EC"  fontFamily='GilroyBold' style={styles.title}>Salve</Text>
          </HStack>
          <HStack space={2}>
            <IconButton icon={<Icon as={<MaterialIcons name='add' />} size={7} color="#2675EC" />} />
            <SearchBar/>
            <IconButton icon={<Icon as={<MaterialIcons name='menu' />} size={7} color="#2675EC" />} />
          </HStack>
        </HStack>

      
    </View>
    )
}