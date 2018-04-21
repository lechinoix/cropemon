import React, { Fragment } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router-dom'
import Background from './Background';

const buttonStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
}

const contentStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
}

const Page = ({ background, isVideo, fabLink, fabIcon, children }) => (
  <Fragment>
    <Background background={background} isVideo={isVideo} />
    <div style={contentStyle}>
      {children}
    </div>
    <Link to={fabLink}>
      <FloatingActionButton style={buttonStyle}>
        {fabIcon}
      </FloatingActionButton>
    </Link>
  </Fragment>
);

Page.defaultProps = {
  isVideo: false,
  background: '',
}

export default Page;