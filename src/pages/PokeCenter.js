import React, { Fragment, PureComponent } from 'react';
import Pets from 'material-ui/svg-icons/action/pets';
import backgroundPokecenter from '../static/pokecenter.jpg';
import Page from '../components/Page';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { withHunter } from '../context/HunterContext';

class PokeCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hunters: [this.props.hunter],
    };
  }

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
            {this.state.hunters.map((hunter, index) => (
              <ListItem
                primaryText={`${hunter.name} - ${hunter.pokedex.size} pokemons`}
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
