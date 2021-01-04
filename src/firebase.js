import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNOAMxLk4W9VTpHd16tDUcKeyocwxNjyA",
  authDomain: "clone-8f516.firebaseapp.com",
  databaseURL: "https://clone-8f516.firebaseio.com",
  projectId: "clone-8f516",
  storageBucket: "clone-8f516.appspot.com",
  messagingSenderId: "157223093845",
  appId: "1:157223093845:web:30afa7a739c07b966f76dc",
});

const auth = firebase.auth();

export { auth };