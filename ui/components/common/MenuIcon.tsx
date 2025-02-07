import React, { FC } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'

interface Props {
  className?: string;
  ref?: React.RefObject<any>;
  sx?: any;
};

export const MenuIcon: FC<Props> = ({ className, ref, sx }) => <MenuRoundedIcon sx={sx} className={className} ref={ref} />

export const MenuOpenIcon: FC<Props> = ({ className, ref, sx }) => <MenuOpenRoundedIcon sx={sx} className={className} ref={ref} />

