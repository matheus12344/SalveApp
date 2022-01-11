import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: 170,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginLeft: index == 0 ? 24 : 0,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: '#2675EC',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 25,
  },
  containerActive: {
    backgroundColor: "#ffffff"
  },
  