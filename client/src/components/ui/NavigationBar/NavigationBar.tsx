import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logoutHandler } from '../../../redux/userSlice/userReducer';

const pages = [
  'О нас',
  'Наши партнеры',
  'Присоединиться',
  'FAQ',
  'Создать заявку',
  'Все заявки',
  'Контакты',
];
const settings = ['Личный кабинет', 'Избранное', 'Выйти'];

export default function NavigationBar(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  return (
    <AppBar position="static" sx={{ bgcolor: '#DCDCDC', opacity: 0.68 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 44,
            }}
            alt="Your logo."
            src="https://cdn-icons-png.flaticon.com/512/99/99072.png"
          />

          {/* <FastfoodOutlinedIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/mainpage"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              paddingLeft: '10px',
            }}
          >
            FoodSher
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FoodSher
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to="/mainpage"
              color="inherit"
              sx={{
                my: 2,
                color: 'black',
                display: 'block',
                fontStyle: 'border',
              }}
            >
              О нас
            </Button>
            <Button
              component={Link}
              to="/partners"
              color="inherit"
              sx={{
                my: 2,
                color: 'black',
                display: 'block',
                fontStyle: 'border',
              }}
            >
              Наши партнеры
            </Button>
            {user.status === 'empty' && (
              <Button
                component={Link}
                to="/login"
                color="inherit"
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'border',
                }}
              >
                Присоединиться
              </Button>
            )}

            {user.status === 'logged' && user.roleid === 3 && (
              <Button
                component={Link}
                to="/createrequest"
                color="inherit"
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'border',
                }}
              >
                Создать заявку
              </Button>
            )}

            {user.status === 'logged' && (
              <Button
                component={Link}
                to="/search"
                color="inherit"
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'border',
                }}
              >
                Найти заявки
              </Button>
            )}

            {user.status === 'logged' && user.roleid === 1 && (
              <Button
                component={Link}
                to="/favorites"
                color="inherit"
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'border',
                }}
              >
                Избранное
              </Button>
            )}

            <Button
              component={Link}
              to="/contacts"
              color="inherit"
              sx={{
                my: 2,
                color: 'black',
                display: 'block',
                fontStyle: 'border',
              }}
            >
              Контакты
            </Button>
            <Button
              component={Link}
              to="/map"
              color="inherit"
              sx={{
                my: 2,
                color: 'black',
                display: 'block',
                fontStyle: 'border',
              }}
            >
              Карта
            </Button>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'border',
                }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          {user.status === 'logged' && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 3, height: 3 }}
                  style={{ opacity: 1 }}
                >
                  <Avatar
                    style={{ backgroundColor: 'black' }}
                    alt="Remy Sharp"
                    src={user.pathPhoto}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Button
                  component={Link}
                  to="/personarea"
                  color="inherit"
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontStyle: 'border',
                    textAlign: 'center',
                  }}
                >
                  Личный кабинет
                </Button>
                <Button
                  component={Link}
                  to="/"
                  color="inherit"
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontStyle: 'border',
                    textAlign: 'center',
                  }}
                >
                  Избранное
                </Button>
                <Button
                  component={Link}
                  to="/mainpage"
                  onClick={() => {
                    handleCloseUserMenu();
                    dispatch(logoutHandler());
                  }}
                  color="inherit"
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontStyle: 'border',
                    textAlign: 'center',
                  }}
                >
                  Выйти
                </Button>

                {/* {settings.map((setting) => (
                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                   <Typography textAlign="center">{setting}</Typography>
                 </MenuItem>
               ))} */}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
