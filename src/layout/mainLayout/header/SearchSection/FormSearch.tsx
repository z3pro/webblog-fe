import { InputBase, alpha, styled, TextField, Box, Popper, Paper, MenuList, MenuItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useRef } from "react";
// styled search
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.light, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border: '2px solid transparent',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 300,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    padding: 4,
    bordeRadius: 8,
    '&:focus-within': {
        border: '2px solid #ccc'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    // pointerEvents: 'none',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 0,
    color: theme.palette.primary.light,
    cursor: "pointer",
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.25),

    }
}));
// styled input
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));
const FormSearch = () => {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const anchorEl = useRef<HTMLDivElement>(null);
    const el = anchorEl.current as HTMLElement;
    const handleInput = (e: any) => {
        setValue(e.target.value)
    }
    return (
        <Box>
            <Search
                aria-aria-describedby='form-search'
                ref={anchorEl}
            >
                <StyledInputBase
                    placeholder="Tìm kiếm bài viết…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={value}
                    onChange={handleInput}
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
            </Search>
            <Popper id='form-search' anchorEl={anchorEl.current} placement="bottom" open={value !== ""} disablePortal>
                <Paper sx={{
                    width: el ? el.clientWidth : '',
                    backgroundColor: '#888',
                }}>
                    <MenuList>
                        <MenuItem>
                            kk
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Popper>
        </Box>
    )
}

export default FormSearch;