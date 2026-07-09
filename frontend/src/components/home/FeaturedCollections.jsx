import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const collections = [
  {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900",
  },
  {
    title: "Men",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900",
  },
];

export default function FeaturedCollections() {
  return (
    <Box sx={{ py: 12, bgcolor: "#fff" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 8,
          }}
        >
          Featured Collections
        </Typography>

        <Grid container spacing={4}>
          {collections.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 0,
                  overflow: "hidden",
                  transition: ".35s",

                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  height="520"
                  sx={{
                    transition: ".4s",
                  }}
                />

                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}