import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import HuntPage from './pages/HuntPage';
import PokeCenter from './pages/PokeCenter';
import { HunterProvider } from './context/HunterContext';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom'

const RedirectToPokecenter = () => <Redirect to="/pokecenter"/>;


class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <HunterProvider>
            <AppBar title="Pokemons" />
            <Route path="/pokecenter" component={PokeCenter} />
            <Route path="/search" component={HuntPage} />
            <Route exact path="/" component={RedirectToPokecenter} />
          </HunterProvider>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
