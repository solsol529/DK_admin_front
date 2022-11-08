import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// import { initializeApp, getApp, getApps } from "firebase/app";
// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCea4zgzyYxZllXKzT9SWvqAAM4LXu81VU",
  authDomain: "developerkirbydrive.firebaseapp.com",
  projectId: "developerkirbydrive",
  storageBucket: "developerkirbydrive.appspot.com",
  messagingSenderId: "814161631755",
  appId: "1:814161631755:web:88d893c346c5693d94c50e",
  measurementId: "G-1EDM71BQ5N"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

var storage_obj = firebase.storage();

export default firebase;
export const storage = storage_obj;
