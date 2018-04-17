import React, { Fragment, PureComponent } from 'react';
import request from 'superagent';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Pokeball from 'material-ui/svg-icons/action/donut-small';
import Run from 'material-ui/svg-icons/maps/directions-run';
import backgroundForest from '../static/forest-bg.png';

const backgroundStyle = {
  alignItems: 'center',
  backgroundImage: 'url(' + backgroundForest + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  position: 'relative',
  width: '100vw',
}

const pokemonStyle = {
  wrapper: {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '250px',
  },
}

const actionBlockStyle = {
  padding: '10px',
  flexShrink: '0',
  marginBottom: '100px',
  textAlign: 'center',
}

const POKEMON_MAX_NUMBER = 150;
const DIFFICULTY = 3;
const DIFFICULTY_MAX = 10;
const CAPTURE_TIME = 1000;

class SearchPage extends PureComponent {
  state = {
    wildPokemon: null,
    isCapturing: false,
    isCaptured: false,
  };

  componentWillMount() {
    this.fetchRandomPokemon();
  }

  fetchRandomPokemon = () => {
    const pokemonNumber = Math.round(Math.random() * POKEMON_MAX_NUMBER)
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then(({ body: wildPokemon }) => this.setState({ wildPokemon }))
  }

  capturePokemon = () => {
    this.setState({ isCapturing: true });
    setTimeout(() => {
      const isCaptured = Math.random() > 1 - (DIFFICULTY / DIFFICULTY_MAX);
      this.setState({ isCaptured });
    }, CAPTURE_TIME)
  }

  render() {
    console.log(this.state.wildPokemon)
    return (
      <div style={backgroundStyle}>
        {this.state.wildPokemon
          ? <Fragment>
            <div style={pokemonStyle.wrapper}>
              <img src={this.state.wildPokemon.sprites.front_shiny} style={pokemonStyle.image} />
            </div>
            <Paper style={actionBlockStyle} zDepth={3}>
              A wild {this.state.wildPokemon.name} appears !
              <br />
              <br />
              <RaisedButton
                label="Runaway"
                secondary
                icon={<Run />}
                onClick={this.capturePokemon}
                style={{ marginRight: '10px' }}
              />
              <RaisedButton
                label="Capture it"
                primary
                icon={<Pokeball />}
                onClick={this.capturePokemon}
              />
            </Paper>
          </Fragment>
          : null}
      </div>
    );
  }
}

export default SearchPage;