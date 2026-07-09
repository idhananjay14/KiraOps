import { Box, Container, Grid, Typography } from "@mui/material";

import products from "../../data/products";
import ProductCard from "../ProductCard";

export default function NewArrivals() {
  return (
    <Box py={12}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          mb={6}
          textAlign="center"
        >
          New Arrivals
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}