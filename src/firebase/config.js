import firebase from "firebase";
import 'firebase/firebase'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2QXUSvAfub9JcAZzlS9Oddg461UB-wd4",
  authDomain: "olx-react-js-954a6.firebaseapp.com",
  projectId: "olx-react-js-954a6",
  storageBucket: "olx-react-js-954a6.appspot.com",
  messagingSenderId: "36762427584",
  appId: "1:36762427584:web:50434a1a0bac196fb60d25"
};

  export default firebase.initializeApp(firebaseConfig)