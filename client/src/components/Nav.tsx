import * as React from 'react'
import { useState } from 'react'

// MUI
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Container, Popover, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import Login from './Login'
import { redirect } from 'react-router-dom'



const pages = ['Home', 'Map', 'journey', 'Lines']

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
              style={{ width: '100%', maxWidth: '60px', height: 'auto' }}
            />
            <DesktopToolbarContents handleClose={handleClose} />
            <MobileToolbarContents anchorElNav={anchorElNav} handleClose={handleClose} />
            <LogIcon handleClick={handleClick} />
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  )
}

function DesktopToolbarContents(props: { handleClose: (e) => void }) {
  return <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
    <AppTitle display={{ xs: 'none', md: 'flex' }} />
    {pages.map((page) => (
      <Button
        key={page}
        onClick={props.handleClose}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {page}
      </Button>
    ))}
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
        onClick={handleOpenNavMenu}
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
          <MenuItem key={page} onClick={props.handleClose}>
            <Typography textAlign="center">{page}</Typography>
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
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
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
