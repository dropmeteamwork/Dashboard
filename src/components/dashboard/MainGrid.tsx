import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '@/internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid, { GridRows } from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard, { StatCardProps } from './StatCard';
import dayjs, { Dayjs } from 'dayjs';
import numeral from 'numeral'

export type AnalyticsData = {
  machine: string
  date : Dayjs | null

  last30DaysBottles: number[] // 30 elements
  last30DaysCans: number[] // 30 elements
  last30DaysClients: number[] // 30 elements

  hourlyTodayBottles: number[] // 24 elements
  hourlyTodayCans: number[] // 24 elements

  monthlyThisYearBottles: number[] // 12 elements
  monthlyThisYearCans: number[] // 12 elements
}

export type ClientsData = {
  machine: string
  date: Dayjs | null
  rows: GridRows
}

export type MainGridProps = {
  tab: 'analytics'
  data: AnalyticsData
} | {
  tab: 'clients'
  data: ClientsData
}

function Analytics(data : AnalyticsData) {
  const last30DaysTotal = data.last30DaysBottles.map((bottle, index) => bottle + data.last30DaysCans[index]);
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
      value: numeral(data.last30DaysBottles.reduce((a, b) => a + b, 0)).format('0,0a').toUpperCase(),
      interval: 'Last 30 days',
      trend: 'down',
      data: data.last30DaysBottles,
    },
    {
      title: 'Cans',
      value: numeral(data.last30DaysCans.reduce((a, b) => a + b, 0)).format('0,0a').toUpperCase(),
      interval: 'Last 30 days',
      trend: 'neutral',
      data: data.last30DaysCans,
    },
    {
      title: 'Alarms',
      value: numeral(data.last30DaysClients.reduce((a, b) => a + b, 0)).format('0,0a').toUpperCase(),
      interval: 'Last 30 days',
      trend: 'neutral',
      data: data.last30DaysClients,
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
          <SessionsChart bottlesData={data.hourlyTodayBottles} cansData={data.hourlyTodayCans} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart date={data.date} bottlesData={data.monthlyThisYearBottles} cansData={data.monthlyThisYearCans} />
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}

function Clients(data : ClientsData) {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid size={{ xs: 12, lg: 9 }}>
        <CustomizedDataGrid rows={data.rows} />
      </Grid>
      {/* <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid> */}
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}

export default function MainGrid(props : MainGridProps) {
  if (props.tab == 'analytics') {
    return Analytics(props.data)
  }
  if (props.tab == 'clients') {
    return Clients(props.data)
  }
}
