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

export default function Dashboard(props: {}) {
  const [machine, setMachine] = React.useState('')
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu tab='analytics' machine={machine} setMachine={setMachine}/>
        <AppNavbar tab='analytics' />
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
            <Header item='Analytics' date={date} setDate={setDate}/>
            <MainGrid tab='analytics' data={{
              machine: machine,
              date: date,
              last30DaysBottles: [
                1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
                780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
              ],
              last30DaysCans: [
                200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
                360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
              ],
              last30DaysClients:  [
                500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
                520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
              ],
              hourlyTodayBottles: [
                500,  900,  700,  1400, 1100, 1700, 2300, 2000, 2600, 2900, 2300, 3200,
                3500, 3800, 4100, 4400, 2900, 4700, 5000, 5300, 5600, 5900, 6200, 6500,
              ],
              hourlyTodayCans: [
                1000, 1500, 1200, 1700, 1300, 2000, 2400, 2200, 2600, 2800, 2500, 2300,
                3000, 3400, 3700, 3200, 3900, 4100, 3500, 4300, 4500, 4000, 4700, 5000,
              ],
              monthlyThisYearBottles: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
              monthlyThisYearCans: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
            }} />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
