import React, { Fragment, Component } from 'react';
import Page from '../components/Page';
import Pokecenter from 'material-ui/svg-icons/maps/local-hospital';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import { compose, withProps } from "recompose"

const containerStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
}

const enhanceComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={containerStyle} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
);

class PokeCenter extends Component {

  renderMap = () => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 48.926, lng: 2.32 }}
    >
      <Marker position={{ lat: 48.926, lng: 2.32 }} />
    </GoogleMap>
  )

  render() {
    return (
      <Page
        renderBackground={this.renderMap}
        fabLink="/pokecenter"
        fabIcon={<Pokecenter />}
      />
    );
  }
}

export default enhanceComponent(PokeCenter);
