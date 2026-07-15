import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Editorial() {
  return (
    <Box
      sx={{
        pt: 8,
        pb: 7,
        bgcolor: "#FAF9F6",
        borderTop: "1px solid #ece8e2",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "980px",
          mx: "auto",
          px: {
            xs: 2,
            md: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "360px 480px",
            },
            justifyContent: "center",
            gap: {
              xs: 4,
              md: 2,
            },
            alignItems: "center",
          }}
        >
          {/* Image */}

          <Box
            component="img"
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Fragrance"
            sx={{
              width: 340,
              height: 430,
              objectFit: "cover",
              objectPosition: "65% center",
              display: "block",
              justifySelf: "center",
            }}
          />

          {/* Content */}

          <Box sx={{ maxWidth: 480 }}>
            <Typography
              sx={{
                color: "#A48763",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                fontSize: 12,
                mb: 2,
              }}
            >
              Chanel · No.7
            </Typography>

            <Typography
              sx={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 400,
                color: "#111",
                fontSize: {
                  xs: "38px",
                  md: "52px",
                },
                lineHeight: 1.03,
              }}
            >
              The timeless
              <br />
              essence of
              <br />
              luxury.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 400,
                color: "#A48763",
                fontSize: {
                  xs: "38px",
                  md: "52px",
                },
                lineHeight: 1.03,
                mb: 4,
              }}
            >
              An iconic fragrance,
              crafted to leave a
              <br />
              lasting impression.
            </Typography>

            <Button
              component={Link}
              to="/shop?category=Beauty"
              variant="contained"
              sx={{
                bgcolor: "#111",
                color: "#fff",
                borderRadius: 0,
                px: 4,
                height: 46,
                fontSize: 11,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                boxShadow: "none",

                "&:hover": {
                  bgcolor: "#222",
                  boxShadow: "none",
                },
              }}
            >
              Enter Fragrance
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}