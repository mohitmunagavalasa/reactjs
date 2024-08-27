import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsFavourite, onDeleteComment} = props
  const {name, date, color, id, comment, isLiked} = commentDetails
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextColor = isLiked ? 'liked-text' : 'unlike-text'
  const postedTime = formatDistanceToNow(date)

  const onClickFavouriteItem = () => {
    toggleIsFavourite(id)
  }

  const onClickDeleteItem = () => {
    onDeleteComment(id)
  }

  return (
    <li className="comment-container">
      <div className="comment-details-container">
        <div className={`user-name-logo ${color}`}>
          <p className="username-first-letter">{name[0]}</p>
        </div>
        <div className="comment-user-details">
          <div className="comment-user-name-description">
            <h1 className="comment-user-name">{name}</h1>
            <p className="comment-user-time">{postedTime} ago</p>
          </div>
          <p className="comment-user-description">{comment}</p>
        </div>
      </div>
      <div className="comment-user-like-delete">
        <div className="like-container">
          <button
            type="button"
            className="like-button"
            onClick={onClickFavouriteItem}
          >
            <img
              src={likeImage}
              alt="like"
              className={`like-image ${likeTextColor}`}
            />
            <span className={`like-text ${likeTextColor}`}>Like</span>
          </button>
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={onClickDeleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
