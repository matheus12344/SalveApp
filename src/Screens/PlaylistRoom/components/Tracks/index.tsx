import { useFonts } from 'expo-font';
import React , {useState} from 'react';

import {
  View, Image, Text, TouchableOpacity, FlatList
} from 'react-native';


import { theme } from '../../../../global/styles/theme';
import { styles } from './styles';
import { songs } from '../../../../constants/Model/Data';
import { useNavigation } from '@react-navigation/core';



export function Tracks(){
    const navigation = useNavigation()
    const [trending, setTrending] = useState(songs)
    const renderItem = ({item, index}) => (
        <View>
            <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 10}} onPress={() => false}>
                    <View>
                        <Image source={item.profile} style={styles.avatar}/>
                        <View style={styles.name}>
                            <Text style={{ fontSize: 18, color: 'white', fontFamily: 'GilroyBold' }}>{item.name}</Text>  
                        </View>
                        <View style={styles.message}>
                            <Text style={{ fontFamily: 'GilroyLight', fontSize: 16, color:'white'}}>{item.artist}</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        </View>
    )

    const [loaded] = useFonts({
        GilroyBold: require('../../../../assets/fonts/Gilroy-Bold.ttf'),
        GilroyLight: require('../../../../assets/fonts/Gilroy-Light.otf'),
        GilroyRegular: require('../../../../assets/fonts/Gilroy-Regular.ttf')
    });

      
      if (!loaded) {
        return null;
      }

  return (
    <View>
        <FlatList
            data={songs}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}

        />

    </View>
  );
}