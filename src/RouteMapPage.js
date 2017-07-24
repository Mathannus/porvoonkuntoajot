import React,{Component} from 'react'
import './RouteMapPage.css'
import mapImgShort from './img/porvoo_55km.jpeg'
import mapImgLong from './img/porvoo_110km.jpeg'

class RouteMapPage extends Component {

  render() {

    return (
      <div className="mapPage">
        <div className="contentBox">
          <div className="description">
            <h1>Reitit</h1>
            Kilpailureitit kulkevat kauniissa ja mäkisessä itäuusimaalaisessa
            jokilaaksoissa ja maalaismaisemassa.
          </div>
          <div className="route">
          <h2>Lyhyt kierros</h2>
          Lyhyempi on 55 kilometriä ja reittinä helpompi ja sopii kaikille kuntoilijoille.<br/><br/>
          <a href="https://ridewithgps.com/routes/7582882">Linkki "Ride with GPS"-palveluun</a>
          <h3>Kartta</h3>
          <img src={mapImgShort} alt="Lyhyt kierros"/>
          </div>
          <div className="route">
            <h2>Pitkä kierros</h2>
            Pidempi reitti on 110 kilometriä ja luonteeltaan mäkinen ja vaativa.<br/><br/>
            <a href="https://ridewithgps.com/routes/7582814">Linkki "Ride with GPS"-palveluun</a>
            <h3>Kartta</h3>
            <img src={mapImgLong} alt="Pitkä kierros"/>
          </div>
        </div>
      </div>
    )
  }
}

export default RouteMapPage
