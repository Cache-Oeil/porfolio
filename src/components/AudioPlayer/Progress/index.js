import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

const containerStyle = {
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
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
    const { duration, currentTime } = this.props;

    return (
      <div style={containerStyle}>
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
          value={currentTime}
          size={190}
          thickness={2}
          color="red"
          style={innerProgressStyle}
        />
      </div>
    );
  }
}

Progress.propTypes = {
  duration: PropTypes.number,
  currentTime: PropTypes.number
}

export default Progress;