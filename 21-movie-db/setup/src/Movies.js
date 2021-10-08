import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {loading,movies} = useGlobalContext();
  
  if(loading){
    return <div className="loading"></div> ;
  }
  return (
    <section className="movies">
      {
      movies.map(movie => {
        const {imdbID:id,Poster:poster,Title:title,Year:year}
        = movie ;
        return <Link to={`/movie/${id}`} className="movie" key={id}>
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title}></img>
              <div className="movie-info">
                <h4 className="title">
                  {title}
                </h4>
                <p>
                  {year}
                </p>
              </div>
            </article>
          </Link> ;
      })
      }
    </section>
  );
      
  }
export default Movies;
