import { useRef, useState } from "react";

// MUI
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
  MenuProps,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const pages = [
  { label: "Home", path: "/" },
  { label: "Map", path: "/map" },
  { label: "Journey", path: "/journey" },
  { label: "Lines", path: "/tube" },
];

const Nav = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={"/assets/tubeLogo.png"}
            alt="Tube London Logo"
            style={{ width: "100%", maxWidth: "70px", height: "auto" }}
          />
          <DesktopToolbarContents />
          <MobileToolbarContents />
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

function DesktopToolbarContents() {
  const displayProp = { xs: "none", md: "flex" };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: displayProp,
        alignItems: "center",
      }}
    >
      <AppTitle display={displayProp} />
      <div className="nav-links">
        {pages.map(({ label, path }) => (
          <Link key={label} to={{ pathname: path }}>
            {label}
          </Link>
        ))}
      </div>
    </Box>
  );
}

function MobileToolbarContents() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  const displayProp = { xs: "flex", md: "none" };

  const menuProps: MenuProps = {
    id: "menu-appbar",
    anchorEl: menuButton.current,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    open: isOpen,
    onClose: () => setIsOpen(false),
    sx: {
      display: { xs: "block", md: "none" },
    },
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: displayProp, alignItems: "center" }}>
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={() => setIsOpen(true)}
          ref={menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Menu {...menuProps}>
          {pages.map(({ label, path }) => (
            <MenuItem key={label} onClick={() => setIsOpen(false)}>
              <Link className="menu-links" to={{ pathname: path }}>
                {label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
        <AppTitle display={displayProp} />
      </Box>
    </>
  );
}

function AppTitle(props: { display }) {
  return (
    <Typography
      variant="h5"
      noWrap
      sx={{
        mr: 2,
        display: props.display,
        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".2rem",
        color: "inherit",
        textDecoration: "none",
        marginLeft: "0.8rem",
      }}
    >
      <div className="title">Tube Wise</div>
    </Typography>
  );
}

function LoginButton() {
  return (
    <Link to="/login">
      <IconButton
        size="large"
        edge="start"
        aria-label="login"
        sx={{ color: "white" }}
      >
        <LoginIcon />
      </IconButton>
    </Link>
  );
}

export default Nav;
