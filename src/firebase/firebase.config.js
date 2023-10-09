// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeLxE-CjOZc3veoqcBNtqqA-ZcH5zKOlY",
  authDomain: "fit-yoga-event-management.firebaseapp.com",
  projectId: "fit-yoga-event-management",
  storageBucket: "fit-yoga-event-management.appspot.com",
  messagingSenderId: "122179387669",
  appId: "1:122179387669:web:ae7b2c7312649d96c8a91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;