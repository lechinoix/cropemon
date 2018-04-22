import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import HuntPage from './pages/HuntPage';
import PokeCenter from './pages/PokeCenter';
import PokeMap from './pages/PokeMap';
import { HunterProvider } from './context/HunterContext';
import {
  HashRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom'
import Menu from './components/Menu';

const RedirectToPokecenter = () => <Redirect to="/pokecenter"/>;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  closeMenu = () => this.setState({ isMenuOpen: false })
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
              <Menu
                closeMenu={this.closeMenu}
                toggleMenu={this.toggleMenu}
                isMenuOpen={this.state.isMenuOpen}
              />
              <Route path="/pokecenter" component={PokeCenter} />
              <Route path="/search" component={HuntPage} />
              <Route path="/pokemap" component={PokeMap} />
              <Route exact path="/" component={RedirectToPokecenter} />
            </Fragment>
          </MuiThemeProvider>
        </Router>
      </HunterProvider>
    );
  }
}

export default App;
