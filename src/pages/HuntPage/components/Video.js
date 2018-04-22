import React, { Component } from 'react';

class Video extends Component {
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
      <video ref={(video) => {this.video = video;}} />
    );
  }
 }

export default Video;
