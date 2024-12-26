import React from 'react'
import styles from '@/styles/components/universal/wrapper.module.scss'

export default function Wrapper({children}:{children:React.ReactNode}) {
  return (
    <div className={styles.container}>{children}</div>
  )
}
