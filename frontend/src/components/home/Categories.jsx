import { Box, Container, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Fashion",
    subtitle: "Ateliers & Ready-to-Wear",
    image:
      "https://images.unsplash.com/photo-1601597565151-70c4020dc0e1?w=1200",
    link: "/shop?category=Fashion",
  },
  {
    title: "Jewelry & Watches",
    subtitle: "Timepieces & Fine Jewelry",
    image:
      "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?w=1200",
    link: "/shop?category=Jewelry",
  },
  {
    title: "Beauty & Fragrance",
    subtitle: "Perfumery & Skin",
    image:
      "https://images.pexels.com/photos/34089129/pexels-photo-34089129.jpeg?w=1200",
    link: "/shop?category=Beauty",
  },
];

export default function Categories() {
  return (
    <Box
      sx={{
        pt: 5,
        pb: 8,
        bgcolor: "#FAF9F6",
        borderTop: "1px solid #ece8e2",
      }}
    >
      <Container maxWidth={false}
       maxWidth={false}
  sx={{
    px: {
      xs: 3,
      sm: 4,
      md: 6,
      lg: 8,
    },
  }}
>
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: "#6d6457",
 textTransform: "uppercase",
                mb: 0.8,
              }}
            >
              THE HOUSES
            </Typography>

            <Typography
              sx={{
                fontFamily: "Cormorant Garamond" ,
                fontSize: {
                  xs: "40px",
                  md: "50px",
                },
                fontWeight: 500,
    lineHeight: 1,
    color: "#111",
    letterSpacing: "-0.02em",
              }}
            >
              Three worlds, one measure.
            </Typography>
          </Box>

          <Link
            to="/shop"
            style={{
              color: "#111",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: 600,
              borderBottom: "1px solid #111",
              paddingBottom: "6px",
            }}
          >
            See all →
          </Link>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3,1fr)",
            },
            gap: 1.5,
          }}
        >
          {categories.map((item, index) => (
            <Link
              key={item.title}
              to={item.link}
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  mt: 0,
                  overflow: "hidden",
                  position: "relative",
                  height: 260,
                  cursor: "pointer",
                  borderRadius: "4px",

                  "& img": {
                    transition: ".6s ease",
                  },

                  "&:hover img": {
                    transform: "scale(1.05)",
                  },

                  "& .arrow": {
                    transition: ".3s",
                  },

                  "&:hover .arrow": {
                    transform: "translateX(6px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition:
                      item.title === "Fashion"
                        ? "50% 5%"
                        : item.title === "Jewelry & Watches"
                          ? "50% 20%"
                          : "50% 80%",
                          borderRadius: "4px",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.15), transparent)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    right: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: 10,
                        letterSpacing: ".22em",
                        textTransform: "uppercase",
                        mb: .7,
                      }}
                    >
                      {item.subtitle}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Cormorant Garamond",
                        fontSize: {
                          xs: "24px",
                          md: "35px",
                        },
                        lineHeight: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <ArrowOutwardIcon
                    className="arrow"
                    sx={{
                      color: "#fff",
                      fontSize: 18,
                    }}
                  />
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}