import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Pokeball from 'material-ui/svg-icons/action/donut-small';
import Run from 'material-ui/svg-icons/maps/directions-run';
import Pokecenter from 'material-ui/svg-icons/maps/local-hospital';
import Pets from 'material-ui/svg-icons/action/pets';
import RaisedButton from 'material-ui/RaisedButton';
import { AVAILABLE_STATUS } from '../constants';

const actionBlockStyle = {
  padding: '10px',
  flexShrink: '0',
  marginBottom: '100px',
  textAlign: 'center',
}

class ControlPanel extends Component {
  renderContent = () => {
    if (this.props.status === AVAILABLE_STATUS.LOADING) return this.renderLoading();
    if (this.props.status === AVAILABLE_STATUS.CAPTURED) return this.renderCaptured();
    if (this.props.status === AVAILABLE_STATUS.CAPTURING) return this.renderCapturing();
    if (this.props.status === AVAILABLE_STATUS.ESCAPED) return this.renderEscaped();
    return this.renderIsHunting();
  }

  renderLoading = () => (
    <div>A pokemon will soon appear...</div>
  )

  renderCapturing = () => (
    <div>You are trying to capture {this.props.pokemonName}...</div>
  )

  renderCaptured = () => (
    <div>
      Congrats ! You caught {this.props.pokemonName}
      <br />
      <br />
      <Link to="/pokecenter">
        <RaisedButton
          label="Back to center"
          secondary
          icon={<Pokecenter />}
          style={{ marginRight: '10px' }}
        />
      </Link>
      <RaisedButton
        label="Keep hunting"
        primary
        icon={<Pets />}
        onClick={this.props.goHunting}
      />
    </div>
  )

  renderEscaped = () => (
    <div>
      Oh no ! The wild {this.props.pokemonName} escaped...
      <br />
      <br />
      <Link to="/pokecenter">
        <RaisedButton
          label="Back to center"
          secondary
          icon={<Pokecenter />}
          style={{ marginRight: '10px' }}
        />
      </Link>
      <RaisedButton
        label="Keep hunting"
        primary
        icon={<Pets />}
        onClick={this.props.goHunting}
      />
    </div>
  )

  renderIsHunting = () => (
    <Fragment>
      A wild {this.props.pokemonName} appears !
      <br />
      <br />
      <Link to="/pokecenter">
        <RaisedButton
          label="Runaway"
          secondary
          icon={<Run />}
          style={{ marginRight: '10px' }}
        />
      </Link>
      <RaisedButton
        label="Capture it"
        primary
        icon={<Pokeball />}
        onClick={this.props.capturePokemon}
      />
    </Fragment>
  )

  render() {
    return (
      <Paper style={actionBlockStyle} zDepth={3}>
        {this.renderContent()}
      </Paper>
    )
  }
}

export default ControlPanel;