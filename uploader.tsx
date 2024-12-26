import React from 'react';

interface UploaderProps {
  text:string
  videos: { file: File | null; name: string }[];
  onAddArticle: () => void;
  onInputChange: (file: File | null, index: number) => void;
    buttonText:string;
}

const Uploader: React.FC<UploaderProps> = ({ text,videos, onAddArticle, onInputChange,buttonText='add more Article' }) => {
  return (
    <div>
      <h2>{text}</h2>
      {videos.map((video, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type='file'
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              onInputChange(file, index);
            }}
          />
          {video.name && <span>{video.name}</span>}
        </div>
      ))}
      <button type='button' onClick={onAddArticle}>
        {buttonText}
      </button>
    </div>
  );
};

export default Uploader;
