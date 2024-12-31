import {ReactNode} from 'react'

export default interface AnimationWrapperProps {
  children: ReactNode;
  animation: 'fadeIn' | 'slideIn';
  duration?: string; // e.g., '1s', '500ms'
  delay?: string; // e.g., '0.5s', '1s'
  iterationCount?: number | 'infinite';
  className?: string;
}
