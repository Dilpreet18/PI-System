import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI1aF-m_CJQIKSXFT0gnXZfxNiwLHX7_I",
  authDomain: "product-intelligence-system.firebaseapp.com",
  projectId: "product-intelligence-system",
  storageBucket: "product-intelligence-system.appspot.com",
  messagingSenderId: "798304861802",
  appId: "1:798304861802:web:720eb570830e7b26fed413",
  measurementId: "G-BQ4ELFX83P",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
