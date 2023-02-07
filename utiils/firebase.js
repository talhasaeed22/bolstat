import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx9FS-rm9bJzLd_2OpkHRVQKdugVpJfb0",
  authDomain: "bolstatsdatabase.firebaseapp.com",
  projectId: "bolstatsdatabase",
  storageBucket: "bolstatsdatabase.appspot.com",
  messagingSenderId: "567833191583",
  appId: "1:567833191583:web:81c60499853b0b3c4d2eaa",
  measurementId: "G-WQ6592GKV6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
