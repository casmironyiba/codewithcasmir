import React from 'react';
import styles from './animation.module.scss';
import AnimationProps from '@/ui/interface/AnimationProps';


const AnimationWrapper: React.FC<AnimationProps> = ({
  children,
  animation,
  duration = '1s',
  delay = '0s',
  iterationCount = 1,
  className,
}) => {
  const animationClass = styles[animation];

  const inlineStyle = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: iterationCount,
  };

  return (
    <div
      className={`${animationClass} ${className}`}
      style={inlineStyle}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;
