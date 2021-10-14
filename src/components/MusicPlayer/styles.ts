import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60, 
    width: '100%',
    backgroundColor: '#2675EC',
    borderRadius: 30,
    position: 'absolute',
    marginTop: 700,
  },
  savebutton: {
    marginTop: 15,
    marginLeft: 20,
  },
  playButton: {
    marginTop: 15,
    marginLeft: 75
  },
  Music: {
    marginTop: 15,
    marginLeft: 90,
    fontFamily: 'GilroyBold',
    fontSize: 20,
    color: "white",
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