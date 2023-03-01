import React, { useState, useRef } from 'react';
import './HeaderMainPage.css';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material';
import { color } from '@mui/system';

import { useAppSelector } from '../../../redux/hooks';

export default function HeaderMainPage(): JSX.Element {
  const [video, setVideo] = useState(false);
  const user = useAppSelector((store) => store.user);

  // const ref = useRef(null);
  // const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

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
        </div>
        <Grid container>
          <Grid item xs={6}>
            <Card
              sx={{ maxWidth: 500, maxHeight: 320 }}
              style={{
                border: 'none',
                boxShadow: 'none',
                borderRadius: '0',
                opacity: 0.68,
              }}
            >
              <CardMedia sx={{ height: 0 }} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={54}
                  // color="black"
                >
                  {/* <div style={{ textAlign: 'center', fontWeight: '800' }}>
                    {' '}
                    - О нас
                  </div> */}
                  <div style={{ fontWeight: '800', color: 'black', textAlign: 'center' }}>
                    FoodSher
                  </div>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text"
                  fontWeight="900"
                >
                  <div style={{ color: 'black', textAlign: 'justify', fontSize: 17 }}>
                    Cоциальный проект, который решает задачу спасения продуктов питания от мусорного
                    полигона, куда они обычно отправляются по истечению срока годности.
                  </div>
                  <br />
                  <p style={{ color: 'black', textAlign: 'justify', fontSize: 17 }}>
                    Наша задача – помочь бизнесу сократить издержки и распределить продукты до
                    истечения их срока годности между теми, кто в них нуждается.
                  </p>
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{ maxWidth: 578, maxHeight: 320 }}
              style={{
                border: 'none',
                boxShadow: 'none',
                borderRadius: '0',
                opacity: 0.68,
              }}
            >
              <CardMedia sx={{ height: 0 }} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={64}
                  textAlign="center"
                  color="warning.main"

                  // color="black"
                >
                  Ежегодно:
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text"
                  fontWeight="900"
                >
                  <div style={{ color: 'black', textAlign: 'justify', fontSize: 18 }}>
                    17.9 млн. тонн еды выбрасывается в России!
                  </div>
                  <br />
                  <div style={{ color: 'black', textAlign: 'justify', fontSize: 18 }}>
                    Ценность продуктов с истекающим сроком годности оценивается в 1.6 трлн. рублей.
                  </div>
                  <br />
                  <div style={{ color: 'black', textAlign: 'justify', fontSize: 18 }}>
                    Спасение данного объема товара позволило бы прокормить 30 млн. человек.
                  </div>
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Link
          to={
            // eslint-disable-next-line no-nested-ternary
            user.status === 'logged' && user.roleid === 1
              ? '/search'
              : user.status === 'logged' && user.roleid === 3
              ? '/createrequest'
              : '/signup'
          }
          style={{ textDecoration: 'none' }}
        >
          <button type="button" className="promoBtn" style={{ backgroundColor: '#f68b01' }}>
            Сделать мир лучше!
          </button>
        </Link>

        <div className="more">
          <div style={{ color: 'grey' }} className="moreText">
            узнать больше
          </div>
          <FaArrowCircleDown
            onClick={() => {
              setVideo(!video);
            }}
            className="moreImg"
            style={{ height: '40px', width: '50px', color: 'grey', scrollBehavior: 'inherit' }}
          />
          {/* <Link to="video">link</Link> */}
        </div>
        {video ? (
          <>
            <p style={{ marginLeft: '240px', color: 'grey', marginTop: '25px' }}>
              Видео с официального youtube-канала @dobrojournal
            </p>
            <div className="video" id="video" style={{ textAlign: 'center', marginTop: '25px' }}>
              <iframe
                title="фудшеринг"
                width="660"
                height="415"
                src="https://www.youtube.com/embed/qcs67O8kBr0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </>
        ) : (
          <p />
        )}
      </div>
    </section>
  );
}
