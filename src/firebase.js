import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL0hn_6zyTurN5pPbzISbBS_5DJ9Cp7d8",
  authDomain: "react-to-do-ca605.firebaseapp.com",
  projectId: "react-to-do-ca605",
  storageBucket: "react-to-do-ca605.appspot.com",
  messagingSenderId: "491263464077",
  appId: "1:491263464077:web:509296f9132375da2fc8c4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }