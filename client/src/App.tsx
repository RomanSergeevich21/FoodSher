import { CircularProgress, Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PersonalAreaPage from './components/pages/PersonalAreaPage/PersonalAreaPage';
import NavigationBar from './components/ui/NavigationBar/NavigationBar';
import MainPage from './components/pages/mainPage/MainPage';
import HeaderMainPage from './components/ui/HeaderMainPage/HeaderMainPage';
import SearchPage from './components/pages/searchPage/SearchPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkAuth } from './redux/userSlice/userReducer';
import PrivateRoute from './components/HOC/PrivateRoute';
import PartnersPage from './components/pages/PartnersPage/PartnersPage';
import ProfilePartnerPage from './components/pages/ProfilePartnerPage/ProfilePartnerPage';
import FavoritesPage from './components/pages/FavoritesPage/FavoritesPage';
import { getFavoritesRequestsApi } from './redux/favoritesRequestsSlice/favoritesRequestsSlice';
import RequestPage from './components/pages/RequestPage/RequestPage';
import CreateRequestPageThoParts from './components/pages/createRequestPage/CreateRequestPageThoParts';
import ContactPage from './components/ui/ContactPage/ContactPage';
import MapRequestPage from './components/pages/MapRequestPage/MapRequestPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Container>
      {user.status === 'fetching' ? (
        <CircularProgress />
      ) : (
        <>
          <NavigationBar />
          <Routes>
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/" element={<Navigate to="/mainpage" />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/partners/:id" element={<ProfilePartnerPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/map" element={<MapRequestPage />} />

            <Route
              element={
                <PrivateRoute isAllowed={user.status === 'logged'} redirectPath="/mainpage" />
              }
            >
              <Route path="/personarea" element={<PersonalAreaPage />} />
              <Route path="/request/:id" element={<RequestPage />} />

              <Route
                path="/createrequest"
                element={
                  <PrivateRoute
                    isAllowed={user.status === 'logged' && user.roleid === 3}
                    redirectPath="/mainpage"
                  >
                    <CreateRequestPageThoParts />
                  </PrivateRoute>
                }
              />
              <Route path="/search" element={<SearchPage />} />
            </Route>

            <Route
              element={
                <PrivateRoute isAllowed={user.status === 'empty'} redirectPath="/mainpage" />
              }
            >
              <Route
                element={
                  <PrivateRoute isAllowed={user.status === 'empty'} redirectPath="/mainpage" />
                }
              >
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Route>
            </Route>

            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  isAllowed={user.status === 'logged' && user.roleid === 1}
                  redirectPath="/mainpage"
                >
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default App;
