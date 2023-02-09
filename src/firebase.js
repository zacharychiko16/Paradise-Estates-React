// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmFShJBegfBePESXcAW8bUpXXTujg5-As",
  authDomain: "paradise-estates-react.firebaseapp.com",
  projectId: "paradise-estates-react",
  storageBucket: "paradise-estates-react.appspot.com",
  messagingSenderId: "501642867240",
  appId: "1:501642867240:web:d7e1787310c1cdd9d83b1d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
