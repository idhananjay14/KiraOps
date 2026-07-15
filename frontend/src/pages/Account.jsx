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

export default function Account() {
  const navigate = useNavigate();

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
    logout();
    navigate("/login", { replace: true });c
  };

  if (!user) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
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
            <Typography color="text.secondary">
              No orders yet.
            </Typography>
          ) : (
            orders.map((order) => (
              <Paper
                key={order.id}
                elevation={0}
                sx={{
                  p: 2,
                  mb: 2,
                  border: "1px solid #ECE8E2",
                }}
              >
                <Typography fontWeight={600}>
                  Order #{order.id}
                </Typography>

                <Typography>
                  Product ID: {order.product_id}
                </Typography>

                <Typography>
                  Quantity: {order.quantity}
                </Typography>

                <Typography>
                  ₹{Number(order.total_amount).toLocaleString("en-IN")}
                </Typography>

                <Typography sx={{ color: "#8B7355" }}>
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