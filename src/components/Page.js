import React, { Fragment } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router-dom'

const backgroundStyle = {
  alignItems: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  position: 'relative',
  width: '100vw',
}

const buttonStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
}

const Page = ({ background, fabLink, fabIcon, children }) => (
  <Fragment>
    <div style={{
      ...backgroundStyle,
      backgroundImage: `url(${background})`,
    }}>
      {children}
    </div>
    <Link to={fabLink}>
      <FloatingActionButton style={buttonStyle}>
        {fabIcon}
      </FloatingActionButton>
    </Link>
  </Fragment>
);

export default Page;