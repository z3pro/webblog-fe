import { Box, Typography } from '@mui/material'
import React from 'react'
import NotificationSection from '~/layout/mainLayout/header/NotificationSection'
import ProfileSection from '~/layout/mainLayout/header/ProfileSection'
import SearchSection from '~/layout/mainLayout/header/SearchSection'

const HeaderAdmin = () => {
    return (
        <Box sx={
            {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }
        }>
            <Typography variant="h3" color="primary">Wellcome,Admin!</Typography>
            <SearchSection />
            <Box sx={{ flex: 1 }}></Box>
            <NotificationSection />
            <ProfileSection />
        </Box>
    )
}

export default HeaderAdmin