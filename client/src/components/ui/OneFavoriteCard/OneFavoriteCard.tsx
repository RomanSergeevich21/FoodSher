import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

export default function OneFavoriteCard(): JSX.Element {
  return (
    <Card sx={{ maxWidth: 320, boxShadow: 10, borderRadius: 10, bgcolor: '#fff', marginX: 3 }}>
      <CardMedia
        component="img"
        alt="favorite"
        height="120"
        image="https://yt3.googleusercontent.com/7hEuTuz61XTJuYYxXRKwcnlImTx4e3erahW-H6je0TCwtVsiRqaWIN71HKNW48wMZLflEV_4zg=s900-c-k-c0x00ffffff-no-rj"
        sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Партнер
        </Typography>
        <CardActions>
          <ButtonGroup>
            <Button size="small">Отменить подписку</Button>
          </ButtonGroup>
        </CardActions>
      </CardContent>
    </Card>
  );
}
