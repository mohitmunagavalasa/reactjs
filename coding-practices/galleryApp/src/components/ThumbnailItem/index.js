// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onUpdateState, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onClickTumbnailItem = () => {
    onUpdateState(id)
  }
  const onActiveTumbnail = isActive ? 'active-tumbnail' : ''

  return (
    <li className="thumbnail">
      <button className="btn" onClick={onClickTumbnailItem} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${onActiveTumbnail} thumbnail-style`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
