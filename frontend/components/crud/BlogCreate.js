import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { getCookie, isAuth } from '../../actions/auth'
import { getCategories } from '../../actions/category'
import { getTags } from '../../actions/tag'
import { createBlog } from '../../actions/blog'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })



const CreateBlog = ({ router }) => {

    const blogFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('blog')) {
            return JSON.parse(localStorage.getItem('blog'));
        } else {
            return false;
        }
    };


    const [body, setBody] = useState(blogFromLS())

    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        hidePublushButton: false
    })

    const { error, sizeError, success, formData, title, hidePublushButton } = values

    useEffect(() => {
        setValues({ ...values, formData: new FormData() })

    }, [router])


    const publishBlog = (e) => {
        e.preventDefault()


    }

    const handelChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({ ...value, formData, error: '', [name]: value })
    }
    const handleBody = e => {
        // console.log(e);
        setBody(e);
        formData.set('body', e);
        if (typeof window !== 'undefined') {
            localStorage.setItem('blog', JSON.stringify(e));
        }
    };




    const createBlogForm = () => {


        return (

            <form onSubmit={publishBlog}>
                <div className="form-group">

                    <label className="text-muted">title</label>
                    <input type="text" className="form-control" value={title} onChange={handelChange('title')} />
                </div>

                <div className="form-group">
                    <ReactQuill modules={CreateBlog.modules} formats={CreateBlog.formats} value={body} onChange={handleBody} placeholder="write something amazing" />

                </div>

                <div>
                    <button className="btn btn-info">publish</button>
                </div>

            </form>
        )
    }




    return (
        <div>
            {createBlogForm()}
            <hr />
            {JSON.stringify(title)}
            <hr />
            {JSON.stringify(body)}

        </div>




    )
}


CreateBlog.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
};

CreateBlog.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
];


export default withRouter(CreateBlog)
