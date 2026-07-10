import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#FAF9F6",
        pt: 5,
        pb: 6,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pl: { md: 4 },
        }}
      >
        <Grid container spacing={2} alignItems="center">
          {/* Left Side */}
          <Grid
            size={{ xs: 12, md: 5 }}
          >
            <Stack spacing={3}>
              <Typography
                sx={{
                  letterSpacing: 3,
                  color: "#8B7355",
                  textTransform: "uppercase",
                  fontSize: 11,
                }}
              >
                Autumn / Winter 2026
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "48px",
                    md: "78px",
                  },
                  lineHeight: 0.92,
                }}
              >
                Quiet
                <br />
                Luxury.
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 420,
                }}
              >
                Discover timeless silhouettes, premium fabrics and modern
                tailoring crafted for everyday elegance.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  component={Link}
                  to="/shop"
                  variant="contained"
                  sx={{
                    bgcolor: "#111",
                    px: 4,
                    py: 1.4,
                  }}
                >
                  Shop Collection
                </Button>

                <Button
                  component={Link}
                  to="/shop"
                  variant="outlined"
                  sx={{
                    borderColor: "#111",
                    color: "#111",
                    px: 4,
                    py: 1.4,
                  }}
                >
                  Discover
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Side */}
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1400"
              alt="Luxury Fashion"
              sx={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                mr: "auto",
                ml: -2
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}