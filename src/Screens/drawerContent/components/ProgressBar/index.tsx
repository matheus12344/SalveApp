import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
 
const ProgressBar = () => {
  const [progress, setProgress] = useState(15);
  
  return (
    <View style={styles.container}>
 
      <View style={styles.progressBG}>
        <View
          style={[
            styles.progress,
            {
              width: `${progress}%`
            },
          ]}
        />
      </View>

    </View>
  );
};
 
export default ProgressBar;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0EAE9',
  },
 
  progressBG: {
    width: '90%',
    height: 10,
    backgroundColor: '#C4CDD5',
    marginHorizontal: 25,
    borderRadius: 5,
    marginTop:30
  },
 
  progress: {
    width: '50%',
    height: 10,
    backgroundColor: '#2675EC',
    borderRadius: 5,
  },
});