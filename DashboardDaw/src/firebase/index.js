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
  addDoc,
  updateDoc,
  deleteDoc,
  doc
}from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Initialize Firebase

export default firebaseConfig;
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const añadir= (ref, elemento) => addDoc(collection(db,ref), elemento);
export const borrar= (ref, id) => deleteDoc(doc(db,ref, id));
export const snapshot= (ref, callback) => onSnapshot(collection(db,ref),callback);
export const actualizar= (ref, id, object) => updateDoc(doc(db,ref,id),object);