
// components/AutoPlayVideo.tsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './homeVideo.module.scss';

type AutoPlayVideoProps = {
  src: string;
  type: string;
};

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src, type }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={styles.container}>
      <video ref={videoRef} className={styles.video} muted={!isPlaying} controls>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button className={styles.playButton} onClick={handlePlayButtonClick}>
          Play with Sound
        </button>
      )}
    </div>
  );
};

export default AutoPlayVideo;
