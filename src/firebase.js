import firebase from "firebase";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCkXF6Nn-lD5QAOd172ToGBj912pUTkAjo",
    authDomain: "flashcards-73130.firebaseapp.com",
    projectId: "flashcards-73130",
    storageBucket: "flashcards-73130.appspot.com",
    messagingSenderId: "393557832117",
    appId: "1:393557832117:web:0b548d3188281c6c7ae9fc",
    measurementId: "G-YX1ENJH76V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;