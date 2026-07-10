import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

export default function Account() {
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
              J
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: 42,
                }}
              >
                Jay
              </Typography>

              <Typography color="text.secondary">
                jay@example.com
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

          <Typography color="text.secondary">
            No orders yet.
          </Typography>

          <Button
            variant="contained"
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