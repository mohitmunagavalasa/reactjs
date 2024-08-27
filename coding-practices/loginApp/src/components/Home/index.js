// Write your code here
import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onButtonClick = () => {
    this.setState(preValue => ({isLogin: !preValue.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const messageText = isLogin ? 'Welcome User' : 'Please Login'
    return (
      <div className="app-container">
        <div className="container">
          <Message text={messageText} />
          {isLogin && <Logout logIn={this.onButtonClick} />}
          {!isLogin && <Login logIn={this.onButtonClick} />}
        </div>
      </div>
    )
  }
}

export default Home
