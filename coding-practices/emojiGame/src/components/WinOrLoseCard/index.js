// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onRestartGame} = props
  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const text = score === 12 ? 'Won' : 'Lose'
  const scoreTest = score === 12 ? 'Best Score' : 'Score'
  const onClickPlayAgain = () => {
    onRestartGame()
  }
  return (
    <div className="win-lose-container">
      <div className="win-lose-details-container">
        <h1 className="result-text">You {text}</h1>
        <p className="score-heading">{scoreTest}</p>
        <p className="score-points">{score}/12</p>
        <button
          className="play-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={image} alt="win or lose" className="win-lose-image" />
    </div>
  )
}

export default WinOrLoseCard
