import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { updateUser } from '../../../redux/userSlice/userReducer';

export default function OnePersonCard(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: user.status === 'logged' && user.firstName,
    lastName: user.status === 'logged' && user.lastName,
    secondName: user.status === 'logged' && user.secondName,
    email: user.status === 'logged' && user.email,
    phone: user.status === 'logged' && user.phone,
    companyName: user.status === 'logged' && user.companyName,
    description: user.status === 'logged' && user.description,
    pathPhoto: user.status === 'logged' && user.pathPhoto,
    titleLogoPath: user.status === 'logged' && user.titleLogoPath,
    id: user.status === 'logged' && user.id,
    active: user.status === 'logged' && user.active,
  });

  const changeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    axios
      .put(`api/user/${user.status === 'logged' && user.id}`, inputs)
      .then(() => setEdit(false))
      .catch(console.log);
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 6,
        boxShadow: 10,
        bgcolor: 'rgba(220, 220, 220, 0.68)',
        height: 700,
        marginX: 3,
      }}
    >
      <CardMedia
        sx={{ height: 300, objectFit: 'contain' }}
        component="img"
        alt="partner photo"
        image={user.status === 'logged' && user.pathPhoto}
      />
      <CardContent sx={{ textAlign: 'center', fontFamily: 'monospace', mt: 2 }}>
        {!edit && user.status === 'logged' ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {[user.firstName, ' ', user.secondName, ' ', user.lastName]}
            </Typography>
            {user.roleid === 3 && (
              <Typography gutterBottom variant="h5" component="div">
                {user.companyName}
              </Typography>
            )}
            <Typography gutterBottom variant="h5" component="div">
              {user.email}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {user.phone}
            </Typography>
            <CardActions sx={{ justifyContent: 'center', mt: 10 }}>
              <Button
                variant="contained"
                size="medium"
                onClick={() => setEdit(true)}
                sx={{ bgcolor: '#F68B02', color: '#fff' }}
              >
                Редактировать профиль
              </Button>
            </CardActions>
          </>
        ) : (
          <Box component="form" sx={{ mt: 3, mb: 3 }} onSubmit={updateHandler}>
            <Grid container>
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Имя"
                  variant="standard"
                  name="firstName"
                  value={inputs.firstName}
                  onChange={changeHadler}
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Отчество"
                  variant="standard"
                  name="secondName"
                  value={inputs.secondName}
                  onChange={changeHadler}
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Фамилия"
                  variant="standard"
                  name="lastName"
                  value={inputs.lastName}
                  onChange={changeHadler}
                />
              </Grid>
              {user.status === 'logged' && user.roleid === 3 && (
                <Grid item xs={15}>
                  <TextField
                    sx={{ width: 320 }}
                    id="standard-basic"
                    label="Компания"
                    variant="standard"
                    name="companyName"
                    value={inputs.companyName}
                    onChange={changeHadler}
                  />
                </Grid>
              )}
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Номер телефона"
                  variant="standard"
                  name="phone"
                  value={inputs.phone}
                  onChange={changeHadler}
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="email"
                  variant="standard"
                  name="email"
                  value={inputs.email}
                  onChange={changeHadler}
                />
              </Grid>
            </Grid>
            <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
              <Button
                size="small"
                sx={{ bgcolor: '#F68B02', color: '#fff' }}
                type="submit"
                onClick={() => dispatch(updateUser(inputs))}
              >
                Сохранить
              </Button>
              <Button
                size="small"
                sx={{ bgcolor: '#F68B02', color: '#fff' }}
                onClick={() => setEdit(false)}
              >
                Отмена
              </Button>
            </CardActions>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
