import { db } from '@/lib/helpers/firebaseConfig';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';

export const updateRole = async (userInput:any) => {
  try {
    const { email, role } = userInput;

    // Query Firestore for the user by email
    const usersCollectionRef = collection(db, 'users');
    const q = query(usersCollectionRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return {
        success: false,
        message: 'User not found.',
        status: 404,
      };
    }

    // Assuming only one user document matches the email
    const userDoc = querySnapshot.docs[0];
console.log(userDoc.id)
    // Update the user's role in Firestore
    await updateDoc(doc(db, 'users', userDoc.id), { role });

    return {
      success: true,
      message: 'Role updated successfully',
      status: 200,
    };
  } catch (error) {
    console.error('Error updating role:', error);
    return {
      success: false,
      message: 'Error updating role',
      status: 500,
      error,
    };
  }
};
