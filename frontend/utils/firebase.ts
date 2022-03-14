import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const REACT_APP_FIREBASE_API_KEY = 'AIzaSyAGSXj1CpEzBsLb15eaCGU6VWPyfAWV7CU';
const REACT_APP_AUTH_DOMAIN = 'mess-337014.firebaseapp.com';
const REACT_APP_PROJECT_ID = 'mess-337014';
const REACT_APP_STORAGE_BUCKET = 'mess-337014.appspot.com';
const REACT_APP_MESSAGING_SENDER_ID = '32155834743';
const REACT_APP_APP_ID = '1:32155834743:web:86dd9a9327e8e7c8b7a972';

// const {
//   REACT_APP_FIREBASE_API_KEY,
//   REACT_APP_AUTH_DOMAIN,
//   REACT_APP_PROJECT_ID,
//   REACT_APP_STORAGE_BUCKET,
//   REACT_APP_MESSAGING_SENDER_ID,
//   REACT_APP_APP_ID,
// } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
