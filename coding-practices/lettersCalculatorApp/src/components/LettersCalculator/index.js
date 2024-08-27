// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputSearch: '',
  }

  onChangeInput = event => {
    this.setState({
      inputSearch: event.target.value,
    })
  }

  render() {
    const {inputSearch} = this.state
    const calculateCount = inputSearch.length
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="clock-image"
        />
        <div className="calculate-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="phrase-text" htmlFor="text">
            Enter the phrase
          </label>
          <br />
          <input
            id="text"
            type="text"
            className="input-text"
            onChange={this.onChangeInput}
            placeholder="Enter the phrase"
            value={inputSearch}
          />
          <p className="button">No.of letters: {calculateCount}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
