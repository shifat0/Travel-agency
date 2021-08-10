import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6qFZ5cTMDLr_CiV8Q4ogz69jopg5jwOA",
  authDomain: "travel-agency-a7ee7.firebaseapp.com",
  projectId: "travel-agency-a7ee7",
  storageBucket: "travel-agency-a7ee7.appspot.com",
  messagingSenderId: "129271102117",
  appId: "1:129271102117:web:ca2e8c8d8ab72b4c35eb4c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
