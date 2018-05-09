import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Bar = (props) => {
  return (
    <div className="bar-container">
      <div className="heading top-face" style={props.topFaceStyle}>{props.title}</div>
      <div className="heading front-face" style={props.frontFaceStyle}>{props.title}</div>
    </div>
  )
}

Bar.propTypes = {
  title: PropTypes.string.isRequired,
  topFaceStyle: PropTypes.object.isRequired,
  frontFaceStyle: PropTypes.object.isRequired
}

export default Bar;