import React, { useRef, useState } from 'react';
import { Autocomplete, Box, Collapse, List, ListItem, TextField, CircularProgress,Popper,Paper } from '@mui/material';
import FormSearch from './FormSearch';


const SearchSection = () => {
    const anchorEl = useRef<HTMLElement>(null);
    return (
            <FormSearch  />
            
    );
}

export default SearchSection