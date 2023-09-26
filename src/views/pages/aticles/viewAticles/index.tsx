import { Box } from '@mui/material'
import ContentLeft from './content/ContentLeft';
import ContentRight from './content/ContentRight';
import MainContent from './content/MainContent';
import ContentLayout from '~/layout/contentLayout'

const ContentAticles = () => {
  return (
    <>
      <Box sx={{ padding: '20px 0' }}>
        <ContentLayout ContentLeft={ContentLeft} ContentRight={ContentRight} MainContent={MainContent} />
      </Box>
    </>
  )
}

export default ContentAticles