import React, { FC } from 'react';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import styles from './fileInputIcon.module.scss';

interface Prop {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInputIcon: FC<Prop> = ({ onChange,value }) => {
  return (
    <div className={styles.container}>
      <input
        type='file'
        id='fileInput'
        style={{ display: 'none' }}
        onChange={onChange}
        value={value}
      />
      <label htmlFor='fileInput' style={{ cursor: 'pointer' }}>
        <DriveFolderUploadIcon />
      </label>
    </div>
  );
};

export default FileInputIcon;
