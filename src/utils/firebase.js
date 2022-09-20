import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD-5esP_bwx9GWFy-tUF2Zu-WulheJm_j4",
    authDomain: "llotestore.firebaseapp.com",
    projectId: "llotestore",
    storageBucket: "llotestore.appspot.com",
    messagingSenderId: "408331210206",
    appId: "1:408331210206:web:8e0aab36ed45941781e14f"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
