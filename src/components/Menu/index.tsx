import React from 'react';

import {
    TouchableOpacity,
  View
} from 'react-native';


import { MaterialIcons } from '@expo/vector-icons';

export function Menu({navigation}){
  return (
    <View>
        <TouchableOpacity onPress={()=> {navigation.openDrawer()}} style={{alignItems: 'center', justifyContent: 'center', marginTop: 18, marginLeft: 5}}>
            <MaterialIcons name='menu' size={25} color="#2675EC" />
        </TouchableOpacity>
    </View>
  );
}