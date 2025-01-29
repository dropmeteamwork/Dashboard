import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import numeral from 'numeral'

function getPreviousMonths(currentMonthIndex: number) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.slice(0, currentMonthIndex + 1);
}

export default function PageViewsBarChart(props : { date: Dayjs | null, bottlesData: number[], cansData: number[] }) {
  const theme = useTheme();
  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];
  const months = getPreviousMonths(props.date ? props.date.month() : 11)
  const bottlesData = props.bottlesData.slice(0, months.length)
  const cansData = props.cansData.slice(0, months.length)
  const totalData = bottlesData.map((bottle, index) => bottle + cansData[index]);
  const total = totalData.reduce((a, b) => a + b, 0)
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Recycles this year
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
              {numeral(total).format('0,0')}
            </Typography>
            <Chip size="small" color="error" label="-8%" />
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Recycles made over the span of this year
          </Typography>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={
            [
              {
                scaleType: 'band',
                categoryGapRatio: 0.5,
                data: months,
              },
            ] as any
          }
          series={[
            {
              id: 'bottles',
              label: 'Bottles',
              data: bottlesData,
              stack: 'A',
            },
            {
              id: 'cans',
              label: 'Cans',
              data: cansData,
              stack: 'B',
            },
            {
              id: 'total',
              label: 'Total recycled',
              data: totalData,
              stack: 'C',
            },
          ]}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
