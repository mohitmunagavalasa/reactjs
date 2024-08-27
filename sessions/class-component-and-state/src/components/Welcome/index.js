import {Component} from 'react'

class Welcome extends Component {
  state = {count: 0}
  bt = () => {
    this.setState(pre => {
      return {count: pre.count + 1}
    })
  }
  render() {
    const {count} = this.state
    const {greeting, name} = this.props

    return (
      <div>
        <h1>
          {greeting}, {name} {count}
        </h1>
        <button onClick={this.bt}>save</button>
      </div>
    )
  }
}

export default Welcome
