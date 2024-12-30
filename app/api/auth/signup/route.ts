import { auth, db } from '@/firebaseConfig' // Adjust import path
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore'
import { NextResponse } from 'next/server'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import IUser from '@/ui/interface/IUser'

export async function POST(req: Request) {
  try {
    const reqBody = await req.json()
    const {
      name,
      username,
      email,
      password,
    }: IUser = reqBody.userInput

    const usersCollectionRef = collection(db, 'users')
    const q = query(usersCollectionRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    console.log(`user ${querySnapshot.empty}`)

    if (!querySnapshot.empty) {
      // If the email exists, return an error response
      return NextResponse.json(
        {
          message: 'Email already exists.',
        },
        { status: 400 },
      )
    }

    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredentials.user
    console.log(userCredentials)
    await setDoc(doc(collection(db, 'users'), user.uid), {
      name,
      username,
      email,
      role: 'student',
      createdAt: new Date(),
    })

    await sendEmailVerification(user)
    console.log('Verification email sent.')

    return NextResponse.json({
      message: 'User created successfully',
      userId: user.uid,
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating a user', error },
      { status: 500 },
    )
  }
}
