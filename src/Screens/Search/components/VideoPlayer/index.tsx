import { Video } from 'expo-av';
import React from 'react';

import {
  View
} from 'react-native';

import { styles } from './styles';
import GodofWarTrailer from '../../../../assets/Video/GodOfWarTrailer.mp4'

export function VideoPlayer(){
const video = React.useRef(null);
const [status, setStatus] = React.useState({});
  return (
    <View>
        <Video
            ref={video}
            style={styles.video}
            source={GodofWarTrailer}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    </View>
  );
}