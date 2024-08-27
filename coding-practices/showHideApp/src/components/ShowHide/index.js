// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameShown: false, isLastNameShown: false}

  onButton1Clicked = () => {
    console.log('1')
    this.setState(preValue => ({isFirstNameShown: !preValue.isFirstNameShown}))
  }

  onButton2Clicked = () => {
    console.log(2)
    this.setState(preValue => ({isLastNameShown: !preValue.isLastNameShown}))
  }

  render() {
    const {isFirstNameShown, isLastNameShown} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="fullname-container">
          <div className="firstname-container">
            <button
              className="button"
              type="button"
              onClick={this.onButton1Clicked}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameShown && <p className="name">Joe</p>}
          </div>
          <div className="firstname-container">
            <button
              className="button"
              type="button"
              onClick={this.onButton2Clicked}
            >
              Show/Hide Lastname
            </button>
            {isLastNameShown && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
