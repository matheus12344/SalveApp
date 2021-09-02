import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SearchBox:{
      marginTop: 20,
      flexDirection:'row', 
      backgroundColor: '#EAECF0', 
      width: '95%', 
      height: 55, 
      borderRadius: 20, 
      marginLeft: 11
   },
  
  SearchIcon:{
      marginLeft: 10,
      width: 25,
      height: 25,
      marginTop: 13
  }
});