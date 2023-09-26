import { Box, Grid, Typography } from '@mui/material'
import MainCard from '../Card/MainCard'
import FeatureCard from '../Card/FeatureCard'

const FeatureAticles = () => {
    return (
        <Box>
            <Typography variant="h3" color="initial">Bài viết nổi bật _________</Typography>
            <Grid container direction={'column'}>
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </Grid>
        </Box>
    )
}

export default FeatureAticles