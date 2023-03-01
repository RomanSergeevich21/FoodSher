import React, { useState } from 'react';

import type { SelectChangeEvent } from '@mui/material';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Copyright } from '@mui/icons-material';
import { useAppDispatch } from '../../../redux/hooks';
import type { UserFormType } from '../../../redux/userSlice/userType';
import { registerHandler } from '../../../redux/userSlice/userReducer';
import { getFavoritesRequestsApi } from '../../../redux/favoritesRequestsSlice/favoritesRequestsSlice';

export default function SignUpPage(): JSX.Element {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    secondName: '',
    email: '',
    phone: '',
    pass: '',
    validpass: '',
  });
  const [role, setRole] = useState('');
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(registerHandler(formInput));

    e.currentTarget.reset();
  };

  const handleChange = (event: SelectChangeEvent<string>): void => {
    setRole(event.target.value);
  };

  const roleArr: string[] = ['пользователь', 'партнер'];

  return (
    <Container sx={{ height: '100vh' }} component="main" maxWidth="lg">
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
          Заполните форму для регистрации:
        </Typography>
        <Box onSubmit={(e) => submitHandler(e)} component="form" noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={15} sm={4}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                value={formInput.firstName}
                id="firstName"
                label="First Name"
                autoFocus
                onChange={changeHandler}
                style={{ background: '#fafafa' }}
              />
            </Grid>
            <Grid item xs={15} sm={4}>
              <TextField
                value={formInput.lastName}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={changeHandler}
                style={{ background: '#fafafa' }}
              />
            </Grid>
            <Grid item xs={15} sm={4}>
              <TextField
                required
                fullWidth
                value={formInput.secondName}
                id="secondName"
                label="Second Name"
                name="secondName"
                autoComplete="family-name"
                onChange={changeHandler}
                style={{ background: '#fafafa' }}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                value={formInput.phone}
                id="outlined-basic"
                label="Телефон"
                name="phone"
                variant="outlined"
                fullWidth
                onChange={changeHandler}
                style={{ background: '#fafafa' }}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                value={formInput.email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeHandler}
                style={{ background: '#fafafa' }}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                value={formInput.pass}
                required
                fullWidth
                name="pass"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={changeHandler}
                style={{ background: '#fafafa' }}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                value={formInput.validpass}
                required
                fullWidth
                name="validpass"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={changeHandler}
                style={{ background: '#fafafa' }}
              />
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <InputLabel id="demo-select-small">Выберете роль</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={role}
              onChange={handleChange}
              style={{ background: '#fafafa'}}
              label="Выберете роль"
              fullWidth
            >
              {roleArr.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={5}>
            <Button
              // component={Link}
              // to="/mainpage"
              size="large"
              type="submit"
              className="promoBtn"
              style={{ backgroundColor: '#f68b01', color: 'white', marginLeft: '450px' }}
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Зарегистрироваться!
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
