import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SearchPage from './pages/SearchPage';
import PokeCenter from './pages/PokeCenter';
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
          <AppBar title="Pokemons" />
          <Route path="/pokecenter" component={PokeCenter} />
          <Route path="/search" component={SearchPage} />
          <Route component={RedirectToPokecenter} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
