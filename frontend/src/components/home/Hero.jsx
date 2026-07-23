import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import { Link } from "react-router-dom";
import modelImage from "../../assets/model.png";

const trustItems = [
  { icon: LocalShippingOutlinedIcon, title: "Free Shipping", subtitle: "On orders over ₹999" },
  { icon: ReplayOutlinedIcon, title: "Easy Returns", subtitle: "14-day returns" },
  { icon: VerifiedUserOutlinedIcon, title: "Secure Payment", subtitle: "100% protected" },
  { icon: DiamondOutlinedIcon, title: "Premium Quality", subtitle: "Handpicked products" },
];

export default function Hero() {
  return (
    <Box sx={{
      height: "650px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <Container maxWidth={false} disableGutters sx={{ px: 0, }}>
        <Grid container spacing={0}>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              zIndex: 2,
              display: "flex",
              alignItems: "flex-start",
              pt: 8,
              px: { xs: 3, md: 8 },
            }}
          >
            <Stack spacing={3.5}
              sx={{
                position: "absolute",
                top: 45,
                left: 80,
                maxWidth: 540,
                zIndex: 5,
              }} >

              <Typography
                sx={{
                  letterSpacing: 3,
                  color: "#8B7355",
                  textTransform: "uppercase",
                  fontSize: 11,
                  mb: 3,
                }}
              >
                NEW COLLECTION 2026
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: 64, md: 92 },
                  lineHeight: 0.9,
                  color: "#111",
                  mb: 3,
                }}
              >
                Elevate Your
                <br />
                Everyday Style
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  fontSize: 18,
                  lineHeight: 1.8,
                  maxWidth: 370,
                  mb: 5,
                }}
              >
                Discover timeless pieces crafted for comfort,
                designed for elegance, made for you.
              </Typography>

              <Stack direction="row" spacing={2.5}>
                <Button
                  component={Link}
                  to="/shop"
                  variant="contained"
                  sx={{
                    bgcolor: "#111",
                    color: "#fff",
                    width: "200px",
                    height: "46px",
                    borderRadius: "30px",  
                    borderRadius: "5px",
                    px: 4,
                    textTransform: "uppercase",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    whiteSpace: "nowrap",
                    boxShadow: "none",

                    "& .MuiButton-endIcon": {
                      marginLeft: "4px",
                    },
                    "&:hover": {
                      bgcolor: "#000",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "14px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                      }}
                    >
                      SHOP COLLECTION
                    </Typography>

                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "15px",
                        fontWeight: 400,
                      }}
                    >
                      →
                    </Typography>
                  </Box>
                </Button>
              </Stack>

            </Stack>
          </Grid>

          <Stack
            direction="row"
            spacing={5}
            sx={{
              position: "absolute",
              left: 90,
              bottom: 120,
              width: "700px",
              justifyContent: "space-between",
              zIndex: 20,
            }}
          >
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <Stack
                  key={item.title}
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                  sx={{ width: 160 }}
                >
                  <Icon
                    sx={{
                      fontSize: 18,
                      color: "#8B7355",
                      mt: 0.3,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#111",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 11,
                        color: "#777",
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
          </Stack>
          <Grid size={12}>

            <Box
              sx={{
                height: 650,
                backgroundImage: `url(${modelImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "118%",
                backgroundPosition: "50% top",
                position: "relative"
              }}
            >
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}