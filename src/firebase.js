import firebase from "firebase";

import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGoWZLU721QHp4F9ovKD7IFv7B0EW11Kk",
    authDomain: "whtsreact.firebaseapp.com",
    projectId: "whtsreact",
    storageBucket: "whtsreact.appspot.com",
    messagingSenderId: "927135901748",
    appId: "1:927135901748:web:fb9ad5697f117ad36a8261",
    measurementId: "G-0H4VKCN26E"
  };


    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export { auth, provider };
    export default db;