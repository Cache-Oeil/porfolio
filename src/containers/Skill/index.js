import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skill from '../../Screens/Skill';

const listSkills = [
  {
    type: 'HTML',
    chartProperties: {
      percentage: 90,
      growColor: '#ff5733'
    }
  },
  {
    type: 'CSS',
    chartProperties: {
      percentage: 70,
      growColor: '#0FF'
    }
  },
  {
    type: 'JAVASCRIPT',
    chartProperties: {
      percentage: 80,
      growColor: '#FFC300'
    }
  },
  {
    type: 'PHP',
    chartProperties: {
      percentage: 30,
      growColor: '#7caed6'
    }
  }
]

const mapStateToProps = state => ({
  skills: listSkills
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Skill);