import React from 'react';

import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'
import { Video, AVPlaybackStatus } from 'expo-av';

import { styles } from './styles';
import photo1 from '../../../../assets/CardsPhotos/1.png'
import photo2 from '../../../../assets/CardsPhotos/2.png'
import photo3 from '../../../../assets/CardsPhotos/3.png'
import photo4 from '../../../../assets/CardsPhotos/4.png'
import photo5 from '../../../../assets/CardsPhotos/5.png'
import photo6 from '../../../../assets/CardsPhotos/6.png'
import photo7 from '../../../../assets/CardsPhotos/7.png'
import photo8 from '../../../../assets/CardsPhotos/8.png'
import photo9 from '../../../../assets/CardsPhotos/9.png'
import photo10 from '../../../../assets/CardsPhotos/10.png'
import { VideoPlayer } from '../VideoPlayer';


export function People(){
  
  return (
    <>
        <View style={{flexDirection:'row',}}>
            <TouchableOpacity>
                <Image source={photo1} style={{width: 200, height: 350, marginTop: 50, borderRadius: 20, marginLeft: 10}}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={photo2} style={{width: 150, height: 150, marginTop: 50, borderRadius: 20, marginLeft: 30}}/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={photo3} style={{width: 150, height: 300, marginTop: 210, borderRadius: 20, marginLeft: -150}}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',}}>
            <TouchableOpacity>
                <Image source={photo4} style={{width: 200, height: 350, marginTop:-80, borderRadius: 20, marginLeft: 10}}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={photo5} style={{width: 150, height: 150, marginTop: 30, borderRadius: 20, marginLeft: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image source={photo6} style={{width: 150, height: 300, marginTop: 210, borderRadius: 20, marginLeft: -150}}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',}}>
            <TouchableOpacity>
                <Image source={photo7} style={{width: 200, height: 350, marginTop:-200, borderRadius: 20, marginLeft: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={photo8} style={{width: 150, height: 150, marginTop: 30, borderRadius: 20, marginLeft: 30}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={photo9} style={{width: 150, height: 300, marginTop: 210, borderRadius: 20, marginLeft: -150}}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',}}>
            <TouchableOpacity>
                <Image source={photo10} style={{width: 200, height: 350, marginTop:-300, borderRadius: 20, marginLeft: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={photo5} style={{width: 200, height: 250, marginTop: 80, borderRadius: 20, marginLeft: -200}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={photo6} style={{width: 150, height: 300, marginTop: 30, borderRadius: 20, marginLeft: 30}}/>
            </TouchableOpacity>
            
        </View>
        <View style={{width: 400, height: 200, backgroundColor: 'black', marginLeft: 5, borderRadius: 30, marginTop: 10}}>
                <YoutubePlayer
                    height={200}
                    width={355}
                    play={false}
                    videoId={'sDJBhQv85K0'}
                    webViewStyle={{marginTop: 3, marginLeft: 55}}
                /> 
       </View>
       
       <VideoPlayer/>
       
    </>

  );
}