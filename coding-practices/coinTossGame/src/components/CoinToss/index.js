// Write your code here
import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headsImageUrl,
    heads: 0,
    tails: 0,
  }

  onClickCoinToss = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult % 2 === 0) {
      this.setState({
        heads: heads + 1,
        tossResultImage: headsImageUrl,
      })
    } else {
      this.setState({
        tails: tails + 1,
        tossResultImage: tailsImageUrl,
      })
    }
  }

  render() {
    const {heads, tails, tossResultImage} = this.state
    const total = heads + tails

    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="choices">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="toss-coin-button"
            onClick={this.onClickCoinToss}
          >
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
