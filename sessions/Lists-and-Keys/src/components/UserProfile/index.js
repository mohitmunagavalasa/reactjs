import './index.css'

const UserProfile = props => {
  const {userDetails, key} = props
  console.log(key)
  const {imageurl, name, role} = userDetails
  return (
    <li className="user-card-container">
      <img src={imageurl} alt="avatar" className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
