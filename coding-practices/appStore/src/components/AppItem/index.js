import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-title">{appName}</p>
    </li>
  )
}

export default AppItem
