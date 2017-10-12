import React, { Component } from 'react'

import Header from './Header'
import Main from './Main'
import {getMoviesData} from '../services/api'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: {}
    }
    this.getMovies = this.getMovies.bind(this)
  }
  getMoviesData()
    .then(data => {
      console.log(data)
      this.setState({
        movies: data
      })
    
  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
    )
  }
}

export default App
