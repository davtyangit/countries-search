import React from 'react'
import { Link } from 'react-router-dom'
import { Chip } from '../../../commmon/chip/Chip'
import './BlogItem.css'

export const BlogItem = (
    {
        blog: {
            id,
            name,
            continent,
            description,
            authorName,
            authorAvatar,
            createdAt,
            cover
        }
    }) => {

    return (
        <div className='blogItem-wrap'>
            <img src={cover} alt="cover" className='blogItem-cover' />
            <Chip label={continent} />
            <h3>{name}</h3>
            <p className='blogItem-desc'>{description}</p>

            <footer>
                <div className="blogItem-author">
                    <img src={authorAvatar} alt="avatar" />
                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link className='blogItem-link' to={`/blog/${id}`}>→</Link>
            </footer>
        </div>
    )
}
