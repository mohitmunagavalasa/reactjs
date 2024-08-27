// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onUpdatePreviousPick} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onEmojiClick = () => {
    onUpdatePreviousPick(id)
  }
  return (
    <li className="emoji-container">
      <button
        type="button"
        className="emoji-button"
        onClick={onEmojiClick}
        data-testid="hi"
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
