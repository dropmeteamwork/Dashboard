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
import MainGrid from '@/components/dashboard/MainGrid';
import SideMenu from '@/components/dashboard/SideMenu';
import AppTheme from '@/theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '@/theme/customizations';
import dayjs, { Dayjs } from 'dayjs';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Clients(props: {}) {
  const [machine, setMachine] = React.useState('')
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu tab='clients' machine={machine} setMachine={setMachine} />
        <AppNavbar tab='clients' />
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
            <Header tab='clients' date={date} setDate={setDate} />
            <MainGrid tab='clients' data={{
              machine: machine,
              date: date,
              rows:
              [
                {
                  id: 1,
                  userName: 'Suhaila Ahmed',
                  email: 'suhailaahmed@gmail.com',
                  phoneNumber: '+201125005705',
                  status: 'Success',
                  bottles: 1,
                  cans: 0,
                  recycledAt: '2024-12-12'
                },
                {
                  id: 2,
                  userName: 'Unknown User',
                  email: '01154423995@outlook.com',
                  phoneNumber: '01154423995',
                  status: 'Success',
                  bottles: 2,
                  cans: 0,
                  recycledAt: '2024-06-18'
                },
                {
                  id: 3,
                  userName: 'Unknown User',
                  email: '01154423995@yahoo.com',
                  phoneNumber: '01154423995',
                  status: 'Success',
                  bottles: 2,
                  cans: 0,
                  recycledAt: '2024-05-11'
                },
                {
                  id: 4,
                  userName: 'Unknown User',
                  email: '01143532412@gmail.com',
                  phoneNumber: '01143532412',
                  status: 'Success',
                  bottles: 2,
                  cans: 0,
                  recycledAt: '2024-07-03'
                },
                {
                  id: 5,
                  userName: 'Omar Saeed',
                  email: 'omarsaeed@yahoo.com',
                  phoneNumber: '+201192739396',
                  status: 'Success',
                  bottles: 2,
                  cans: 0,
                  recycledAt: '2024-08-03'
                },
                {
                  id: 6,
                  userName: 'Unknown User',
                  email: '01279267120@outlook.com',
                  phoneNumber: '01279267120',
                  status: 'Success',
                  bottles: 4,
                  cans: 0,
                  recycledAt: '2024-04-21'
                },
                {
                  id: 7,
                  userName: 'Unknown User',
                  email: '01118077251@outlook.com',
                  phoneNumber: '01118077251',
                  status: 'Success',
                  bottles: 1,
                  cans: 0,
                  recycledAt: '2024-08-04'
                },
                {
                  id: 8,
                  userName: 'Doaa Mohamed',
                  email: 'doaamohamed@gmail.com',
                  phoneNumber: '+201158041123',
                  status: 'Success',
                  bottles: 1,
                  cans: 0,
                  recycledAt: '2024-01-06'
                },
                {
                  id: 9,
                  userName: 'Ahmed Allam',
                  email: 'ahmedallam@gmail.com',
                  phoneNumber: '+201175963115',
                  status: 'Success',
                  bottles: 1,
                  cans: 0,
                  recycledAt: '2024-01-23'
                },
                {
                  id: 10,
                  userName: 'Ahmed Saeed',
                  email: 'ahmedsaeed@outlook.com',
                  phoneNumber: '+201131642427',
                  status: 'Success',
                  bottles: 0,
                  cans: 1,
                  recycledAt: '2024-12-10'
                },
                {
                  id: 11,
                  userName: 'Ahmed Kamel',
                  email: 'ahmedkamel@yahoo.com',
                  phoneNumber: '+201147987008',
                  status: 'Success',
                  bottles: 3,
                  cans: 3,
                  recycledAt: '2024-07-30'
                },
                {
                  id: 12,
                  userName: 'Khaled Ali',
                  email: 'khaledali@outlook.com',
                  phoneNumber: '+201174402124',
                  status: 'Failure',
                  bottles: 3,
                  cans: 1,
                  recycledAt: '2024-06-10'
                },
                {
                  id: 13,
                  userName: 'Ali Ali',
                  email: 'aliali@outlook.com',
                  phoneNumber: '+201130638809',
                  status: 'Pending',
                  bottles: 4,
                  cans: 2,
                  recycledAt: '2024-05-14'
                },
                {
                  id: 14,
                  userName: 'Fatima Hassan',
                  email: 'fatimahassan@gmail.com',
                  phoneNumber: '+201117677405',
                  status: 'Pending',
                  bottles: 3,
                  cans: 5,
                  recycledAt: '2024-08-13'
                },
                {
                  id: 15,
                  userName: 'Sara Nabil',
                  email: 'saranabil@yahoo.com',
                  phoneNumber: '+201182417802',
                  status: 'Success',
                  bottles: 1,
                  cans: 0,
                  recycledAt: '2024-02-04'
                },
                {
                  id: 16,
                  userName: 'Ali Ali',
                  email: 'aliali@yahoo.com',
                  phoneNumber: '+201116513661',
                  status: 'Pending',
                  bottles: 0,
                  cans: 1,
                  recycledAt: '2024-09-29'
                },
                {
                  id: 17,
                  userName: 'Sara Ibrahim',
                  email: 'saraibrahim@yahoo.com',
                  phoneNumber: '+201169544318',
                  status: 'Success',
                  bottles: 3,
                  cans: 0,
                  recycledAt: '2024-08-26'
                },
                {
                  id: 18,
                  userName: 'Mohamed Ibrahim',
                  email: 'mohamedibrahim@yahoo.com',
                  phoneNumber: '+201150600239',
                  status: 'Success',
                  bottles: 1,
                  cans: 2,
                  recycledAt: '2024-06-24'
                },
                {
                  id: 19,
                  userName: 'Sara Youssef',
                  email: 'sarayoussef@gmail.com',
                  phoneNumber: '+201184483416',
                  status: 'Pending',
                  bottles: 3,
                  cans: 2,
                  recycledAt: '2024-03-29'
                },
                {
                  id: 20,
                  userName: 'Fatima Hassan',
                  email: 'fatimahassan@outlook.com',
                  phoneNumber: '+201167824783',
                  status: 'Pending',
                  bottles: 5,
                  cans: 5,
                  recycledAt: '2024-04-26'
                },
                {
                  id: 21,
                  userName: 'Sara Salem',
                  email: 'sarasalem@yahoo.com',
                  phoneNumber: '+201158313189',
                  status: 'Pending',
                  bottles: 0,
                  cans: 4,
                  recycledAt: '2024-03-22'
                },
                {
                  id: 22,
                  userName: 'Yasmine Ibrahim',
                  email: 'yasmineibrahim@yahoo.com',
                  phoneNumber: '+201185637051',
                  status: 'Pending',
                  bottles: 4,
                  cans: 2,
                  recycledAt: '2024-02-06'
                },
                {
                  id: 23,
                  userName: 'Sara Kamel',
                  email: 'sarakamel@yahoo.com',
                  phoneNumber: '+201160776439',
                  status: 'Pending',
                  bottles: 3,
                  cans: 2,
                  recycledAt: '2024-08-19'
                },
                {
                  id: 24,
                  userName: 'Fatima Mohamed',
                  email: 'fatimamohamed@yahoo.com',
                  phoneNumber: '+201167795073',
                  status: 'Failure',
                  bottles: 3,
                  cans: 0,
                  recycledAt: '2024-02-16'
                },
                {
                  id: 25,
                  userName: 'Fatima Sayed',
                  email: 'fatimasayed@gmail.com',
                  phoneNumber: '+201151259239',
                  status: 'Failure',
                  bottles: 3,
                  cans: 1,
                  recycledAt: '2024-02-13'
                },
                {
                  id: 26,
                  userName: 'Sara Youssef',
                  email: 'sarayoussef@yahoo.com',
                  phoneNumber: '+201135196485',
                  status: 'Pending',
                  bottles: 2,
                  cans: 2,
                  recycledAt: '2024-05-06'
                },
                {
                  id: 27,
                  userName: 'Omar Mohamed',
                  email: 'omarmohamed@gmail.com',
                  phoneNumber: '+201155659391',
                  status: 'Pending',
                  bottles: 5,
                  cans: 4,
                  recycledAt: '2024-08-10'
                },
                {
                  id: 28,
                  userName: 'Sara Hassan',
                  email: 'sarahassan@gmail.com',
                  phoneNumber: '+201130795573',
                  status: 'Failure',
                  bottles: 0,
                  cans: 0,
                  recycledAt: '2024-06-17'
                },
                {
                  id: 29,
                  userName: 'Yasmine Sayed',
                  email: 'yasminesayed@gmail.com',
                  phoneNumber: '+201148237776',
                  status: 'Success',
                  bottles: 1,
                  cans: 2,
                  recycledAt: '2024-05-16'
                },
                {
                  id: 30,
                  userName: 'Mohamed Kamel',
                  email: 'mohamedkamel@yahoo.com',
                  phoneNumber: '+201138388400',
                  status: 'Failure',
                  bottles: 1,
                  cans: 3,
                  recycledAt: '2024-05-09'
                }
              ],
              }} />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
