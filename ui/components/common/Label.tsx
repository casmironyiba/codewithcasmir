import React, { FC } from 'react'

interface Props {
  name: string;
  text: string;
  className?: string | undefined
}
const Label: FC<Props> = ({ name, text, className = '' }) => {
  return (
    <label htmlFor={name} className={className}>
      {text}
    </label>

  )
};

export default Label;
