import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { getSingleRequest } from '../../../redux/singleRequestSlice/singleRequestSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import  ProdTable  from '../../ui/ProdTable/ProdTable';

export default function RequestPage(): JSX.Element {
  const request = useAppSelector((store) => store.request);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSingleRequest(id));
    // console.log(request)
  }, []);

  const dateParser = (date: string): string => {
    if (date !== null) {
      const dateArr = date.split('T')[0].split('-');
      return `${dateArr[2]} ${dateArr[1]} ${dateArr[0]} г.`;
    }
  };

  return (
    <>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 0,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${request.User.titleLogoPath})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        <img style={{ display: 'none' }} src={request.User.titleLogoPath} alt="afndjfgb" />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={8}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 8 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h2" variant="h4" color="inherit" gutterBottom>
                {request.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {request.User.description}
              </Typography>
              <Link variant="h5" href={`/partners/${request.partnerid}`}>
                {request.User.companyName}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{bgcolor: '#DCDCDC', opacity: 0.68 }}> 
      <Grid container sx={{ml: '10px'}} style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{mt: '5px'}} variant="h6" color="inherit"  paragraph>
          Информация о заявке: {request.description}
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          {dateParser(request.lifeTimeStart)} - {dateParser(request.lifeTimeEnd)}
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          Адрес: {request.address}
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          Контактное лицо: {request.contactName}
        </Typography>
        <Typography variant="body1" color="inherit" paragraph>
          Тел: {request.contactPhone}
        </Typography>
      </Grid>
      </Box>
      <ProdTable request={request} />
    </>
  );
}
