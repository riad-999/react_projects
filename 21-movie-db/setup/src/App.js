import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import SingleMovie from './SingleMovie';
import Movie from './SingleMovie'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/movie/:id" children={<SingleMovie />} />
    </Switch>
  );
}

export default App
