import React from 'react';

interface FileUploadListProps {
  files: { file: File | null; name: string }[];
  onAddFile: () => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  label: string;
}

const FileUpload: React.FC<FileUploadListProps> = ({ files, onAddFile, onFileChange, label }) => (
  <div>
    <h2>Upload {label}</h2>
    {files?.map((file, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <input
          type='file'
          onChange={(e) => onFileChange(e, index)}
          style={{ marginRight: '10px' }}
        />
        <span>{file.name}</span>
      </div>
    ))}
    <button type='button' onClick={onAddFile}>
      Add {label}
    </button>
  </div>
);

export default FileUpload;
