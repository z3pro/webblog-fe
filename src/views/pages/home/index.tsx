import { Box } from '@mui/material'
import Content from './content'
import Carousel from 'react-material-ui-carousel'
import CarouselSection from './carousel'

const Home = () => {
    return (
        <Box>
            <CarouselSection/>
            <Content />
        </Box>
    )
}

export default Home