import { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useCart from "../context/useCart";
import { getProduct } from "../services/productService";
import { CircularProgress } from "@mui/material";

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
      <Container
        sx={{
          py: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CircularProgress color="inherit" />

        <Typography color="text.secondary">
          Loading product...
        </Typography>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container sx={{
        py: 12,
        textAlign: "center",
      }}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 600,
            mb: 2,
          }}
        >
          Product not found
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          The product you're looking for doesn't exist or has been removed.
        </Typography>

        <Button
          href="/shop"
          variant="contained"
          sx={{
            bgcolor: "#111",
            borderRadius: 0,

            "&:hover": {
              bgcolor: "#222",
            },
          }}
        >
          Continue Shopping
        </Button>
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
              height: {
                xs: 420,
                md: 650,
              },
              borderRadius: 2,
              border: "1px solid #ECE8E2",
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
                display: "inline-block",
                px: 2,
                py: 0.6,
                mb: 3,
                bgcolor: "#F6F0E8",
                color: "#8B7355",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              In Stock
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
                px: 6,
                py: 1.8,

                fontSize: 15,
                fontWeight: 600,
                letterSpacing: ".08em",

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