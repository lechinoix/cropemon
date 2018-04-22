import React, { Component } from 'react';

const backgroundStyle = {
  alignItems: 'stretch',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: -1,
}

 class Background extends Component {

  render() {
    return (
      <div style={{
        ...backgroundStyle,
        backgroundImage: `url(${this.props.background})`,
      }}>
        {this.props.renderBackground && this.props.renderBackground()}
      </div>
    );
  }
 }

export default Background;
