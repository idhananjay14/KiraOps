import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  IconButton,
  Badge,
  Button,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, NavLink, useNavigate } from "react-router-dom";

import useCart from "../context/useCart";
import {
  isAuthenticated,
  logout,
} from "../services/authService";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import AnnouncementBar from "./AnnouncementBar";

export default function Header() {
  const { cartItems } = useCart();
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const loggedIn = isAuthenticated();

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "SHOP", path: "/shop" },
    { label: "COLLECTIONS", path: "/collections" },
    { label: "ABOUT", path: "/about" },
  ];
  const handleLogout = () => {
    console.log("Before:", localStorage.getItem("cart"));

    clearCart();

    console.log("After:", localStorage.getItem("cart"));

    logout();

    navigate("/", { replace: true });
  };

  return (
    <>
      <AnnouncementBar />

      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#FBF8F3",
          m: 0,
          p: 0,
          color: "#111",
          borderBottom: "1px solid #ECE6DE",
          boxShadow: "none",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1600px",
            mx: "auto",
            px: {
              xs: 3,
              md: 6,
              lg: 8,
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              height: 82,
              minHeight: "82px !important",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr auto",
                md: "260px 1fr 260px",
              },
              alignItems: "center",
              justifyItems: "center",
              width: "100%",
            }}
          >
            {/* Logo */}
            <Typography
              component={Link}
              to="/"
              sx={{
                justifySelf: "start",
                textDecoration: "none",
                color: "#111",
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: {
                  xs: 34,
                  md: 48,
                },
                fontWeight: 500,
                letterSpacing: "0.10em",
                lineHeight: 1,
                transition: ".25s",

                "&:hover": {
                  color: "#8B7355",
                },
              }}
            >
              KIRAOPS
  <Box
    component="span"
    sx={{
      display: "block",
      fontSize: 9,
      letterSpacing: "0.35em",
      fontWeight: 400,
      color: "#8B7355",
      fontFamily: '"Manrope", sans-serif',
      mt: 0.3,
    }}
  >
    LUXURY REDEFINED
  </Box>
</Typography>

            {/* Navigation */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifySelf: "center",
                alignItems: "center",
                gap: 6,
              }}
            >
              {navLinks.map((item) => (
                <Typography
                  key={item.label}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    color: "#2A2A2A",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    position: "relative",
                    transition: "all .25s ease",

                    "&:hover": {
                      color: "#8B7355",
                    },

                    "&.active": {
                      color: "#8B7355",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -10,
                      width: 0,
                      height: 1.5,
                      backgroundColor: "#A58563",
                      transition: "width .25s ease",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },

                    "&.active::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* Right Icons */}
            <Box
              sx={{
                display: "flex",
                justifySelf: "end",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
                gap: 2.5,
              }}
            >

              <IconButton
                component={Link}
                to={loggedIn ? "/account" : "/login"}
                sx={{
                  color: "#111",
                  transition: ".25s",

                  "&:hover": {
                    color: "#8B7355",
                    bgcolor: "transparent",
                  },
                }}
              >
                <PersonOutlineOutlinedIcon sx={{ fontSize: 22 }} />
              </IconButton>

              <IconButton
                component={Link}
                to="/cart"
                sx={{
                  color: "#111",
                  p: 1,
                  transition: ".25s",

                  "&:hover": {
                    color: "#8B7355",
                    bgcolor: "transparent",
                  },
                }}
              >
                <Badge
                  badgeContent={cartItems.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      bgcolor: "#8B7355",
                      color: "#fff",
                      fontSize: 10,
                      minWidth: 20,
                      height: 20,
                      fontWeight: 600,
                    },
                  }}
                >
                  <ShoppingBagOutlinedIcon sx={{ fontSize: 22 }} />
                </Badge>
              </IconButton>

              {loggedIn && (
                <Button
                  onClick={handleLogout}
                  sx={{
                    color: "#111",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    ml: 1,
                    transition: ".25s",

                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#A58563",
                    },
                  }}
                >
                  LOGOUT
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container >
      </AppBar>
    </>
  );
}