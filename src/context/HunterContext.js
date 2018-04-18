import React from 'react';

const initialState = {
  pokedex: new Set(),
  name: ''
};

const { Provider, Consumer: HunterConsumer } = React.createContext(initialState);

class HunterProvider extends React.Component {
  constructor(props) {
    super(props);

    this.capturePokemon = (pokemonId) => this.setState({
      pokedex: this.state.pokedex.add(pokemonId),
    })

    this.state = {
      ...initialState,
      capturePokemon: this.capturePokemon,
    }
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

