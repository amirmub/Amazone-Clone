// Import core Firebase functionality
import { initializeApp } from "firebase/app";

// Import individual services
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

 const firebaseConfig = {
    apiKey: "AIzaSyD-g0yg2cBqN48KsVlqsp2_N_drGTM7T8g",
    authDomain: "e-1277a.firebaseapp.com",
    projectId: "e-1277a",
    storageBucket: "e-1277a.appspot.com",
    messagingSenderId: "564941720287",
    appId: "1:564941720287:web:875118573268aa656f776a",
    measurementId: "G-NV5LNX5H8C"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
