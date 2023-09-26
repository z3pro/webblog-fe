import React from 'react';
import { Container, Typography, Box, Avatar, Button, FormControl, InputLabel, Input,TextField,Select,MenuItem, useTheme } from '@mui/material';

const Profile = () => {
    const theme = useTheme();
    return (
        <Container sx={{
            padding: '20px',
            border: '1px solid #ccc',
            margin: '20px',
            borderRadius: '8px'
        }}>
            <Typography variant="h2" color="initial">Thông tin cá nhân</Typography>
            <Typography sx = {{marginTop : 2}} variant="body1" color="initial">Quản lý thông tin cá nhân</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}>
                <Avatar alt='avatar user' src='https://thuthuatnhanh.com/wp-content/uploads/2021/02/Avatar-ngau-dep.jpg'
                    sx={{
                        width: '128px',
                        height: '128px',
                        objectFit: 'cover'
                    }}
                >
                    ND
                </Avatar>
                <Button sx={{
                    position: 'absolute',
                    bottom: '0',
                    left: 'auto',
                    right: 'auto',
                    backgroundColor: 'rgba(0,0,0,.6)',
                    color: '#fff',
                    width: '128px',
                    padding: 0,
                    '&:hover': {
                        opacity: '0.8',
                        backgroundColor: 'rgba(0,0,0,.6)',
                    }
                }}>
                    Thay đổi ảnh
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',

            }}>
                <FormControl variant='standard'>
                    <Typography sx={{
                        margin: 2
                    }} variant="body1" color="initial">Tên tài khoản</Typography>
                    <TextField
                        hiddenLabel
                        size='small'
                    />
                    <Typography sx={{
                        margin: 2
                    }} variant="body1" color="initial">Tên hiển thị</Typography>
                    <TextField
                        hiddenLabel
                        size='small'
                    />
                    <Box sx={{
                        display: 'flex',
                        gap: 2
                   }}>
                        <Box sx={{
                            flex: '1'
                        }}>
                            <Typography sx={{
                                margin: 2
                            }} variant="body1" color="initial">Ngày sinh</Typography>
                            <TextField
                               fullWidth
                                hiddenLabel
                                size='small'
                                type='date'
                            />
                        </Box>
                        <Box sx={{
                           flex: 1
                       }}>
                            <Typography sx={{
                                margin: 2
                            }} variant="body1" color="initial">Giới tính</Typography>
                            <Select
                                variant='outlined'
                                size='small'
                                fullWidth
                            >
                                <MenuItem value={10}>Nam</MenuItem>
                                <MenuItem value={20}>Nữ</MenuItem>
                                <MenuItem value={30}>Khác</MenuItem>
                            </Select>
                       </Box>
                   </Box>
                    <Typography sx={{
                        margin: 2
                    }} variant="body1" color="initial">Địa chỉ</Typography>
                    <TextField
                        hiddenLabel
                        size='small'
                    />
                    <Typography sx={{
                        margin: 2
                    }} variant="body1" color="initial">Email</Typography>
                    <TextField
                        hiddenLabel
                        size='small'
                    />
                    <Typography sx={{
                        margin: 2
                    }} variant="body1" color="initial">Phone</Typography>
                    <TextField
                        hiddenLabel
                        size='small'
                    />
                </FormControl>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop:  4
                }}>
                    <Button variant='outlined'>
                        Cập nhật
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Profile