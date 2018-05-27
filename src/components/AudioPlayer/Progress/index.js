import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.scss';

const containerStyle = {
  width: '100%',
  position: 'relative',
  top: 85
}

const outerProgressStyle = {
  zIndex:1,
  transform: 'rotate(125deg)'
}

const innerProgressStyle = {
  zIndex:2,
  position: 'absolute',
  transform: 'rotate(125deg)'
}

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { duration, currentTime, playing } = this.props;

    return (
      <div style={containerStyle}>
          <CSSTransition
            in={playing}
            appear={true}
            timeout={300}
            classNames="circle-progress"
            unmountOnExit
          >
            <div>
              <CircularProgress
                mode="determinate"
                value={80}
                size={190}
                thickness={2}
                color="grey"
                style={outerProgressStyle}
              />
              <CircularProgress
                mode="determinate"
                value={(currentTime / duration ) * 80}
                size={190}
                thickness={2}
                color="red"
                style={innerProgressStyle}
              />
            </div>
          </CSSTransition>
          <CSSTransition
            in={!playing}
            timeout={300}
            classNames="linear-progress"
            unmountOnExit
          >
            <div className="linear">
              <LinearProgress
                mode="determinate"
                size={190}
                thickness={2}
                color="grey"
              />
              <LinearProgress
                mode="determinate"
                value={(currentTime / duration ) * 100}
                size={190}
                thickness={2}
                color="red"
                style={{position:'absolute'}}
              />
            </div>
          </CSSTransition>
      </div>
    );
  }
}

Progress.propTypes = {
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  playing: PropTypes.bool
}

export default Progress;