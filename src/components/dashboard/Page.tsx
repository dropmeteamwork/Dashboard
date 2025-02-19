'use client'

import * as React from 'react';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from '@/components/dashboard/AppNavbar';
import Header from '@/components/dashboard/Header';
import SideMenu from '@/components/dashboard/SideMenu';
import AppTheme from '@/theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '@/theme/customizations';
import dayjs from 'dayjs';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export type Tab = 'analytics' | 'clients' | 'ads'

export default function Page(props: {
  tab: Tab,
  machine: string,
  setMachine: React.Dispatch<React.SetStateAction<string>>,
  date: dayjs.Dayjs | null,
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>,
  children: React.ReactNode
}) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu tab={props.tab} machine={props.machine} setMachine={props.setMachine} />
        <AppNavbar tab={props.tab} />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header tab={props.tab} date={props.date} setDate={props.setDate} />
            {props.children}
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
