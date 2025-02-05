import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'add your information',
    appId: 'add your information',
    messagingSenderId: 'add your information',
    projectId: 'add your information',
    authDomain: 'add your information',
    storageBucket: 'add your information',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth };
