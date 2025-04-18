import React from 'react';
import { useLoaderData } from 'react-router';
import OneBook from './OneBook';

const Home = () => {
    const BookData = useLoaderData()
    return (
        <div className='my-10 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            {
                BookData.map(Book => <OneBook key={Book.bookId} Book={Book}></OneBook>)
            }
            </div>
        </div>
    );
};

export default Home;