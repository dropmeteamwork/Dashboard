import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import numeral from 'numeral'

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.5} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

export default function SessionsChart(props : { bottlesData: number[], cansData: number[] }) {
  const theme = useTheme();
  const data = [
    "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
    "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM",
  ];

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  const totalData = props.bottlesData.map((bottle, index) => bottle + props.cansData[index]);
  const total = totalData.reduce((a, b) => a + b, 0)

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Recycles today
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              {numeral(total).format("0,0")}
            </Typography>
            <Chip size="small" color="success" label="+35%" />
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Recycles for every hour today
          </Typography>
        </Stack>
        <LineChart
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'point',
              data,
              tickInterval: (index, i) => (i + 1) % 5 === 0,
            },
          ]}
          series={[
            {
              id: 'total',
              label: 'Total',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              area: true,
              stackOrder: 'ascending',
              data: totalData,
            },
            {
              id: 'cans',
              label: 'Cans',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              area: true,
              stackOrder: 'ascending',
              data: props.cansData,
            },
            {
              id: 'bottles',
              label: 'Bottls',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              stackOrder: 'ascending',
              data: props.bottlesData,
              area: true,
            },
          ]}
          height={250}
          margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          sx={{
            '& .MuiAreaElement-series-bottles': {
              fill: "url('#bottles')",
            },
            '& .MuiAreaElement-series-cans': {
              fill: "url('#cans')",
            },
            '& .MuiAreaElement-series-total': {
              fill: "url('#total')",
            },
          }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        >
          <AreaGradient color={theme.palette.primary.dark} id="bottles" />
          <AreaGradient color={theme.palette.primary.main} id="cans" />
          <AreaGradient color={theme.palette.primary.light} id="total" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
