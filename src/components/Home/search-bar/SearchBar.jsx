import React from 'react'
import './SearchBar.css'

export const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => {
    return (
        <div className='searchBar-wrap'>
            <form onSubmit={formSubmit}>
                <input
                    type='text'
                    placeholder='Search continent / name'
                    value={value}
                    onChange={handleSearchKey}
                />
                {value && <span onClick={clearSearch}>X</span>}
                <button>Go</button>
            </form>
        </div>
    )
}
