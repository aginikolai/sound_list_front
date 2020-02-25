import React from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="o1fOaesmyxo"
        opts={opts}
        onReady={this._onReady}
      />
    );
  };
}

export default YouTubePlayer;