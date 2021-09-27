import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query,handleSearch} = useGlobalContext();
  return (
    <form className="search-form" onSubmit={e => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input className="form-input" type="search" value={query}
      onChange={e => handleSearch(e.currentTarget.value)} />
    </form>
  )

}

export default SearchForm
