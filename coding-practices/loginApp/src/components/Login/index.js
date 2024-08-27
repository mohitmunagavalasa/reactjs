// Write your code here
import './index.css'

const Login = props => {
  const {logIn} = props
  return (
    <button className="button" type="button" onClick={logIn}>
      Login
    </button>
  )
}

export default Login
