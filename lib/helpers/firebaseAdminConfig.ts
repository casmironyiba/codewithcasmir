import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "@/public/techlinage-firebase-adminsdk-yies1-43b29c2f85.json";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

if (!admin.apps.length) {
  admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
    databaseURL: "https://techlinage-default-rtdb.firebaseio.com"
  });
}

export const db = getFirestore()
export const adminAuth = getAuth();
