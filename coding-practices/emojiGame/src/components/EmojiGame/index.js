/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    previousPick: [],
    topScore: 0,
    gameStop: false,
  }

  onUpdatePreviousPick = id => {
    const {previousPick} = this.state

    if (!previousPick.includes(id)) {
      if (previousPick.length < 11) {
        this.setState(prevState => ({
          previousPick: [...prevState.previousPick, id],
        }))
      } else {
        this.setState(prevState => ({
          previousPick: [...prevState.previousPick, id],
          gameStop: true,
        }))
      }
    } else {
      this.setState({
        gameStop: true,
      })
    }
  }

  onRestartGame = () => {
    const {topScore, previousPick} = this.state
    const score = previousPick.length
    if (score > topScore) {
      this.setState({
        previousPick: [],
        topScore: score,
        gameStop: false,
      })
    }
  }

  render() {
    const {previousPick, topScore, gameStop} = this.state
    const score = previousPick.length
    console.log(previousPick)
    console.log(gameStop)
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const getShuffledEmojisList = shuffledEmojisList()
    return (
      <div className="emoji-game-bg-container">
        <NavBar score={score} topScore={topScore} gameStop={gameStop} />
        <div className="bg-container">
          <div className="game-content-container">
            {!gameStop && (
              <ul className="emojis-container">
                {getShuffledEmojisList.map(eachEmoji => (
                  <EmojiCard
                    emojiDetails={eachEmoji}
                    onUpdatePreviousPick={this.onUpdatePreviousPick}
                    key={eachEmoji.id}
                  />
                ))}
              </ul>
            )}
            {gameStop && (
              <WinOrLoseCard score={score} onRestartGame={this.onRestartGame} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
