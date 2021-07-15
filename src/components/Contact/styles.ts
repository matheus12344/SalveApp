import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    marginTop: 32,
    width: 82,
    borderRadius: 25,
    marginLeft: 10,
    height: 82
  },

  chat: {
  },
  name: {
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    marginTop: -75 ,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#131313'

  },
  message: {
    marginTop: 2,
    flexDirection: 'column',
    alignContent: 'flex-start',
    marginLeft: 100,

    lineHeight: 19,
    letterSpacing: -0.165
  }

});