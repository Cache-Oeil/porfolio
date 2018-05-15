import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const faceColorParDefault = '#fefefe';
const growColorParDefault = '#ec008c';

const Chart = (props) => {
  const { percentage } = props;
  const faceColor = props.faceColor ? props.faceColor : faceColorParDefault;
  const growColor = props.growColor ? props.growColor : growColorParDefault;

  return (
    <div className="chart">
      <div className="bar">
        <div className="face top" style={{backgroundColor: `rgba(${hex2Rgb(faceColor).join(',')}, .3)`}}>
          <div 
            className="growing-bar" 
            style={{
              width: percentage + '%',
              backgroundColor: `rgba(${hex2Rgb(growColor).join(',')}, .6)`
            }}
          />
        </div>
        <div className="face side-0" style={{backgroundColor: `rgba(${hex2Rgb(faceColor).join(',')}, .3)`}}>
          <div 
            className="growing-bar" 
            style={{
              width: percentage + '%',
              backgroundColor: `rgba(${hex2Rgb(growColor).join(',')}, .6)`,
              boxShadow: `-0.5em -1.5em 4em ${growColor}`
            }}
          />
        </div>
        <div className="face floor" style={{backgroundColor: `rgba(${hex2Rgb(faceColor).join(',')}, .3)`}}>
          <div 
            className="growing-bar" 
            style={{
              width: percentage + '%',
              backgroundColor: `rgba(${hex2Rgb(growColor).join(',')}, .6)`,
              boxShadow: `0em 0em 2em ${growColor}`
            }}
            />
        </div>
        <div className="face side-a" style={{backgroundColor: `rgba(${hex2Rgb(growColor).join(',')}, .6)`}} />
        <div className="face side-b" style={{backgroundColor: `rgba(${hex2Rgb(faceColor).join(',')}, .3)`}} />
        <div className="face side-1" style={{backgroundColor: `rgba(${hex2Rgb(faceColor).join(',')}, .3)`}}>
          <div 
            className="growing-bar"
            style={{
              width: percentage + '%',
              backgroundColor: `rgba(${hex2Rgb(growColor).join(',')}, .6)`
            }}
          />
        </div>
      </div>
    </div>
  )
}

Chart.propTypes = {
  percentage: PropTypes.number,
  faceColor: PropTypes.string,
  growColor: PropTypes.string
}

function hex2Rgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
   ] : null;
}

export default Chart;