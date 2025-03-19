
"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IChapter, ISection } from "@/types/IChapter"; // Ensure correct import
import styles from "./courseSections.module.scss";

export default function Home() {
  const [chapters, setChapters] = useState<IChapter[]>([]);
  const [chapterTitle, setChapterTitle] = useState("");
  const [sectionTitles, setSectionTitles] = useState<{ [key: string]: string }>({});

  // Add a new chapter
  const handleAddChapter = () => {
    if (!chapterTitle) return;

    const newChapter: IChapter = {
      id: uuidv4(),
      title: chapterTitle,
      sections: [], // Each chapter starts empty
    };

    setChapters([...chapters, newChapter]);
    setChapterTitle("");
  };

  // Add a new section inside a chapter
  const handleAddSection = (chapterId: string) => {
    if (!sectionTitles[chapterId]) return;

    setChapters((prevChapters) =>
      prevChapters.map((chapter) =>
        chapter.id === chapterId
          ? {
              ...chapter,
              sections: [
                ...chapter.sections,
                { id: uuidv4(), title: sectionTitles[chapterId] },
              ],
            }
          : chapter
      )
    );

    // Clear input field for that chapter
    setSectionTitles({ ...sectionTitles, [chapterId]: "" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Manage Course Structure</h1>

      {/* Input for adding a chapter */}
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Enter chapter title"
          value={chapterTitle}
          onChange={(e) => setChapterTitle(e.target.value)}
          className={styles.title}
        />
        <button onClick={handleAddChapter} className={styles.addChapterButton}>
          Add Chapter
        </button>
      </div>

      {/* Displaying chapters and adding sections */}
      <div className={styles.chapter}>
        {chapters.map((chapter) => (
          <div key={chapter.id} className={styles.wrapper}>
            <h2 className={styles.titleWrapper}>{chapter.title}</h2>

            {/* Input for adding a section inside a chapter */}
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter section title"
                value={sectionTitles[chapter.id] || ""}
                onChange={(e) =>
                  setSectionTitles({ ...sectionTitles, [chapter.id]: e.target.value })
                }
                className={styles.title}
              />
              <button onClick={() => handleAddSection(chapter.id)} className={styles.addSectionButton}>
                Add Section
              </button>
            </div>

            {/* Displaying sections inside the chapter */}
            <ul className={styles.displayTitleWrapper}>
              {chapter.sections.map((section) => (
                <li key={section.id}>{section.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
