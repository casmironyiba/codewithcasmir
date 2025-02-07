
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Course,Progress } from "@/ui/interface/CourseProgress";

export const fetchCourseData = async (courseId: string): Promise<Course | null> => {
  const docRef = doc(db, "courses", courseId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Course;
  }

  return null;
};

export const fetchUserProgress = async (userId: string, courseId: string): Promise<Progress | null> => {
  const docRef = doc(db, "users", userId, "progress", courseId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Progress;
  }

  return null;
};
