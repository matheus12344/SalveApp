import React from 'react';

import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import profile from '../../assets/Profile/profile.png'

export function UsersFY(){
  return (
    <TouchableOpacity>
        <Image source={profile} style={{
            height: 60,
            width: 60,
            borderRadius: 20,
            borderColor: 'white',
            borderWidth: 3
        }}/>
    </TouchableOpacity>
  );
}