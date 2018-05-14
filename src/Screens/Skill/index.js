import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bar from '../../components/Bar';
import Chart from '../../components/Chart';
import './style.scss';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <section className="skill">
        <div className="skill-container">
          <Bar 
            title="Ky nang"
            topFaceStyle={{ backgroundColor: '#dcdbdc', color: '#3498db'}} 
            frontFaceStyle={{ backgroundColor: '#3498db', color:'#dcdbdc'}}
          />
          { this.props.skills.map(({type, chartProperties: {percentage, growColor}}, index) => (
            <div key={index} className="skill-chart">
              <h3>{type}</h3>
              <Chart 
                percentage={percentage}
                growColor={growColor}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

Skill.contextTypes = {
  t: PropTypes.func
}

export default Skill;