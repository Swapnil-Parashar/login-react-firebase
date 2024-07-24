import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZFhWje21smBPbu2bvZISps4ZP019XzQA",
  authDomain: "login-e6402.firebaseapp.com",
  projectId: "login-e6402",
  storageBucket: "login-e6402.appspot.com",
  messagingSenderId: "805127505775",
  appId: "1:805127505775:web:3e3ec15318fd0876c7ca9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}