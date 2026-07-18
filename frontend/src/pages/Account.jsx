import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/userService";
import { logout } from "../services/authService";
import { getOrders } from "../services/orderService";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Account() {
  const navigate = useNavigate();
const { clearCart } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProfile();
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLogout = () => {
    clearCart();
    logout();
    navigate("/login", { replace: true });
  };

  if (!user) {
    return (
      <Container
        sx={{
          py: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CircularProgress color="inherit" />

        <Typography color="text.secondary">
          Loading your account...
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#FAF9F6",
        minHeight: "80vh",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: 5,
            border: "1px solid #ECE8E2",
            bgcolor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              mb: 4,
            }}
          >
            <Avatar
              sx={{
                width: 70,
                height: 70,
                bgcolor: "#111",
              }}
            >
              {user.name.charAt(0)}
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: 42,
                }}
              >
                {user.name}
              </Typography>

              <Typography color="text.secondary">
                {user.email}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="h6"
            sx={{ mb: 2 }}
          >
            Recent Orders
          </Typography>

          {orders.length === 0 ? (
            <Box
              sx={{
                py: 6,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                No orders yet
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Start shopping to place your first order.
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigate("/shop")}
                sx={{
                  bgcolor: "#111",
                  borderRadius: 0,

                  "&:hover": {
                    bgcolor: "#222",
                  },
                }}
              >
                Shop Collection
              </Button>
            </Box>
          ) : (
            orders.map((order) => (
              <Paper
                key={order.id}
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  border: "1px solid #ECE8E2",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Order #{order.id}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                  }}
                >
                  {order.product_name}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Quantity × {order.quantity}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                  }}
                >
                  ₹{Number(order.total_amount).toLocaleString("en-IN")}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    display: "inline-block",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 5,
                    bgcolor: "#F6F0E8",
                    color: "#8B7355",
                    fontSize: 13,
                    textTransform: "capitalize",
                  }}
                >
                  {order.status}
                </Typography>
              </Paper>
            ))
          )}

          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              mt: 5,
              bgcolor: "#111",
              borderRadius: 0,

              "&:hover": {
                bgcolor: "#222",
              },
            }}
          >
            Logout
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}