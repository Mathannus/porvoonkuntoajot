import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './MainPage.css'

class MainPage extends Component {

  render() {

    return (
      <div className="mainPage">
        <div className="filler-div">&nbsp;</div>
        <div className="contentBox">
          <h1>PORVOON KUNTOAJOT 6.8. 2017 KLO 10.00</h1>

          <p style={{fontWeight: "bold"}}>
          Ennätyksellisen osanottajajoukon keräävässä Porvoon Kuntoajossa huomenna 6.8 klo 10.00 vielä tilaa jälki-ilmoittautuneille.<br/>Kaikki paikalle tulevat mahtuvat mukaan! Tervetuloa!
          </p>
          <p>
          Huominen sääennuste lupaa lähes optimaalista ajosäätä, pilvipoutaa ja lämpötila tasainen 17 asetta. Lähdön hetkellä pienen pieni mahdollisuus, että tulee pieni virkistävä sade, mutta sen jälkeen pelkkää poutaa.
          </p>

          <p style={{fontWeight: "bold"}}>Lista ennakkoon ilmoittautuneista löydät <Link to="/lahtolista">tästä</Link></p>
          Ajajilta suurta kiitosta saaneissa Porvoon Kuntoajoissa on kaksi eri matkaa:
          <ul>
            <li>Pidempi reitti on 110 kilometriä ja luonteeltaan mäkinen ja vaativa.</li>
            <li>Lyhyempi on 55 kilometriä ja reittinä helpompi ja sopii kaikille kuntoilijoille.</li>
          </ul>
          <p>
            Kaikkien sarjojen lähdöt toteutetaan yhteislähtöinä, joten tunnelmaa on suurten
            ajojen tyyliin lähdöstä maaliin asti.<br/>
            Kilpailureitit kulkevat kauniissa ja mäkisessä itäuusimaalaisessa
            jokilaaksoissa ja maalaismaisemassa.
          </p>
          <p>
            Varaa paikkasi ajoissa, sillä vain 400 ensimmäistä lunastaa paikkansa.<br/>
            Startti ja maali on Porvoon Amistolla, Perämiehentie 6, 06100 Porvoo.
          </p>

          <div id="ilmoittautuminen">
            <h2>Ilmoittautuminen</h2>
            <p>Ilmoittaudu sähköpostiosoitteeseen: <a href="mailto:akilles.porvoonkuntoajot@gmail.com">akilles.porvoonkuntoajot@gmail.com</a>.<br/>
            Sähköpostissa täytyy mainita ajajan nimi, puhelinnumero sekä ajettava matka.<br/>
            Vastausviestinä saat kuittauksen ilmoittautumisen saapumisesta.
            </p>
            <p>Osallistumismaksu maksetaan välittömästi ilmoittautumisen jälkeen
            Akilleen Pyöräilyjaoston tilille:  Aktia  FI4140501950009588.<br/>
            Maksun viestikentässä täytyy näkyä ilmoittautuneen ajajan tai
            joukkueen/yhteyshenkilön nimi ja ajettava matka.
            </p>
          </div>
          <div id="hinnat">
            <h2>Hinnat</h2>
            <table className="price-table">
            <thead>
              <tr>
                <th>Matka</th>
                <th className="price">Ennen 1.8</th>
                <th className="price">Alkaen 1.8</th>
                <th className="price">Käteinen lähtöpaikalla</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>110 km</td>
                <td className="price">60 €</td>
                <td className="price">70 €</td>
                <td className="price">70 € (tasaraha)</td>
              </tr>
              <tr>
                <td>55 km</td>
                <td className="price">50 €</td>
                <td className="price">60 €</td>
                <td className="price">60 € (tasaraha)</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
        <div className="filler-div">&nbsp;</div>
    </div>
    )
  }
}

export default MainPage
