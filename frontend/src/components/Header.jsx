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
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../context/useCart";
import {
  isAuthenticated,
  logout,
} from "../services/authService";

export default function Header() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  const loggedIn = isAuthenticated();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
  ];
  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#FAF9F6",
        color: "#111",
        borderBottom: "1px solid #ECE8E2",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: 72,
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
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
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            KiraOps
          </Typography>

          {/* Navigation */}
          <Box
            sx={{
              display: "flex",
              justifySelf: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            {navLinks.map((item) => (
              <Typography
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  textDecoration: "none",
                  color: "#111",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  transition: "0.25s",

                  "&:hover": {
                    color: "#8B7355",
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
              gap: 0.5,
            }}
          >
            <IconButton
              sx={{
                color: "#111",
              }}
            >
              <SearchOutlinedIcon fontSize="small" />
            </IconButton>

            <IconButton
              component={Link}
              to={loggedIn ? "/account" : "/login"}
              sx={{
                color: "#111",
              }}
            >
              <PersonOutlineOutlinedIcon fontSize="small" />
            </IconButton>

            <IconButton
              component={Link}
              to="/cart"
              sx={{
                color: "#111",
              }}
            >
              <Badge
                badgeContent={cartItems.length}
                color="error"
              >
                <ShoppingBagOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
            {loggedIn && (
              <Button
                onClick={handleLogout}
                sx={{
                  color: "#111",
                  textTransform: "none",
                }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}