import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';

import {
    FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import axios from 'axios';




export function ItemNews(){
  
    const [trending, setTrending] = useState([])
    const [otherNews, setOtherNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
          const responseTrending = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=20fac463505949179957b94d7a6a586b`
          );
          setTrending(responseTrending.data.articles.slice(0, 5));
          
          const responseOtherNews = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=20fac463505949179957b94d7a6a586b`
          );
          setOtherNews(responseOtherNews.data.articles.slice(5, 10));
      };
      
        getNews();
      }, []);

    const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                marginTop: 5,
                width: 330,
                paddingVertical: 24,
                paddingHorizontal: 24,
                marginLeft: index == 0 ? 24 : 0,
                marginRight: 12,
                borderRadius: 20,
                backgroundColor: '#ffffff',
                height: 360,
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: 25
            }}
            onPress={() => Linking.openURL(item.url)}
        >
            <View style={{flexDirection: 'row'}}>
                <View>     
                   <Image source={item.urlToImage
      ? { uri: item.urlToImage }
      : require('../../../../assets/gptnews.png') } style={{width: 330, height: 190, marginLeft: 30, borderRadius: 20, marginRight:30, marginTop:-13}}/> 
                   <Text style={{ fontSize: 17, color: 'black', fontFamily: 'GilroyBold', marginLeft:30, marginTop:10}}>{item.title}</Text>
                   <View style={{marginLeft: 30, marginTop: 5}}>
                        <Text style={{fontFamily:'GilroySemiBold', color: 'gray'}}>{item.publishedAt} - {item.source.name}</Text>
                   </View>
                </View>
                
                
            </View>
        </TouchableOpacity>
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
            contentContainerStyle={{marginTop: 8}}
            data={trending}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />

        <FlatList
            contentContainerStyle={{marginTop: 8}}
            data={otherNews}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />


    </View>
  );
}