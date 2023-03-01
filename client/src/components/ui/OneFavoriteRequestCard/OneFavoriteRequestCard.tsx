import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { FavoriteRequest } from '../../../redux/favoritesRequestsSlice/favoritesRequestsType';
import { delFavoriteRequest } from '../../../redux/favoritesRequestsSlice/favoritesRequestsSlice';

type OneFavoriteRequestCardProps = {
  request: FavoriteRequest;
};

// const deleteHandler = (): void => {

// };

export default function OneFavoriteRequestCard({
  request,
}: OneFavoriteRequestCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Grid item key={request.id} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '6.25%',
          }}
          image="https://avatars.mds.yandex.net/i?id=54b9b5936d827c669e972d6fc8a7d1d0-5498032-images-thumbs&n=13&exp=1"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          {/* <Typography gutterBottom variant="h5" component="h2">
            {request.title}
          </Typography> */}
          {request.statusid === 3 && (
            <Typography variant="h5">
              {' '}
              <b>Заявка закрыта</b>{' '}
            </Typography>
          )}
          <Typography>
            {' '}
            от: <Link to={`/partners/${request.partnerid}`}>{request.User?.companyName}</Link>
          </Typography>
          <Typography>{request.User?.companyName}</Typography>
          <Typography>{request.description}</Typography>
        </CardContent>
        <CardActions>
          {request.statusid === 3 ? (
            <Button disabled component={Link} to={`/request/${request.id}`} size="small">
              Подробнее
            </Button>
          ) : (
            <Button component={Link} to={`/request/${request.id}`} size="small">
              Подробнее
            </Button>
          )}

          <Button onClick={() => dispatch(delFavoriteRequest(request.id))} size="small">
            <StarIcon sx={{ ml: 7 }} fontSize="large" />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
