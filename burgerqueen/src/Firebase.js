import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyC5xEMLa_dYkbi4Q4CvtERflYbRzcx374E",
    authDomain: "burgerqueen-6ce2f.firebaseapp.com",
    databaseURL: "https://burgerqueen-6ce2f.firebaseio.com",
    projectId: "burgerqueen-6ce2f",
  });

let db = firebase.firestore();

export default db;