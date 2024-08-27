// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const val = Math.ceil(Math.random() * 100)
    console.log(val)
    this.setState(preValue => ({count: preValue.count + val}))
  }

  render() {
    const {count} = this.state
    const evenOddText = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="count">Count {count}</h1>
          <p className="title">{evenOddText}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
