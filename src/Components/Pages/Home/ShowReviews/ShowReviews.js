import React from 'react';
import person1 from '../../../../assets/images/people1.png';
import person2 from '../../../../assets/images/people2.png'
import person3 from '../../../../assets/images/people3.png'
import quote from "../../../../assets/icons/quote.svg";
import SingleReviewsItem from './SingleReviewItem/SingleReviewsItem';

const ShowReviews = () => {
    const reviews = [
        {
            _id:"01",
            body : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            img: person1,
            location: "California"
        },
        {
            _id:"02",
            body : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            img: person2,
            location: "California"
        },
        {
            _id:"03",
            body : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            img: person3,
            location: "California"
        },
    ]
    return (
        <div>
            <div className='flex justify-between mb-5 items-center'>
                <div>
                    <p className='text-xs text-primary font-bold'>Testimonial</p>
                    <h1 className='text-xl md:text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-1/2 ml-auto' src={quote} alt="" />
                </div>
            </div>
            <div className='grid gird-cols-1 mb-5 gap-5 md:grid-cols-3'>
                {
                    reviews.map(review => <SingleReviewsItem key={review._id} review={review}></SingleReviewsItem>)
                }
            </div>
        </div>
    );
};

export default ShowReviews;