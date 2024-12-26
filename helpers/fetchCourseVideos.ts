import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

export async function fetchCourseVideos(courseId: string) {
  try {
    const courseRef = doc(db, 'courses', courseId);
    const courseSnap = await getDoc(courseRef);

    if (courseSnap.exists()) {
      const courseData = courseSnap.data();
      const videoURLs = courseData?.videoURLs || [];
      return videoURLs;
    } else {
      throw new Error('Course not found');
    }
  } catch (error) {
    console.error('Error fetching course videos:', error);
    throw error;
  }
}

