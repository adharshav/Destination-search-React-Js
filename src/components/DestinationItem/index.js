import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {placeDetails} = this.props
    const {imgUrl, name} = placeDetails
    return (
      <li className="list-items">
        <img className="destination-image" src={imgUrl} alt={name} />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
