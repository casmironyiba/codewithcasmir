
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/firebaseConfig";

export const updateProgress = async (userId: string, courseId: string, lessonId: string) => {
  const progressRef = doc(db, "users", userId, "progress", courseId);

  await updateDoc(progressRef, {
    completedLessons: arrayUnion(lessonId),
  });
};
