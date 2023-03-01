import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Link } from '@mui/material';
import { MuiFileInput } from 'mui-file-input';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import axios from 'axios';
import { saveAs } from 'file-saver';
import type { BackendRequestType } from '../../../redux/requestSlice/requestType';
import CreateExcelFile from './CreateExcelFile';
import { checkAuth } from '../../../redux/userSlice/userReducer';
import { useAppDispatch } from '../../../redux/hooks';

export default function CreateRequestPageThoParts(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // const [file, setFile] = useState(null);
  const [requestid, setRequestid] = useState(0);
  const [requestpush, setRequestPush] = useState(false);
  // const [file, setFile] = React.useState(null);

  //   const handleChange = (newFile): void => {
  //     setFile(newFile);
  //   };

  const getShablon = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    const res = await axios
      .get<Blob>('api/products/shablon.xlsx', {
        responseType: 'blob',
        timeout: 30000,
      })
      .then((response) => {
        // create file link in browser's memory
        const href = URL.createObjectURL(response.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', 'file.xlsx'); // or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await axios.post<BackendRequestType>('/api/post/create', {
      input: Object.fromEntries(new FormData(e.currentTarget)),
    });
    setRequestid(res.data.id);

    // dispatch(loginHandler(formInput));
    e.currentTarget.reset();
  };

  return (
    <section className="promo">
      <div className="container">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/99/99072.png"
            alt="logo"
            className="logoImg"
          />

          <div className="logoText">FoodSher</div>

          <div>
            <Typography
              variant="h6"
              gutterBottom
              fontSize={46}
              textAlign="center"
              color="warning.main"
            >
              Новая заявка
            </Typography>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form onSubmit={(e) => submitHandler(e)}>
              <Typography
                variant="h6"
                gutterBottom
                fontSize={22}
                textAlign="center"
                color="warning.main"
                sx={{ p: 1, ml: -94 }}
              >
                Часть 1. Заполните текстовую часть
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                  <TextField
                    required
                    id="firstName"
                    name="title"
                    label="Название заявки"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    inputProps={{
                      style: { backgroundColor: '#FFFAFA', opacity: 0.7, height: '30px' },
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="datetime-local"
                    label="Срок действия заявки"
                    type="datetime-local"
                    name="lifeTimeEnd"
                    defaultValue="2017-05-24T10:30"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      style: { backgroundColor: '#FFFAFA', opacity: 0.7, height: '30px' },
                    }}
                  />
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    required
                    id="address1"
                    name="description"
                    label="Краткое описание заявки"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    inputProps={{
                      style: { backgroundColor: '#FFFAFA', opacity: 0.7, height: '30px' },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={7}>
                  <TextField
                    required
                    id="city"
                    name="address"
                    label="Адрес получения (продажи)"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                    inputProps={{
                      style: { backgroundColor: '#FFFAFA', opacity: 0.7, height: '30px' },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={7}>
                  <TextField
                    required
                    id="city"
                    name="contactPhone"
                    label="Контактный телефон"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                    inputProps={{
                      style: { backgroundColor: '#FFFAFA', opacity: 0.7, height: '30px' },
                    }}
                  />
                  <Grid item xs={12} sm={13}>
                    <TextField
                      style={{ marginTop: '10px' }}
                      required
                      id="city"
                      name="contactName"
                      label="Контактное лицо"
                      fullWidth
                      autoComplete="shipping address-level2"
                      variant="standard"
                      inputProps={{
                        style: { backgroundColor: '#FFFAFA', opacity: 0.7, height: '30px' },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item xs={3} sm={1}>
                <Button
                  className="promoBtn"
                  style={{ backgroundColor: '#f68b01', textAlign: 'center', marginTop: '10px' }}
                  type="submit"
                  variant="outlined"
                  size="large"
                  sx={{ p: 3, ml: 22 }}
                  onClick={() => setRequestPush(true)}
                >
                  Отправить заявку
                </Button>
              </Grid>
            </form>
            <br />

            {requestpush && requestid !== 0 ? (
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  fontSize={22}
                  textAlign="center"
                  color="warning.main"
                  sx={{ p: 1, ml: -71 }}
                >
                  Часть 2. Прикрепите список продуктов
                  <Button
                    variant="contained"
                    color="inherit"
                    size="small"
                    // startIcon={<GetAppIcon />}
                    // component={Link}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={(e) => getShablon(e)}
                    // href="/"
                    // download="1.xlsx"
                    // type="file"
                  >
                    (скачать шаблон)
                  </Button>
                </Typography>
                <CreateExcelFile requestid={requestid} />
              </>
            ) : (
              <p />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
