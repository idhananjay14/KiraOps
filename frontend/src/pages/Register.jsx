import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Register() {
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
            margin="normal"
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
          />

          <Button
            fullWidth
            variant="contained"
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
            Create Account
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