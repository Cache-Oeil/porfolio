import _ from 'lodash';
import React, { Component } from 'react';
import Progress from './Progress';
import './style.scss';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loop: true,
      play: true,
      selectedTrack: this.props.tracks[0],
      currentTime: 0
    };
  }

  componentDidMount() {
    this.audio.play();
  }

  updateTime = () => {
    setInterval(() => {
      const { currentTime } = this.audio
      this.setState({ currentTime: Math.floor(currentTime) })
    }, 100)
  }

  handlePlay = () => {
    this.audio.play();
    this.updateTime()
  }

  forward = () => {
    this.setState({ 
      currentTime: this.state.currentTime + 10 
    }, () => {
      this.audio.currentTime+=10
      this.updateTime()
    })
  }

  backward = () => {
    if (this.state.currentTime < 10) {
      this.setState({ 
        currentTime: 0 
      }, () => {
        this.audio.currentTime = 0
      })
    } else {
      this.setState({ 
        currentTime: this.state.currentTime - 10 
      }, () => {
        this.audio.currentTime-= 10
        this.updateTime()
      })
    }
  }

  handlePause = () => this.audio.pause() 

  togglePlay = (e) => {
    if (!this.state.play) {
      this.handlePlay()
    } else {
      this.handlePause()
    }
    this.setState({ play: !this.state.play })
  }

  handleSelect = (track) => {
    if (this.state.selectedTrack.id !== track.id) {
      this.setState({ 
        selectedTrack: track,
        currentTime: 0,
        play: true
      })
    } else {
      this.setState({ play: true }, this.handlePlay)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedTrack.id !== this.state.selectedTrack.id) {
      this.audio.load()
      this.handlePlay()
    }
  }
  
  render() {
    const { tracks } = this.props;
    const { selectedTrack, currentTime } = this.state;
    return (
      <div className="audio-player">
        <input type="checkbox" id="play" checked={this.state.play} />
        <div className="album" style={{backgroundImage: `url('${selectedTrack.albumb.artwork}')`}}></div>
        <Progress playing={this.state.play} currentTime={currentTime} duration={this.audio && this.audio.duration ? this.audio.duration : selectedTrack.duration}/>
        <div className="title">{selectedTrack.title} <span className="artist">- {selectedTrack.artist}</span></div>
        <div className="throbber"></div>                            
        <label className="play" onClick={this.togglePlay}></label>
        <div className="controls">
          <div className="control prev" onClick={() => console.log('click')}></div>
          <div className="control rw" onClick={this.backward}></div>
          <div className="control fw" onClick={this.forward}></div>
          <div className="control next" onClick={() => console.log('click')}></div>
        </div>
        <ul className="songlist">
          <li className="song"> 
            <div className="name">My favorites</div>
            <div className="artist">102 songs</div>
          </li>
          {tracks.map(track => (
          <li key={track.id} className="song" onClick={() => this.handleSelect(track)}>
            <div className="cover">
              <img src={track.albumb.artwork} alt=""/>
            </div>
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