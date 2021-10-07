import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCPxR_r5xL6SwvdmoGOdSlhe84xUVYCvY",
  authDomain: "clothing-store-d.firebaseapp.com",
  projectId: "clothing-store-d",
  storageBucket: "clothing-store-d.appspot.com",
  messagingSenderId: "353366654586",
  appId: "1:353366654586:web:f88407d4916bd4992c85c3",
  measurementId: "G-CP1H420FK0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
