import React from 'react';

import {
  ScrollView,
  Text
} from 'react-native';
import { SearchBox } from './components/SearchBox';
import { Card } from './components/Card';

import { styles } from './styles';
import { People } from './components/People';

export function Search(){
  return (
    <ScrollView keyboardShouldPersistTaps="never">
        <SearchBox/>
        <Card/>
        <People/>
    </ScrollView>
  );
}