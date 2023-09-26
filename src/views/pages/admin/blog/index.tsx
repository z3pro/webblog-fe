import React from 'react';
import { Box, TextField, InputAdornment, Button, TableContainer, TableHead, Table, TableBody, TableRow, TableCell, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const BlogAdmin = () => {
  return (
    <Box sx={{
      padding: 5
    }}>
      <Box sx={{
        display: 'flex',
        gap: 2,
        padding: '10px 0',
        maxHeight: '60px'
      }}>
        <Box sx={{ flex: 1 }}></Box>
        <TextField
          size='small'
          sx={{ width: '300px' }}
          placeholder='Tìm kiếm bài viết ...'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: 4,
          border: '1px solid #ccc'
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID_BLOG</TableCell>
              <TableCell align='center'>CREATE_DATE</TableCell>
              <TableCell align='center'>TITLE_BLOG</TableCell>
              <TableCell align='center'>SLUG</TableCell>
              <TableCell align='center'>URL_IMG</TableCell>
              <TableCell align='center'>AUTH</TableCell>
              <TableCell align='center'>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center'>1</TableCell>
              <TableCell align='center'>23-08-2023</TableCell>
              <TableCell align='center'>Java không khó</TableCell>
              <TableCell align='center'>java-khong-kho</TableCell>
              <TableCell align='center'>java-khong-kho</TableCell>
              <TableCell align='center'>null</TableCell>
              <TableCell align='center' sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button variant='contained'>Xem</Button>
                <Button variant='contained'>Xóa</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default BlogAdmin