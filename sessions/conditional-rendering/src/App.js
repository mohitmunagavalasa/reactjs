import {Component} from 'react'
import Welcome from './components/Welcome/index'
import './App.css'

class App extends Component {
  state = {isLoggedIn: true}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <h1>React JS</h1>
        {isLoggedIn && <button>Sign Out</button>}
        {!isLoggedIn && <button>Sign In</button>}
        <Welcome />
      </div>
    )
  }
}

export default App
