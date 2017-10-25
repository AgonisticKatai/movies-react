import React, { Component } from 'react'

import Header from './Header'
import Main from './Main'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div>
          <Main />
        </div>
      </div>
    )
  }
}

export default App
