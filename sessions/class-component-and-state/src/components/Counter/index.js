import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  increment = () => {
    const {count} = this.state
    if (count < 50) {
      this.setState(preVal => ({count: preVal.count + 1}))
    }
  }
  decrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(preVal => ({count: preVal.count - 1}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.increment}>
            +
          </button>
          <button className="button" onClick={this.decrement}>
            -
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
