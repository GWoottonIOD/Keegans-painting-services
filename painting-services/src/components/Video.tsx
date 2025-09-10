import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import videoUrl from './video.mp4';
import { keyframes } from '@emotion/react';

export default function Video() {
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2,
        flexWrap: 'wrap', mt: `80px`,
        height: 800, animation: `${fadeIn} 5s ease-in-out`,
        padding: 2,
        backgroundColor: 'primary.light',
        }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            autoPlay
            loop
            muted
            poster={videoUrl}
          >
            <source
              src={videoUrl}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            textColor="#fff"
            sx={{ fontWeight: 'lg', mb: { xs: 12, sm: 18, md: 24 } }}
          >
            Get a free quote now!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
