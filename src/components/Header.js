import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";

const pages = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Only on Apple",
  "Accessories",
  "Support",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#333333" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {/* <AppleIcon /> */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => ( */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Store</Typography>
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <AppleIcon />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => ( */}
            <Link to="/home">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <AppleIcon />
              </Button>
            </Link>
            <Link to="/store">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Store
              </Button>
            </Link>
            <Link to="/mac">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Mac
              </Button>
            </Link>
            <Link to="/ipad">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                iPad
              </Button>
            </Link>
            <Link to="/iphone">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                iPhone
              </Button>
            </Link>
            <Link to="/watch">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Watch
              </Button>
            </Link>
            <Link to="/airpords">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                AirPods
              </Button>
            </Link>
            <Link to="/tvhome">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                TV & Home
              </Button>
            </Link>
            <Link to="/onlyonapple">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Only on Apple
              </Button>
            </Link>
            <Link to="/accessories">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Accessories
              </Button>
            </Link>
            <Link to="/support">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Support
              </Button>
            </Link>
            {/* ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
