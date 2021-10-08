import React from 'react'

const Photo = (props) => {
  const {
    urls:{regular},
    alt_description,
    likes,
    user:{
      name,
      portfolio_url,
      profile_image:{medium},
    },
  } = props;
  return(
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <h4>{name}</h4>
        <p>{likes}</p>
      </div>
      <a href={portfolio_url}>
        <img src={medium} alt={name} 
        className="user-img" />
      </a>
    </article>
  );
}

export default Photo
