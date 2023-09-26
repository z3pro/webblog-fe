import { Modal, Box, IconButton, FormControl, InputLabel, TextField, useTheme, FormLabel, Button, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState, useMemo, useContext } from 'react';
import { setIn, useFormik } from 'formik';
import * as Yup from 'yup';
import { CategoryItem } from '~/types/category';
import { createCategory, getListCategory, updateCategory } from '~/store/slice/category';
import { ConfigContext } from '~/contexts/ConfigContext';
import { uploadFile } from '~/services/uploadfile';
type Props = {
  openModal: boolean,
  handleClose: () => void,
  data?: CategoryItem | undefined
}

const style = {
  position: 'absolute' as 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  width: '50%',
  minHeight: '200px',
}
const ModalCategoryAdmin = ({ openModal, handleClose, data }: Props) => {
  const theme = useTheme();
  const context = useContext(ConfigContext);

  const formik: any = useFormik({
    initialValues: {
      id: "",
      title: "",
      slug: "",
      img: ""
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required('Trường này không được bỏ trống!')
        .min(4, 'Trường này tối thiểu 4 kí tự!')
        .max(20, 'Trường này tối đa 20 kí tự,vui lòng nhập ngắn gọn!'),
      slug: Yup.string()
        .required('Trường này không được bỏ trống!')
        .min(6, 'Vui lòng nhập đường dẫn tối thiểu 6 kí tự và hợp lí!')
        .max(30, 'Đường dẫn quá dài vui lòng chọn đường dẫn hợp lí hơn!')
    }),
    onSubmit: async (values) => {
      if (data) {
        await updateCategory({ params: values })();
      } else {
        await createCategory({ params: values })();
      }
      await getListCategory({})();
      handleClose();
    }
  })
  const handleOnchangeInputImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const file = input && input.files ? input.files[0] : null;
    const formData = new FormData();
    if (!!file) {
      formData.append('file', file);
      try {
        await uploadFile(formData)
          .then(res => {
            const data = res.data;
            formik.setFieldValue("img", data.link_file);
          })
      } catch (error) {
        console.log(error);

      }
    }

  }
  useEffect(() => {
    if (!!data) {
      formik.setFieldValue("id", data.id);
      formik.setFieldValue("title", data.title);
      formik.setFieldValue("slug", data.slug);
      formik.setFieldValue("img", data.img);
    }
  }, [data])

  return (
    <Modal open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        ...style,
        background: theme.palette.background.default,
        boxShadow: theme.shadows[12],
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: `${context.borderRadius}px`
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton onClick={handleClose}>
            <ClearIcon />
          </IconButton>
        </Box>
        <Box sx={{
          padding: 4,
        }}>
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '16px'
            }}>
            {
              data && (
                <FormControl fullWidth>
                  <FormLabel sx={{ padding: '0 0 16px 16px', fontSize: '16px' }} color='primary'>Id:</FormLabel>
                  <TextField
                    name='id'
                    disabled
                    value={formik.values.id}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              )
            }
            <FormControl fullWidth>
              <FormLabel sx={{ padding: '0 0 16px 16px', fontSize: '16px' }} color='primary'>Title:</FormLabel>
              <TextField
                name='title'
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              {formik.errors.title && formik.touched.title &&
                (<Typography sx={{ marginTop: 1 }} variant="body1" color="error">{formik.errors.title}</Typography>)}
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ padding: '0 0 16px 16px', fontSize: '16px' }} color='primary'>Slug:</FormLabel>
              <TextField
                name='slug'
                value={formik.values.slug}
                onChange={formik.handleChange}
              />
              {formik.errors.slug && formik.touched.slug &&
                (<Typography sx={{ marginTop: 1 }} variant="body1" color="error">{formik.errors.slug}</Typography>)}
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ padding: '0 0 16px 16px', fontSize: '16px' }} color='primary'>Img:</FormLabel>
              <TextField
                name='img'
                type='file'
                // value={formik.values.img}
                onChange={handleOnchangeInputImg}
              />
            </FormControl>
            {formik.values.img && <img style={{ width: '120px', objectFit: 'cover' }} src={formik.values.img} />}
            <Box sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row-reverse',
              marginTop: '20px'
            }}>
              <Button variant='contained' size='medium' type='submit'>
                {data ? "Update" : "Create"}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal >
  )
}

export default ModalCategoryAdmin;