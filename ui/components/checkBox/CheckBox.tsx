import React, {useEffect, useRef} from 'react';
import styles from '@/styles/components/auth/checkButton.module.scss';
import CheckIcon from '@mui/icons-material/Check';


const CheckButton: React.FC = () => {
  const containerRef = useRef<any>(null)
  const checkboxRef = useRef<any>(null)

  useEffect(() => {
    containerRef?.current?.addEventListener('click', () => {
      console.log('checked')
      containerRef.current.classList.toggle(styles.open);

      })

    })
  return (
    <div className={styles.container} ref={containerRef}>
      <CheckIcon ref={checkboxRef} className={styles.checkbox}/>
    </div>
  );
};

export default CheckButton;
