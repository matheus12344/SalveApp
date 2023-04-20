import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60, 
    width: '95%',
    backgroundColor: '#2675EC',
    borderRadius: 30,
    position: 'absolute',
    marginTop: 700,
    alignSelf:'center'
  },
  savebutton: {
    marginTop: 15,
    marginLeft: 30,
  },
  playButton: {
    marginTop: 15,
    marginLeft: 70
  },
  Music: {
    marginTop: 15,
    marginLeft: 55,
    fontFamily: 'GilroyBold',
    fontSize: 20,
    color: "white",
    textAlign:'center'
  },
  divide: {
    marginTop: 1,
    marginLeft: 10,
    fontFamily: 'GilroyBold',
    fontSize: 30,
    color: "white",
  },
  artist:{
    marginTop: 20,
    marginLeft: 15,
    fontFamily: 'GilroySemiBold',
    fontSize: 15,
    color: "white",
  }
});