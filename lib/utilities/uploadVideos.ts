"use client";

import { toast } from "sonner";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/helpers/firebaseConfig"; // Adjust the path based on your project setup


async function uploadVideo(chapter: Chapter, courseId: string, sectionId: string) {
  if (!chapter.video) {
    toast.error("No video file found!");
    return;
  }

  const file = chapter.video as File;
  const storagePath = `courses/${courseId}/sections/${sectionId}/chapters/${chapter.chapterId}/${file.name}`;

  try {
    const storageRef = ref(storage, storagePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast.info(`Upload is ${progress.toFixed(2)}% done`);
      },
      (error) => {
        console.error(`Failed to upload video for Chapter ${chapter.chapterId}:`, error);
        toast.error("Video upload failed. Please try again.");
        throw error;
      }
    );

    await uploadTask;

    const videoUrl = await getDownloadURL(storageRef);

    toast.success(`Video uploaded successfully for Chapter ${chapter.chapterId}`);
    return { ...chapter, video: videoUrl };
  } catch (error) {
    console.error(`Upload error for Chapter ${chapter.chapterId}:`, error);
    toast.error("Video upload failed.");
    throw error;
  }
}

export default uploadVideo;
