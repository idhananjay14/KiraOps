import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import useCart from "../context/useCart";
import { createOrder } from "../services/orderService";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    try {
      for (const item of cartItems) {
        await createOrder(
          item.id,
          item.name,
          item.image,
          item.quantity,
          item.price * item.quantity
        );
      }

      clearCart();

      alert("Order placed successfully");

      navigate("/account");
    } catch (error) {
      console.log("Order Error:", error.response?.data);
      alert(error.response?.data?.message || "Failed to place order");
    }
  };

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#FAF9F6",
        minHeight: "80vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: "Cormorant Garamond",
            fontSize: 52,
            mb: 5,
          }}
        >
          Checkout
        </Typography>

        <Grid container spacing={5}>
          {/* Shipping Form */}

          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                border: "1px solid #ECE8E2",
                bgcolor: "#fff",
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 3 }}
              >
                Shipping Information
              </Typography>

              <TextField fullWidth label="Full Name" sx={{ mb: 2 }} />

              <TextField fullWidth label="Email" sx={{ mb: 2 }} />

              <TextField fullWidth label="Address" sx={{ mb: 2 }} />

              <TextField fullWidth label="City" sx={{ mb: 2 }} />

              <TextField fullWidth label="PIN Code" />
            </Paper>
          </Grid>

          {/* Order Summary */}

          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                border: "1px solid #ECE8E2",
                bgcolor: "#fff",
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 3 }}
              >
                Order Summary
              </Typography>

              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography>
                    {item.name} × {item.quantity}
                  </Typography>

                  <Typography>
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </Typography>
                </Box>
              ))}

              <Box
                sx={{
                  mt: 3,
                  pt: 3,
                  borderTop: "1px solid #ECE8E2",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={700}>
                  Total
                </Typography>

                <Typography fontWeight={700}>
                  ₹{total.toLocaleString("en-IN")}
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}

                sx={{
                  mt: 4,
                  bgcolor: "#111",
                  borderRadius: 0,
                  py: 1.5,

                  "&:hover": {
                    bgcolor: "#222",
                  },
                }}
              >
                Place Order
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}