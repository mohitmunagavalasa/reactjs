// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {value: 'Subscribe'}

  changeButton = () => {
    const {value} = this.state
    let text
    if (value === 'Subscribe') {
      text = 'Subscribed'
      console.log(text)
    } else {
      text = 'Subscribe'
      console.log(text)
    }
    this.setState(() => ({value: text}))
  }

  render() {
    const {value} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.changeButton}>
          {value}
        </button>
      </div>
    )
  }
}

export default Welcome
