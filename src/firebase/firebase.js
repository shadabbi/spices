import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

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

export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  const providerFacebook = new firebase.auth.FacebookAuthProvider();

export  const signInWithGoogle = () => { auth.signInWithPopup(provider)};
export  const signInWithFacebook = () => { auth.signInWithPopup(providerFacebook)};

export default firebase;