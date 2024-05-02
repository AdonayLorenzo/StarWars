// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjC638ot8f3kzXKxPQd3EwGz8VauCEQJ0",
  authDomain: "starwars-e2a16.firebaseapp.com",
  databaseURL: "https://starwars-e2a16-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "starwars-e2a16",
  storageBucket: "starwars-e2a16.appspot.com",
  messagingSenderId: "891040477097",
  appId: "1:891040477097:web:3cc7efe11d9fe6960b1eb8"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;