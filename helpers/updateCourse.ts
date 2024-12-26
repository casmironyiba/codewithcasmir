import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/firebaseConfig';

export async function uploadFiles(files: { file: File | null; name: string }[], folder: string) {
  const urls = [];
  for (const file of files) {
    if (file.file) {
      try {
        const fileRef = ref(storage, `${folder}/${file.name}`);
        await uploadBytes(fileRef, file.file);
        const url = await getDownloadURL(fileRef);
        urls.push(url);
      } catch (err) {
        console.error(`Error uploading file ${file.name}:`, err);
      }
    }
  }
  return urls;
}

export async function updateCourseData(
  id: string,
  videos: any,
  materials: any,
  assignments: any
) {
  const courseRef = doc(db, 'courses', id);
  const courseSnap = await getDoc(courseRef);

  if (!courseSnap.exists()) {
    throw new Error('Course not found!');
  }

  const existingVideoURLs = courseSnap.data()?.videoURLs || [];
  const videoURLs = [...existingVideoURLs, ...(await uploadFiles(videos, 'courseVideos'))];
  const materialURLs = await uploadFiles(materials, 'courseMaterials');
  const assignmentURLs = await uploadFiles(assignments, 'courseAssignments');

  try {
    await updateDoc(courseRef, {
      videoURLs,
      materialURLs,
      assignmentURLs,
      updatedAt: new Date(),
    });

    return 'Course updated successfully!';
  } catch (err) {
    console.error('Error updating course:', err);
    throw new Error('Failed to update course. Please try again.');
  }
}
