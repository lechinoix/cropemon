import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Pets from 'material-ui/svg-icons/action/pets';
import Map from 'material-ui/svg-icons/maps/map';
import Pokecenter from 'material-ui/svg-icons/maps/local-hospital';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import HuntPage from './pages/HuntPage';
import PokeCenter from './pages/PokeCenter';
import { HunterProvider } from './context/HunterContext';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Link,
} from 'react-router-dom'

const RedirectToPokecenter = () => <Redirect to="/pokecenter"/>;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  toggleMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen })

  render() {
    return (
      <HunterProvider>
        <Router>
          <MuiThemeProvider>
            <Fragment>
              <AppBar
                onLeftIconButtonClick={this.toggleMenu}
                title="Pokemon PWA"
              />
              <Drawer
                docked={false}
                open={this.state.isMenuOpen}
                onRequestChange={this.toggleMenu}
                width={200}
              >
                <Subheader>Navigation</Subheader>
                <Link to="/search">
                  <MenuItem leftIcon={<Pets />}>Go hunting</MenuItem>
                </Link>
                <Link to="/pokecenter">
                  <MenuItem leftIcon={<Pokecenter />}>Pokecenter</MenuItem>
                </Link>
                <Link to="/map">
                  <MenuItem leftIcon={<Map />}>Map</MenuItem>
                </Link>

              </Drawer>
              <Route path="/pokecenter" component={PokeCenter} />
              <Route path="/search" component={HuntPage} />
              <Route exact path="/" component={RedirectToPokecenter} />
            </Fragment>
          </MuiThemeProvider>
        </Router>
      </HunterProvider>
    );
  }
}

export default App;
