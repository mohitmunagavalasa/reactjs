// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  console.log(className)
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn1" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
