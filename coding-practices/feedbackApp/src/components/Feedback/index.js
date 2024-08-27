import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {clicked: false}

  isClicked = () => {
    this.setState(preState => ({
      clicked: !preState.clicked,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {clicked} = this.state

    return (
      <div className="bg-container">
        {!clicked && (
          <div className="feedback-container">
            <h1 className="feedback">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="reactions-container">
              {emojis.map(eachEmoji => {
                const {name, imageUrl, id} = eachEmoji
                return (
                  <li className="reaction-container" key={id}>
                    <img
                      className="reaction"
                      src={imageUrl}
                      alt={name}
                      onClick={this.isClicked}
                    />
                    <p className="name">{name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        {clicked && (
          <div className="feedback-container">
            <img src={loveEmojiUrl} alt="love emoji" className="reaction" />
            <h1 className="feedback">Thank You!</h1>
            <p className="name">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
