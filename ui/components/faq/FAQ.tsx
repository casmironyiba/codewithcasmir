import React, {FC,useState} from 'react'
import styles from './faq.module.scss'

type FaqItem = {
  question: string;
  answer: string;
};

interface FaqProps {
  items: FaqItem[];
}

const FAQ: React.FC<FaqProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <button
            className={styles.question}
            onClick={() => toggleItem(index)}
          >
            {item.question}
            <span className={styles.toggleIcon}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className={styles.answer}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
