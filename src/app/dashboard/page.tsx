'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '@/internals/components/Copyright';
import PageViewsBarChart from '@/components/dashboard/PageViewsBarChart';
import SessionsChart from '@/components/dashboard/SessionsChart';
import StatCard, { StatCardProps } from '@/components/dashboard/StatCard';
import numeral from 'numeral'
import dayjs, { Dayjs } from 'dayjs';
import DashboardPage from '@/components/dashboard/Page'

type AnalyticsData = {
  last30DaysBottles: number[] // 30 elements
  last30DaysCans: number[] // 30 elements
  last30DaysClients: number[] // 30 elements

  hourlyTodayBottles: number[] // 24 elements
  hourlyTodayCans: number[] // 24 elements

  monthlyThisYearBottles: number[] // 12 elements
  monthlyThisYearCans: number[] // 12 elements
}

function Analytics(props : { date: Dayjs | null } & AnalyticsData) {
  const last30DaysTotal = props.last30DaysBottles.map((bottle, index) => bottle + props.last30DaysCans[index]);
  const statsData: StatCardProps[] = [
    {
      title: 'Total recycled',
      value: numeral(last30DaysTotal.reduce((a, b) => a + b, 0)).format('0,0a').toUpperCase(),
      interval: 'Last 30 days',
      trend: 'up',
      data: last30DaysTotal,
    },
    {
      title: 'Bottles',
      value: numeral(props.last30DaysBottles.reduce((a, b) => a + b, 0)).format('0,0a').toUpperCase(),
      interval: 'Last 30 days',
      trend: 'down',
      data: props.last30DaysBottles,
    },
    {
      title: 'Cans',
      value: numeral(props.last30DaysCans.reduce((a, b) => a + b, 0)).format('0,0a').toUpperCase(),
      interval: 'Last 30 days',
      trend: 'neutral',
      data: props.last30DaysCans,
    },
    {
      title: 'Machine Alarms',
      value: numeral(props.last30DaysClients.reduce((a, b) => a + b, 0)).format('0,0a').toUpperCase(),
      interval: 'Last 30 days',
      trend: 'neutral',
      data: props.last30DaysClients,
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {statsData.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart bottlesData={props.hourlyTodayBottles} cansData={props.hourlyTodayCans} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart date={props.date} bottlesData={props.monthlyThisYearBottles} cansData={props.monthlyThisYearCans} />
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}

export default function Page() {
  const [machine, setMachine] = React.useState('')
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());

  return (
    <DashboardPage tab='analytics' machine={machine} setMachine={setMachine} date={date} setDate={setDate}>
      <Analytics
        date={date}
        last30DaysBottles={[
          1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
          780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
        ]}
        last30DaysCans={[
          200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
          360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
        ]}
        last30DaysClients={[
          500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
          520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
        ]}
        hourlyTodayBottles={[
          500,  900,  700,  1400, 1100, 1700, 2300, 2000, 2600, 2900, 2300, 3200,
          3500, 3800, 4100, 4400, 2900, 4700, 5000, 5300, 5600, 5900, 6200, 6500,
        ]}
        hourlyTodayCans={[
          1000, 1500, 1200, 1700, 1300, 2000, 2400, 2200, 2600, 2800, 2500, 2300,
          3000, 3400, 3700, 3200, 3900, 4100, 3500, 4300, 4500, 4000, 4700, 5000,
        ]}
        monthlyThisYearBottles={[2234, 3872, 2998, 4125, 3357, 2789, 2998]}
        monthlyThisYearCans={[3098, 4215, 2384, 2101, 4752, 3593, 2384]}
      />
    </DashboardPage>
  );
}
