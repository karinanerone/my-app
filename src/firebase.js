import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnPhwVhnnJi0YaOa6UPB_cn2jm0mifOFU",
  authDomain: "somativa-final.firebaseapp.com",
  projectId: "somativa-final",
  storageBucket: "somativa-final.appspot.com",
  messagingSenderId: "923612424334",
  appId: "1:923612424334:web:80f67449a464176c9141df",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
  