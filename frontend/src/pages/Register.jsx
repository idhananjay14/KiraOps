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
import { register } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await register(
        formData.name,
        formData.email,
        formData.password
      );

      alert("Account created successfully");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message || "Registration failed"
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
              textAlign: "center",
              mb: 4,
            }}
          >
            Create Account
          </Typography>

          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />

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

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
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
            {loading ? "Creating..." : "Create Account"}
          </Button>

          <Typography
            sx={{
              mt: 3,
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Typography
              component={Link}
              to="/login"
              sx={{
                display: "inline",
                textDecoration: "none",
                color: "#111",
                fontWeight: 600,
              }}
            >
              Sign In
            </Typography>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}