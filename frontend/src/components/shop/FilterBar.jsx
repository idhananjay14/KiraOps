import { Box, Container, Stack, Typography } from "@mui/material";

const categories = ["All", "Fashion", "Jewelry", "Beauty"];

export default function FilterBar() {
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
            py: 3,
          }}
        >
          {categories.map((category, index) => (
            <Typography
              key={category}
              sx={{
                cursor: "pointer",
                fontSize: 14,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: index === 0 ? "#111" : "#777",
                transition: ".25s",

                "&:hover": {
                  color: "#111",
                },
              }}
            >
              {category}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}