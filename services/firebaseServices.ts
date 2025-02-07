// services/firebaseService.ts
import { db } from '../lib/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore' // import addDoc from Firestore

interface Course {
  title: string
  description: string
  imageURL: string
}

// This function adds a course to Firestore
export const addCourseToFirestore = async (course: Course) => {
  try {
    if (!course.title || !course.description || !course.imageURL) {
      throw new Error(
        'All course fields (title, description, imageURL) must be provided.',
      )
    }

    console.log('Adding course: ', course) // Log course data for debugging
    // Adds a new document to the "courses" collection
    const docRef = await addDoc(collection(db, 'courses'), course)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
    throw new Error('Failed to add course')
  }
}
