import { useRef, useState } from 'react'

// MUI
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Container } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'



const pages = [
  { label: 'Home', path: '/' },
  { label: 'Map', path: '/' },
  { label: 'Journey', path: '/' },
  { label: 'Lines', path: '/tube' }]

const Nav = () => {

  // const [auth, setAuth] = React.useState(true)
  // const [loginOpen, setLoginOpen] = useState(false)
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  // const navigate = useNavigate()



  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget)
  // }

  // const handleClose = (e) => {
  //   setAnchorElNav(null)
  //   setLoginOpen(false)
  // }

  // const id = loginOpen ? 'login-popover' : undefined

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={'/assets/tubeLogo.png'}
            alt='Tube London Logo'
            style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
          />
          <DesktopToolbarContents />
          <MobileToolbarContents />
          <LogIcon />
        </Toolbar>
      </Container>
    </AppBar>
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

function MobileToolbarContents() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  const displayProp = { xs: 'flex', md: 'none' }
  return <>
    <Box sx={{ flexGrow: 1, display: displayProp, alignItems: 'center' }}>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={() => setIsOpen(true)}
        ref={menuButton}      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={menuButton.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.label} onClick={() => setIsOpen(false)}>
            <Link className='menu-links' to={{ pathname: page.path }}>{page.label}</Link>
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
    // component="a"
    // href="#app-bar-with-responsive-menu"
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
    <div className='title'>Tube Wise</div>
  </Typography>
}

function LogIcon() {

  return (
    <Link to="/login">
      <IconButton size='large' edge='start' aria-label='login' sx={{ color: 'white' }}>
        <LoginIcon />
      </IconButton>
    </Link>
  )
}

export default Nav
