import { Box, Container } from "@mui/material";
import ProductCard from "../ProductCard";
import products from "../../data/products";

export default function ProductGrid() {
  return (
    <Box
      sx={{
        py: 7,
        bgcolor: "#FAF9F6",
      }}
    >
      <Container maxWidth="lg">
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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}