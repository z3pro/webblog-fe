import ViewBlog from '~/ui-components/ViewBlog';
import { Box } from '@mui/material'

const MainContent = () => {
    return (
        <Box sx={{
            padding: 2
        }}>
            <ViewBlog />
        </Box>
    )
}

export default MainContent