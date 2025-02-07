
import React from 'react';

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setInputValue:React.Dispatch<React.SetStateAction<string>>) => {
    setInputValue(e.target.value);
  };
  
export default handleChange;

