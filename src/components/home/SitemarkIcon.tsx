import * as React from 'react';
import { useTheme } from '@mui/material/styles';

export default function SitemarkIcon() {
  const theme = useTheme();
  return <img src={'/static/images/logo-' + theme.palette.mode + '.svg'} height='39' width='95'></img>;
}
