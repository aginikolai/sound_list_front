import React from 'react';
import YouTube from 'react-youtube';
import { Query } from 'react-apollo'

import { GET_PAY_LIST } from "../../queries";

class YouTubePlayer extends React.Component {
  state = {
    song: 0,
    playlist: ''
  };
  componentDidUpdate(prevProps) {
    if (this.props.playList !== prevProps.playList) {
      this.setState({song: 0, playlist: ''})
    }
  }

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
    console.log(this.state.playlist);
    return (
      <div>
        <Query query={GET_PAY_LIST} variables={{playList: this.props.playList}}>
          {({loading, data}) => {
            if (loading) return <p>Loading...</p>;
            const links = data.getPlayList.map(item => {
              const link = item.link.split('=');
              return link[1]
            });
            if (this.state.playlist === '') this.setState({playlist: data.getPlayList});
            return (
              <>
                <h3>{data.getPlayList[this.state.song].author} - {data.getPlayList[this.state.song].name}</h3>
                <YouTube
                  videoId={links[this.state.song]}
                  opts={opts}
                  onReady={this._onReady}
                />
              </>
            )
          }}
        </Query>
        <button
          onClick={() => {
            this.state.playlist[this.state.song + 1] === undefined
              ? this.setState({song: 0})
              : this.setState({song: this.state.song + 1})
          }}
        >
          Next
        </button>
      </div>
    );
  };
}

export default YouTubePlayer;