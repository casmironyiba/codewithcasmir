import React, { FC } from 'react'

interface Props {
  className?: string | undefined
  htmlFor?: string
  children: React.ReactNode
}
const Label: FC<Props> = ({ children, className, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  )
}

export default Label
