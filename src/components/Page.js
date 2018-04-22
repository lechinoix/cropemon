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
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 0,
}

const Page = ({ background, renderBackground, fabLink, fabIcon, children }) => (
  <Fragment>
    <Background background={background} renderBackground={renderBackground} />
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