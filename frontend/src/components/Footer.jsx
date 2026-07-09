import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 2,
        py: 2,
        borderTop: "1px solid #e8e3dc",
        bgcolor: "#FAF9F6",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{
            color: "#999",
            fontSize: 12,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          © 2026 KIRAOPS • Crafted with Elegance
        </Typography>
      </Container>
    </Box>
  );
}