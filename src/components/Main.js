import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ShowMovies from './routes/root/ShowMovies'

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path='/' render={() => (<ShowMovies category={'popular'} />)} />
      <Route path='/popular' render={() => (<ShowMovies category={'popular'} />)} />
      <Route path='/upcoming' render={() => (<ShowMovies category={'upcoming'} />)} />
      <Route path='/now_playing' render={() => (<ShowMovies category={'now_playing'} />)} />
      <Route path='/top_rated' render={() => (<ShowMovies category={'top_rated'} />)} />
    </Switch>
  </div>
)

export default Main
