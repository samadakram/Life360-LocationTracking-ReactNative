// database/firebaseDb.js

// database/firebaseDb.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyDkrbkR-74Tpa_wDM8QoJQMlNz3ZokFfXI",
  authDomain: "life360-e57d0.firebaseapp.com",
  projectId: "life360-e57d0",
  storageBucket: "life360-e57d0.appspot.com",
  messagingSenderId: "410093106908",
  appId: "1:410093106908:web:74dc84c7d8f4c70cbea619"
};
firebase.initializeApp(firebaseConfig);

export const db = getDatabase(firebase.initializeApp(firebaseConfig));

export default firebase;













// import firebase from "firebase";
// // import * as firebase from 'firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyDXLzptNU_ALmfKE5kvQktUlmVCg16X5uk",
//     authDomain: "life360-c818e.firebaseapp.com",
//     projectId: "life360-c818e",
//     storageBucket: "life360-c818e.appspot.com",
//     messagingSenderId: "405408475359",
//     appId: "1:405408475359:web:13dd79f8b3de415d59e16a"
//   };
// firebase.initializeApp(firebaseConfig);
// export default firebase;