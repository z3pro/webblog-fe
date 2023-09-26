import { Box, Typography,Grid } from '@mui/material';
import React from 'react'
import ContentLayout from '~/layout/contentLayout';
import MainCard from '~/ui-components/Card/MainCard';
import MainContentTopic from './MainContent';
import ContentRightTopic from './RightContent';

const ContentTopic = () => {
    return (
        <Box>
            <ContentLayout ContentLeft={null} ContentRight={ContentRightTopic} MainContent={MainContentTopic} />
        </Box>
    )
}

export default ContentTopic;