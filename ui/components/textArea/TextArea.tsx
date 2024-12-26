import React from 'react';
import styles from './textArea.module.scss'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = ({ ...props }) => {
  return <textarea {...props} className={styles.textArea} />;
};

export default Textarea;
