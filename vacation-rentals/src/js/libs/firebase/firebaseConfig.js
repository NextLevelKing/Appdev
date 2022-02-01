// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.STOREFRONT_FIREBASE_API_KEY,
//   authDomain: process.env.STOREFRONT_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.STOREFRONT_FIREBASE_DATABASE_URL,
//   projectId: process.env.STOREFRONT_FIREBASE_PROJECT_ID, 
//   storageBucket:process.env.STOREFRONT_FIREBASE_STORAGE_BUCKET,  
//   messagingSenderId:  process.env.STOREFRONT_FIREBASE_MESSAGING_SENDER_ID,
//   appId:  process.env.STOREFRONT_FIREBASE_APP_ID,
// };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf0P3Ohr2ntRrVaLvkN2PchYFXlF6L3Bw",
  authDomain: "storefront-59c36.firebaseapp.com",
  databaseURL: "https://storefront-59c36-default-rtdb.firebaseio.com",
  projectId: "storefront-59c36",
  storageBucket: "storefront-59c36.appspot.com",
  messagingSenderId: "144854601632",
  appId: "1:144854601632:web:df0567919a49e391c59ec5",
  measurementId: "G-EW3N308FSX"
}; 


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const storage = getStorage(app)

// export the service objects
export {db, storage}

