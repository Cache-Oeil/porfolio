import _ from 'lodash';
import React, { Component } from 'react';
import Progress from './Progress';
import IconButton from 'material-ui/IconButton';
import Repeat from 'material-ui/svg-icons/av/repeat';
import Loop from 'material-ui/svg-icons/av/loop';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import FastForward from 'material-ui/svg-icons/av/fast-forward';
import FastRewind from 'material-ui/svg-icons/av/fast-rewind';
import Replay10 from 'material-ui/svg-icons/av/replay-10';
import Forward10 from 'material-ui/svg-icons/av/forward-10';
import './style.scss';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loop: false,
      repeat: true,
      play: true,
      selectedTrack: this.props.tracks[0],
      currentTime: 0
    };
  }

  componentDidMount() {
    this.audio = document.getElementById('audio')
    console.log(this.audio)
    this.audio.autoplay = true
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

  togglePlay = (e) => {
    if (!this.state.play) {
      this.handlePlay()
    } else {
      this.handlePause()
    }
    this.setState({ play: !this.state.play })
  }

  toggleReplay = () => {
    const { loop, repeat } = this.state

    if (!loop) {
      this.audio.loop = !loop
      this.setState({ loop: this.audio.loop, repeat: false })
      return
    }
    this.audio.loop = false
    this.setState({ loop: this.audio.loop })
  }

  toggleRepeat = () => {
    const { loop, repeat } = this.state

    if (!repeat) {
      this.audio.loop = false
      this.setState({ loop: false, repeat: true })
      return
    }
    this.setState({ repeat: false })
  }

  nextTrack = () => {
    const { tracks } = this.props
    _.forEach(tracks, (track, index) => {
      if (track.id === this.state.selectedTrack.id && index < tracks.length - 1) {
        this.setState({ 
          selectedTrack: tracks[index+1],
          currentTime: 0,
          play: true 
        })
      }
    })
  }

  prevTrack = () => {
    const { tracks } = this.props
    _.forEach(tracks, (track, index) => {
      if (track.id === this.state.selectedTrack.id && index > 0 ) {
        this.setState({ 
          selectedTrack: tracks[index-1],
          currentTime: 0,
          play: true 
        })
      }
    })
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

  handleEnd = () => {
    const { tracks } = this.props
    const { loop, repeat, selectedTrack } = this.state

    if (!repeat && !loop) {
      return
    }
    
    if (repeat) {
      if (selectedTrack.id === tracks[tracks.length-1].id) {
        this.handleSelect(tracks[0])
        return
      }
      this.nextTrack()
      return
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
    const { selectedTrack, currentTime, loop, repeat } = this.state;
    return (
      <div className="audio-player">
        <input type="checkbox" id="play" checked={this.state.play} />
        <div className="album" style={{backgroundImage: `url('${selectedTrack.albumb.artwork}')`}}></div>
        <Progress playing={this.state.play} currentTime={currentTime} duration={this.audio && this.audio.duration ? this.audio.duration : selectedTrack.duration}/>
        <div className="title">{selectedTrack.title} <span className="artist">- {selectedTrack.artist}</span></div>
        <div className="throbber"></div>                            
        <label className="play" onClick={this.togglePlay}></label>
        <div className="controls">
          <div className="replay-repeat">
            <IconButton style={{marginRight: 5}} onClick={(e) => this.toggleReplay()}>
              <Loop color={loop ? 'white' : '#BDBDBD'} />
            </IconButton>
            <IconButton style={{marginLeft: 5}} onClick={(e) => this.toggleRepeat()}>
              <Repeat color={repeat ? 'white' : '#BDBDBD'} />
            </IconButton>
          </div>
          <div className="control">
            <IconButton style={styles.small} iconStyle={styles.smallIcon} onClick={(e) => this.prevTrack()}>
              <SkipPrevious color={'#BDBDBD'} />
            </IconButton>
            <IconButton style={styles.small} iconStyle={styles.smallIcon} onClick={(e) => this.backward()}>
              <Replay10 color={'#BDBDBD'} />
            </IconButton>
            <IconButton style={styles.small} iconStyle={styles.smallIcon} onClick={(e) => this.forward()}>
              <Forward10 color={'#BDBDBD'} />
            </IconButton>
            <IconButton style={styles.small} iconStyle={styles.smallIcon} onClick={(e) => this.nextTrack()}>
              <SkipNext color={'#BDBDBD'} />
            </IconButton>
          </div>
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
        <audio id="audio" style={{visibility: 'hidden'}} onEnded={this.handleEnd} >
          <source src={selectedTrack.source} />
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;