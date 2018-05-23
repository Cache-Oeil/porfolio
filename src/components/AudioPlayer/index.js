import React, { Component } from 'react';
import './style.scss';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      play: true
    };
  }

  handlePlay = (e) => this.setState({ play: !this.state.play })
  
  render() {
    return (
      <div className="audio-player">
        <input type="checkbox" id="play" checked={this.state.play} />
        <div className="album"></div>
        <div className="track">
          <div className="progress"></div>
        </div>
        <div className="title">Instant Crush <span className="artist">- Daft Punk</span></div>
        <div className="throbber"></div>
        <label className="play" for="play" onClick={this.handlePlay}></label>
        <div className="controls">
          <div className="control prev"></div>
          <div className="control rw"></div>
          <div className="control fw"></div>
          <div className="control next"></div>
        </div>
        <ul className="songlist">
          <li className="song"> 
            <div className="name">My favorites</div>
            <div className="artist">102 songs</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default AudioPlayer;