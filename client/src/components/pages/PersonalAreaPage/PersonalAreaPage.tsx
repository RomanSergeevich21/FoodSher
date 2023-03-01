import { Button, ButtonGroup, CardActions, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  getActivePartnerRequests,
  getUnactivePartnerRequests,
} from '../../../redux/partnerRequestsSlice/partnerRequestsReducer';
import AboutPartnerCard from '../../ui/AboutPartnerCard/AboutPartnerCard';
// import OneFavoriteCard from '../../ui/OneFavoriteCard/OneFavoriteCard';
import OnePersonCard from '../../ui/OnePersonCard/OnePersonCard';
import OnePartnerPersonRequestCard from '../../ui/OneRequestCard/OnePartnerPersonRequestCard';

export default function PersonalAreaPage(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const partnerRequests = useAppSelector((store) => store.partnerRequests.partnerRequests);
  const dispatch = useAppDispatch();
  const [activeL, setActiveL] = useState(true);
  const [activeR, setActiveR] = useState(false);
  const [render, setRender] = useState(0);

  useEffect(() => {
    if (activeL) dispatch(getActivePartnerRequests());
    if (activeR) dispatch(getUnactivePartnerRequests());
  }, [activeL, activeR, dispatch, render]);

  const changeActiveHandlerR = (): void => {
    setActiveL(false);
    setActiveR(true);
  };

  const changeActiveHandlerL = (): void => {
    setActiveL(true);
    setActiveR(false);
  };

  return (
    <Container
      fixed
      sx={{
        height: '100vh',
      }}
    >
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '50px',
          alignItems: 'center',
        }}
      >
        {user.status === 'logged' && <OnePersonCard />}
        <Grid>{user.status === 'logged' && user.roleid === 3 && <AboutPartnerCard />}</Grid>
      </Grid>
      {user.status === 'logged' && user.roleid === 3 && (
        <>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}
          >
            Мои заявки
          </Grid>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}
          >
            <CardActions sx={{ justifyContent: 'center', mb: 3 }}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button
                  size="medium"
                  onClick={changeActiveHandlerL}
                  disabled={activeL}
                  sx={{ bgcolor: '#F68B02', color: '#fff' }}
                >
                  Действующие заявки
                </Button>
                <Button
                  size="medium"
                  onClick={changeActiveHandlerR}
                  disabled={activeR}
                  sx={{ bgcolor: '#F68B02', color: '#fff' }}
                >
                  Архив заявок
                </Button>
              </ButtonGroup>
            </CardActions>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 4,
            }}
          >
            {partnerRequests.map((partnerRequest) => (
              <Grid item xs={4} sx={{ mb: 2 }}>
                <OnePartnerPersonRequestCard
                  render={render}
                  setRender={setRender}
                  partnerRequest={partnerRequest}
                  key={partnerRequest.id}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* {user.status === 'logged' && user.roleid === 1 && (
        <>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}
          >
            Мои заявки
          </Grid>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}
          >
            <OneFavoriteCard />
            <OneFavoriteCard />
          </Grid>
        </>
      )} */}
    </Container>
  );
}
