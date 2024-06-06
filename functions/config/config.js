const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyCPjKF0GI6dyOGWWe-BzTdD_p1zwh3pfjw",
  authDomain: "testai3.firebaseapp.com",
  projectId: "testai3",
  storageBucket: "testai3.appspot.com",
  messagingSenderId: "928897248553",
  appId: "1:928897248553:web:2ab1d4d0a60fff8b46db38",
  measurementId: "G-X2EBXPLT15"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };