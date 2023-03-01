import { Card, CardContent, Rating, Typography } from '@mui/material';
import React from 'react';

export default function OneStatisticCard(): JSX.Element {
  return (
    <Card sx={{ bgcolor: '#DCDCDC', opacity: 0.68, width: 400, boxShadow: 10, borderRadius: 10, marginX: 3 }}>
      <CardContent>
        {/* <Rating name="read-only" defaultValue={4} size="large" readOnly /> */}
        {/* <Typography gutterBottom variant="h5" component="div">
          Спасено еды
        </Typography> */}
      </CardContent>
    </Card>
  );
}

