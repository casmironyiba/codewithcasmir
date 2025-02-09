import React, {FC} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
interface Prop {
    sx:any
  };

export const UserIcon:FC<Prop> = ({sx}) => {
  return (
    <>
      <AccountCircleIcon sx={sx}/>
    </>
  )
}
