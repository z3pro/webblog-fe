import { Avatar, Box, Grid, Typography, Stack } from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import React from 'react'

const HeaderView = () => {
    return (
        <Box>
            <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2
                }}>
                    <Avatar alt="Remy Sharp" src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" />
                    <Box>
                        <Typography variant="h4" color="initial">zinderx1</Typography>
                        <Typography variant="body1" color="#ccc">1 tháng trước</Typography>
                    </Box>
                </Grid>
                <Grid item sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <TurnedInIcon />
                    <Stack sx={{
                        fontSize: '20px'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                        </svg>
                    </Stack>
                </Grid>
            </Grid>

        </Box>
    )
}

export default HeaderView