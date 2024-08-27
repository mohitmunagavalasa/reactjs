// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onButtonClick = () => {
    this.setState(preValue => ({isDark: !preValue.isDark}))
  }

  getButtonText = () => {
    const {isDark} = this.state
    return isDark ? 'Light Mode' : 'Dark Mode'
  }

  getContainerBackground = () => {
    const {isDark} = this.state
    return isDark ? 'dark-container' : 'light-container'
  }

  getHeadingColor = () => {
    const {isDark} = this.state
    return isDark ? 'light-heading' : 'dark-heading'
  }

  render() {
    const buttonText = this.getButtonText()
    const containerBackground = this.getContainerBackground()
    const headingColor = this.getHeadingColor()
    return (
      <div className="app-container">
        <div className={`container ${containerBackground}`}>
          <h1 className={`heading ${headingColor}`}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
