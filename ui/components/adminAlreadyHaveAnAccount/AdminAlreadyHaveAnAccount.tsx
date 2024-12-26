import React from 'react'
import Link from 'next/link';


export default function AdminAlreadyHaveAnAccount() {
  return (
    <div>
        <p>
          Already a have an account ? <Link href='/auth/signin/admin'>Sign In</Link>
        </p>
    </div>
  )
};
