import {Card, CardMedia, CardContent, Typography} from '@mui/material';

interface Artist {
    name: string;
    albumCount: number;
    imageUrl: string;
}

const ArtistCard = ({name, albumCount, imageUrl}: Artist) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={name}
            />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {albumCount} albums
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ArtistCard;