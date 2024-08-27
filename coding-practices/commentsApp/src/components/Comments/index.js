import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onChangeNameState = event => {
    this.setState({name: event.target.value})
  }

  onChangeCommentState = event => {
    this.setState({comment: event.target.value})
  }

  AddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    // if (name === '' || comment === '') {
    //   return
    // }
    const color =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      date: new Date(),
      comment,
      color,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggleIsFavourite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            isLiked: !eachItem.isLiked,
          }
        }
        return eachItem
      }),
    }))
  }

  onDeleteComment = id => {
    console.log('deleted')
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
    console.log()
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="bg-container">
        <div className="comments-container">
          <h1 className="title">Comments</h1>
          <div className="technology-card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
            <form className="name-comment-container" onSubmit={this.AddComment}>
              <p className="name-title">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="name-text"
                onChange={this.onChangeNameState}
                value={name}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-title"
                onChange={this.onChangeCommentState}
                value={comment}
              />
              <button type="submit" className="submit-button">
                Add Comment
              </button>
            </form>
          </div>
          <hr className="line" />
          <div className="comment-count-container">
            <p className="comment-count">{commentsList.length}</p>
            <p className="comment">Comments</p>
          </div>
          <ul className="comment-items">
            {commentsList.map(eachCommentItem => (
              <CommentItem
                commentDetails={eachCommentItem}
                key={eachCommentItem.id}
                toggleIsFavourite={this.toggleIsFavourite}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
