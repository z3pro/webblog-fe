import React from 'react';
import { Box, Container, Tab, Tabs, Typography, Link } from '@mui/material'
import CustomTabPanelMyPosts from '~/ui-components/CustomTabPanelMyPosts';


const Posts = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(newValue);

        setValue(newValue);
    };
    return (
        <Container sx={{
            padding: '8px 44px 0'
        }}>
            <Typography sx={{
                margin: '20px 0 50px'
            }} variant="h1" color="initial">Bài viết của tôi </Typography>
            <Box sx={{ width: '100%',}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Bản nháp" />
                        <Tab label="Đã xuất bản" />
                    </Tabs>
                </Box>
                <CustomTabPanelMyPosts value={value} index={0}>
                    <Box sx={{ padding: '32px 0 0' }}>
                        <Typography sx={{ margin: '14px 0' }} variant="body1" color="initial">Chưa có bản nháp nào.</Typography>
                        <Typography variant="body1" color="initial">
                            Bạn có thể <Link href="" >viết bài mới</Link> hoặc <Link href="">đọc bài viết</Link> khác trên Webblog nhé.
                        </Typography>
                    </Box>
                </CustomTabPanelMyPosts>
                <CustomTabPanelMyPosts value={value} index={1}>
                    <Box sx={{ padding: '32px 0 0' }}>
                        <Typography sx={{ margin: '14px 0' }} variant="body1" color="initial">Chưa có xuất bản nào.</Typography>
                        <Typography variant="body1" color="initial">
                            Bạn có thể <Link href="" >viết bài mới</Link> hoặc <Link href="">đọc bài viết</Link> khác trên Webblog nhé.
                        </Typography>
                    </Box>
                </CustomTabPanelMyPosts>

            </Box>
        </Container>
    )
}

export default Posts