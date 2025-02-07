import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default async function getData<T = Record<string, any>>(collectionName: string): Promise<T[] | null> {
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as T[]; // Cast to the generic type
    const buffer = data.map((data) => data)
    return buffer;
  } catch (error) {
    console.error(`Error fetching data from collection "${collectionName}":`, error);
    return null; // Indicate failure
  }
}
