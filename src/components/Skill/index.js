import React, { Component } from 'react';
import Bar from '../Bar';
import Chart from '../Chart';
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
          <Chart 
            percentage={80}
          />
          <Chart 
            percentage={20}
            growColor='#0FF'
          />
        </div>
      </section>
    );
  }
}

export default Skill;