import{getAnalytics} from "firebase/analytics";
import{initializeApp} from "firebase/app";
import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCkXF6Nn-lD5QAOd172ToGBj912pUTkAjo",
    authDomain: "flashcards-73130.firebaseapp.com",
    projectId: "flashcards-73130",
    storageBucket: "flashcards-73130.appspot.com",
    messagingSenderId: "393557832117",
    appId: "1:393557832117:web:0b548d3188281c6c7ae9fc",
    measurementId: "G-YX1ENJH76V"
  };

  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
  const auth = getAuth(app)

  export const signUp = async(email,password) => {await createUserWithEmailAndPassword(auth,email,password)};

  export const signIn = async(email,password) => {await signInWithEmailAndPassword(auth,email,password)};


