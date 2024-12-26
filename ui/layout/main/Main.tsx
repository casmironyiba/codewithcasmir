'use client'
import { FC, HTMLProps } from 'react'
import styles from './main.module.scss'

interface Props extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}
// interface MainProps extends HTMLProps<HTMLDivElement> {
//   // You can add more custom props if needed
// }

const Main: FC<Props> = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}

export default Main
