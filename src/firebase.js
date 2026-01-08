// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJBAvW4VDLL1eKQgeEzsnzHcSovffzodY",
  authDomain: "geniusintech-fca65.firebaseapp.com",
  projectId: "geniusintech-fca65",
  storageBucket: "geniusintech-fca65.appspot.com",
  messagingSenderId: "991472694875",
  appId: "1:991472694875:web:9535c75aeee9acf77ff17e",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Firestore
export const db = getFirestore(app);
