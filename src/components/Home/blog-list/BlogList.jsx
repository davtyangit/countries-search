import React from 'react'
import { BlogItem } from './blog-item/BlogItem'
import "./BlogList.css"

export const BlogList = ({ blogs }) => {
    return (
        <div className='blogList-wrap'>
            {blogs?.map((blog) => {
                return <BlogItem blog={blog} key={blog.id} />
            })}
        </div>
    )
}
