import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "./public/techlinage-firebase-adminsdk-yies1-5d92efd32c.json";
import {getAuth} from "firebase-admin/auth";

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: "https://techlinage-default-rtdb.firebaseio.com",
});


export const auth = getAuth(app)
