import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AboutPartnerProfileCard from '../../ui/AboutPartnerCard/AboutPartnerProfileCard';
import CommentsSection from '../../ui/CommentsSection/CommentsSection';
import OneProfileCard from '../../ui/OnePersonCard/OneProfileCard';
import OnePartnerRequestCard from '../../ui/OneRequestCard/OnePartnerRequestCard';
import OneStatisticCard from '../../ui/OneStatisticCard/OneStatisticCard';

export default function ProfilePartnerPage(): JSX.Element {
  return (
    <Container
      fixed
      sx={{
        height: '100vh',
      }}
    >
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '50px',
          alignItems: 'center',
        }}
      >
        <OneProfileCard />
        <Grid>
          {/* <OneStatisticCard /> */}
          <AboutPartnerProfileCard />
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center', marginX: -30 }}>
        <Typography sx={{ fontSize: 20 }}>Отзывы:</Typography>
      </Grid>
      <CommentsSection />
    </Container>
  );
}
