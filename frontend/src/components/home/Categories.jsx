import { Box, Container, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Fashion",
    subtitle: "Ateliers & Ready-to-Wear",
    image:
      "https://images.unsplash.com/photo-1601597565151-70c4020dc0e1?w=1200",
    link: "/shop/fashion",
  },
  {
    title: "Jewelry & Watches",
    subtitle: "Timepieces & Fine Jewelry",
    image:
      "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?w=1200",
    link: "/shop/jewelry",
  },
  {
    title: "Beauty & Fragrance",
    subtitle: "Perfumery & Skin",
    image:
      "https://images.pexels.com/photos/34089129/pexels-photo-34089129.jpeg?w=1200",
    link: "/shop/beauty",
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
      <Container maxWidth="xl">
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 6,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: ".3em",
                color: "#777",
                mb: 1,
              }}
            >
              THE HOUSES
            </Typography>

            <Typography
              sx={{
                fontFamily: "Cormorant Garamond",
                fontSize: {
                  xs: "34px",
                  md: "54px",
                },
                lineHeight: 1.05,
              }}
            >
              Three worlds, one measure.
            </Typography>
          </Box>

          <Link
            to="/shop"
            style={{
              color: "#111",
              textDecoration: "underline",
              textUnderlineOffset: "6px",
              fontSize: "15px",
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
            gap: 2.5,
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
                  mt: index === 1 ? 8 : 0,
                  overflow: "hidden",
                  position: "relative",
                  height: index === 1 ? 330 : 420,
                  cursor: "pointer",

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
                      item.title === "Jewelry & Watches"
                        ? "50% 20%"
                        : "center",
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
                          xs: "28px",
                          md: "40px",
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