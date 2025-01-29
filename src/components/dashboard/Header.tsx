import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '@/theme/ColorModeIconDropdown';
import dayjs, { Dayjs } from 'dayjs';

import Search from './Search';

export default function Header({ item, date, setDate } : { item: string, date: dayjs.Dayjs | null, setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>> }) {
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
      <NavbarBreadcrumbs item={item} />
      <Stack direction="row" sx={{ gap: 1 }}>
        {/* <Search /> */}
        <CustomDatePicker date={date} setDate={setDate} />
        {/* <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton> */}
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
