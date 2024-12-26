import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebaseConfig'

export interface User {
  id: string;
  name: string;
  email: string;
  [key: string]: any; 
}

const getUser = async (userId: string): Promise<User | null> => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() } as User;
    } else {
      console.error("No such user found in Firestore");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user from Firestore:", error);
    throw error;
  }
};

 export default getUser;
