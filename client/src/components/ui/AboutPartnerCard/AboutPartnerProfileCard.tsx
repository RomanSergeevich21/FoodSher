import { Card } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { loadOnePartner } from '../../../redux/partnersSlice/onePartnerReducer';

export default function AboutPartnerProfileCard(): JSX.Element {
  const partner = useAppSelector((store) => store.partner);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(loadOnePartner(Number(id))), []);
  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 515,
        overflowY: 'scroll',
        bgcolor: '#DCDCDC',
        opacity: 0.68,
        borderRadius: 6,
        boxShadow: 10,
        padding: 3,
        marginX: 3,
      }}
    >
      <h2>{partner.description}</h2>
    </Card>
  );
}
