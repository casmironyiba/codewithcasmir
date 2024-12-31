import { doc, getDoc, getFirestore } from 'firebase/firestore';

export async function getUserData(userId: string) {
  const db = getFirestore();
  const docRef = doc(db, 'users', userId);

  try {
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.error(`No document found for userId: ${userId}`);
      return null;
    }

    return docSnap.data();
  } catch (error) {
    console.error(`Error fetching user data for userId: ${userId}`, error);
    return null;
  }
}
