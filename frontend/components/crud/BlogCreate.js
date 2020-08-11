import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { getCookie, isAuth } from '../../actions/auth'
import { getCategories } from '../../actions/category'
import { getTags } from '../../actions/tag'
import { createBlog } from '../../actions/blog'
import { QuilsFormats, QuilsModules } from '../../helpers/quils'
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

    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])

    const [checked, setChecked] = useState([])  ///categories
    const [checkedTag, setCheckedTag] = useState([]) ///tags

    const { error, sizeError, success, formData, title, hidePublushButton } = values
    const token = getCookie('token')


    useEffect(() => {
        setValues({ ...values, formData: new FormData() })
        initCategories();
        initTags()

    }, [router])



    const initCategories = () => {
        getCategories().then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setCategories(data)
            }
        })
    }

    const initTags = () => {
        getTags().then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setTags(data)
            }
        })
    }





    const publishBlog = (e) => {
        e.preventDefault()
        createBlog(formData, token).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, error: '', success: `A new blog titled "${data.title}" is created` })
                setBody('');
                setCategories([]);
                setTags([])

            }

        })

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

    const handleToggle = (c) => () => {
        setValues({ ...values, error: '' })
        /// return the first index of -1

        const clickedCategory = checked.indexOf(c)
        const all = [...checked]
        if (clickedCategory === -1) {
            all.push(c)
        } else {
            all.splice(clickedCategory, 1)
        }

        console.log(all)
        setChecked(all)
        formData.set('categories', all)


    }


    const handleTagToggle = (t) => () => {
        setValues({ ...values, error: '' })
        /// return the first index of -1

        const clickedChekdTags = tags.indexOf(t)
        const all = [...checked]
        if (clickedChekdTags === -1) {
            all.push(t)
        } else {
            all.splice(clickedChekdTags, 1)
        }

        console.log(all)
        setChecked(all)
        formData.set('tags', all)


    }



    const showCategories = () => {
        return (
            categories && categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input type="checkbox" className="mr-2" onChange={handleToggle(c._id)} />
                    <label className="form-check-label"> {c.name} </label>

                </li>
            ))
        )
    }



    const showTags = () => {
        return (
            tags && tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input type="checkbox" className="mr-2" onChange={handleTagToggle(t._id)} />
                    <label className="form-check-label"> {t.name} </label>

                </li>
            ))
        )


    }

    const showError = () => (
        <div className="alert  alert-danger" style={{ display: error ? '' : 'none' }} > {error}</div>
    )

    const showSuccess = () => (
        <div className="alert  alert-success" style={{ display: success ? '' : 'none' }} > {success}</div>
    )




    const createBlogForm = () => {


        return (

            <form onSubmit={publishBlog}>
                <div className="form-group">

                    <label className="text-muted">title</label>
                    <input type="text" className="form-control" value={title} onChange={handelChange('title')} />
                </div>

                <div className="form-group">
                    <ReactQuill modules={QuilsModules} formats={QuilsFormats} value={body} onChange={handleBody} placeholder="write something amazing" />

                </div>

                <div>
                    <button className="btn btn-info">publish</button>
                </div>

            </form>
        )
    }



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">

                    {showError()}
                    {showSuccess()}
                    {createBlogForm()}


                </div>

                <div className="col-md-4">


                    <h5>Categories</h5>
                    <ul style={{ maxHeight: '100px', overflowY: 'scroll' }}>
                        {showCategories()}
                    </ul>


                    <hr />
                    <h5>Tags</h5>

                    <ul style={{ maxHeight: '100px', overflowY: 'scroll' }}>
                        {showTags()}
                    </ul>



                    <div className="form-group pb-2">

                        <h5>Featured image</h5>

                        <hr />
                        <small className="text-muted"> Maximum size : 1mb</small>

                        <label className="btn btn-outline-warning"> upload featured image
<input type="file" accept="image/*" onChange={handelChange('photo')} hidden />
                        </label>

                    </div>

                </div>



            </div>



        </div>




    )
}





export default withRouter(CreateBlog)
