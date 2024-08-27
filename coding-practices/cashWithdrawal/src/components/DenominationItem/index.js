// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, newDenomination} = props
  const {value} = denomination
  const sendDenominationId = () => {
    newDenomination(value)
  }
  return (
    <li className="denomination-container">
      <button type="button" className="button" onClick={sendDenominationId}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
