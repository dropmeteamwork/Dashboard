import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import Select, { SelectChangeEvent, selectClasses } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ErrorIcon from '@mui/icons-material/Error';
import PendingIcon from '@mui/icons-material/Pending';
import RecyclingIcon from '@mui/icons-material/Recycling';
// import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import useSWR from 'swr'

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.secondary,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
});

const fetcher = (...args: [input: RequestInfo | URL, init?: RequestInit]) => fetch(...args).then((res) => res.json())

export default function SelectContent({ machine, setMachine } : { machine: string, setMachine: React.Dispatch<React.SetStateAction<string>> }) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedMachine = localStorage.getItem("selectedMachine");
      if (selectedMachine) {
        setMachine(selectedMachine)
      }
    }
  }, [machine]);

  const { data, error, isLoading } = useSWR('https://dropme.up.railway.app/machines/list/', fetcher, {
    onSuccess: (data, key, config) => {
      if (!machine) {
        const selectedMachine = data[0].identification_name
        setMachine(selectedMachine)
      }
    }
  })

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMachine = event.target.value as string
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedMachine", selectedMachine)
    }
    setMachine(selectedMachine);
  };

  return (
    <Select
      labelId="machine-select"
      id="machine-simple-select"
      value={isLoading || error ? "" : machine}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Select company' }}
      fullWidth
      sx={{
        maxHeight: 56,
        width: 215,
        '&.MuiList-root': {
          p: '8px',
        },
        [`& .${selectClasses.select}`]: {
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          pl: 1,
        },
      }}
    >
      {isLoading ?
      <MenuItem value="">
        <ListItemAvatar>
          <Avatar alt="Loading">
            <PendingIcon sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Loading" />
      </MenuItem>
      : error ?
      <MenuItem value="">
        <ListItemAvatar>
          <Avatar alt="Sitemark web">
            <ErrorIcon sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Error" />
      </MenuItem>
      : data.map((mac: { identification_name: string, name_en: string; place: string, city: string }) => (
        <MenuItem key={mac.identification_name} value={mac.identification_name}>
          <ListItemAvatar>
            <Avatar alt={mac.name_en}>
              <RecyclingIcon sx={{ fontSize: '1rem' }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={mac.name_en} secondary={mac.place + " " + mac.city} />
        </MenuItem>
      ))}
    </Select>
  );
}
