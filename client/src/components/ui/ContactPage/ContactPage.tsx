import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material';
import { color } from '@mui/system';
// import { LogoOne } from '../../../../public/image/LogoOne.jpeg';

export default function ContactPage(): JSX.Element {
  return (
    <section className="promo">
      <div className="container">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/99/99072.png"
            alt="logo"
            className="logoImg"
          />

          <div className="logoText">FoodSher-Team</div>
        </div>
        <Grid container>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 270 }}>
              <CardMedia
                component="img"
                src="/image/One.jpeg"
                alt="green iguana"
                height="360"
                width="260"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" />
                <Typography variant="body2" color="text.secondary">
                  Alex
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Banana@gmail.com
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Personal page</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 270 }}>
              <CardMedia
                component="img"
                src="/image/Two.jpeg"
                alt="green iguana"
                height="360"
                width="260"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" />
                <Typography variant="body2" color="text.secondary">
                  Roman
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Mango@gmail.com
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Personal page</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 270 }}>
              <CardMedia
                component="img"
                src="/image/Three.jpeg"
                alt="green iguana"
                height="360"
                width="260"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" />
                <Typography variant="body2" color="text.secondary">
                  Gosha
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Orange@gmail.com
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Personal page</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 270 }}>
              <CardMedia
                component="img"
                src="/image/Four.jpeg"
                alt="green iguana"
                height="360"
                width="260"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" />
                <Typography variant="body2" color="text.secondary">
                  Den
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Vine@gmail.com
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Personal page</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
