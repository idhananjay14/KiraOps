import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/product/${product.id}`)}
      sx={{
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          bgcolor: "#f0ede7",
          aspectRatio: "3 / 4",
        }}
      >
        <Box
          component="img"
          src={product.image_url}
          alt={product.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .5s ease",
            "&:hover": {
              transform: "scale(1.04)",
            },
          }}
        />
      </Box>

      <Typography
        sx={{
          mt: 2,
          fontFamily: "Cormorant Garamond",
          fontSize: 28,
          color: "#111",
        }}
      >
        {product.name}
      </Typography>

      <Typography
        sx={{
          mt: 0.5,
          color: "#8B7355",
          fontSize: 15,
          letterSpacing: ".08em",
        }}
      >
        ₹{product.price.toLocaleString("en-IN")}
      </Typography>
    </Box>
  );
}