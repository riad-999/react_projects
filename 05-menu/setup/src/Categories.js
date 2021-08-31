import React from 'react';

const Categories = ({items,filter}) => {
  // const find_id = (category) => {
  //   const obj = items.find(item => {
  //     return item.category === category});
  //   return obj.id;
  // }
  let categories = new Set();
   categories.add("all");
  for(let item of items){
    categories.add(item.category);
  }
  categories = Array.from(categories);
  let ids = {};
  let i = 1;
  categories.forEach(cat => {
    ids[cat] = i;
    i++;
  });
  return <div className="btn-container">
    {categories.map(category => {
      return <button key={ids[category]}
       className="filter-btn" onClick={() => filter(category)}>
        {category}
      </button>
    })}
  </div>;
}

export default Categories;
