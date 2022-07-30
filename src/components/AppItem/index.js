// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="app-item-list">
      <img className="app-image" src={imageUrl} alt="appName" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
