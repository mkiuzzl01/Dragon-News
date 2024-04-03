// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT2FoVKg1XBNVnkW5sADr_pCDGAjYUlG4",
  authDomain: "dragon-news-b0f2c.firebaseapp.com",
  projectId: "dragon-news-b0f2c",
  storageBucket: "dragon-news-b0f2c.appspot.com",
  messagingSenderId: "37555554443",
  appId: "1:37555554443:web:e289fc568d75692e05ac8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth