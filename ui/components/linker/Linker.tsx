import React from 'react';
import Link from 'next/link';
import styles from './linker.module.scss';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: any;
  Icon?: React.ElementType;
  size?:any;
};

const Linker: React.FC<Props> = ({ children, href, Icon,size,className }) => {
  const content = (
    <>
      {Icon && <Icon className={className} sx={{fontSize:size}} />}
      {children}
    </>
  );

  return (
    <Link href={href} className={className} >
      {content}
    </Link>
  );
};

export default Linker;
