import { auth } from '@/firebaseConfig'; // Adjust the path as necessary
import { User } from 'firebase/auth';

// import { getAuth } from 'firebase/auth';

export async function getCurrentUserId(): Promise<string | null> {
  // const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return user.uid; // Return the user's unique ID (UID)
  } else {
    console.error('No user is currently authenticated.');
    return null; // No user is signed in
  }
}
// export const getCurrentUserId = async (): Promise<string | null> => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
//       if (user) {
//         resolve(user.uid); // Returns the authenticated user's UID
//       } else {
//         resolve(null); // No authenticated user
//       }
//       unsubscribe(); // Unsubscribe from the listener to avoid memory leaks
//     }, reject);
//   });
// };
