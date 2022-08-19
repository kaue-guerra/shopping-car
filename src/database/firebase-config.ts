import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbHUVcBAQNg9gjqKTEUeXs-Tn-X5gXIuA",
    authDomain: "shopping-cart-69814.firebaseapp.com",
    projectId: "shopping-cart-69814",
    storageBucket: "shopping-cart-69814.appspot.com",
    messagingSenderId: "842857798287",
    appId: "1:842857798287:web:6d1075b33bcf1ac1932efa",
    measurementId: "G-XSCQ1FMRMB"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);