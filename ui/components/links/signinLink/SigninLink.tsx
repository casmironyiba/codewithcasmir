import Link from 'next/link'
import React, {FC} from 'react'

interface Props {
    children?:React.ReactNode;
    className?:string;
  }
const SigninLink:FC<Props> = ({children='Sign in ',className}) => {
  return (
  <Link href={'/auth/signin/email'} className={className}>{children}</Link>
  )
}

export default SigninLink;
