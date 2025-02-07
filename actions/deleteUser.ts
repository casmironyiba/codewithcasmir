'use server';

import { adminAuth } from '@/lib/helpers/firebaseAdminConfig';
import {db} from '@/lib/helpers/firebaseAdminConfig'

export async function deleteUserAction(userID: string) {
  try {
    await adminAuth.deleteUser(userID);
console.log(`Successfully deleted user: ${userID}`);

// Delete from Firestore (users collection)
    await db.collection("users").doc(userID).delete();
    console.log(`Successfully deleted user data from Firestore: ${userID}`);

    return { success: true, message: 'User deleted successfully' };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, message: 'Failed to delete user' };
  }
}
