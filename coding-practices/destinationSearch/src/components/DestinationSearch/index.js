// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    // const casesensitiveInput = searchInput.toLowerCase()
    // console.log(casesensitiveInput)
    const filteredList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    // console.log(filteredList)
    return (
      <div className="app-container">
        <div className="destination-container">
          <h1 className="title1">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search-bar"
              onChange={this.onChangeInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="image1"
              alt="search icon"
            />
          </div>
          <ul className="places-cards">
            {filteredList.map(eachDestination => {
              const {name, id, imgUrl} = eachDestination
              return <DestinationItem name={name} imgUrl={imgUrl} key={id} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
