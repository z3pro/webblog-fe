import React, { useEffect } from 'react';
import { Button, Menu, MenuItem, useTheme, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { getListCategory } from '~/store/slice/category';
import { useSelector } from '~/store/indexStore';
import { CategoryItem } from '~/types/category';

const listTopic = [
    { title: 'Java', slug: '/java' },
    { title: 'Javascript', slug: '/javascript' },
    { title: 'Php', slug: '/php' },
    { title: 'Laravel', slug: '/laravel' }
]
const ButtonTopicHeader = () => {
    const theme = useTheme();
    const listCategory: CategoryItem[] = useSelector(state => state.category.categories);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        const init = async () => {
            await getListCategory({})();
        }
        init();
    }, [])
    return (
        <Box key={'topic'}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: theme.palette.text.primary, display: 'flex' }}
                endIcon={<ExpandMoreIcon />}
            >
                Chủ đề
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {listCategory.map((category, index) => (
                    <Link to={`/topic/view/${category.slug}`} style={{ textDecoration: 'none' }}>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                padding: '8px 30px',
                                color: theme.palette.text.primary
                            }}
                            key={index}
                        >
                            {category.title}
                        </MenuItem>
                    </Link>
                ))}

            </Menu>
        </Box>
    )
}

export default ButtonTopicHeader