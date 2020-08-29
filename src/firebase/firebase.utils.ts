import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCB2Oy2UqoyItvVBIiftoCshz7gbvMte_0",
  authDomain: "crown-clothing-87048.firebaseapp.com",
  databaseURL: "https://crown-clothing-87048.firebaseio.com",
  projectId: "crown-clothing-87048",
  storageBucket: "crown-clothing-87048.appspot.com",
  messagingSenderId: "1049799310662",
  appId: "1:1049799310662:web:ca2523c5747a644df87947"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth().signInWithPopup(provider);

export default firebase;
