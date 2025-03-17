"use client";

import { useEffect, useState } from "react";
import { getArtists } from "../services/api";
import ArtistCard from "../components/ArtistCard";
import { Grid, TextField, Button, Container, Typography } from "@mui/material";

export default function Home() {
  const [artists, setArtists] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchArtists() {
      const { artists, totalPages } = await getArtists(searchTerm, currentPage);
      setArtists(artists);
      setTotalPages(totalPages);
    }
    fetchArtists();
  }, [currentPage, searchTerm]);

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography variant="h1" align="center" gutterBottom>
        Hungaroton Artist List
      </Typography>

      <TextField
        fullWidth
        label="Keresés előadó neve alapján..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 3, backgroundColor: "#FFFFFF", borderRadius: "8px" }}
      />

      <Grid container spacing={3}>
        {artists.length > 0 ? (
          artists.map((artist) => (
            <Grid item key={artist.id} xs={12} sm={6} md={4} lg={3}>
              <ArtistCard
                name={artist.name}
                albumCount={artist.albumCount}
                portrait={artist.portrait}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" align="center">
            Nincs elérhető adat.
          </Typography>
        )}
      </Grid>

      {/* Lapozás */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ⬅ Előző
        </Button>
        <span style={{ color: "#1B1C1B", fontSize: "1.2rem" }}>{currentPage} / {totalPages}</span>
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Következő ➡
        </Button>
      </div>
    </Container>
  );
}
