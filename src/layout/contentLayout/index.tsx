import { Box, useTheme } from "@mui/material";

const ContentLayout = ({ ContentLeft, MainContent, ContentRight }: { ContentLeft: any, MainContent: any, ContentRight: any }) => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                display: 'flex',
                minHeight: '100vh',

            }}>
                {ContentLeft ? (
                    <Box sx={{
                        [theme.breakpoints.up('md')]: {
                            flex: '1',
                            display: 'block'
                        },
                        display: 'none'
                    }}>
                        <ContentLeft />
                    </Box>) : null
                }
                <Box sx={{
                    [theme.breakpoints.up('md')]: {
                        flex: '3',
                    },
                    flex: '3'
                }}>
                    <MainContent />
                </Box>
                { ContentRight ?
                        (<Box sx={{
                            [theme.breakpoints.up('sm')]: {
                                flex: '1',
                                display: 'block'
                            },
                            [theme.breakpoints.up('md')]: {
                                display: 'block',
                                flex: '1',
                            },
                            display: 'none',
                        }}>
                            <ContentRight />
                        </Box>) : null
                }
            </Box>
        </>
    )
}

export default ContentLayout