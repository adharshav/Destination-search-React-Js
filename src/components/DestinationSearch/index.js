import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialDestinationsList} = this.props
    const searchResults = initialDestinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destinations-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="search"
              className="input-element"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            />
          </div>
          <ul className="destinations-list">
            {searchResults.map(eachItem => (
              <DestinationItem placeDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
