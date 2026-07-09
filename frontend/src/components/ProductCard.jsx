import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        sx={{
          height: 420,
          objectFit: "cover",
        }}
      />

      <CardContent sx={{ px: 0 }}>
        <Typography variant="h5">
          {product.name}
        </Typography>

        <Typography color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}