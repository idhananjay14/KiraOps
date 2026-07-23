import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Editorial() {
  return (
    <Box
      sx={{
        pt: -4,
        pb: 7,
        bgcolor: "#FAF9F6",
        borderTop: "none",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1280px",
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
              md: "45% 66%",
            },
            justifyContent: "center",
            gap: 0,
            alignItems: "stretch",
          }}
        >
          {/* Image */}

          <Box
            component="img"
            src="/images/perfume.png"
            sx={{
              width: "100%",
              height: 300,
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "51% 40%",
              display: "block",
              justifySelf: "stretch",
              gridColumn: 2,
              gridRow: 1,
              borderTopRightRadius: "5px",
borderBottomRightRadius: "5px",
            }}
          />

          {/* Content */}

          <Box sx={{
            bgcolor: "#111",
            color: "#fff",
            height: 300,
            px: 5,
            py: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            mr: "-60px",
            borderTopLeftRadius: "5px",
borderBottomLeftRadius: "5px",
          }}>
            <Typography
              sx={{
                color: "#A48763",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                fontSize: 10,
                mb: 2,
              }}
            >
              Chanel · No.7
            </Typography>

            <Box>

              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontWeight: 400,
                  color: "#fff",
                  fontSize: {
                    xs: "30px",
                    md: "60px",
                  },
                  lineHeight: 1.05,
                  mb: 2,
                }}
              >
                The timeless  
                <br />
                essence of luxury.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontWeight: 400,
                  color: "#A48763",
                  fontSize: {
                    xs: "18px",
                    md: "18px",
                  },
                  lineHeight: 1.5,
                  mt:2,
                  mb: 0,
                }}
              >
                An iconic fragrance,
                crafted to leave a
                lasting impression.
              </Typography>

            </Box>

            <Button
              component={Link}
              to="/shop?category=Beauty"
              sx={{
                color: "#fff",
                bgcolor: "transparent",
                p: 0,
                mt: "auto",
                pt: 3,
                justifyContent: "flex-start",
                textTransform: "uppercase",
                letterSpacing: ".18em",
                fontSize: "11px",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              DISCOVER NOW →
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}