import React, {Component} from 'react'
import MediaQuery from 'react-responsive';

import backgroundImage from './img/header-bg3.png'
import './Header.css'


class Header extends Component {
render() {
  const bkImage = {
    "backgroundImage": `url(${backgroundImage})`,
    "backgroundSize": "cover"
  }

  return (
    <header className="App-header" style={bkImage}>
      <MediaQuery minDeviceWidth={768}>
        <div className="header-div">
          <h1>Porvoon kuntoajot</h1>
        </div>
      </MediaQuery>
    </header>
  )
}

}

export default Header
