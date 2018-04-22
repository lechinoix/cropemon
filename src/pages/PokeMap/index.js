import React from 'react';
import Page from '../../components/Page';
import Pokecenter from 'material-ui/svg-icons/maps/local-hospital';
import Map from './Map';

const PokeMap = (props) => (
  <Page
    fabLink="/pokecenter"
    fabIcon={<Pokecenter />}
  >
    <Map />
  </Page>
)

export default PokeMap;
