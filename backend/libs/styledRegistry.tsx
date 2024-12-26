import { createContext, useContext,useState } from 'react';

interface ContextProps {
  value: string;
  setValue: (value: string) => void;
}

const MyContext = createContext<ContextProps>({
  value: '',
  setValue: () => {},
});

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider: React.FC = ({ children }:any) => {
  const [value, setValue] = useState('');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
