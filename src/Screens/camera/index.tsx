import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles"
import { Camera } from "expo-camera";
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library'
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { GalleryView } from "../../components/GalleryView";
 
export default function Camera2() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === "granted");
    })();

  }, []);
 
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
 
  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      //console.log(data);
    }
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
    .then(() => {
      alert('Salvo com sucesso!')
    })
    .catch(error => {
      console.log('err', error)
    })
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        
        <View style={styles.contentButtons}>
          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <FontAwesome name="exchange" size={23} color="#2675EC"/>

          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
            <FontAwesome name="camera" size={30} color="#fff"/>
          </TouchableOpacity>

        </View>
      </Camera>

      {capturedPhoto && (
        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.contentModal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setOpen(false)}
            >
              <AntDesign name="close" size={40} color="#2675EC"/>
            </TouchableOpacity>
           
            <Image style={styles.imgPhoto} source={{ uri: capturedPhoto }} />
            <TouchableOpacity
              style={{
                top: 79,
                right: 150,
                backgroundColor: '#2675EC',
                height: 80,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20

              }}
              onPress={savePicture}
            >
              <Ionicons name="send" size={40} color="#fff"/>
            </TouchableOpacity>
            
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}