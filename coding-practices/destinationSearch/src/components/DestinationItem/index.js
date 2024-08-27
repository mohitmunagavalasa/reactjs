// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <li className="destination-card">
      <img src={imgUrl} alt={name} className="image" />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
