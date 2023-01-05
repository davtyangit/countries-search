import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogList } from '../../config'
import EmptyList from '../../components/commmon/empty-list/EmptyList'
import './Blog.css'

export const Blog = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === +id)
        blog && setBlog(blog)
    }, [])

    return (
        <>
            <Link to='/' className='blog-link'>
                <span>&#8592;</span> Go back
            </Link>
            {
                blog ? (
                    <div className='blog-wrap'>
                        <header>
                            <h1>{blog.name}</h1>
                            <p>{blog.continent}</p>

                            <p className='blog-date'>Published {blog.createdAt}</p>
                        </header>
                        <img src={blog.cover} width="100px" height="200px" alt='cover' />
                        <p className='blog-desc'>{blog.description}</p>
                    </div>
                ) : (
                    <EmptyList />
                )
            }
        </>
    )
}
