// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {eachAppointment, onToggleLike} = props
  const {title, date, isStarred, id} = eachAppointment
  const image = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const appointmentDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const onClickFavouriteIcon = () => {
    onToggleLike(id)
  }

  return (
    <li className="appointment-item-container">
      <div className="app-title-star-container">
        <p className="app-title">{title}</p>
        <button
          type="button"
          className="star-button"
          onClick={onClickFavouriteIcon}
          data-testid="star"
        >
          <img src={image} className="star-img" alt="star" />
        </button>
      </div>
      <p className="appointment-date">{appointmentDate}</p>
    </li>
  )
}

export default AppointmentItem
