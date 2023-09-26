import { Box, Button, Chip, Grid, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import QuillResizeImage from 'quill-resize-image';
import { blueGrey } from '@mui/material/colors';

import { AxiosResponse } from 'axios';
import * as React from 'react';
import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadFile } from '~/services/uploadfile';


const ReactQuillCustom = ({ handleSetContent, value}: any) => {
    const quillRef = React.useRef<any>(null);

    const imageHandler = async () => {
        const input = document.createElement('input');

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            var file: any = input && input.files ? input.files[0] : null;
            var formData = new FormData();
            formData.append("file", file);
            let quillObj = quillRef.current.getEditor();

            await uploadFile(formData)
                .then((res) => {

                    // let data = get(res, "data.data.link_file");                    
                    const range = quillObj.getSelection();
                    quillObj.editor.insertEmbed(range.index, 'image', res.data?.link_file);
                })
                .catch((err) => {
                    console.log(err);

                    console.log("This is an error message");
                    return false;
                });


        };
    }
    Quill.register("modules/resize", QuillResizeImage);
    const modules = React.useMemo(() => ({
        resize: {
            locale: {},
        },
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ size: ["small", false, "large", "huge"] }],
                [{ font: [] }],
                [{ align: ["right", "center", "justify"] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", 'video', 'code-block'],
                [{
                    color: ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc',
                        '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2',
                        '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466']
                }],
                [{
                    background: ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc',
                        '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb',
                        '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00',
                        '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466']
                }],
            ],
            'handlers': {
                image: imageHandler
            }
        },
        clipboard: {
            matchVisual: false,
        },
        // imageResize: {
        //     parchment: Quill.import('parchment'),
        //     modules: ['Resize', 'DisplaySize']
        // }
    }), []);
    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "align",
        "strike",
        "script",
        "blockquote",
        "background",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        'video',
        "code-block",
        "color",
    ];
    const handleProcedureContentChange = (content: any, delta: any, source: any, editor: any) => {
        handleSetContent(content);
    };
   
    return (
        <ReactQuill
            ref={quillRef}
            theme='snow'
            modules={modules}
            formats={formats}
            value={value} onChange={handleProcedureContentChange} />
    )  
}
export default ReactQuillCustom;