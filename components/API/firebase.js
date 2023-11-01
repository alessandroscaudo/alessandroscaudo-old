import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "alessandroscaudo.appspot.com",
    messagingSenderId: "244472526094",
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-HGVBSWT75L"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 