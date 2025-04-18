import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { LocalStrogeSet } from '../utility/Localstrorage';

const BookDetails = () => {
    const Parems = useParams()
    const StringParems = Parems.ID
    const ConvertParems = parseInt(Parems.ID);
    const BookList = useLoaderData()
    const SelectedBook = BookList.find(OneBok => OneBok.bookId === ConvertParems)
    console.log(ConvertParems)
    const { bookName, rating, author, category, image, review, totalPages, tags, publisher, yearOfPublishing } = SelectedBook
    const HandelStrorageAdd = (id) => {
        LocalStrogeSet(id)

    }

    return (
        <div className="flex flex-col my-6 md:flex-row bg-white rounded-xl shadow-lg p-6 gap-6 max-w-5xl mx-auto">
            {/* Book Image */}
            <div className="flex-shrink-0">
                <img
                    src={image} // Replace with your image
                    alt="Book cover"
                    className="w-48 h-auto rounded-md shadow-md"
                />
            </div>

            {/* Book Info */}
            <div className="flex flex-col justify-between text-gray-800">
                <div>
                    <h1 className="text-2xl font-bold mb-1">{bookName}</h1>
                    <p className="text-sm text-gray-500 mb-4">By : {author}</p>
                    <p className="text-gray-700 font-medium mb-2">{category}</p>

                    <p className="text-sm text-gray-600 mb-4">
                        <span className="font-semibold">Review :</span> {review}
                    </p>

                    {/* Tags */}
                    {
                        tags.map(onetag => <div className="flex gap-2 mb-4">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                #{onetag}
                            </span>
                        </div>)
                    }

                    {/* Details */}
                    <ul className="text-sm space-y-1 mb-4">
                        <li><span className="font-semibold">Number of Pages:</span> {totalPages}</li>
                        <li><span className="font-semibold">Publisher:</span> {publisher}</li>
                        <li><span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}</li>
                        <li><span className="font-semibold">Rating:</span> {rating}</li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button onClick={() => HandelStrorageAdd(StringParems)} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                        Mark As Read
                    </button>
                    <Link to={"/BooKDeatils/Wishlist"}>
                    <button className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                        Wishlist
                    </button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default BookDetails;