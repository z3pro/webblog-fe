import { Box, Grid, Typography, Stack, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import React from 'react'

const ContentLeft = () => {
  return (
    <Box sx={{
      display: 'grid',
      gap: 2,
      paddingTop: 10,
    }}>
      <Typography variant="h3" color="initial">Học lập trình với JS</Typography>
      <Stack direction="row" spacing={1}>
        <Chip label="Java" size="small" />
        <Chip label="Javascript" size="small" variant="outlined" />
      </Stack>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
      }}>
        <Stack direction={'row'}>
          <FavoriteIcon />
          <Typography variant="body1" color="initial">10</Typography>
        </Stack>
        <Stack direction={'row'}>
          <ChatBubbleIcon />
          <Typography variant="body1" color="initial">10</Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default ContentLeft