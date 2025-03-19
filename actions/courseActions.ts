"use server";

import { revalidatePath } from "next/cache";
import { getCookie } from "cookies-next";
import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/helpers/firebaseConfig";


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;



async function getToken(): Promise<string | null> {
  return getCookie("token") as string | null; // Ensure your token is stored in a "token" cookie
}

export async function fetchCoursesAPI(category:string) {
  const coursesRef = collection(db, "courses");
  const snapshot = await getDocs(coursesRef);

  if (snapshot.empty) {
    return [];
  }

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function fetchCourseAPI(courseId: string) {
  const courseRef = doc(db, "courses", courseId);
  const courseSnap = await getDoc(courseRef);

  if (!courseSnap.exists()) {
    throw new Error("Course not found");
  }

  return { id: courseSnap.id, ...courseSnap.data() };
}

// COURSE ACTIONS
export async function getCourses(category?: string) {
  const query = category ? `?category=${category}` : "";
  return fetchCoursesAPI(`courses${query}`);
}

export async function getCourse(id: string) {
  return fetchCoursesAPI(`courses/${id}`);
}

export async function createCourse( teacherId, teacherName) {

} 

export async function updateCourse(courseId: string, formData: FormData) {
  const updatedCourse = await fetchCoursesAPI(`courses/${courseId}`, {
    method: "PUT",
    body: formData,
  });
  revalidatePath(`/courses/${courseId}`);
  return updatedCourse;
}

export async function deleteCourse(courseId: string) {
  await fetchCoursesAPI(`courses/${courseId}`, { method: "DELETE" });
  revalidatePath("/courses");
}
