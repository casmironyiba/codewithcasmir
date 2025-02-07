import { auth, db } from '@/lib/helpers/firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

export const addUser = async (userInput: any) => {
  try {
    const { name, username, email, password,role } = userInput;

    const usersCollectionRef = collection(db, 'users');
    const q = query(usersCollectionRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    console.log(`User existence check: ${querySnapshot.empty}`);

    if (!querySnapshot.empty) {
      return {
        success: false,
        message: 'Email already exists.',
        status: 409
      };
    }

    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    console.log('User credentials:', userCredentials);

    await setDoc(doc(collection(db, 'users'), user.uid), {
      name,
      username,
      email,
      role,
      createdAt: new Date(),
    });

    await sendEmailVerification(user);
    console.log('Verification email sent.');

    return {
      success: true,
      message: 'User created successfully',
      status: 201,
      userId: user.uid,
    };
  } catch (error) {
    console.error('Error during signup:', error);
    return {
      success: false,
      message: 'Error creating a user',
      status: 500,
      error,
    };
  }
};
