// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onUpdateText} = props
  const {suggestion} = suggestionDetails
  const sendSuggestionText = () => {
    onUpdateText(suggestion)
  }

  return (
    <li className="suggestion-container1">
      <p className="suggestion-text">{suggestion}</p>
      <button
        className="arrow-button"
        onClick={sendSuggestionText}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
