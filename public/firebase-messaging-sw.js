// // Import the Firebase JavaScript SDK
// importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js"
// );
importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js"
);
importScripts("swenv.js");

// console.log("Firebase API Key:", process.env.NEXT_PUBLIC_TEST_FIREBASE_API_KEY);
// console.log(
//   "Firebase Auth Domain:",
//   process.env.NEXT_PUBLIC_TEST_FIREBASE_AUTH_DOMAIN
// );
// console.log(
//   "Firebase Project ID:",
//   process.env.NEXT_PUBLIC_TEST_FIREBASE_PROJECT_ID
// );
// console.log(
//   "Firebase Messaging Sender ID:",
//   process.env.NEXT_PUBLIC_TEST_FIREBASE_MESSAGING_SENDER_ID
// );
// console.log("Firebase App ID:", process.env.NEXT_PUBLIC_TEST_FIREBASE_APP_ID);

// Initialize Firebase with your project's configuration
firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_TEST_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_TEST_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_TEST_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_TEST_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_TEST_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_TEST_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_TEST_FIREBASE_MEASURMENT_ID,
});

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();
// messaging
//   .getToken({
//     serviceWorkerRegistration: self.registration,
//     validKey:
//       "BEkB6bDKO_oZPYvQTh6j_w023stz5lp-CyaOJ-n_u66JE-kce_1Z9GTVVPj14-rv9qiXHEqj7-k7E-1sq_r8w1U",
//   })
//   .then((e) => console.log(e))
//   .catch((e) => console.log(e));

// Add an event listener to handle incoming push messages
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle =
    "onBackgroundMessage: " + payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    data: {
      url: payload.data.click_action,
    },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
