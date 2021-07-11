import React from 'react';

import {
  View,
  TextInput,
  Text
} from 'react-native';

import { styles } from './styles';

export function signIn(){
  return (
    <View style={styles.container}>
        <Text>Email</Text>
        <TextInput>Email</TextInput>
        <Text>Senha</Text>
        <TextInput>Senha</TextInput>

    </View>
  );
}