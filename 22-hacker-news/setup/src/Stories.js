import React from 'react'
import { REMOVE_STORY } from './actions';
import { useGlobalContext } from './context'

const Stories = () => {
  const {loading,hits,dispatch} = useGlobalContext();

  const remove = (id) => {
    const newHits = hits.filter(story => story.objectID !== id);
    dispatch({type:REMOVE_STORY,payload:newHits});
    }
  if(loading){
    return <div className="loading"></div>
  }
  return <section className="stories">
    {hits.map(story => {
      const {objectID:id,title,num_comments,url,points,author} = story;
      return <article className="story" key={id}>
        <h4 className= "title">{title}</h4>
        <p className="info">
          {points} points by
          <span>{author} |</span>
          {num_comments}{' '}
          comments
          </p>
          <div>
            <a href={url} className="read-link" target='_blank'
            rel="noopener noreferrer">
              read more
            </a>
            <button className="remove-btn" onClick={() => remove(id)}>
              remove
            </button>
          </div>
      </article>
    })}
  </section>
}

export default Stories
