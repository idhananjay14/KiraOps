import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: "#FAF9F6",
        borderTop: "1px solid #ECE8E2",
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 34,
            textAlign: "center",
            color: "#111",
            mb: 1,
          }}
        >
          KIRAOPS
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#777",
            maxWidth: 520,
            mx: "auto",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Curating timeless luxury with exceptional craftsmanship,
          refined design, and an elevated shopping experience.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            flexWrap: "wrap",
            mb: 5,
          }}
        >
          {[
            { label: "Home", to: "/" },
            { label: "Shop", to: "/shop" },
            { label: "Account", to: "/account" },
            { label: "Cart", to: "/cart" },
          ].map((item) => (
            <Typography
              key={item.label}
              component={Link}
              to={item.to}
              sx={{
                textDecoration: "none",
                color: "#555",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                transition: ".25s",

                "&:hover": {
                  color: "#8B7355",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            color: "#999",
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          © 2026 KIRAOPS • All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}