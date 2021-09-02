import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  avatarImage:{
      height: 60,
      width: 60,
      borderRadius: 20,
      marginTop: 10,
      marginLeft: 6,
      marginRight: 6,
      borderColor: '#2675EC',
      borderWidth: 3
  },
  StatusOn:{
      backgroundColor: '#2675EC',
      height: 18,
      width: 18,
      borderRadius: 30,
      marginLeft: 47,
      marginTop: -16,
      borderColor: '#FFFFFF',
      borderWidth: 2.6
  }
});