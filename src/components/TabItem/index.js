// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, getItemByCategory, isActive} = props
  const {displayText, tabId} = tabsList
  const tabItemClassName = isActive ? `button active` : `button`

  const onClickTabItem = () => {
    getItemByCategory(tabId)
  }

  return (
    <li className="list">
      <button
        onClick={onClickTabItem}
        className={tabItemClassName}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
