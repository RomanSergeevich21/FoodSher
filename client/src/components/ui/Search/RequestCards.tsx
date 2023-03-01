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
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { BackendRequest } from '../../../redux/searchRequestsSlice/searchRequestsType';
import {
  addFavoriteRequest,
  delFavoriteRequest,
} from '../../../redux/favoritesRequestsSlice/favoritesRequestsSlice';

type RequestCardsProps = {
  request: BackendRequest;
};

export default function RequestCards({ request }: RequestCardsProps): JSX.Element {
  // console.log(request);
  // const searchrequest = request.filter((request) => request.Products?.title.includes(input));
  const dispatch = useAppDispatch();
  const favRequests = useAppSelector((store) => store.favoritesRequests.favorites.Requests);
  const user = useAppSelector((store) => store.user);

  const isFav = favRequests.find((favR) => favR.id === request.id);
  // https://avatars.mds.yandex.net/i?id=54b9b5936d827c669e972d6fc8a7d1d0-5498032-images-thumbs&n=13&exp=1
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '450px',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'rgba(220, 220, 220, 0.68)',
          borderRadius: 6,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '4.25%',
            height: '150px',
          }}
          image={request?.User?.titleLogoPath}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1, overflowY: 'scroll' }}>
          <Typography gutterBottom variant="h5" component="h2">
            {request.title}
          </Typography>
          <Typography>
            {' '}
            от: <Link to={`/partners/${request.partnerid}`}>{request.User?.companyName}</Link>
          </Typography>
          <Typography>{request.description}</Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/request/${request.id}`} size="small">
            Подробнее
          </Button>
          {user.status === 'logged' &&
            user?.roleid === 1 &&
            (isFav ? (
              <Button onClick={() => dispatch(delFavoriteRequest(request.id))} size="small">
                <StarIcon sx={{ ml: 10 }} fontSize="large" />
              </Button>
            ) : (
              <Button onClick={() => dispatch(addFavoriteRequest(request))} size="small">
                <StarBorderOutlinedIcon sx={{ ml: 10 }} fontSize="large" />
              </Button>
            ))}
        </CardActions>
      </Card>
    </Grid>
  );
}
