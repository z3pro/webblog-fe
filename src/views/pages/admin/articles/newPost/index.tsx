import { Autocomplete, Box, Button, Chip, Grid, TextField, Typography, createFilterOptions, useTheme } from '@mui/material';
import blueGrey from '@mui/material/colors/blueGrey';
import { replace, useFormik } from 'formik';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useSelector } from '~/store/indexStore';
import { createArticle } from '~/store/slice/articles';
import { getListCategory } from '~/store/slice/category';
import { CategoryItem, TypeCategory } from '~/types/category';
import ReactQuillCustom from '~/ui-components/ReactQuillCustom';
import { converStringToSlug, removeVietnameseTones } from '~/utils/removeVietnames';

const CreateArticles = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const listCategory = useSelector(state => state.category.categories);
    useEffect(() => {
        const init = async () => {
            await getListCategory({})();
        }
        init();
    }, [])

    const formik = useFormik({
        initialValues: {
            title: "",
            category: {},
            slug: "",
            content: ""
        },
        validationSchema: Yup.object().shape({
            title: Yup.string()
                .required('Trường này không được bỏ trống!')
                .min(6, 'Tiêu đề quá ngắn,vui lòng nhập dài hơn!')
                .max(50, "Tối đa 20 kí tự, vui lòng chọn tiêu đề ngắn gọn!"),
            category: Yup.object()
                .required('Trường này không được bỏ trống'),
            content: Yup.string()
                .required('Vui lòng nhập nội dung bài viết!')
        }),
        onSubmit: async (values) => {
            await createArticle({ params: values })();
            navigate('/admin/manageArticles', { replace: true })
        }

    })
    useEffect(() => {
        const init = setTimeout(() => {
            const slug = converStringToSlug(formik.values.title);
            formik.setFieldValue('slug', slug);
        }, 800)
        return () => {
            clearTimeout(init);
        };
    }, [formik.values.title])
    const handleSetContent = (value: any) => {
        formik.setFieldValue('content', value);
    }
    const formContent = useMemo(() => {
        return (
            <ReactQuillCustom handleSetContent={handleSetContent} value={formik.values.content} />
        )
    }, [])
    const handleChangeCategory = (e: any, newValue: any) => {
        const category = listCategory.filter((data: CategoryItem) => data.title === newValue);
        formik.setFieldValue('category', category[0])
    }
    return (
        <Box sx={{ padding: 5 }}>
            <Box sx={{
                paddingBottom: ' 50px'
            }}>
                <Typography sx={{
                    display: 'inline-block',
                    padding: '4px',
                    borderBottom: `2px solid ${theme.palette.warning.main}`
                }} variant="h2" color="primary">Tạo bài viết mới</Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4} alignItems={'center'} >
                    <Grid item xs={10}>
                        <TextField name='title'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            id="outlined-basic" label="Tiêu đề"
                            variant="outlined" sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button sx={{
                            color: blueGrey[50]
                        }}
                            type='submit'
                            variant="contained">Tạo bài viết</Button>
                    </Grid>
                    <Grid item xs={12}>
                        {formik.errors.title && formik.touched.title
                            && (<Typography variant="body1" color="error">{formik.errors.title}</Typography>)
                        }
                    </Grid>
                    <Grid item xs={4} sx={{ paddingBottom: '10px' }}>
                        <Autocomplete
                            id="tags-outlined"
                            options={listCategory.map((option: TypeCategory) => option.title)}
                            renderTags={(value: readonly string[], getTagProps) =>
                                value.map((option: string, index: number) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField {...params} label="Chủ đề" placeholder="" />
                            )}
                            onChange={handleChangeCategory}
                        />
                        {formik.errors.category && formik.touched.category
                            && (<Typography sx={{ marginTop: '8px' }} variant="body1" color='error'>{String(formik.errors.category)}</Typography>)
                        }
                    </Grid>
                    <Grid item xs={12}>
                        {formik.errors.content && formik.touched.content
                            && (<Typography sx={{ marginBottom: '8px' }} variant="body1" color="error">{formik.errors.content}</Typography>)
                        }
                        {formContent}
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default CreateArticles

function toLowerCase(title: string) {
    throw new Error('Function not implemented.');
}
