import React from 'react';
import noData from '../../../assets/no.png'
import './EmptyList.css';

const EmptyList = () => (
    <div className='emptyList-wrap'>
        <img src={noData} alt='empty' />
    </div>
);

export default EmptyList;