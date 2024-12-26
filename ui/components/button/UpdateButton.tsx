import React from 'react'
import ButtonInterface from '@/ui/interface/ButtonInterface'
import Button from './Button'

const UpdateButton: React.FC<ButtonInterface> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className,
  ref,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      className={className}
    >
      {label}
    </Button>
  )
}

export default UpdateButton
