// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANC9cZtMfnMPoEjoRycHJRY2fCn5b6jzk",
  authDomain: "insta2-0-nextjs-prahlad.firebaseapp.com",
  projectId: "insta2-0-nextjs-prahlad",
  storageBucket: "insta2-0-nextjs-prahlad.appspot.com",
  messagingSenderId: "810533239037",
  appId: "1:810533239037:web:742bc6a6db4581e078e694",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
