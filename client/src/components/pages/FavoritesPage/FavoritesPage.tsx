import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getFavoritesRequestsApi } from '../../../redux/favoritesRequestsSlice/favoritesRequestsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import OneFavoriteRequestCard from '../../ui/OneFavoriteRequestCard/OneFavoriteRequestCard';

export default function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((store) => store.favoritesRequests.favorites.Requests);

  // const [favs, setFavs] = useState(favorites);

  useEffect(() => {
    dispatch(getFavoritesRequestsApi());
  }, []);

  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <Grid container spacing={3}>
        {favorites.map((request) => (
          <OneFavoriteRequestCard key={request.id} request={request} />
        ))}
      </Grid>
    </Container>
  );
  // console.log(favorites);
  // console.log(favorites);
  // const searchRequests = requests.filter((request) => request.Products?.title.includes(input));

  // const dispatch = useAppDispatch();
  // const [input, setInput] = useState('');
  // const changeHandler = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value),
  //   [],
  // );
}
