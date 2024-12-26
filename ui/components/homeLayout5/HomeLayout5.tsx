import React from 'react'
import FAQ from '../faq/FAQ';
import styles from './homeLayout5.module.scss'
import SiteInfo from '../siteInfo/SiteInfo';


export default function HomeLayout5() {

const faqData = [
  {
    question: `What is ${SiteInfo.name} ?`,
    answer: `${SiteInfo.name} is an online learning platform that offers a wide range of courses from universities and companies around the world.`,
  },
  {
    question: `How does ${SiteInfo.name} work?`,
    answer: `${SiteInfo.name} allows you to enroll in courses, earn certificates, and even pursue degrees online.`,
  },
  {
    question: `Is ${SiteInfo.name} free ?`,
    answer: `${SiteInfo.name} offers both free and paid courses. Some courses are fully free, while others offer paid certificates.`,
  },

  {
    question: `What background knowledge is necessary ?`,
    answer: `None! Whether you’re completely new to the job field or have had some experience, an entry-level Professional Certificate doesn’t require any background knowledge. `
  },
];

  return (
    <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>
      <FAQ items={faqData} />
    </div>
  );
}
