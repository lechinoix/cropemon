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

  startMedia = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((mediaStream) => {
        this.video.srcObject = mediaStream;
        this.video.play();
      })
      .catch(error => console.error('getUserMedia() error:', error));
  }

  componentDidMount() {
    this.startMedia();
  }

  render() {
    return (
      <div style={{
        ...backgroundStyle,
        backgroundImage: `url(${this.props.background})`,
      }}>
        {this.props.isVideo &&
          <video
            ref={(video) => {this.video = video;}}
          />}
      </div>
    );
  }
 }

export default Background;
