import { addCourseToFirestore } from "@/services/firebaseServices";

export async function addCourse(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const imageURL = formData.get('imageURL') as string;

    if (!title || !description || !imageURL) {
      throw new Error('Invalid input data');
    }
    await addCourseToFirestore({ title, description, imageURL })

    return { message: 'Course added successfully!' };
  } catch (error) {
    console.error('Error adding course:', error);
    return { error: 'Failed to add course' };
  }
}
