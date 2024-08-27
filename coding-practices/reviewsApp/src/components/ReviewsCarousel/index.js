// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickNextReview = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState({
        index: index + 1,
      })
    }
  }

  onClickPreviousReview = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState({
        index: index - 1,
      })
    }
  }

  render() {
    const {reviewsList} = this.props
    console.log(reviewsList)
    const {index} = this.state
    console.log(index)
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="reviews-app-container">
        <div className="reviews-container">
          <h1 className="title">Reviews</h1>
          <img src={imgUrl} alt={username} className="image-style" />
          <div className="arrow-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickPreviousReview}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow-style"
                alt="left arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              className="button"
              type="button"
              onClick={this.onClickNextReview}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow-style"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
