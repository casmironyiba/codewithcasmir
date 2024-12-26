import React, {useEffect, useRef} from 'react';
import styles from '@/styles/components/auth/checkButton.module.scss';
import {Check} from '@mui/icons-material';

interface CheckButtonProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckButton: React.FC<CheckButtonProps> = () => {
  const containerRef = useRef<any>(null)
  const checkboxRef = useRef<any>(null)

  useEffect(() => {
    containerRef?.current?.addEventListener('click', () => {
      console.log('toggling')
      containerRef.current.classList.toggle(styles.open);

      })

    })
  return (
    <div className={styles.container} ref={containerRef}>
      <Check ref={checkboxRef} className={styles.check}/>
    </div>
  );
};

export default CheckButton;
