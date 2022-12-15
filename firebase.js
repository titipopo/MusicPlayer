import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTFCMrMMpZxqDWdclN6DWt_xZpYWx9ax4",
  authDomain: "test-app-366913.firebaseapp.com",
  projectId: "test-app-366913",
  storageBucket: "test-app-366913.appspot.com",
  messagingSenderId: "811891248016",
  appId: "1:811891248016:web:90de9afdd7b078b4e54115",
  measurementId: "G-BVXSP9DVZ3"
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