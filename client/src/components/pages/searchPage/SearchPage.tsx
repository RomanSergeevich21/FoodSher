import React, { useEffect } from 'react';
import TopSearchLine from '../../ui/Search/TopSearchLine';
import RequestCards from '../../ui/Search/RequestCards';
import BodySearch from '../../ui/Search/BodySearch';
import { useAppDispatch } from '../../../redux/hooks';
import { getRequestsApi } from '../../../redux/searchRequestsSlice/searchRequestsSlice';
import { getFavoritesRequestsApi } from '../../../redux/favoritesRequestsSlice/favoritesRequestsSlice';

export default function SearchPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoritesRequestsApi());
  }, []);

  return (
    <>
      <TopSearchLine />
      <BodySearch />
    </>
  );
}
