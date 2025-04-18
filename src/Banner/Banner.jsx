import React from 'react';

const Banner = () => {
    return (
        <div className="bg-gray-100  rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 px-16 mt-6">
          {/* Text Content */}
          <div className="text-center md:text-left ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Books to freshen up <br /> your bookshelf
            </h2>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition">
              View The List
            </button>
          </div>
    
          {/* Book Image */}
          <img
            src="https://i.ibb.co.com/d0TfXw7n/pngwing-1.png"
            alt="The Dating Playbook for Men"
            className="w-40 md:w-52 object-contain"
          />
        </div>
      );
};

export default Banner;