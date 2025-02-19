import * as React from 'react';
import Stack from '@mui/material/Stack';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import ColorModeIconDropdown from '@/theme/ColorModeIconDropdown';
import dayjs from 'dayjs';
import { Tab } from './Page'

function tabName(tab: Tab) {
  switch (tab) {
  case 'analytics': return "Analytics";
  case 'clients': return "Users";
  case 'ads': return "Ads";
  }
}

export default function Header(props : { tab: Tab, date: dayjs.Dayjs | null, setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>> }) {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs item={tabName(props.tab)} />
      <Stack direction="row" sx={{ gap: 1 }}>
        {/* <Search /> */}
        <CustomDatePicker date={props.date} setDate={props.setDate} />
        {/* <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton> */}
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
