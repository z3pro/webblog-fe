import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Box, Button, Checkbox, FormControl, FormLabel,
    IconButton,
    InputAdornment,
    Link,
    OutlinedInput,
    Stack, TextField, Typography,
    useTheme
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import useAuth from '~/hooks/useAuth';
import { postLogin } from '~/services/authentications';

const AuthLogin = () => {
    const theme = useTheme();
    const { login } = useAuth();
    // const intl = useIntl();
    const [checkBox, setCheckBox] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleChecked = () => {
        setCheckBox(pre => !pre);
    }
    const handleShowPassword = () => {
        setShowPassword(pre => !pre)
    }
    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    const formik: any = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            userName: Yup.string()
                .required('Trường này không được bỏ trống!')
                .min(6, 'Tên tài khoản tối thiểu 6 ký tự !')
                .max(255, 'Tên tài khoản tối đa 255 ký tự !'),
            password: Yup.string()
                .required('Trường này không được bỏ trống !')
                .min(8, ' Mật khẩu tối thiểu 8 ký tự !')
                .max(128, 'Mật khẩu tối đa 128 ký tự !')
        }),
        onSubmit: async (values,{setStatus,setSubmitting}) => {
            try {
                await login(values.userName, values.password, checkBox);
                
            } catch (error) {
                
            }
        }
    });
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
            <Box sx={{
                position: 'absolute',
                backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-mxlweIqdL3L6ezwzQmaLbKm3vh58qyIOUXtp51igAStDUlbrRQ7YJFAqyB_ca00UcxM&usqp=CAU")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh',
                opacity: '0.9'
            }} />
            <form
                onSubmit={formik.handleSubmit}
                style={{
                    position: 'relative',
                    width: '60%',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    padding: '24px 16px 60px',
                    display: 'grid',
                    gap: '16px',
                    boxShadow: theme.shadows[3]
                }}
            >
                <Box sx={{
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: '20px'
                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        maxWidth: '60%',
                        letterSpacing: '2px'
                    }} variant="h1" color="primary">Chào mừng bạn đến Webblog</Typography>
                </Box>
                <FormControl>
                    <FormLabel
                        sx={{
                            marginBottom: '16px',
                        }}
                        color='primary'>Tên tài khoản: </FormLabel>
                    <TextField
                        name='userName'
                        type='text'
                        value={formik.values.useName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.userName && formik.touched.userName &&
                        (<Typography variant="body1" color="error">{formik.errors.userName}</Typography>)
                    }
                </FormControl>
                <FormControl>
                    <FormLabel
                        sx={{
                            marginBottom: '16px',
                        }}
                        color='primary'
                    >
                        Mật khẩu :
                    </FormLabel>
                    <OutlinedInput
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {formik.errors.password && formik.touched.password &&
                        (<Typography variant="body1" color="error">{formik.errors.password}</Typography>)
                    }
                </FormControl>
                <Typography variant="body1" color="primary">
                    <Checkbox checked={checkBox} onChange={handleChecked} />
                    Remember me
                </Typography>
                <Button
                    type='submit'
                    sx={{
                        padding: '12px 20px',
                        fontSize: '18px'
                    }}
                    variant='outlined'>
                    Đăng nhập
                </Button>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Link>Quên mật khẩu?</Link>
                    <Link>Tạo tài khoản</Link>
                </Stack>
            </form>
        </Box>
    )
}

export default AuthLogin