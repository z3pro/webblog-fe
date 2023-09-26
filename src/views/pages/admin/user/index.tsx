import React from 'react';
import {
    Box, TableContainer, Paper, Table,
    TableHead, TableBody, TableRow, TableCell, Button, useTheme, TextField,
    InputAdornment, IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Brightness1Icon from '@mui/icons-material/Brightness1';

const UserAdmin = () => {
    const theme = useTheme();
  return (
      <Box
          sx={{
              padding: 5
          }}
      >
          <Box sx={{
              display: 'flex',

          }}>
              <Box sx={{flex : 1}}></Box>
              <TextField
                  sx={{ width: '300px'}}
                  placeholder='Tìm kiếm user ...'
                  InputProps={{
                      startAdornment: (
                          <InputAdornment position="start">
                              <SearchIcon />
                          </InputAdornment>
                      ),
                  }}
              />
          </Box>
          <TableContainer component={Paper}
              sx={{
                  marginTop: 4,
                  border: '1px solid #ccc'
              }}
          >
              <Table sx={{ width: '100%' }} aria-aria-describedby='simple table'>
                  <TableHead>
                      <TableRow>
                          <TableCell align='center'>FULL NAME</TableCell>
                          <TableCell align='center'>STATUS</TableCell>
                          <TableCell align='center'>EMAIL</TableCell>
                          <TableCell align='center'> USER ID</TableCell>
                          <TableCell align='center'>XEM CHI TIẾT</TableCell>
                          <TableCell align='center'>HÀNH ĐỘNG</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody >
                      <TableRow>
                          <TableCell sx={{ borderBottom: 'none' }} align='center'>Nguyễn Tiến Đạt</TableCell>
                          <TableCell sx={{ borderBottom: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }} align='center'><Brightness1Icon fontSize='small' color='success' />Active</TableCell>
                          <TableCell sx={{ borderBottom: 'none' }} align='center'>dn26072003@gmail.com</TableCell>
                          <TableCell sx={{ borderBottom: 'none' }} align='center'>IUDLWI54</TableCell>
                          <TableCell sx={{ borderBottom: 'none' }} align='center'>
                              <Button variant='contained' sx={{ color: theme.palette.text.primary }}>
                                  Xem chi tiết
                              </Button>
                          </TableCell>
                          <TableCell sx={{ borderBottom: 'none' }} align='center'>
                              <Button variant='contained' sx={{ color: theme.palette.text.primary }}>
                                  Khóa
                              </Button>
                          </TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell align='center'>Nguyễn Tiến Đạt</TableCell>
                          <TableCell align='center'>Active</TableCell>
                          <TableCell align='center'>dn26072003@gmail.com</TableCell>
                          <TableCell align='center'>IUDLWI54</TableCell>
                          <TableCell align='center'>
                              <Button variant='contained' sx={{ color: theme.palette.text.primary }}>
                                  Xem chi tiết
                              </Button>
                          </TableCell>
                          <TableCell align='center'>
                              <Button variant='contained' sx={{ color: theme.palette.text.primary }}>
                                  Khóa
                              </Button>
                          </TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
      </Box>
  )
}

export default UserAdmin