import Link from 'next/link'
import React, { FC } from 'react'
interface Props {
  children: React.ReactNode
  className?: any
}

const SignupLink:FC<Props> = ({children,className} ) => {
  return (
    <Link href={'/auth/signup/email'} className={className}>
      {children}
    </Link>
  )
}

export default SignupLink;
