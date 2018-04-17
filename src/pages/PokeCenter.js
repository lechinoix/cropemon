import React, { Fragment, PureComponent } from 'react';
import Pets from 'material-ui/svg-icons/action/pets';
import backgroundPokecenter from '../static/pokecenter.jpg';
import Page from '../components/Page';
import LinearProgress from 'material-ui/LinearProgress';

class PokeCenter extends PureComponent {
  render() {
    return (
      <Page
        background={backgroundPokecenter}
        fabLink="/search"
        fabIcon={<Pets />}
      >
      </Page>
    );
  }
}

export default PokeCenter;
