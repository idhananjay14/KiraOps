import { Box, Container, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import products from "../../data/products";

export default function ProductGrid({ category }) {
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

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
            No products found in this category.
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