import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state,action) => {
  switch(action.type){
    case SET_LOADING :
      return {...state,loading:true}
    case SET_STORIES :
      return {...state,loading:false,
        hits:action.payload.hits,nbPages:action.payload.nbPages};
    case REMOVE_STORY :
      return {...state,hits:action.payload};
    case HANDLE_SEARCH :
      return {...state,query:action.payload,page:0};
    case HANDLE_PAGE :
      let newPage;
      if(action.payload === 'inc'){
        newPage = state.page === state.nbPages - 1 ?
        0 : state.page + 1 ;
      }
      if(action.payload === 'dec'){
        newPage = state.page === 0 ? 
        state.nbPages - 1 : state.page - 1 ;
      }
      return {...state,page:newPage};
    default: 
    throw new Error(`no matching "${action.type}" action`);
  }
}
export default reducer
