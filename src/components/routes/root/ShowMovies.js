import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail }  from 'react-bootstrap'

import { getMoviesData } from '../../../services/api'
import './ShowMovies.css'

class ShowMovies extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [{
      poster_path: '',
      title: '',
      release_date: ''
      }]
    }
  }

  componentWillReceiveProps () {
    getMoviesData(this.props.category)
    .then(data => {
      this.setState({
        movies: data.results.map(function (movies) {
          return ({
            poster_path: movies.poster_path,
            title: movies.title,
            release_date: movies.release_date
          })
        })
      })
    })
  }

  componentDidMount () {
    getMoviesData(this.props.category)
    .then(data => {
      this.setState({
        movies: data.results.map(function (movies) {
          return ({
            poster_path: movies.poster_path,
            title: movies.title,
            release_date: movies.release_date
          })
        })
      })
    })
  }

  render () {
    return (
      <Grid>
        <Row>
          {this.state.movies.map(function (movie) {
            return (
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + movie.poster_path} alt={movie.title}>
                  <h3>{movie.title}</h3>
                  <p>Release date: <strong>{movie.release_date}</strong></p>
                </Thumbnail>
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

export default ShowMovies
