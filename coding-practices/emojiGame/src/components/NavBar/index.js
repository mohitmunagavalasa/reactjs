// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStop} = props
  const scoreText = gameStop ? '' : `Score: ${score}`
  const topScoreText = gameStop ? '' : `Top Score: ${topScore}`
  return (
    <div className="navbar-bg-container">
      <div className="score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="score">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score">{scoreText}</p>
        <p className="top-score">{topScoreText}</p>
      </div>
    </div>
  )
}

export default NavBar
