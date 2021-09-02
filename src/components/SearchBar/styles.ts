import styled from 'styled-components/native';
import {TextInput, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


export const Container = styled(Animated.View)`
    width: 60px;
    height: 60px;
    background-color: #2675EC;
    border-radius: 30px;
`

export const Input = styled(TextInput)`
    flex: 1;

    color: #FFFFFF ;
    margin-right: 60px;
    margin-left: 20px;

`

export const BoxButtonSearch = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: #FFFFFF;
    position: absolute;
    right: 0px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`

export const SearchIcon = styled(Icon).attrs({
    name: 'search'
})`
    color: #2675EC;
    font-size: 25px
`