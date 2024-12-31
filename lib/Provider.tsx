
"use client";
import React, {FC} from 'react'
import {SessionProvider} from 'next-auth/react';

interface Props  {
    children:React.ReactNode
  }

export const AuthProvider:FC<Props> = ({children}) => {
  return <SessionProvider> {children}</SessionProvider>
}
