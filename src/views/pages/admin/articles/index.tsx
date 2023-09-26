import { Box, TextField, InputAdornment, Button, TableContainer, TableHead, Link, Table, TableBody, TableRow, TableCell, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useMemo } from 'react';
import { getAllAticles } from '~/services/aticles';
import { createArticle, getListArticles } from '~/store/slice/articles';
import { useSelector } from '~/store/indexStore';
import { ArticlesItem } from '~/types/artilces';

const ArticlesAdmin = () => {
  const data = useSelector((state) => state.articles.articlesList);
  useEffect(() => {
    const init = async () => {
      await getListArticles({ params: 'dff' })();
    };

    init();
  }, [])

  const views: React.ReactNode | undefined = useMemo(() => {
    console.log(data);

    return data.map((articles: ArticlesItem, index) => {
      return (
        <TableRow key={index}>
          <TableCell align='center'>{articles.id}</TableCell>
          <TableCell align='center'>{String(articles.createDate)}</TableCell>
          <TableCell align='center'>{articles.title}</TableCell>
          <TableCell align='center'>{articles.slug || 'null'}</TableCell>
          <TableCell align='center'>{articles.img || 'null'}</TableCell>
          <TableCell align='center'>{articles.category && articles.category.title || 'null'}</TableCell>
          <TableCell align='center' sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant='contained'>Chỉnh sửa</Button>
            <Button variant='contained'>Xóa</Button>
          </TableCell>
        </TableRow>
      )
    })

  }, [data])


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
        <Button size='small' variant='contained' startIcon={<AddIcon />}>
          <Link href='/admin/create-articles' color='inherit' underline='none'>Thêm mới</Link>
        </Button>
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
              <TableCell align='center'>ID_ARTICLES</TableCell>
              <TableCell align='center'>CREATE_DATE</TableCell>
              <TableCell align='center'>TITLE_ARTICLES</TableCell>
              <TableCell align='center'>SLUG</TableCell>
              <TableCell align='center'>URL_IMG</TableCell>
              <TableCell align='center'>CATEGORY</TableCell>
              <TableCell align='center'>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {views}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ArticlesAdmin