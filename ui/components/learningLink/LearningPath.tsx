import React from 'react'
import Link from 'next/link';
import styles from './learningPath.module.scss';

export default function LearningPath() {
  return (
    <div className={`${styles.container}`}>
        <Link href="/learningpath">
          Learning Paths
        </Link>
    </div>
  )
};
