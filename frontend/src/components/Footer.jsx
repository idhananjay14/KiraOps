import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1.5,
        bgcolor: "#FAF9F6",
        borderTop: "1px solid #E6E1DA",
        mt: -5,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
          }}
        >
           <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: ".02em",
            color: "#111",
             whiteSpace: "nowrap",
          }}
        >
          KIRAOPS
        </Typography>
        
          <Box
            sx={{
              display: "flex",
              gap: 5,
              alignItems: "center",
              flex: 1,
    justifyContent: "center",
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
                  color: "#222",
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
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
            color: "#777",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          © 2026 KIRAOPS 
        </Typography>
        </Box>

       
      </Container>
    </Box>
  );
}