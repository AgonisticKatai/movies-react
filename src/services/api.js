import axios from 'axios'

export function getMoviesData () {
  const adminKey = `e611cd222f4693ec562b47f464e9d89d`
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${adminKey}`
  return axios.get(url).then(response => response.data)
}
