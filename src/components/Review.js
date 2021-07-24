import { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setInde] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button type='button' className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button type='button' className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button type='button' className='random-btn'>
        suprise me!
      </button>
    </article>
  );
};

export default Review;