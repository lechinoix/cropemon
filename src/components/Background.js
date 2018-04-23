import React from 'react';
import PropTypes from 'prop-types';

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

const Background = (props) => (
  <div style={{
    ...backgroundStyle,
    backgroundImage: `url(${props.backgroundUrl})`,
  }}>
    {props.renderBackground && props.renderBackground()}
  </div>
);

 Background.propTypes = {
   renderBackground: PropTypes.func,
   backgroundUrl: PropTypes.string,
 }

export default Background;
