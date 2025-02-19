'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import dayjs, { Dayjs } from 'dayjs';
import DashboardPage from '@/components/dashboard/Page';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Copyright from '@/internals/components/Copyright';
import { DataGrid } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';

type Status = 'Success' | 'Pending' | 'Failure'

type ClientsData = {
  id: number
  userName: string
  email: string
  phoneNumber: string
  status: Status
  bottles: number
  cans: number
  points: number
  recycledAt: string
}[]

function renderStatus(status: Status) {
  const colors: { [index: string]: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' } = {
    Success: 'success',
    Pending: 'warning',
    Failure: 'error',
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

function CustomizedDataGrid({ rows }: { rows : ClientsData }) {
  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={[
        {
          field: 'userName',
          headerName: 'User Name',
          flex: 0.8,
          minWidth: 80
        },
        {
          field: 'email',
          headerName: 'Email',
          flex: 0.8,
          minWidth: 80
        },
        {
          field: 'phoneNumber',
          headerName: 'Phone Number',
          flex: 0.6,
          minWidth: 80
        },
        {
          field: 'status',
          headerName: 'Status',
          headerAlign: 'center',
          align: 'center',
          flex: 0.6,
          minWidth: 80,
          renderCell: (params) => renderStatus(params.value as Status),
        },
        {
          field: 'bottles',
          headerName: 'Bottles',
          headerAlign: 'center',
          align: 'center',
          flex: 0.8,
          minWidth: 80,
        },
        {
          field: 'cans',
          headerName: 'Cans',
          headerAlign: 'center',
          align: 'center',
          flex: 0.8,
          minWidth: 80,
        },
        {
          field: 'points',
          headerName: 'Points',
          headerAlign: 'center',
          align: 'center',
          flex: 0.8,
          minWidth: 80,
        },
        {
          field: 'recycledAt',
          headerName: 'Recycled At',
          headerAlign: 'center',
          align: 'center',
          flex: 0.8,
          minWidth: 80,
        },
      ]}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
          },
        },
      }}
    />
  );
}

function Clients(props : { rows: ClientsData }) {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid size={{ xs: 12, lg: 9 }}>
        <CustomizedDataGrid rows={props.rows} />
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}

export default function Page() {
  const [machine, setMachine] = React.useState('')
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());

  return (
    <DashboardPage tab="clients" machine={machine} setMachine={setMachine} date={date} setDate={setDate}>
      <Clients rows={
[
  {
    id: 1,
    userName: 'Suhaila Ahmed',
    email: 'suhailaahmed@gmail.com',
    phoneNumber: '+201125005705',
    status: 'Success',
    bottles: 1,
    cans: 0,
    recycledAt: '2024-12-12',
    points: 2
  },
  {
    id: 2,
    userName: 'Unknown User',
    email: '01154423995@outlook.com',
    phoneNumber: '01154423995',
    status: 'Success',
    bottles: 2,
    cans: 0,
    recycledAt: '2024-06-18',
    points: 4
  },
  {
    id: 3,
    userName: 'Unknown User',
    email: '01154423995@yahoo.com',
    phoneNumber: '01154423995',
    status: 'Success',
    bottles: 2,
    cans: 0,
    recycledAt: '2024-05-11',
    points: 4
  },
  {
    id: 4,
    userName: 'Unknown User',
    email: '01143532412@gmail.com',
    phoneNumber: '01143532412',
    status: 'Success',
    bottles: 2,
    cans: 0,
    recycledAt: '2024-07-03',
    points: 4
  },
  {
    id: 5,
    userName: 'Omar Saeed',
    email: 'omarsaeed@yahoo.com',
    phoneNumber: '+201192739396',
    status: 'Success',
    bottles: 2,
    cans: 0,
    recycledAt: '2024-08-03',
    points: 4
  },
  {
    id: 6,
    userName: 'Unknown User',
    email: '01279267120@outlook.com',
    phoneNumber: '01279267120',
    status: 'Success',
    bottles: 4,
    cans: 0,
    recycledAt: '2024-04-21',
    points: 8
  },
  {
    id: 7,
    userName: 'Unknown User',
    email: '01118077251@outlook.com',
    phoneNumber: '01118077251',
    status: 'Success',
    bottles: 1,
    cans: 0,
    recycledAt: '2024-08-04',
    points: 2
  },
  {
    id: 8,
    userName: 'Doaa Mohamed',
    email: 'doaamohamed@gmail.com',
    phoneNumber: '+201158041123',
    status: 'Success',
    bottles: 1,
    cans: 0,
    recycledAt: '2024-01-06',
    points: 2
  },
  {
    id: 9,
    userName: 'Ahmed Allam',
    email: 'ahmedallam@gmail.com',
    phoneNumber: '+201175963115',
    status: 'Success',
    bottles: 1,
    cans: 0,
    recycledAt: '2024-01-23',
    points: 2
  },
  {
    id: 10,
    userName: 'Ahmed Saeed',
    email: 'ahmedsaeed@outlook.com',
    phoneNumber: '+201131642427',
    status: 'Success',
    bottles: 0,
    cans: 1,
    recycledAt: '2024-12-10',
    points: 4
  },
  {
    id: 11,
    userName: 'Ahmed Kamel',
    email: 'ahmedkamel@yahoo.com',
    phoneNumber: '+201147987008',
    status: 'Success',
    bottles: 3,
    cans: 3,
    recycledAt: '2024-07-30',
    points: 18
  },
  {
    id: 12,
    userName: 'Khaled Ali',
    email: 'khaledali@outlook.com',
    phoneNumber: '+201174402124',
    status: 'Failure',
    bottles: 3,
    cans: 1,
    recycledAt: '2024-06-10',
    points: 10
  },
  {
    id: 13,
    userName: 'Ali Ali',
    email: 'aliali@outlook.com',
    phoneNumber: '+201130638809',
    status: 'Pending',
    bottles: 4,
    cans: 2,
    recycledAt: '2024-05-14',
    points: 16
  },
  {
    id: 14,
    userName: 'Fatima Hassan',
    email: 'fatimahassan@gmail.com',
    phoneNumber: '+201117677405',
    status: 'Pending',
    bottles: 3,
    cans: 5,
    recycledAt: '2024-08-13',
    points: 26
  },
  {
    id: 15,
    userName: 'Sara Nabil',
    email: 'saranabil@yahoo.com',
    phoneNumber: '+201182417802',
    status: 'Success',
    bottles: 1,
    cans: 0,
    recycledAt: '2024-02-04',
    points: 2
  },
  {
    id: 16,
    userName: 'Ali Ali',
    email: 'aliali@yahoo.com',
    phoneNumber: '+201116513661',
    status: 'Pending',
    bottles: 0,
    cans: 1,
    recycledAt: '2024-09-29',
    points: 4
  },
  {
    id: 17,
    userName: 'Sara Ibrahim',
    email: 'saraibrahim@yahoo.com',
    phoneNumber: '+201169544318',
    status: 'Success',
    bottles: 3,
    cans: 0,
    recycledAt: '2024-08-26',
    points: 6
  },
  {
    id: 18,
    userName: 'Mohamed Ibrahim',
    email: 'mohamedibrahim@yahoo.com',
    phoneNumber: '+201150600239',
    status: 'Success',
    bottles: 1,
    cans: 2,
    recycledAt: '2024-06-24',
    points: 10
  },
  {
    id: 19,
    userName: 'Sara Youssef',
    email: 'sarayoussef@gmail.com',
    phoneNumber: '+201184483416',
    status: 'Pending',
    bottles: 3,
    cans: 2,
    recycledAt: '2024-03-29',
    points: 14
  },
  {
    id: 20,
    userName: 'Fatima Hassan',
    email: 'fatimahassan@outlook.com',
    phoneNumber: '+201167824783',
    status: 'Pending',
    bottles: 5,
    cans: 5,
    recycledAt: '2024-04-26',
    points: 30
  },
  {
    id: 21,
    userName: 'Sara Salem',
    email: 'sarasalem@yahoo.com',
    phoneNumber: '+201158313189',
    status: 'Pending',
    bottles: 0,
    cans: 4,
    recycledAt: '2024-03-22',
    points: 16
  },
  {
    id: 22,
    userName: 'Yasmine Ibrahim',
    email: 'yasmineibrahim@yahoo.com',
    phoneNumber: '+201185637051',
    status: 'Pending',
    bottles: 4,
    cans: 2,
    recycledAt: '2024-02-06',
    points: 16
  },
  {
    id: 23,
    userName: 'Sara Kamel',
    email: 'sarakamel@yahoo.com',
    phoneNumber: '+201160776439',
    status: 'Pending',
    bottles: 3,
    cans: 2,
    recycledAt: '2024-08-19',
    points: 14
  },
  {
    id: 24,
    userName: 'Fatima Mohamed',
    email: 'fatimamohamed@yahoo.com',
    phoneNumber: '+201167795073',
    status: 'Failure',
    bottles: 3,
    cans: 0,
    recycledAt: '2024-02-16',
    points: 6
  },
  {
    id: 25,
    userName: 'Fatima Sayed',
    email: 'fatimasayed@gmail.com',
    phoneNumber: '+201151259239',
    status: 'Failure',
    bottles: 3,
    cans: 1,
    recycledAt: '2024-02-13',
    points: 10
  },
  {
    id: 26,
    userName: 'Sara Youssef',
    email: 'sarayoussef@yahoo.com',
    phoneNumber: '+201135196485',
    status: 'Pending',
    bottles: 2,
    cans: 2,
    recycledAt: '2024-05-06',
    points: 12
  },
  {
    id: 27,
    userName: 'Omar Mohamed',
    email: 'omarmohamed@gmail.com',
    phoneNumber: '+201155659391',
    status: 'Pending',
    bottles: 5,
    cans: 4,
    recycledAt: '2024-08-10',
    points: 26
  },
  {
    id: 28,
    userName: 'Sara Hassan',
    email: 'sarahassan@gmail.com',
    phoneNumber: '+201130795573',
    status: 'Failure',
    bottles: 0,
    cans: 0,
    recycledAt: '2024-06-17',
    points: 0
  },
  {
    id: 29,
    userName: 'Yasmine Sayed',
    email: 'yasminesayed@gmail.com',
    phoneNumber: '+201148237776',
    status: 'Success',
    bottles: 1,
    cans: 2,
    recycledAt: '2024-05-16',
    points: 10
  },
  {
    id: 30,
    userName: 'Mohamed Kamel',
    email: 'mohamedkamel@yahoo.com',
    phoneNumber: '+201138388400',
    status: 'Failure',
    bottles: 1,
    cans: 3,
    recycledAt: '2024-05-09',
    points: 14
  }
]
      } />
    </DashboardPage>
  );
}
