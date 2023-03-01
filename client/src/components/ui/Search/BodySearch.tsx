import { CircularProgress, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import CheckBoxes from './CheckBoxes';
import CheckboxesGroup from './CheckboxesGroup';
import PlaceHolderCategory from './PlaceHolderCategory';
import RequestCards from './RequestCards';
import SortLinks from './SortLinks';

export default function BodySearch(): JSX.Element {
  const requests = useAppSelector((store) => store.searchRequests.searchRequests);
  const user = useAppSelector((store) => store.user);

  const getCategoryList = (): string[] =>
    Array.from(
      new Set(
        requests
          .map((request): string[] =>
            request.Products.map((product): string => product?.Category?.title),
          )
          .flat(),
      ),
    );

  const getPartnersList = (): string[] =>
    Array.from(new Set(requests.map((request): string => request?.User?.companyName)));

  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={3}>
          <Typography style={{ marginTop: '55px', color: 'black', fontWeight: 700 }} variant="h5">
            Поиск
          </Typography>
          <CssBaseline />
          <Typography variant="h6" style={{ marginTop: '30px' }}>
            По категориям:
          </Typography>
          <PlaceHolderCategory categories={getCategoryList()} />
          <Typography variant="h6" style={{ marginTop: '15px', marginBottom: '15px' }}>
            По партнерам:
          </Typography>
          {/* <CheckBoxes partners={getPartnersList()} /> */}
          {/* новый чекбокс */}
          <CheckboxesGroup partners={getPartnersList()} />
          {/* <Typography variant="h5">По рейтингу:</Typography> */}
        </Grid>
        <Grid item xs={12} sm={9}>
          <SortLinks />
          <Container sx={{ py: 4 }} maxWidth="md">
            {requests.length === 0 ? (
              <CircularProgress />
            ) : (
              <Grid container spacing={3}>
                {requests.map((request) => (
                  <RequestCards key={request.id} request={request} />
                ))}
              </Grid>
            )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
