// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {connectAuthEmulator, getAuth} from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import {getDownloadURL, getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNpwDqzNSsNythIq3qIoz2grCUaHxol_8",
  authDomain: "techlinage.firebaseapp.com",
  projectId: "techlinage",
  storageBucket: "techlinage.appspot.com",
  messagingSenderId: "797600807947",
  appId: "1:797600807947:web:1ebb1ad0ec246144419b0e",
  measurementId: "G-PNQ6VYK56K"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp) 
export const storage = getStorage(firebaseApp) 
// export const downloadURL = getDownloadURL() 
// export const docSnap = getDoc(firebaseApp)
// const analytics = getAnalytics(firebaseApp);
// connectAuthEmulator(auth, 'http://localhost:5000'); 
