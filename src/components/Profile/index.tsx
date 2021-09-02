import React from 'react';

import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import profile from '../../assets/Profile/profile.png'

export function Profile(){
  return (
    <TouchableOpacity>
        <Image source={profile} style={{
            height: 60,
            width: 60,
            borderRadius: 20,
            borderColor: '#2675EC',
            borderWidth: 3
        }}/>
    </TouchableOpacity>
  );
}