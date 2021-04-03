import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCPnglXExmXYa0JuLChN4RIBC4JRyIo9gg",
  authDomain: "studies-app-d0bdd.firebaseapp.com",
  projectId: "studies-app-d0bdd",
  storageBucket: "studies-app-d0bdd.appspot.com",
  messagingSenderId: "418183732605",
  appId: "1:418183732605:web:e9c42d135b5d3fdac0c014"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();