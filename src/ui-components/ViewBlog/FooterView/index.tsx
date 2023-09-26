import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Stack, Typography } from '@mui/material';

const FooterView = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                padding: '40px 30px 10px'

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

export default FooterView