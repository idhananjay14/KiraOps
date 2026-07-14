import { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useCart from "../context/useCart";
import { getProduct } from "../services/productService";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to load product", error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography>Product not found.</Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#FAF9F6",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 8,
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              height: 650,
              objectFit: "cover",
            }}
          />

          <Box>
            <Typography
              sx={{
                color: "#8B7355",
                textTransform: "uppercase",
                letterSpacing: ".25em",
                fontSize: 12,
                mb: 2,
              }}
            >
              Luxury Collection
            </Typography>

            <Typography
              sx={{
                fontFamily: "Cormorant Garamond",
                fontSize: {
                  xs: 42,
                  md: 58,
                },
                lineHeight: 1,
                mb: 3,
              }}
            >
              {product.name}
            </Typography>

            <Typography
              sx={{
                color: "#8B7355",
                fontSize: 28,
                mb: 4,
              }}
            >
              ₹{product.price.toLocaleString("en-IN")}
            </Typography>

            <Typography
              sx={{
                color: "#666",
                lineHeight: 1.9,
                mb: 5,
                maxWidth: 480,
              }}
            >
              Crafted with exceptional materials and timeless
              craftsmanship. Every piece is designed to embody
              elegance, sophistication and modern luxury.
            </Typography>

            <Button
              variant="contained"
              onClick={() => addToCart(product)}
              sx={{
                bgcolor: "#111",
                borderRadius: 0,
                px: 5,
                py: 1.6,

                "&:hover": {
                  bgcolor: "#222",
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}