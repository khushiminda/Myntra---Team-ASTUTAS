import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { Button, Box, Typography } from '@mui/material';
import localVideo1 from '../assets/WhatsApp Video 2024-07-15 at 13.50.00.mp4';
import localVideo2 from "../assets/WhatsApp Video 2024-07-15 at 15.44.05.mp4";
import localVideo3 from "../assets/WhatsApp Video 2024-07-15 at 15.44.09.mp4"

const videos = [
  {
    id: 1,
    title: 'Local Video 1',
    url: localVideo1,
    buyLink: 'https://www.myntra.com/',
  },
  {
    id: 2,
    title: 'Video 2',
    url: localVideo2,
    buyLink: 'https://www.myntra.com/',
  },
  {
    id: 3,
    title: 'Video 3',
    url: localVideo3,
    buyLink: 'https://www.myntra.com/',
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
        backgroundColor: 'black',
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
              width: '50%', // Adjust width as needed
              maxWidth: '600px', // Set a max-width for better presentation
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              margin: 'auto',
            }}
          >
            {video.url.includes('youtube.com') ? (
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  height: '100vh',
                  width: 'auto',
                  borderRadius: '16px',
                  border: 'none',
                }}
              />
            ) : (
              <video
                src={video.url}
                title={video.title}
                controls
                style={{
                  height: '100vh',
                  width: '100vw',
                  borderRadius: '16px',
                }}
              />
            )}
             <Typography
              variant="h2"
              sx={{
                color: '#D10070',
                position: 'absolute',
                top: '20px',
                left: '20px',
               
                padding: '2px',
                
              }}
            >
              Myntra Filters
            </Typography>
            <Button
             variant="contained"
              color="primary"
              href={video.buyLink}
              target="_blank"
              sx={{
                position: 'relative',
                bottom: '180px',
                backgroundColor: '#D10070',
                padding: '10px 52x', // Increase padding for larger button
                fontSize: '1.75rem', // Increase font size
                minWidth: '200px', // Set minimum width
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
