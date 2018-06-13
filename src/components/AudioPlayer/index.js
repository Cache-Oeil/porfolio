import React, { Component } from 'react';
import Progress from './Progress';
import './style.scss';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      play: true,
      selectedTrack: this.props.tracks[0],
      currentTime: 0
    };
  }

  componentDidMount() {
    console.log('play')
    //this.audio.play();
  }

  handlePlay = (e) => {
    const { play } = this.state;

    if (!play) {
      this.audio.play();
    } else {
      this.audio.pause()
    }
    this.setState({ play: !this.state.play })
  }

  handleSelect = (track) => {
    this.setState({
      play: true,
      selectedTrack: track,
      currentTime: 0
    })
    this.audio.play()
  }
  
  render() {
    const { tracks } = this.props;
    const { selectedTrack, currentTime } = this.state;
    return (
      <div className="audio-player">
        <input type="checkbox" id="play" checked={this.state.play} />
        <div className="album" style={{backgroundImage: `url('${selectedTrack.albumb.artwork}')`}}></div>
        <Progress playing={this.state.play} currentTime={currentTime} duration={selectedTrack.duration}/>
        <div className="title">{selectedTrack.title} <span className="artist">- {selectedTrack.artist}</span></div>
        <div className="throbber"></div>                            
        <label className="play" onClick={this.handlePlay}></label>
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
          {tracks.map(track => (
          <li key={track.id} className="song" onClick={() => this.handleSelect(track)}>
            <div className="cover"></div>
            <div className="name">{track.title}</div>
            <div className="artist">{track.artist}</div>  
          </li>
          ))}
        </ul>
        <audio ref={el => this.audio = el} id="audio" style={{display: 'none'}}>
          <source src={selectedTrack.source} />
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;