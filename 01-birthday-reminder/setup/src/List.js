import React from 'react';

const List = ({people}) => {

  return (
    <>
      {people.map((user)=>
      {
        const {id,name,image,age} = user;
        return <article key={id} className="person">
          <img src={image} alt="error"/>
          <div>
            <h4>
              {name}
            </h4>
            <p>
              {age}
            </p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
