import React, { Fragment, PureComponent } from 'react';
import Pets from 'material-ui/svg-icons/action/pets';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router-dom'
import backgroundPokecenter from '../static/pokecenter.jpg';

const buttonStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
}

const backgroundStyle = {
  alignItems: 'center',
  backgroundImage: 'url(' + backgroundPokecenter + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  position: 'relative',
  width: '100vw',
}

class PokeCenter extends PureComponent {
  render() {
    return (
      <Fragment>
        <div style={backgroundStyle} />
        <Link to="/search">
          <FloatingActionButton style={buttonStyle}>
            <Pets />
          </FloatingActionButton>
        </Link>
      </Fragment>
    );
  }
}

export default PokeCenter;
