import React from 'react';


const checkPassword = (
  password: string,
  comfirmPassword: string,
  setError: React.Dispatch<React.SetStateAction<string>>) => {
  if (password !== comfirmPassword) {
    setError('Password does not match');
    console.log('password does not match');
    return
  }
};

export default checkPassword;


