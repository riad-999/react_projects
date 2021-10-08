import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {set_search_term} = useGlobalContext();
  const searchValue = React.useRef(null);
  const searchCocktail = () => {
    set_search_term(searchValue.current.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  React.useEffect(()=>{
    searchValue.current.focus(); 
  })
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search your favorite cocktail.
          </label>
          <input type='search' id="name" ref={searchValue}
           onInput={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
