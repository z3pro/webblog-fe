import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { blueGrey } from '@mui/material/colors';

import { AxiosResponse } from 'axios';
import 'react-quill/dist/quill.snow.css';
import ReactQuillCustom from '~/ui-components/ReactQuillCustom';

const tag = [
    { label: 'Java' },
    { label: 'Javascript' },
    { label: 'Spring boot' },
    { label: 'Reactjs' },
]
const NewPost = () => {
    
    return (
        <Box sx={{ padding: '20px 0' }}>
            
            <Grid container spacing={2} alignItems={'center'} >
                <Grid item xs={10}>
                    <TextField id="outlined-basic" label="Tiêu đề" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={2}>
                    <Button sx={{
                        color: blueGrey[50]
                    }} variant="contained">Tạo bài viết</Button>
                </Grid>
                <Grid item xs={4} sx={{ paddingBottom: '10px' }}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={tag.map((option) => option.label)}
                        renderTags={(value: readonly string[], getTagProps) =>
                            value.map((option: string, index: number) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField {...params} label="Tag" placeholder="" />
                        )}
                    />
                </Grid>
            </Grid>
            <ReactQuillCustom />
        </Box>
    )
}

export default NewPost

function get(res: AxiosResponse<any, any>, arg1: string) {
    throw new Error('Function not implemented.');
}
