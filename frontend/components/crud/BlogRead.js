import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'


import { getCookie, isAuth } from '../../actions/auth'

import { list, removeBlog } from '../../actions/blog'



const BlogRead = () => {
    return (
        <React.Fragment>
            <p>Update Delet Blogs</p>


        </React.Fragment>
    )


}

export default BlogRead;