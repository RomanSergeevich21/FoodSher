import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { loadOnePartner } from '../../../redux/partnersSlice/onePartnerReducer';

export default function OneProfileCard(): JSX.Element {
  const partner = useAppSelector((store) => store.partner);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(loadOnePartner(Number(id))), []);
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 6,
        boxShadow: 10,
        bgcolor: 'rgba(220, 220, 220, 0.68)',
        height: 515,
        marginX: 3,
      }}
    >
      <CardMedia
        sx={{ height: 250, objectFit: 'contain' }}
        component="img"
        alt="partner photo"
        image={partner.pathPhoto}
      />
      <CardContent sx={{ textAlign: 'center', fontFamily: 'monospace', opacity: 0.68 }}>
        <Typography gutterBottom variant="h5" component="div">
          {[partner.firstName, ' ', partner.secondName, ' ', partner.lastName]}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {partner.companyName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {partner.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {partner.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
