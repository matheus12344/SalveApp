import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { SearchBox } from './components/SearchBox';
import { Card } from './components/Card';

import { styles } from './styles';

export function Search(){
  return (
    <View >
        <SearchBox/>
        <Card/>
    </View>
  );
}