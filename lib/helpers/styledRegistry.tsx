// import { createContext, useContext,useState } from 'react';
//
// interface ContextProps {
//   value: string;
//   setValue: (value: string) => void;
// }
//
// const MyContext = createContext<ContextProps>({
//   value: '',
//   setValue: () => {},
// });
//
// export const useMyContext = () => useContext(MyContext);
//
// export const MyContextProvider: React.FC = ({ children }:any) => {
//   const [value, setValue] = useState('');
//
//   return (
//     <MyContext.Provider value={{ value, setValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };
//
'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }:any) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
