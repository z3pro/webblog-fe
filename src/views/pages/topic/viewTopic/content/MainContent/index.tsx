import React from 'react';
import { Box, Typography, Grid, Pagination, PaginationItem } from '@mui/material';
import MainCard from '~/ui-components/Card/MainCard';
import { Link, useLocation } from 'react-router-dom';

const MainContentTopic = () => {
    const location = useLocation();
    
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    return (
        <Box sx={{
            padding: '20px 40px 10px 0'
        }}>
            <Box sx={{
                borderBottom: '2px solid #999',
                display: 'inline-block',
                padding: "10px 20px",
                marginBottom: 4
            }}>
                <Typography variant="h2" color="primary">Java</Typography>
            </Box>

            <Grid container direction={'column'} >
                <Grid item sx={{ width: '100%' }}>
                    <MainCard />
                    <MainCard />
                    <MainCard />

                </Grid>
                <Grid item sx={{
                    margin: '0 auto'
                }}>
                    <Pagination
                        page={page}
                        count={10} renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`${location.pathname}${item.page === 1 ? '' : `?page=${item.page}`}`}
                            {...item}
                        />
                    )} />
                </Grid>
            </Grid>

        </Box>
    )
}

export default MainContentTopic