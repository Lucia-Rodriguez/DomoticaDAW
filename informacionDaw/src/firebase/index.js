// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiWGvL7EQSuqkBvCgplL4Gf5fun1SIWqM",
  authDomain: "domotica-daw.firebaseapp.com",
  projectId: "domotica-daw",
  storageBucket: "domotica-daw.appspot.com",
  messagingSenderId: "858753347080",
  appId: "1:858753347080:web:6de47e88686e51589f6bbd",
  measurementId: "G-9H9FPVW132"
};

import{
  getFirestore,
  collection,
  onSnapshot,
  updateDoc,
  doc
}from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Initialize Firebase

export default firebaseConfig;
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const actualizar= (ref, id, object) => updateDoc(doc(db,ref,id),object);
export const snapshot= (ref, id,callback) => onSnapshot(doc(db,ref,id),callback);