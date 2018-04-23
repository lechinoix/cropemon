import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import { compose, withProps } from "recompose"
import mapStyle from './mapStyle.json';

const containerStyle = {
  bottom: 0,
  left: 0,
  right: 0,
  position: 'absolute',
  top: 0,
}

const MAPS_API_KEY = 'AIzaSyCFs36lo5GXQkDPVecvhqOxzIXV3U9kEcw';

const enhanceComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MAPS_API_KEY}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={containerStyle} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
);

const Map = (props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 48.926, lng: 2.32 }}
    defaultOptions={{ styles: mapStyle }}
  >
    <Marker position={{ lat: 48.926, lng: 2.32 }} />
  </GoogleMap>
)

export default enhanceComponent(Map);
