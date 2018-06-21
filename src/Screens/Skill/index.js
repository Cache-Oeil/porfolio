import _ from 'lodash'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bar from '../../components/Bar';
import Chart from '../../components/Chart';
import DraggableSkillList from '../../containers/DraggableSkillList';
import './style.scss';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      draggableWidth: document.body.getClientRects()[0].width / 3,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.setState({
      draggableWidth: document.body.getClientRects()[0].width / 3
    })
  }

  handleResize = () => {
    this.setState({ draggableWidth: document.body.getClientRects()[0].width / 3})
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
          <DraggableSkillList
            className={"draggable-list"}
            itemClassName={"draggable-item"}
            column={3}
            width={this.state.draggableWidth}
            height={50}
          />
          {/* { this.props.skills.map(({type, chartProperties: {percentage, growColor}}, index) => (
            <div key={index} className="skill-chart">
              <h3>{type}</h3>
              <Chart 
                percentage={percentage}
                growColor={growColor}
              />
            </div>
          ))} */}
        </div>
      </section>
    );
  }
}

Skill.contextTypes = {
  t: PropTypes.func
}

export default Skill;