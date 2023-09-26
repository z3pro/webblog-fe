import { AppBar, Box, Container, CssBaseline, Toolbar, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../ui-components/Footer';
import Header from './header';

const MainLayout = () => {
    const theme = useTheme();
    const header = useMemo(() => (
        <Toolbar sx={{ p: '8px 16px', borderBottom: '1px solid #ccc', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 4px 0px' }}>
            <Header />
        </Toolbar>)
        , [])

    return (
        <Box>
            <CssBaseline />
            <AppBar enableColorOnDark position='fixed' color='inherit' elevation={0} sx={{ bgcolor: theme.palette.background.default }}>
                {header}
            </AppBar>
            <Container sx={{ pt: 11 }}>
                {/* <Content /> */}
                <Outlet />
            </Container>
            {/* <Footer /> */}
        </Box>
    )
}

export default MainLayout