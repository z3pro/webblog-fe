import { Box } from '@mui/material'
import { autoBatchEnhancer } from '@reduxjs/toolkit'
import React from 'react'
import FeatureAticles from '~/ui-components/FeaturedAticles'

const ContentRight = () => {
  return (
    <Box sx={{
      maxHeight: '800px',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '2px'
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#fafafa'
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#ccc',
        borderRadius: '50px'
      }
    }}>
      <FeatureAticles/>
    </Box>
  )
}

export default ContentRight