import { StyleSheet } from "react-native"
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    height: "100%",
    width: "150%",
    marginLeft:-100
  },
  contentButtons: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  buttonCamera: {
    position: "absolute",
    bottom: 50,
    right: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2675EC",
    margin: 20,
    height: 80,
    width: 80,
    borderRadius: 50,
 
  },
  buttonFlip: {
    position: "absolute",
    bottom: 50,
    left: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,

    
  },
  contentModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 20,
  },
  closeButton: {
    position: "absolute",
    top: 5,
    left: 1,
    margin: 10,
    backgroundColor: 'white',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  imgPhoto: {
    width: "100%",
    height: 450,
  },
});
 
export default styles