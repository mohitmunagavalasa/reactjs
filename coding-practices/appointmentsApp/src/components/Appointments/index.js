// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentsList: [],
    isStarredContent: false,
  }

  onTitleChange = event => this.setState({title: event.target.value})

  onDateChange = event => this.setState({date: event.target.value})

  onToggleLike = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    if (title === '' || date === '') {
      return
    }
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeContentType = () => {
    this.setState(prevState => ({
      isStarredContent: !prevState.isStarredContent,
    }))
  }

  onRenderList = () => {
    const {appointmentsList, isStarredContent} = this.state
    console.log(appointmentsList)
    let filteredAppointmentList = appointmentsList
    if (isStarredContent) {
      filteredAppointmentList = appointmentsList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      )
    }
    return filteredAppointmentList.map(eachAppointment => (
      <AppointmentItem
        eachAppointment={eachAppointment}
        onToggleLike={this.onToggleLike}
        key={eachAppointment.id}
      />
    ))
  }

  render() {
    const {title, date, isStarredContent} = this.state
    const buttonClassName = isStarredContent
      ? 'starred-button'
      : 'unStarred-button'
    return (
      <div className="bg-container">
        <div className="appointments-card-container">
          <div className="add-appointment-container">
            <div className="appointment-input-container">
              <h1 className="title">Add Appointment</h1>
              <form onSubmit={this.onAddAppointment}>
                <div className="input-container">
                  <label htmlFor="title" className="label-text">
                    TITLE
                  </label>
                  <br />
                  <input
                    type="text"
                    id="title"
                    className="input-text"
                    value={title}
                    placeholder="Title"
                    onChange={this.onTitleChange}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="date" className="label-text">
                    DATE
                  </label>
                  <br />
                  <input
                    type="date"
                    id="date"
                    className="input-text"
                    value={date}
                    onChange={this.onDateChange}
                  />
                </div>
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-img"
            />
          </div>
          <hr className="line" />
          <div className="appointments-details-container">
            <div className="appointment-button-container">
              <h1 className="appointment-text">Appointments</h1>
              <button
                className={`${buttonClassName}`}
                onClick={this.onChangeContentType}
                type="button"
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list">{this.onRenderList()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
