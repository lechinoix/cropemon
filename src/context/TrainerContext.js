import React from 'react';
import { database, trainerRef } from '../utils/firebase';
import { TRAINERNAME } from '../constants';

const initialState = {
  ownName: TRAINERNAME,
  byName: {
    [TRAINERNAME]: {
      pokedex: {},
      name: TRAINERNAME,
      pokedexCount: 0,
    }
  }
};

const { Provider, Consumer: TrainerConsumer } = React.createContext(initialState);

class TrainerProvider extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Update Firebase database when capturing a new Pokemon
     */
    this.capturePokemon = (pokemonNumber) => {
      const trainer = this.state.byName[TRAINERNAME];
      if (trainer.pokedex.hasOwnProperty(pokemonNumber)) return;

      database.ref().update({
        [`trainer/${TRAINERNAME}`]: {
          ...trainer,
          pokedexCount: trainer.pokedexCount + 1,
          pokedex: {
            ...trainer.pokedex,
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
    trainerRef.on('value', (snapshot) => {
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

const withTrainer = (WrappedComponent) => (props) => (
  <TrainerConsumer>
    {trainer => <WrappedComponent trainers={trainer} {...props} />}
  </TrainerConsumer>
)

export {
  TrainerConsumer,
  TrainerProvider,
  withTrainer,
}

