import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import MediaQuery from 'react-responsive';
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Popover from 'material-ui/Popover'
import ToolbarGroup from 'material-ui/Toolbar'
import './NavBar.css'

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,

    }
  }

  handleTouchTap = (event) => {
      // This prevents ghost click.
      event.preventDefault();

      this.setState({
        open: true,
        anchorEl: event.currentTarget,
      });
    };

    handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

render = () => {

var styles = {
  appBar: {
    backgroundColor: "#EA333B"
  },
  toolBar: {
    backgroundColor: "#EA333B",
    justifyContent: "center"
  },
  button: {
    color: "white",
    fontSize: 22


  }
}
  const tabBar =
  <ToolbarGroup style={styles.toolBar}>
    <FlatButton labelStyle={styles.button} label="Alkuun" href="/"/>
    <FlatButton labelStyle={styles.button} label="Ilmoittautuminen" href="/#ilmoittautuminen" />
    <FlatButton labelStyle={styles.button} label="Info" containerElement={<Link to="/info"/>}/>
    <FlatButton labelStyle={styles.button} label="Reitit" containerElement={<Link to="/reitit"/>}/>
    <FlatButton labelStyle={styles.button} label="Tulokset" containerElement={<Link to="/tulokset"/>}/>
  </ToolbarGroup>

  return (
    <div className="App-navigation">
    <MediaQuery minDeviceWidth={768}>
      <AppBar
      style={styles.appBar}
      showMenuIconButton={false}
      title={tabBar}
    />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={768}>
      <AppBar
        style={styles.appBar}
        title="Porvoon kuntoajot"
        onLeftIconButtonTouchTap={this.handleTouchTap}
      />
      <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu onItemTouchTap={this.handleRequestClose}>
            <MenuItem primaryText="Alkuun"  href="/"/>
            <MenuItem primaryText="Ilmoittautuminen" href="/#ilmoittautuminen"/>
            <MenuItem primaryText="Info" containerElement={<Link to="/info"/>}/>
            <MenuItem primaryText="Reitit" containerElement={<Link to="/reitit"/>}/>
            <MenuItem primaryText="Tulokset" containerElement={<Link to="/tulokset"/>}/>
          </Menu>
        </Popover>
    </MediaQuery>
    </div>
  )
}

}

export default NavBar
