// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtDPBf9s5IU8dvoexv5IA3HVP7Mm73KJ8",
  authDomain: "sellerlist-1aefd.firebaseapp.com",
  projectId: "sellerlist-1aefd",
  storageBucket: "sellerlist-1aefd.appspot.com",
  messagingSenderId: "906839180148",
  appId: "1:906839180148:web:6a176d34193229e0a9a221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
