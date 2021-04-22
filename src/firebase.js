import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBxLt-NJ_-QDxEBT5vCFtTIIiB3Jq0lcV0',
  authDomain: 'clone-4d5c4.firebaseapp.com',
  projectId: 'clone-4d5c4',
  storageBucket: 'clone-4d5c4.appspot.com',
  messagingSenderId: '98417884263',
  appId: '1:98417884263:web:4be57ea4a340dda1f568c2',
  measurementId: 'G-1B3PBN9VXW',
});

const db = firebase.firestore();

export { db };
