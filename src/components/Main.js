import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from './routes/root/home'
import popular from './routes/root/popular'
import upcoming from './routes/root/upcoming'
import nowPlaying from './routes/root/nowPlaying'
import topRated from './routes/root/topRated'

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path='/' component={home} />
      <Route path='/popular' component={popular} />
      <Route path='/upcoming' component={upcoming} />
      <Route path='/nowPlaying' component={nowPlaying} />
      <Route path='/topRated' component={topRated} />
    </Switch>
  </div>
)

export default Main
