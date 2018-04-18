import React from 'react';

const backgroundStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  zIndex: -1,
}

export default ({ background }) => (
  <div style={{
    ...backgroundStyle,
    backgroundImage: `url(${background})`,
  }} />
)
