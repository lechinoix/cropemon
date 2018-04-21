import React from 'react';

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

export default ({ background }) => (
  <div style={{
    ...backgroundStyle,
    backgroundImage: `url(${background})`,
  }} />
)
