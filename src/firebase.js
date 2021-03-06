// import firebase from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWsKUidS1bCkS45W6UQH6pU5solhWChlU",
  authDomain: "moviez-27730.firebaseapp.com",
  projectId: "moviez-27730",
  storageBucket: "moviez-27730.appspot.com",
  messagingSenderId: "746209948402",
  appId: "1:746209948402:web:e4bcb344d48fd833f8966b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
