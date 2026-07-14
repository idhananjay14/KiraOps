import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import ProductCard from "../ProductCard";
import { getProducts } from "../../services/productService";


export default function ProductGrid({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;
  if (loading) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Loading products...</Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        py: 4,
        bgcolor: "#FAF9F6",
      }}
    >
      <Container maxWidth="lg">
        {filtered.length === 0 ? (
          <Typography sx={{ textAlign: "center", py: 8, color: "#666" }}>
            No products found.
          </Typography>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
              },
              gap: 4,
            }}
          >
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}