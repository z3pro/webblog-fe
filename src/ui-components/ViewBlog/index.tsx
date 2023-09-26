import { Box } from '@mui/material'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import HeaderView from './HeaderView';
import FooterView from './FooterView';

const ViewBlog = (props: any ) => {
    const [val, setVal] = useState('<p class="ql-align-center">fdshfjklfkjdsfdskflkdsjflkdsfdsff</p><p class="ql-align-justify">fsgfkjhdsflkdshf</p><p class="ql-align-justify">sjflkdsfjdslf</p><p class="ql-align-justify">sfdjskjflkdsjf</p><p class="ql-align-justify">sfjlkdsflksjfldsflksjflk</p><p class="ql-align-justify">jfdlkjsklfjdsfj</p>');
    return (
        <Box sx={{
            maxHeight: 'calc(100vh - 120px )',
            overflowY: 'auto'
        }} >
            <HeaderView/>
            <ReactQuill modules={{ toolbar: false }} value={val} readOnly={true} theme='snow' className='custom-quill' />
            <FooterView/>
        </Box>
    )
}

export default ViewBlog