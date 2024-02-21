// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// // import { initializeAuth, browserLocalPersistence } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_API_KEY,

//   authDomain: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_AUTH_DOMAIN,

//   projectId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_PROJECT_ID,

//   storageBucket: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_STORAGE_BUCKET,

//   messagingSenderId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_MESSAGING_SENDER_ID,

//   appId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_APP_ID,

//   measurementId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_MEASURMENT_ID,
// };

// // Initialize Firebase
// // let app: any;
// // if (firebase.apps.length === 0) {
// //   app = firebase.initializeApp(firebaseConfig);
// // } else {
// //   app = firebase.app;
// // }
// const app = initializeApp(firebaseConfig);

// const database = getFirestore(app);
// const auth = getAuth(app);

// // auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// // const auth = initializeAuth(app, {
// //   persistence: browserLocalPersistence,
// // });

// export { database, auth };

// import { FirebaseApp, initializeApp } from "firebase/app";
// import { Firestore, getFirestore } from "firebase/firestore/lite";
// import { Auth, getAuth, User } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_MEASURMENT_ID,
// };

// let app: FirebaseApp = initializeApp(firebaseConfig);

// let database: Firestore = getFirestore(app);
// let auth: Auth = getAuth(app);

// export type FirebaseUserType = User;

// export { database, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_TEST_FIREBASE_API_KEY,

  authDomain: process.env.NEXT_PUBLIC_TEST_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.NEXT_PUBLIC_TEST_FIREBASE_PROJECT_ID,

  storageBucket: process.env.NEXT_PUBLIC_TEST_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.NEXT_PUBLIC_TEST_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.NEXT_PUBLIC_TEST_FIREBASE_APP_ID,

  measurementId: process.env.NEXT_PUBLIC_TEST_FIREBASE_MEASURMENT_ID,
};

// Initialize Firebase
// let app: any;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app;
// }
if (firebaseConfig && firebase.apps.length === 0)
  firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const auth = firebase.auth();

// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// const auth = initializeAuth(app, {
//   persistence: browserLocalPersistence,
// });

export { firebase, database, auth };
