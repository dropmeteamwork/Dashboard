import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import './scrollbarfix.css'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Drop Me</title>
      </head>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* <ThemeProvider theme={theme}> */}
            {props.children}
          {/* </ThemeProvider> */}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
