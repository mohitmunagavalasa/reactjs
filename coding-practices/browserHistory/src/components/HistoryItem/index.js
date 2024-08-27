import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const deleteHistory = () => {
    onDelete(id)
  }
  return (
    <li className="history-item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="details-container">
        <div className="title-container">
          <img src={logoUrl} alt="domain logo" className="logo-url" />
          <div className="title-link-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          className="delete-button"
          data-testid="delete"
          onClick={deleteHistory}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
