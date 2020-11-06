import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firebase-firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyBh2tG1mm66tUuXXfAEhEV9b0uZul7FMeQ",
    authDomain: "spices-10b9a.firebaseapp.com",
    databaseURL: "https://spices-10b9a.firebaseio.com",
    projectId: "spices-10b9a",
    storageBucket: "spices-10b9a.appspot.com",
    messagingSenderId: "778582727804",
    appId: "1:778582727804:web:75f004409411928f3fbdf9",
    measurementId: "G-M3138BRBDM"
  };

  firebase.initializeApp(firebaseConfig);

export const createUserProfile = async (auth, additionalData) => {

  if(!auth) return;

  const userRef = firestore.collection("users").doc(auth.uid);

  const snapshot = await userRef.get();
  
  if(!snapshot.exists) {

      const {displayName, email} = auth;
      const createdAt = new Date();

      try {
       await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
         });

      } catch (error) {
        console.log('error')
      }
  }

  return userRef;

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  const providerFacebook = new firebase.auth.FacebookAuthProvider();

export  const signInWithGoogle = () => { auth.signInWithPopup(provider)};
export  const signInWithFacebook = () => { auth.signInWithPopup(providerFacebook)};

export default firebase;