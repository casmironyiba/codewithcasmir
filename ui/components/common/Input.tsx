'use client'
import React from 'react'
import styled from 'styled-components'

interface InputFieldProps {
  type: string
  name?: string | undefined
  value?: string | undefined
  placeholder?: string | undefined
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string | undefined
  required?: boolean | undefined
}

const Input: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
  className,
}) => {
  return (
    <InputStyle
      type={type}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className={className}
    />
  )
}

export default Input

const InputStyle = styled.input`
  outline: none;
  with: 100%;
  height: 100%;
`
