// Write your code here
import './index.css'

const Message = props => {
  const {text} = props
  console.log(text)
  return <h1 className="heading">{text}</h1>
}

export default Message
