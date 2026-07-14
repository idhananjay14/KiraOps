import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      await login(
        formData.email,
        formData.password
      );

      alert("Login successful");

      navigate("/", { replace: true });
    } catch (error) {
      alert(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "#FAF9F6",
        minHeight: "80vh",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={0}
          sx={{
            p: 5,
            border: "1px solid #ECE8E2",
            bgcolor: "#fff",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond",
              fontSize: 48,
              mb: 4,
              textAlign: "center",
            }}
          >
            Sign In
          </Typography>

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              mt: 3,
              py: 1.5,
              bgcolor: "#111",
              borderRadius: 0,

              "&:hover": {
                bgcolor: "#222",
              },
            }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>

          <Typography
            sx={{
              mt: 3,
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <Typography
              component={Link}
              to="/register"
              sx={{
                display: "inline",
                textDecoration: "none",
                color: "#111",
                fontWeight: 600,
              }}
            >
              Create Account
            </Typography>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}