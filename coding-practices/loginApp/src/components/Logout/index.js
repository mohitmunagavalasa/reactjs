// Write your code here

import './index.css'

const Logout = props => {
  const {logIn} = props
  return (
    <button className="button" type="button" onClick={logIn}>
      Logout
    </button>
  )
}

export default Logout
