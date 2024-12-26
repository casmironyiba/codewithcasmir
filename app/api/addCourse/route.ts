// pages/api/addCourse.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { addCourseToFirestore } from '@/services/firebaseServices' // Use the service function
import {NextRequest, NextResponse} from 'next/server'

interface Course {
  title: string
  description: string
  imageURL: string
}

export async function POST(req: NextRequest) {
  try {
  const reqBody = await req.json();

  const { title, description, imageURL }: Course = reqBody.formData
  console.log(title)

    // Call the function that adds the course to Firestore
    await addCourseToFirestore({ title, description, imageURL })
    return NextResponse.json({ message: 'Course added successfully!' })
  } catch (error) {
     return NextResponse.json({ error: 'Failed to add course' })
  }
}
