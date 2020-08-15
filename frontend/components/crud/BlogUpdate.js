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


const BlogUpdate = () => {


    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    <p>Create Blog form</p>
                    <div className="pt-3">
                        show success and error
                    </div>


                </div>

                <div className="col-md-4">





                    <div className="form-group pb-2">

                        <h5>Featured image</h5>




                    </div>

                </div>



            </div>



        </div>




    )

}


export default BlogUpdate;