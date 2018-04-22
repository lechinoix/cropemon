import React, { Component } from 'react';
import Pets from 'material-ui/svg-icons/action/pets';
import backgroundPokecenter from '../static/pokecenter.jpg';
import Page from '../components/Page';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { withHunter } from '../context/HunterContext';

class PokeCenter extends Component {
  render() {
    return (
      <Page
        background={backgroundPokecenter}
        fabLink="/search"
        fabIcon={<Pets />}
      >
        <Paper zDepth={3}>
          <List>
            <Subheader>Hunter Ranking</Subheader>
            <Divider inset={true} />
            {Object.values(this.props.hunter.byName)
              .sort((a, b) => a.pokedexCount < b.pokedexCount)
              .map((hunter, index) => (
                <ListItem
                  primaryText={`${hunter.name} - ${hunter.pokedexCount} pokemons`}
                  leftAvatar={<Avatar>{index + 1}</Avatar>}
                  key={hunter.name}
                />
              ))}
          </List>
        </Paper>
      </Page>
    );
  }
}

export default withHunter(PokeCenter);
