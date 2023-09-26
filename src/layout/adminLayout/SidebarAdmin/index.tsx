import React, { useState, useRef, useEffect } from 'react';
import {
    Box, Drawer, List, ListItem, ListItemButton,
    ListItemText, Tooltip, Link, Divider, Popper, Paper, MenuList, MenuItem
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import ArticleIcon from '@mui/icons-material/Article';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { log } from 'console';
import { useNavigate } from 'react-router-dom';

const drawerWidthFull = 220;
const drawerWitdthMini = 60;
const buttons = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        slug: '/admin/dashboard'
    },
    {
        title: 'Quản lý người dùng',
        icon: <ManageAccountsIcon />,
        slug: '/admin/manageAccounts'
    },
    {
        title: 'Quản lý danh mục',
        icon: <CategoryIcon />,
        slug: '/admin/manageCategory'
    },
    {
        title: "Quản lý bài viết",
        icon: <ArticleIcon />,
        slug: '/admin/manageArticles'
    }

]
const SidebarAdmin = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [openMiniBlog, setOpenMiniBlog] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handleOpenBlog = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
        setOpenMiniBlog(pre => !pre);

    }
    const handleChangeOpen = () => {
        setOpen(pre => !pre);
        setOpenMiniBlog(false);
    }
    return (
        <Drawer
            sx={{
                width: open ? drawerWidthFull : drawerWitdthMini,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 'auto',
                    top: '65px',
                    transition: 'all .4s'
                },
            }}
            variant="permanent" open={open}>
            <Box>
                <List>
                    {
                        buttons.map((button, index) => (
                            <Link key={index} href={button.slug} color='primary' underline='none'>
                                <ListItem disablePadding sx={{ display: 'block' }} >
                                    <Tooltip title={open ? '' : button.title} placement='right-end'>
                                        <ListItemButton sx={{
                                            gap: open ? 3 : 0,
                                            minHeight: '50px'
                                        }}>
                                            {button.icon}
                                            <ListItemText sx={{
                                                display: open ? 'inline-block' : 'none'
                                            }}>
                                                {button.title}
                                            </ListItemText>
                                        </ListItemButton>
                                    </Tooltip>
                                </ListItem>
                            </Link>
                        ))
                    }
                    <ListItem disablePadding sx={{ display: 'block' }}
                        aria-describedby='menu-blog'
                        onClick={handleOpenBlog}
                    >
                        <Tooltip title={!openMiniBlog && !open ? 'Quản trị blog' : ''} placement='right-end' >
                            <ListItemButton sx={{
                                gap: open ? 3 : 0,
                                minHeight: '50px'
                            }}

                            >
                                <TextSnippetIcon />
                                <ListItemText sx={{
                                    display: open ? 'inline-block' : 'none'
                                }}>
                                    Quản lý blog
                                </ListItemText>
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                    <Popper 
                        id='menu-blog' anchorEl={anchorEl} placement="right-start"
                        open={openMiniBlog && !open} defaultChecked
                    >
                        <Paper sx={{
                            width: '200px',
                            marginTop : 2,
                            marginLeft: 1,
                            border: '1px solid #ccc',
                            padding : '8px 0'
                        }}>
                            <MenuList>
                               <Link href= '/admin/active-blog' color= 'inherit' underline='none'>
                                    <MenuItem >
                                        Duyệt bài viết
                                    </MenuItem>
                               </Link>
                                <Link href = '/admin/manageBlog' color= "inherit" underline='none'>
                                    <MenuItem>
                                        Bài viết và tác giả
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Paper>
                    </Popper>
                    <Divider />
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={handleChangeOpen}>
                        <ListItemButton sx={{
                            gap: open ? 3 : 0,
                            minHeight: '50px'
                        }}>
                            {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
                            <ListItemText sx={{
                                display: open ? 'inline-block' : 'none'
                            }}>
                                Thu gọn thanh bên
                            </ListItemText>
                        </ListItemButton>

                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export default SidebarAdmin;