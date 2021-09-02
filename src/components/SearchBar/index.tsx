import React from 'react';

import {Dimensions, Animated} from 'react-native';

import { Container, BoxButtonSearch, SearchIcon, Input } from './styles';

export function SearchBar(){
    const animation = new Animated.Value(60)
    const {width} = Dimensions.get('window')
    function onSearch(){
      Animated.spring(animation, {
          toValue: width * 0.7,
          useNativeDriver: false,
      }).start()
    }
    return (
        <Container style={{width: animation}}>
            <Input autoFocus/>
            <BoxButtonSearch>
                <SearchIcon onPress={onSearch}/>
            </BoxButtonSearch>
        </Container>
    );
}