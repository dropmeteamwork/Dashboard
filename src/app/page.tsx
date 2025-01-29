'use client'

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '@/theme/AppTheme';
import AppAppBar from '@/components/home/AppAppBar';
import Hero from '@/components/home/Hero';
import LogoCollection from '@/components/home/LogoCollection';
import Highlights from '@/components/home/Highlights';
import Pricing from '@/components/home/Pricing';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/home/Footer';

export default function Home(props: {}) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
