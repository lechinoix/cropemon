import React from 'react';
import { database, hunterRef } from '../utils/firebase';
import { HUNTERNAME } from '../constants';

const initialState = {
  ownName: HUNTERNAME,
  byName: {
    [HUNTERNAME]: {
      pokedex: {},
      name: HUNTERNAME,
      pokedexCount: 0,
    }
  }
};

const { Provider, Consumer: HunterConsumer } = React.createContext(initialState);

class HunterProvider extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Update Firebase database when capturing a new Pokemon
     */
    this.capturePokemon = (pokemonNumber) => {
      const hunter = this.state.byName[HUNTERNAME];
      if (hunter.pokedex.hasOwnProperty(pokemonNumber)) return;

      database.ref().update({
        [`hunter/${HUNTERNAME}`]: {
          ...hunter,
          pokedexCount: hunter.pokedexCount + 1,
          pokedex: {
            ...hunter.pokedex,
            [pokemonNumber]: true,
          },
        },
      })
    }

    this.state = {
      ...initialState,
      capturePokemon: this.capturePokemon,
    }
  }

  /**
   * Listen to changes in Firebase database
   */
  componentDidMount() {
    hunterRef.on('value', (snapshot) => {
      this.setState({
        byName: {
          ...this.state.byName,
          ...snapshot.val(),
        }
      });
    });
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

const withHunter = (WrappedComponent) => (props) => (
  <HunterConsumer>
    {hunter => <WrappedComponent hunters={hunter} {...props} />}
  </HunterConsumer>
)

export {
  HunterConsumer,
  HunterProvider,
  withHunter,
}

