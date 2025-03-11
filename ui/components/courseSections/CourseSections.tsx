// import React, { FC } from 'react'
// import styled from 'styled-components'
// import Button from './common/Button'
// import displayFlex from '@/lib/utilities/displayFlex'
// import boxProperty from '@/lib/utilities/boxProperty'
// import Themes from '@/lib/utilities/themes'
// import AddButton from './common/button/AddButton'
//
// interface Props {
//   sections: any[]
// }
//
// export const CourseSections: FC<Props> = ({ sections }) => {
//   if (sections.length === 0) {
//     return (
//       <Container>
//         <div className='emptySection'>
//           <h1>Sections</h1>
//           <p>No Sections available</p>
//         </div>
//
//         <div className='addSectionWrapper'>
//           <Button label='+ Add Section' className='addButton' />
//         </div>
//       </Container>
//     )
//   }
//   return (
//     <Container>
//       <h1>Sections</h1>
//       <div>...Sections</div>
//     </Container>
//   )
// }
//

"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IChapter } from "@/types/IChapter";
import {ISection} from '@/types/ISection'
import styles from './courseSections.module.scss'


export default function Home() {
  const [sections, setSections] = useState<ISection[]>([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [chapterTitles, setChapterTitles] = useState<{ [key: string]: string }>({});

  // Add a new section
  const handleAddSection = () => {
    if (!sectionTitle) return;

    const newSection: ISection = {
      id: uuidv4(),
      title: sectionTitle,
      chapters: [],
    };

    setSections([...sections, newSection]);
    setSectionTitle("");
  };

  // Add a new chapter to a section
  const handleAddChapter = (sectionId: string) => {
    if (!chapterTitles[sectionId]) return;

    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              chapters: [
                ...section.chapters,
                { id: uuidv4(), title: chapterTitles[sectionId] },
              ],
            }
          : section
      )
    );

    setChapterTitles({ ...chapterTitles, [sectionId]: "" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Manage Sections & Chapters</h1>

      {/* Input for adding a section */}
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
          className={styles.title}
        />
        <button
          onClick={handleAddSection}
          className={styles.addSectionButton}
        >
          Add Section
        </button>
      </div>

      {/* Displaying sections and adding chapters */}
      <div className={styles.chapter}>
        {sections.map((section) => (
          <div key={section.id} className={styles.wrapper}>
            <h2 className={styles.titleWrapper}>{section.title}</h2>

            {/* Input for adding a chapter */}
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter chapter title"
                value={chapterTitles[section.id] || ""}
                onChange={(e) =>
                  setChapterTitles({ ...chapterTitles, [section.id]: e.target.value })
                }
                className={styles.title}
              />
              <button
                onClick={() => handleAddChapter(section.id)}
                className={styles.addChapterButton}
              >
                Add Chapter
              </button>
            </div>

            {/* Displaying chapters */}
            <ul className={styles.displayTitleWrapper}>
              {section.chapters.map((chapter) => (
                <li key={chapter.id}>{chapter.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// const Container = styled.div`
//   ${boxProperty('100%', '150px', '', '3px', Themes.$dark)};
//   ${displayFlex('space-between', 'flex-start', 'row nowrap')};
//   font-size: 0.7rem;
//
//   .emptySection {
//     ${boxProperty('150px', '60px', '', '3px')};
//     ${displayFlex('space-between', 'flex-start', 'column nowrap')};
//     // background: red;
//   }
//
//   .addSectionWrapper {
//     ${boxProperty('100px', '40px', '', '3px')};
//
//     .addButton {
//       background: none;
//       color: blue;
//       border: none;
//     }
//   }
// `
