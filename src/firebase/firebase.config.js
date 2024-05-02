import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "starwars-e2a16.firebaseapp.com",
  databaseURL: "https://starwars-e2a16-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "starwars-e2a16",
  storageBucket: "starwars-e2a16.appspot.com",
  messagingSenderId: "891040477097",
  appId: "1:891040477097:web:3cc7efe11d9fe6960b1eb8"
};

// Inicializar la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtener una referencia a la base de datos
const db = getDatabase(app);

export default db;
