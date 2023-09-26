import React, { useMemo } from 'react'
import Header from '../mainLayout/header'
import { AppBar, Box, CssBaseline, Toolbar, useTheme, Container } from '@mui/material'
import HeaderAdmin from './HeaderAdmin';
import SidebarAdmin from './SidebarAdmin';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const theme = useTheme();
    const header = useMemo(() => (
        <Toolbar sx={{ p: '8px 16px', borderBottom: '1px solid #ccc', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 4px 0px' }}>
            <HeaderAdmin />
        </Toolbar>)
        , [])
    return (
        <Box>
            <CssBaseline />
            <AppBar enableColorOnDark position='fixed' color='inherit' elevation={0} sx={{ bgcolor: theme.palette.background.default }}>
                {header}
            </AppBar>
           <Box sx = {{display: 'flex'}}>
                <SidebarAdmin />
                <Box sx={{
                    flexGrow: 1,
                    paddingTop: '66px'
                }}
                >
                    <Outlet />
                </Box>
           </Box>
        </Box>
    )
}

export default AdminLayout