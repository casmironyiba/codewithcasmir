import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import CourseInterface from '@/ui/interface/CourseInterface'

interface FetchCourseResponse {
  courseData?: CourseInterface;
}

// export default async function fetchCourse({ id }: any) {
export default async function fetchCourse({ id }:{id :any}): Promise<FetchCourseResponse> {
  try {
    const courseRef = doc(db, 'courses', id)
    let courseSnap = await getDoc(courseRef)

    if (courseSnap.exists()) {
      const courseData = courseSnap.data() as CourseInterface
      return {courseData};
    } else {
      return { courseData: undefined };
    }
  } catch (error) {
    console.error('Error fetching course videos:', error)
    return { courseData: undefined };
  }
}

