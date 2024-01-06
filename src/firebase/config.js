// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDJPtX5ypbKIJAdQv7gd77LiH-ZQ2whuSM",
  authDomain: "ewears-ad361.firebaseapp.com",
  projectId: "ewears-ad361",
  storageBucket: "ewears-ad361.appspot.com",
  messagingSenderId: "509576903867",
  appId: "1:509576903867:web:c399a297b86cc9e3447d9e",
  measurementId: "G-PCQ7TJZQ9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app
