import { auth, db } from '@/lib/helpers/firebaseConfig'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendEmailVerification,
} from 'firebase/auth'

export const signupAction = async (userInput: any) => {
  try {
    const { name, username, email, password } = userInput

    const usersCollectionRef = collection(db, 'users')
    const q = query(usersCollectionRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    console.log(`User existence check: ${querySnapshot.empty}`)

    if (!querySnapshot.empty) {
      return {
        success: false,
        message: 'Email already exists.',
        status: 409,
      }
    }

    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredentials.user
    console.log('User credentials:', userCredentials)

    try {
      const userData = {
        name,
        username,
        email,
        coursesEnrolled: [],
        courseProgress: null,
        lastLogin: null,
        subscriptions: null,
        role: 'student',
        profilePicture: null,
        isVerified:false,
        createdAt:serverTimestamp(),
      }

      await setDoc(doc(db, 'users', user.uid), userData),
        await sendEmailVerification(user)
      console.log('Verification email sent.')

      return {
        success: true,
        message: 'User created successfully',
        status: 201,
        userId: user.uid,
      }
    } catch (firestoreError) {
      console.error('Error storing user in Firestore:', firestoreError)
      await deleteUser(user)

      return {
        success: false,
        message: 'Failed to store user data. Please try again.',
        status: 500,
        error: firestoreError,
      }
    }
  } catch (authError) {
    console.error('Error during signup:', authError)
    return {
      success: false,
      message: 'Error creating a user',
      status: 500,
      authError,
    }
  }
}
