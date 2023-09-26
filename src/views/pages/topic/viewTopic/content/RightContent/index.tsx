import React from 'react';
import { Box, Typography,Stack,Chip} from '@mui/material';
const topics = ['JAVA', 'PHP', 'JAVASCRIPT', 'REACTJS', 'SPRING BOOT', 'MYSQL'];
const ContentRightTopic = () => {
    return (
        <Box sx={{
            paddingTop: 10
        }}>
            <Box>
                <Typography variant="h3" color="initial">Các chủ đề được đề xuất:</Typography>
                <Stack direction={'row'} flexWrap={'wrap'} sx={{
                    paddingTop:1
                }}>
                    {topics.map((topic, index) => {
                        return (
                            <Chip label={topic} size="medium" variant="outlined" sx={{
                                margin: "4px",
                                cursor: 'pointer'
                            }}/>
                        )
                    })}
                </Stack>
            </Box>
        </Box>
    )
}

export default ContentRightTopic