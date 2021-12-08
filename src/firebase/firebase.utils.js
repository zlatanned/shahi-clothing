import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB88luJ0SiAoiM7aolga6G6ZcUTUD4zdT0",
    authDomain: "shahi-clothing-db.firebaseapp.com",
    projectId: "shahi-clothing-db",
    storageBucket: "shahi-clothing-db.appspot.com",
    messagingSenderId: "516112061755",
    appId: "1:516112061755:web:bf7352a939e5ce5772131e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;