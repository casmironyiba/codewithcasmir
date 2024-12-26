import React, { useEffect, useState } from 'react';
import styles from './analogClock.module.scss';


const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getHandStyle = (unit: number, max: number, offset: number = 0) => ({
    transform: `rotate(${(360 / max) * unit + offset}deg)`,
  });

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.centerDot}></div>
        <div className={styles.numberContainer}>

          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className={styles.numberWrapper} style={{ transform: `rotate(${i * 30}deg)` }}>
              <div className={styles.number} style={{ transform: `rotate(-${i * 33}deg)` }}>{i + 1}</div>
            </div>
          ))}

        </div>
        <div className={`${styles.hourHand} ${styles.hand}`} style={getHandStyle(hours + minutes / 60, 12)}></div>
        <div className={`${styles.minuteHand} ${styles.hand}`} style={getHandStyle(minutes, 60)}></div>
        <div className={`${styles.secondHand} ${styles.hand}`} style={getHandStyle(seconds, 60)}></div>
      </div>
    </div>
  );
};

export default AnalogClock;


