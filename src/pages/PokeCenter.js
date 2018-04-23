import React, { Component } from 'react';
import Pets from 'material-ui/svg-icons/action/pets';
import backgroundPokecenter from '../static/pokecenter.jpg';
import Page from '../components/Page';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { withTrainer } from '../context/TrainerContext';

class PokeCenter extends Component {
  render() {
    return (
      <Page
        backgroundUrl={backgroundPokecenter}
        fabLink="/search"
        fabIcon={<Pets />}
      >
        <Paper zDepth={3}>
          <List style={{ maxHeight: '60vh', overflowY: 'scroll' }}>
            <Subheader>Trainer Ranking</Subheader>
            <Divider inset={true} />
            {Object.values(this.props.trainers.byName)
              .sort((a, b) => a.pokedexCount < b.pokedexCount)
              .map((trainer, index) => (
                <ListItem
                  primaryText={`${trainer.name} - ${trainer.pokedexCount} pokemons`}
                  leftAvatar={<Avatar>{index + 1}</Avatar>}
                  key={trainer.name}
                />
              ))}
          </List>
        </Paper>
      </Page>
    );
  }
}

export default withTrainer(PokeCenter);
