import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Switch } from '@mui/material';
import { ConfigContext } from '~/contexts/ConfigContext';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const provider = React.useContext(ConfigContext);
    const handleTheme = (e:any) => {
        e.preventDefault();
        provider.navType === 'light' ? provider.onChangeMenuType('dark') : provider.onChangeMenuType('light');
    }
    const handleCreateBlog = () => {
        navigate('/new-post');
    }
    const handleMyposts = () => {
        navigate('/user/posts');
    }
    const handleProfile = () => {
        setAnchorEl(null);
        navigate('/user/profile');
    }
    const handleSetting = () => {
        setAnchorEl(null);
        navigate('/setting');
    }
    const handleLogout = () => {
        logout()
    }
    return (
        <div >
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                disableAutoFocus= {true}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        minWidth: '200px',
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleProfile}>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCreateBlog}>
                    <Avatar /> Viết blog
                </MenuItem>
                <MenuItem onClick={handleMyposts}>
                    <Avatar /> Bài viết của tôi
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleTheme} >
                    <Switch
                        checked={provider.navType === 'dark'}
                        onClick={handleTheme}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                            marginLeft: '-12px',
                        }}
                    /> Theme
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSetting}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
}