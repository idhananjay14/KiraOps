import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/product/${product.id}`)}
      sx={{
        cursor: "pointer",
        transition: ".35s",

        "&:hover img": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          bgcolor: "#f5f5f5",
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: 340,
            objectFit: "cover",
            transition: ".5s",
            display: "block",
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
        ${product.price}
      </Typography>
    </Box>
  );
}