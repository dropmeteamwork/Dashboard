import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';

export type Status = 'Success' | 'Pending' | 'Failure'

function renderStatus(status: Status) {
  const colors: { [index: string]: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' } = {
    Success: 'success',
    Pending: 'warning',
    Failure: 'error',
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export const columns: GridColDef[] = [
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
    field: 'recycledAt',
    headerName: 'Recycled At',
    headerAlign: 'center',
    align: 'center',
    flex: 0.8,
    minWidth: 80,
  },
];

export type GridRows = {
  id: number
  userName: string
  email: string
  phoneNumber: string
  status: Status
  bottles: number
  cans: number
  recycledAt: string
}[]

export default function CustomizedDataGrid({ rows }: { rows : GridRows }) {
  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
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
