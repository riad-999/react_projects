import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,set_index] = useState(0);
  const {name,job,image,text} = people[index];
  const next = () => {
    set_index((index + 1) % people.length);
  }
  const prev = () => {
    if(index === 0){
      set_index(people.length - 1);
    }
    else{
      set_index(index - 1);
    }
  }
 const random_index = () => Math.floor(Math.random() * people.length);

 function callback(prev_state){
    const random = random_index();
    if(prev_state === random){
    if(random + 1 > people.length -1){
      return 0;
    }
    return random + 1;
    }
    else{
      return random;
    }
  }
  const suprise = () =>
  {
    set_index(callback);
  }
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
        <button className='prev-btn' onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={suprise}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
