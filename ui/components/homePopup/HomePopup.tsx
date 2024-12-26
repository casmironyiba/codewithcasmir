import React, {useRef,useEffect} from 'react'
import styles from '@/styles/components/homepopup.module.scss'
import CloseIcon from '@mui/icons-material/Close';

export default function HomePopup() {
  const homePopupRef = useRef<HTMLDivElement>(null);
  const closeiconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    setTimeout(() => {
      homePopupRef.current.style.display = 'flex'
      },5000);

    closeiconRef.current?.addEventListener("click", () => {
      homePopupRef.current.style.display = 'none'
      })


})
  return (
    <div className={styles.homePopup} ref={homePopupRef}>
      <div className={styles.homePopupwrapper}>
        test popup
      </div>

      <CloseIcon className={styles.closeIcon} ref={closeiconRef}/>
    </div>
  )
}
