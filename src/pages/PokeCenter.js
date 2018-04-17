import React, { PureComponent } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Pets from 'material-ui/svg-icons/action/pets';
import { Link } from 'react-router-dom'

const buttonStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
}

class PokeCenter extends PureComponent {
  render() {
    return (
      <Link to="/search">
        <FloatingActionButton style={buttonStyle}>
          <Pets />
        </FloatingActionButton>
      </Link>
    );
  }
}

export default PokeCenter;
