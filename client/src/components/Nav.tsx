import * as React from 'react'
import { useState } from 'react'

// MUI
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Container, Popover, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import Login from './Login'
import { Link, redirect } from 'react-router-dom'



const pages = [
  { label: 'Home', path: '/' },
  { label: 'Map', path: '/' },
  { label: 'journey', path: '/' },
  { label: 'Lines', path: '/tube' }]

const Nav: React.FC<{}> = () => {

  // const [auth, setAuth] = React.useState(true)
  const [loginOpen, setLoginOpen] = useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorEl(event.currentTarget)
    setLoginOpen(true)
    redirect('/login')
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleClose = (e) => {
    setAnchorElNav(null)
    setLoginOpen(false)
  }

  const id = loginOpen ? 'login-popover' : undefined

  return (
    <section>

      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={'/assets/tubeLogo.png'}
              alt='Tube London Logo'
              style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
            />
            <DesktopToolbarContents />
            <MobileToolbarContents anchorElNav={anchorElNav} handleClose={handleClose} />
            <LogIcon handleClick={handleClick} />
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  )
}

function DesktopToolbarContents() {
  return <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
    <AppTitle display={{ xs: 'none', md: 'flex' }} />
    <div className='nav-links'>
      {pages.map((page) => (
        <Link key={page.label} to={{ pathname: page.path }}>
          {page.label}
        </Link>
      ))}
    </div>

  </Box>
}

function MobileToolbarContents(props: { anchorElNav: HTMLElement, handleClose: (e) => void }, handleOpenNavMenu: (e) => void) {
  const displayProp = { xs: 'flex', md: 'none' }
  return <>
    <Box sx={{ flexGrow: 1, display: displayProp, alignItems: 'center' }}>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={props.anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(props.anchorElNav)}
        onClose={props.handleClose}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.label} onClick={props.handleClose}>
            <Typography textAlign="center">{page.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <AppTitle display={displayProp} />
    </Box >
  </>
}

function AppTitle(props: { display }) {
  return <Typography
    variant="h5"
    noWrap
    component="a"
    href="#app-bar-with-responsive-menu"
    sx={{
      mr: 2,
      display: props.display,
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.2rem',
      color: 'inherit',
      textDecoration: 'none',
      marginLeft: '0.8rem'
    }}
  >
    Tube Wise
  </Typography>
}

function LogIcon(props: { handleClick: (e) => void }) {
  return (
    <IconButton size='large' edge='start' color='inherit' aria-label='login' >
      <LoginIcon onClick={props.handleClick} />
    </IconButton>
  )
}

export default Nav
