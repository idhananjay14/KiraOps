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

export default function Header() {
  const { cartItems } = useCart();
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const loggedIn = isAuthenticated();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
  ];
  const handleLogout = () => {
    console.log("Before:", localStorage.getItem("cart"));

    clearCart();

    console.log("After:", localStorage.getItem("cart"));

    logout();

    navigate("/", { replace: true });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(250,249,246,.92)",
        color: "#111",
        borderBottom: "1px solid #ECE8E2",
        backdropFilter: "blur(12px)",
        transition: "all .3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: 76,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr auto",
              md: "auto 1fr auto",
            },
            alignItems: "center",
            columnGap: 6,
          }}
        >
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#111",
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: {
                xs: 30,
                md: 34,
              },
              fontWeight: 600,
              letterSpacing: "0.04em",
              transition: ".25s",

              "&:hover": {
                color: "#8B7355",
              },
            }}
          >
            KIRAOPS
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
                  color: "#111",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
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
                    bottom: -6,
                    width: 0,
                    height: 2,
                    backgroundColor: "#8B7355",
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
              gap: 1,
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
              <PersonOutlineOutlinedIcon fontSize="small" />
            </IconButton>

            <IconButton
              component={Link}
              to="/cart"
              sx={{
                color: "#111",
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
                    fontSize: 9,
                    minWidth: 18,
                    height: 18,
                    fontWeight: 600,
                  },
                }}
              >
                <ShoppingBagOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>

            {loggedIn && (
              <Button
                onClick={handleLogout}
                sx={{
                  color: "#111",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",

                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#8B7355",
                  },
                }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container >
    </AppBar>
  );
}