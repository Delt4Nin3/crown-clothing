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

// @ts-ignore-next-line
export const createUserProfileDocument = async (userAuth: any, additionalData?: any) => {
  if (!userAuth) {
    return
  }

  const userRef = firestore().doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email, uid} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        uid,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth().signInWithPopup(provider);

export default firebase;
