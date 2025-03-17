import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

interface Artist {
  name: string;
  albumCount: number;
  portrait: string;
}

const ArtistCard = ({ name, albumCount, portrait }: Artist) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "background.paper", 
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={portrait}
        alt={name}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
      <CardContent sx={{ padding: "16px", textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {albumCount} album
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
