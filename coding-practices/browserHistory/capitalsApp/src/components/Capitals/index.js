import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeState = event => {
    const countryDetails = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value,
    )
    this.setState({
      activeCapitalId: countryDetails[0].id,
    })
  }

  render() {
    const {activeCapitalId} = this.state
    const activeCountryDetails = countryAndCapitalsList.filter(
      eachItem => eachItem.id === activeCapitalId,
    )

    return (
      <div className="capital-app-container">
        <div className="app-card-container">
          <h1 className="title">Countries And Capitals</h1>
          <div className="dropdown-container">
            <select
              id="country"
              className="dropdown"
              onChange={this.onChangeState}
            >
              {countryAndCapitalsList.map(eachCountryAndCapital => (
                <option
                  value={eachCountryAndCapital.id}
                  key={eachCountryAndCapital.id}
                >
                  {eachCountryAndCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="country" className="label-text">
              is capital of which country?
            </label>
          </div>
          <p className="capital">{activeCountryDetails[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
