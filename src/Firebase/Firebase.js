import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAmCCSQobPOg-J-3lLue8h7OlY32WjZtWc",
  authDomain: "dashboard-bd52e.firebaseapp.com",
  projectId: "dashboard-bd52e",
  storageBucket: "dashboard-bd52e.appspot.com",
  messagingSenderId: "1072983785788",
  appId: "1:1072983785788:web:82efbb7b957a5916535e39",
  measurementId: "G-MLSDQ9WXCG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)