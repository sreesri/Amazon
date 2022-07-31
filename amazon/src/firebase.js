import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl4icndJVbRntp-TqmfnxfyiHzhT91U3s",
  authDomain: "fir-4fb74.firebaseapp.com",
  projectId: "fir-4fb74",
  storageBucket: "fir-4fb74.appspot.com",
  messagingSenderId: "192422039844",
  appId: "1:192422039844:web:d18d592730f883bd2f63b1",
  measurementId: "G-BP5YE3DEHH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
