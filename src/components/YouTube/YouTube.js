import React from 'react';
import YouTube from 'react-youtube';
import { Query } from 'react-apollo'

import { GET_PAY_LIST } from "../../queries";

class YouTubePlayer extends React.Component {
  state = {
    song: 0
  };
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
      <>
        <Query query={GET_PAY_LIST} variables={{playList: 'Test List'}}>
          {({loading, data}) => {
            if (loading) return <p>Loading...</p>;
            const links = data.getPlayList.map(item => {
              const link = item.link.split('=');
              return link[1]
            });
            return (
              <YouTube
                videoId={links[this.state.song]}
                opts={opts}
                onReady={this._onReady}
              />
            )
          }}
        </Query>
        <button onClick={() => this.setState({song: this.state.song + 1})}>Next</button>
      </>
    );
  };
}

export default YouTubePlayer;