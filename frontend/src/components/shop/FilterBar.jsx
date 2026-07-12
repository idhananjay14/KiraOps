import { Box, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  { label: "All", value: null },
  { label: "Fashion", value: "fashion" },
  { label: "Jewelry", value: "jewelry" },
  { label: "Beauty", value: "beauty" },
];

export default function FilterBar({ activeCategory }) {
  const navigate = useNavigate();

  const handleClick = (value) => {
    if (value) {
      navigate(`/shop?category=${value}`);
    } else {
      navigate("/shop");
    }
  };

  return (
    <Box
      sx={{
        borderBottom: "1px solid #ece8e2",
        bgcolor: "#FAF9F6",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={5}
          sx={{
            py: 2,
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <Typography
                key={cat.value}
                onClick={() => handleClick(cat.value)}
                sx={{
                  cursor: "pointer",
                  fontSize: 14,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: isActive ? "#111" : "#777",
                  transition: ".25s",

                  "&:hover": {
                    color: "#111",
                  },
                }}
              >
                {cat.label}
              </Typography>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}