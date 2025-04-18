import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const OneBook = ({Book}) => {
    
const {image,bookName,author,category,rating,bookId }=Book
    return (
       <Link to={`BooKDeatils/${bookId}`}>
        <div className="hover:bg-green-200 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
        {/* Book Image */}
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt="The Hate U Give"
            className="w-28 h-40 object-cover"
          />
        </div>
  
        {/* Tags */}
        <div className="flex gap-2 mb-2">
          <span className="text-xs bg-green-100 text-green-600 font-medium px-3 py-1 rounded-full">Young Adult</span>
          <span className="text-xs bg-green-100 text-green-600 font-medium px-3 py-1 rounded-full">Identity</span>
        </div>
  
        {/* Book Info */}
        <h3 className="text-lg font-semibold text-gray-900">{bookName}</h3>
        <p className="text-sm text-gray-500">{author} </p>
  
        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-4 pt-2 border-t">
          <span className="text-sm text-gray-600">{category}</span>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-800 font-medium">{rating} </span>
            <Star className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
       </Link>
    );
};

export default OneBook;