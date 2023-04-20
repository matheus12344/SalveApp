// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getDatabase, ref, set, get, remove } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuIrezy8C6u6lbAlzGSloNg0olc5U2uYk",
  authDomain: "salveapp-84ee8.firebaseapp.com",
  databaseURL: "https://salveapp-84ee8-default-rtdb.firebaseio.com",
  projectId: "salveapp-84ee8",
  storageBucket: "salveapp-84ee8.appspot.com",
  messagingSenderId: "428314438319",
  appId: "1:428314438319:web:339ff1671aa5de98ae825a",
  measurementId: "G-8TRNX4W8SB"
};

// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export default firebase