import axios from 'axios'

export function getMoviesData (category) {
  const adminKey = 'e611cd222f4693ec562b47f464e9d89d'
  const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${adminKey}`
  return axios.get(url).then(response => response.data)
}
