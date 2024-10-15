import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// credenciais Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJBAvW4VDLL1eKQgeEzsnzHcSovffzodY",
  authDomain: "geniusintech-fca65.firebaseapp.com",
  projectId: "geniusintech-fca65",
  storageBucket: "geniusintech-fca65.appspot.com",
  messagingSenderId: "991472694875",
  appId: "1:991472694875:web:9535c75aeee9acf77ff17e",
  measurementId: "G-5WW217SYZK"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Serviços que você quer usar
const db = getFirestore(app); // Banco de dados Firestore
const auth = getAuth(app);    // Autenticação Firebase
export { db, auth };
