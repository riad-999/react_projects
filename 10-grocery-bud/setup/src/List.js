import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = (props) => {
  const {items,remove,edit_item} = props;
  return (
    <div className="grocery-list">
    {items.map(item => {
      const {id,title} = item;
      return <article key={id} className="grocery-item">
        <p className="title">{title}</p>
        <div className="btn-container">
          <button type="button" className="edit-btn"
          onClick={() => edit_item(id)}>
            <FaEdit />
          </button>
          <button type="button" className="delete-btn" 
          onClick={() => {
            remove(id);
          }}>
            <FaTrash />
          </button>
        </div>
      </article>
    })}
    </div>
  );
}

export default List
