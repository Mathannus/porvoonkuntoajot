import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (

    <div className="App-footer">
      <footer>
        <div>Järjestäjä: Porvoon Akilles Cycling</div>
        <div>Sähköposti: <a href="mailto:akilles.porvoonkuntoajot@gmail.com">akilles.porvoonkuntoajot@gmail.com</a></div>
        <div>Facebook: <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Porvoon-Akilles-cycling-644561912254259/">facebook.com/Porvoon-Akilles-cycling</a></div>
      </footer>
    </div>
  )
  }
}

export default Footer
