import { useEffect, useState, useMemo } from 'react';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useSelector } from '~/store/indexStore';
import { deleteCategory, getListCategory } from '~/store/slice/category';
import { CategoryItem } from '~/types/category';
import ModalCategoryAdmin from '~/ui-components/ModalCustom/ModalCategoryAdmin';

const CategoryAdmin = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [values, setValues] = useState<CategoryItem | undefined>({});
  const data = useSelector((state) => state.category.categories);
  const handleEdit = (value: CategoryItem) => {
    setOpenModal(true);
    setValues(value);
  }
  const handleAddCategory = () => {
    setValues(undefined);
    setOpenModal(true);
  }
  const handleCloseModal = () => {
    setOpenModal(false);
    setValues({});
  }
  const handleDelete = async (id: any) => {
    await deleteCategory({ id })();
    await getListCategory({})();

  }
  const result: React.ReactNode = useMemo(() => {
    return data.map((value: CategoryItem, index) => {
      return (
        <TableRow key={index}>
          <TableCell align='center'>
            <>{value.id || 'null'}</>
          </TableCell>
          <TableCell align='center'>
            <>{value.createDate || 'null'}</>
          </TableCell>
          <TableCell align='center'>{value.title}</TableCell>
          <TableCell align='center'>
            <>{value.slug || 'null'}</>
          </TableCell>
          <TableCell align='center' sx={{ padding: 0 }}>
            <>{value.img ? (<img src={value.img} style={{ width: '50px' }} />) : 'null'}</>
          </TableCell>
          <TableCell align='center' sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant='contained' onClick={() => handleEdit(value)}>Chỉnh sửa</Button>
            <Button variant='contained' onClick={() => handleDelete(value.id)}>Xóa</Button>
          </TableCell>
        </TableRow>
      )
    })
  }, [data])
  useEffect(() => {
    const getData = getListCategory({ params: '' });
    getData();
  }, [])
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
        <Button size='small' variant='contained' startIcon={<AddIcon />} onClick={handleAddCategory}>Thêm mới</Button>
        <TextField
          size='small'
          sx={{ width: '300px' }}
          placeholder='Tìm kiếm danh mục ...'
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
              <TableCell align='center'>ID_CATEGORY</TableCell>
              <TableCell align='center'>CREATE_DATE</TableCell>
              <TableCell align='center'>TITLE_CATEGORY</TableCell>
              <TableCell align='center'>SLUG</TableCell>
              <TableCell align='center'>URL_IMG</TableCell>
              <TableCell align='center'>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalCategoryAdmin openModal={openModal} data={values} handleClose={handleCloseModal} />
    </Box>
  )
}

export default CategoryAdmin;