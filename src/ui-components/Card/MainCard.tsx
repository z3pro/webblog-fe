import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import PushPinIcon from '@mui/icons-material/PushPin';
import { Avatar, Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';

const MainCard = (props: any) => {
    const { maxWidth, aticles } = props;
    return (
        <Card sx={{ maxWidth: '100%', border: '1px solid #666', margin: 1 }}>
            <CardContent sx={{
                padding: 2,
                '&:last-child': {
                    paddingBottom: 2
                }
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={2} justifyContent='flex-end'>
                        <Avatar src='https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg'></Avatar>
                    </Grid>
                    <Grid item xs={9}>
                        <Box sx={{
                            display: 'flex',
                            gap: 1,
                            paddingBottom: 1
                        }}>
                            <Typography variant="h4" color="initial">z3pro</Typography>
                            <Typography variant="body1" color="initial"> 28 ngày trước</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" color="initial" sx={{
                                wordBreak: 'break-all'
                            }}>khdfkhskjhkkkhfkjshfkjhdskjkkjkjhkjhdkhskjdh</Typography>
                        </Box>
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
                                <BookmarkIcon/>
                                <Typography variant="body1" color="initial">10</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    {true && <Grid item xs={1}><PushPinIcon sx={{ color: '#007FFF'}}/></Grid>}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MainCard