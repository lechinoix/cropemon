import React, { Fragment, PureComponent } from 'react';
import request from 'superagent';
import Pokecenter from 'material-ui/svg-icons/maps/local-hospital';
import backgroundForest from '../../static/forest-bg.png';
import Page from '../../components/Page';
import { withHunter } from '../../context/HunterContext';
import ControlPanel from './components/ControlPanel';
import {
  AVAILABLE_STATUS,
  CAPTURE_TIME,
  DIFFICULTY,
  DIFFICULTY_MAX,
  POKEMON_MAX_NUMBER,
} from './constants';

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

class HuntPage extends PureComponent {
  state = {
    wildPokemon: null,
    status: AVAILABLE_STATUS.LOADING,
  };

  componentWillMount() {
    this.fetchRandomPokemon();
  }

  fetchRandomPokemon = () => {
    const pokemonNumber = Math.round(Math.random() * POKEMON_MAX_NUMBER)
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then(({ body: wildPokemon }) => this.setState({ wildPokemon, status: AVAILABLE_STATUS.HUNTING }))
  }

  capturePokemon = () => {
    this.setState({ status: AVAILABLE_STATUS.CAPTURING });
    setTimeout(() => {
      const isCaptured = Math.random() > 1 - (DIFFICULTY / DIFFICULTY_MAX);
      if (isCaptured) {
        this.setState({ status: AVAILABLE_STATUS.CAPTURED });
        this.props.capturePokemon(this.state.wildPokemon.id);
        return;
      }
      this.setState({ status: AVAILABLE_STATUS.ESCAPED });
    }, CAPTURE_TIME)
  }

  render() {
    const shouldShowPokemon = this.state.wildPokemon
      && !(
        this.state.status === AVAILABLE_STATUS.ESCAPED
        || this.state.status === AVAILABLE_STATUS.CAPTURED
      );
    console.log(this.props)
    return (
      <Page
        background={backgroundForest}
        fabLink="/pokecenter"
        fabIcon={<Pokecenter />}
      >
        {shouldShowPokemon
          ? <Fragment>
            <div style={pokemonStyle.wrapper}>
              <img src={this.state.wildPokemon.sprites.front_shiny} style={pokemonStyle.image} />
            </div>
          </Fragment>
          : null}
        <ControlPanel
          pokemonName={this.state.wildPokemon && this.state.wildPokemon.name}
          status={this.state.status}
          capturePokemon={this.capturePokemon}
        />
      </Page>
    );
  }
}

export default withHunter(HuntPage);