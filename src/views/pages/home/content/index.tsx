import { Box } from '@mui/material'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import MainContent from './MainContent'
import ContentLayout from '~/layout/contentLayout'

const Content = () => {
  return (
    <>
      <ContentLayout ContentLeft={null} ContentRight={ContentRight} MainContent={MainContent}/>
    </>
  )
}

export default Content