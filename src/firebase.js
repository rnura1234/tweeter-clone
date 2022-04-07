import { initializeApp } from 'firebase/app';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCX5eEK6DvJUPQhMdlTe02czYJmBnvd6vc',
  authDomain: 'twitter-clone-f29f8.firebaseapp.com',
  databaseURL: 'https://twitter-clone-f29f8-default-rtdb.firebaseio.com',
  projectId: 'twitter-clone-f29f8',
  storageBucket: 'twitter-clone-f29f8.appspot.com',
  messagingSenderId: '415402128425',
  appId: '1:415402128425:web:b1dd68205124f6c4d95838',
  measurementId: 'G-KC527EK79D',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
