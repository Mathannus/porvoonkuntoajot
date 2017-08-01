import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import InstructionsPage from './InstructionsPage'
import MainPage from './MainPage'
import RouteMapPage from './RouteMapPage'
import Tulokset2016 from './Tulokset2016'
import Tulokset2017 from './Tulokset2017'
import registerServiceWorker from './registerServiceWorker'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css'


injectTapEventPlugin();

ReactDOM.render(
  <Router>
  <App>
    <Route exact path="/" component={MainPage}/>
    <Route path="/info" component={InstructionsPage}/>
    <Route path="/reitit" render={ props => (<RouteMapPage title="Lyhyt kierros 55km" routeId="7582882"/>)}/>
    <Route path="/pitka-kierros" render={ props => (<RouteMapPage title="Pitkä kierros 110km" routeId="7582814"/>)}/>
    <Route path="/tulokset/2016" component={Tulokset2016}/>
    <Route path="/tulokset/2017" component={Tulokset2017}/>
  </App>


  </Router>, document.getElementById('root'));
registerServiceWorker();
