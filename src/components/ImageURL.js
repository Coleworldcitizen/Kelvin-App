
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAVAk0x75yhyz9O1uZAeEY9IoVxsjx7ZMI",
  authDomain: "gwamps-accomodation.firebaseapp.com",
  projectId: "gwamps-accomodation",
  storageBucket: "gwamps-accomodation.appspot.com",
  messagingSenderId: "38001027312",
  appId: "1:38001027312:web:b569038937dc0f4a1cba35"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getDatabase(app);