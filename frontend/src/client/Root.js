import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from 'components'
import App from 'shared/App'


const Root = () => (
  <Router>
    <Navbar />
    <App />
  </Router>
)

export default Root