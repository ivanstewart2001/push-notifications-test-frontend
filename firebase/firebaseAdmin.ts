// import * as firebaseAdmin from "firebase-admin";

// const privateKey = process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_ADMIN_PRIVATE_KEY
//   ? process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_ADMIN_PRIVATE_KEY.replace(
//       /\\n/gm,
//       "\n"
//     )
//   : undefined;
// const clientEmail =
//   process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_ADMIN_CLIENT_EMAIL;
// const projectId = process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_ADMIN_PROJECT_ID;

// if (!firebaseAdmin.apps.length) {
//   firebaseAdmin.initializeApp({
//     credential: firebaseAdmin.credential.cert({
//       privateKey: privateKey,
//       clientEmail,
//       projectId,
//     }),
//     databaseURL: `https://${projectId}.firebaseio.com`,
//   });
// }

// export { firebaseAdmin };
