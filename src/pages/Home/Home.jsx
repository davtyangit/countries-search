import React, { useState } from 'react'
import { BlogList } from '../../components/Home/blog-list/BlogList'
import { Header } from '../../components/Home/header/Header'
import { SearchBar } from '../../components/Home/search-bar/SearchBar'
import { blogList } from '../../config'
import EmptyList from '../../components/commmon/empty-list/EmptyList'

export const Home = () => {

    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.continent.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
            blog.name.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

    return (
        <div>
            <Header />
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />

            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
    )
}
