import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Pets from 'material-ui/svg-icons/action/pets';
import Map from 'material-ui/svg-icons/maps/map';
import Pokecenter from 'material-ui/svg-icons/maps/local-hospital';
import { Link, withRouter } from 'react-router-dom'

class Menu extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props)
    if(this.props.location.pathname !== nextProps.location.pathname) {
      this.props.closeMenu();
    }
  }

  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.isMenuOpen}
        onRequestChange={this.props.toggleMenu}
        closeMenu={this.props.closeMenu}
        width={200}
      >
        <Subheader>Navigation</Subheader>
        <Link to="/search">
          <MenuItem leftIcon={<Pets />}>Go hunting</MenuItem>
        </Link>
        <Link to="/pokecenter">
          <MenuItem leftIcon={<Pokecenter />}>Pokecenter</MenuItem>
        </Link>
        <Link to="/map">
          <MenuItem leftIcon={<Map />}>Map</MenuItem>
        </Link>

      </Drawer>
    );
  }
}

export default withRouter(Menu);
