import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/helpers/firebaseConfig'
import ICourse from '@/types/ICourse'

interface FetchCourseResponse {
  courseData?: ICourse;
}

// export default async function fetchCourse({ id }: any) {
export default async function fetchCourse({ id }:{id :any}): Promise<FetchCourseResponse> {
  try {
    const courseRef = doc(db, 'courses', id)
    let courseSnap = await getDoc(courseRef)

    if (courseSnap.exists()) {
      const courseData = courseSnap.data() as ICourse
      return {courseData};
    } else {
      return { courseData: undefined };
    }
  } catch (error) {
    console.error('Error fetching course videos:', error)
    return { courseData: undefined };
  }
}

