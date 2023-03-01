import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { loadPartners } from '../../../redux/partnersSlice/partnersReducer';
import OnePersonProfileCard from '../../ui/OnePersonCard/OnePersonProfileCard';

export default function PartnersPage(): JSX.Element {
  const partners = useAppSelector((store) => store.partners.partners);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPartners());
  }, [dispatch]);

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      {partners.map((partner) => (
        <OnePersonProfileCard  partner={partner} key={partner.id} />
      ))}
    </Grid>
  );
}
