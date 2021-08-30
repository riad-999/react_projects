import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,remove_tour}) => {
  const [readmore,set_readmore] = useState(false);
  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {readmore ? info : `${info.substring(0,200)}...`}
        <button type="button" onClick={() => set_readmore(!readmore)}>
          {readmore ? "show less" : "show more"}
        </button>
      </p>
      <button type="button" className="delete-btn" 
      onClick={() => remove_tour(id)}>
        not interested
      </button>
    </footer>
  </article>;
};

export default Tour;
