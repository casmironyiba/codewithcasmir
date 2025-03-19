import uploadVideo from './uploadVideos'

const uploadAllVideos = async (
  localSections: Section[],
  courseId: string,
  getUploadVideoUrl: any,
) => {
  const updatedSections = localSections.map((section) => ({
    ...section,
    chapters: section.chapters.map((chapter) => ({
      ...chapter,
    })),
  }))

  for (let i = 0; i < updatedSections.length; i++) {
    for (let j = 0; j < updatedSections[i].chapters.length; j++) {
      const chapter = updatedSections[i].chapters[j]
      if (chapter.video instanceof File && chapter.video.type === 'video/mp4') {
        try {
          const updatedChapter = await uploadVideo(
            chapter,
            courseId,
            updatedSections[i].sectionId,
            getUploadVideoUrl,
          )
          updatedSections[i].chapters[j] = updatedChapter
        } catch (error) {
          console.error(
            `Failed to upload video for chapter ${chapter.chapterId}:`,
            error,
          )
        }
      }
    }
  }
}

export default uploadAllVideos
