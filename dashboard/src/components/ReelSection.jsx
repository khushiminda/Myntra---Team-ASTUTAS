import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { Button, Box, Typography } from '@mui/material';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    buyLink: 'https://www.example.com/buy/video1',
  },
  {
    id: 2,
    title: 'Video 2',
    url: 'https://www.w3schools.com/html/movie.mp4',
    buyLink: 'https://www.example.com/buy/video2',
  },
  {
    id: 3,
    title: 'Video 3',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    buyLink: 'https://www.example.com/buy/video3',
  },
];

const EnhancedSwipeableViews = bindKeyboard(SwipeableViews);

const SwipeableVideos = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}
    >
      <EnhancedSwipeableViews
        axis="y"
        resistance
        style={{ height: '100%' }}
        containerStyle={{ height: '100%' }}
        slideStyle={{ height: '100%' }}
      >
        {videos.map((video) => (
          <Box
            key={video.id}
            sx={{
              position: 'relative',
              height: '100%',
              width: '60%', // Adjust width as needed
              maxWidth: '600px', // Set a max-width for better presentation
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              margin: 'auto',
            }}
          >
            <video
              src={video.url}
              controls
              autoPlay
              loop
              style={{
                height: '100vh',
                width: 'auto',
                borderRadius: '16px',
              }}
            />
            {/* <Typography
              variant="h5"
              sx={{
                color: 'white',
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '8px',
                borderRadius: '8px',
              }}
            >
              {video.title}
            </Typography> */}
            <Button
              variant="contained"
              color="primary"
              href={video.buyLink}
              target="_blank"
              sx={{
                position: 'absolute',
                bottom: '32px',
                backgroundColor: 'rgba(255, 5, 255, 0.8)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 0, 1)',
                },
              }}
            >
              Buy Me
            </Button>
          </Box>
        ))}
      </EnhancedSwipeableViews>
    </Box>
  );
};

export default SwipeableVideos;
