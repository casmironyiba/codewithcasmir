import { doc, getDoc, DocumentData } from 'firebase/firestore';

// A generic function to fetch a document by its ID from any collection in Firestore
export default async function getDataById(
  db: any,
  collectionName: string,
  id: string
): Promise<DocumentData | null> {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data(); // Return the document data
    } else {
      console.error('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    return null;
  }
}
