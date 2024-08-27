// Write your code here
import './index.css'

const TabItem = props => {
  const {TabDetails, changeActiveState, isActive} = props
  const {displayText, tabId} = TabDetails
  const onChangeTabItem = () => {
    changeActiveState(tabId)
  }
  const activeStyleClassName = isActive ? 'active-tab-style' : ''

  return (
    <li className={`${activeStyleClassName} tab-style`}>
      <button className="btn" type="button" onClick={onChangeTabItem}>
        <p className="tab-title">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
