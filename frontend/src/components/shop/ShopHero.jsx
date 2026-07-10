import { Box, Container, Typography } from "@mui/material";

export default function ShopHero() {
  return (
    <Box
      sx={{
        bgcolor: "#FAF9F6",
        pt: 8,
        pb: 6,
        borderBottom: "1px solid #ece8e2",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8B7355",
            mb: 2,
          }}
        >
          Collection
        </Typography>

        <Typography
          sx={{
            fontFamily: "Cormorant Garamond",
            fontSize: {
              xs: "48px",
              md: "72px",
            },
            lineHeight: 0.95,
            color: "#111",
            mb: 3,
          }}
        >
          Shop
        </Typography>

        <Typography
          sx={{
            maxWidth: 520,
            color: "#666",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Explore our curated collection of timeless fashion,
          fine jewelry and signature fragrances crafted for
          modern luxury.
        </Typography>
      </Container>
    </Box>
  );
}