import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAr9D4otXCjbHv-vAXX7DFt5U37AXi9o6g",
  authDomain: "motorsport-1992d.firebaseapp.com",
  projectId: "motorsport-1992d",
  storageBucket: "motorsport-1992d.appspot.com",
  messagingSenderId: "1074376945484",
  appId: "1:1074376945484:web:caa5e35e2782075d6be9e9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)