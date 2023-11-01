import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDSCwwA_kZGWI4H7qb-uYLv4sDxHNu5BaY",
    authDomain: "alessandroscaudo.firebaseapp.com",
    databaseURL: "https://alessandroscaudo.firebaseio.com",
    projectId: "alessandroscaudo",
    storageBucket: "alessandroscaudo.appspot.com",
    messagingSenderId: "244472526094",
    appId: "1:244472526094:web:415a598e863b951320935f",
    measurementId: "G-HGVBSWT75L"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 