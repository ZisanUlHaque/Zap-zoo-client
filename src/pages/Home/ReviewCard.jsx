import React from 'react';
import { BiStar } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { ratings, userName, review: testimonial, user_photoURL } = review;
    return (
        <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200">
            {/* Quote Icon */}
            <FaQuoteLeft className="text-primary text-2xl mb-4" />

            {/* Review Text */}
            <p className="mb-4">
                {testimonial}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            {/* Profile */}
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary">
                    <img src={user_photoURL} alt="" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">{userName}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1"><BiStar className='text-yellow-400 text-xl'></BiStar> {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;