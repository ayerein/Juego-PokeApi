import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCjhgUdMkdCEyVW1S9UmMFP7HrqqUpF4Ro",
  authDomain: "poke-9c9ea.firebaseapp.com",
  projectId: "poke-9c9ea",
  storageBucket: "poke-9c9ea.appspot.com",
  messagingSenderId: "998472593950",
  appId: "1:998472593950:web:a4447373bae8db826db40f"
};

export const appFirebase = initializeApp(firebaseConfig);

export const auth = getAuth(appFirebase)