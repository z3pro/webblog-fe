import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const FeatureCard = () => {
    return (
        <Card>
            <CardContent sx={{
                padding: 1,
                '&:last-child': {
                    paddingBottom: 1,
                },
                borderBottom: '1px solid #ccc'
            }}>
                <Typography variant="h5" color="initial">Java không khó</Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    paddingTop: 1
                }}>
                    <Stack direction={'row'}>
                        <FavoriteIcon />
                        <Typography variant="body1" color="initial">10</Typography>
                    </Stack>
                    <Stack direction={'row'}>
                        <ModeCommentIcon />
                        <Typography variant="body1" color="initial">10</Typography>
                    </Stack>
                    <Stack direction={'row'}>
                        <BookmarkIcon />
                        <Typography variant="body1" color="initial">10</Typography>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    )
}

export default FeatureCard