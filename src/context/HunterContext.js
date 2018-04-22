import React from 'react';
import { database, hunterRef } from '../utils/firebase';

const HUNTERNAME = 'Ondine';

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

    this.capturePokemon = async (pokemonId) => {
      const hunter = this.state.byName[HUNTERNAME];
      if (hunter.pokedex.hasOwnProperty(pokemonId)) return;

      await this.setState({
        byName: {
          ...this.state.byName,
          [HUNTERNAME]: {
            ...hunter,
            pokedexCount: hunter.pokedexCount + 1,
            pokedex: {
              ...hunter.pokedex,
              [pokemonId]: true,
            },
          }
        }
      });

      database.ref().update({
        [`hunter/${HUNTERNAME}`]: this.state.byName[HUNTERNAME],
      })
    }

    this.state = {
      ...initialState,
      capturePokemon: this.capturePokemon,
    }
  }

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
    {hunter => <WrappedComponent hunter={hunter} {...props} />}
  </HunterConsumer>
)

export {
  HunterConsumer,
  HunterProvider,
  withHunter,
}

