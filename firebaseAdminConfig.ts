import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "./public/techlinage-firebase-adminsdk-yies1-5d92efd32c.json";
import {getAuth} from "firebase-admin/auth";

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: "https://techlinage-default-rtdb.firebaseio.com",
});


export const adminAuth = getAuth(app)

// Check if Firebase Admin SDK is already initialized
// if (!admin.apps.length) {
  // const app =admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount as ServiceAccount),
  //   databaseURL: "https://techlinage-default-rtdb.firebaseio.com",
  // });
// }

// Export the admin Auth instance
// export const adminAuth = getAuth(app);
