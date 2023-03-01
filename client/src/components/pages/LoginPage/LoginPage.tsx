import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ButtonGroup } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { loginHandler } from '../../../redux/userSlice/userReducer';
import { getFavoritesRequestsApi } from '../../../redux/favoritesRequestsSlice/favoritesRequestsSlice';

export default function LoginPage(): JSX.Element {
  const [formInput, setFormInput] = useState({
    email: '',
    pass: '',
  });
  const dispatch = useAppDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginHandler(formInput));
    e.currentTarget.reset();
  };
  return (
    <Container component="main" maxWidth="lg" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Заполните ваши данные:
        </Typography>
        
        <Box onSubmit={(e) => submitHandler(e)} component="form" noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={15}>
              <TextField
                value={formInput.email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={changeHandler}
                style={{ background: '#fafafa' }}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                value={formInput.pass}
                style={{ background: '#fafafa' }}
                required
                fullWidth
                name="pass"
                label="Password"
                type="password"
                id="password"
                onChange={changeHandler}
              />
            </Grid>
          </Grid>
          {/* <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="outlined primary button group"
          > */}
          <Grid sx={{ mt: 3, mb: 2 }} container spacing={0}>
            <Grid item xs={5}>
              <Button
                size="large"
                className="promoBtn"
                // component={Link}
                style={{ backgroundColor: '#f68b01', color: 'white', marginLeft: '30px' }}
                // to="/"
                type="submit"
                // fullWidth
                variant="outlined"
                sx={{ mt: 1, mb: 2 }}
              >
                Войти
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                size="large"
                component={Link}
                to="/signup"
                // fullWidth
                variant="outlined"
                sx={{ mt: 1, mb: 2 }}
                style={{ backgroundColor: '#f68b01', color: 'white', marginRight: '80px' }}
              >
                Зарегистрироваться
              </Button>
            </Grid>
          </Grid>
          {/* </ButtonGroup> */}
        </Box>
      </Box>
    </Container>
  );
}
