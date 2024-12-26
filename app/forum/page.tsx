import React from 'react'
import styles from './forum.module.scss';

const Forum = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Forum</h1>
      </header>
      <div className={styles.content}>
        <section className={styles.postList}>
          <div className={styles.post}>
            <h2 className={styles.postTitle}>How to learn Next.js?</h2>
            <p className={styles.postExcerpt}>
              A brief discussion about getting started with Next.js and common pitfalls...
            </p>
            <div className={styles.postMeta}>
              <span>Posted by John Doe</span>
              <span>5 comments</span>
            </div>
          </div>

          <div className={styles.post}>
            <h2 className={styles.postTitle}>Understanding SCSS Modules</h2>
            <p className={styles.postExcerpt}>
              A discussion on how to use SCSS Modules effectively in a Next.js project...
            </p>
            <div className={styles.postMeta}>
              <span>Posted by Jane Smith</span>
              <span>3 comments</span>
            </div>
          </div>
        </section>

        <aside className={styles.sidebar}>
          <h3>Popular Topics</h3>
          <ul>
            <li>Next.js Performance Tips</li>
            <li>React Hooks Best Practices</li>
            <li>Understanding Server Components</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Forum;
