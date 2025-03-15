import {Grid, CircularProgress, Container} from '@mui/material';
import ArtistCard from './ArtistCard';
import { useArtists } from '@/hooks/useArtist';
import { useSearchParams } from 'next/navigation';

interface Artist {
    id: string;
    name: string;
    albumCount: number;
    image: string;
}

const ArtistList = () => {
    const searchParams = useSearchParams();
    const params = Object.fromEntries(searchParams);
    const { data, isLoading } = useArtists(params);

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Grid container spacing={2}>
          {data?.artists.map((artist: Artist) => (
            <Grid item key={artist.id} xs={12} sm={6} md={4} lg={3}>
              <ArtistCard
                name={artist.name}
                albumCount={artist.albumCount}
                imageUrl={artist.image}
              />
            </Grid>
          ))}
        </Grid>
      );
    };


    export default ArtistList;