import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDX9xvsplnxGIbCg6zuzKfco-zAGOyJhLo",
    authDomain: "agenda-firebase-4038a.firebaseapp.com",
    projectId: "agenda-firebase-4038a",
    storageBucket: "agenda-firebase-4038a.appspot.com",
    messagingSenderId: "142514922492",
    appId: "1:142514922492:web:bd0a725a2655d83a0f8879"
};

firebase.initializeApp(firebaseConfig);

export const baseDeDatos = firebase.firestore();
export default firebase;