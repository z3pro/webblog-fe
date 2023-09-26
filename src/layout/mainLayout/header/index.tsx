import { Box, Button, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import ButtonTopicHeader from '~/ui-components/ButtonTopicHeader';
import MenuHeader from '~/ui-components/MenuHeader';
import LogoSection from './LogoSection';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';
import SearchSection from './SearchSection';
const pages = [
    { title: 'Trang chủ', slug: '/home' },
    { title: 'Chủ đề', slug: '' },
    { title: 'Blog tâm sự', slug: '/blog/view' }
];


const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    return (
        <>
            <Box sx={
                {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
            }>
                <Box sx={{
                    display: {
                        xs: 'block',
                        md: 'none'
                    }
                }}>
                    <MenuHeader />
                </Box>
                <Box>
                    <LogoSection />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, pl: 8 }}>
                    {pages.map((page, index) => {
                        if (page.title === 'Chủ đề') {
                            return <ButtonTopicHeader />;
                        };
                        return (
                            <Link key={index} to={page.slug} style={{ textDecoration: 'none' }}>
                                <Button 
                                    sx={{ my: 2, color: theme.palette.text.primary, display: 'block' }}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        )
                    })}
                </Box>
                <Box sx={{flex:'1'}}/>
                <SearchSection />
                <NotificationSection/>
                <ProfileSection />
            </Box>
        </>
    )
}

export default Header