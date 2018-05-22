import React, { Component } from 'react';
//import { initialize } from './js/initialization';
import './style.scss';

class Hextrix extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentWillMount() {
    //initialize();
  }

  render() {
    return (
      <div className="hextrix">
        <canvas id="canvas"></canvas>
        <div id="overlay" className="faded overlay"></div>
        <div id='startBtn' ></div>
        <div id="helpScreen" className='unselectable'>
          <div id='inst_main_body'></div>
        </div>
        <img id="openSideBar" className='helpText' src="./images/btn_help.svg"/>
        <div className="faded overlay"></div>
        <img id="pauseBtn" src="./images/btn_pause.svg"/>
        <img id='restartBtn' src="./images/btn_restart.svg"/>
        <div id='HIGHSCORE'>HIGH SCORE</div>
        <div id='highScoreInGameText'>
          <div id='highScoreInGameTextHeader'>HIGH SCORE</div><div id='currentHighScore'>10292</div>
        </div>
        <div id="gameoverscreen">
          <div id='container'>
            <div id='gameOverBox' className='GOTitle'>GAME OVER</div>
            <div id='cScore'>1843</div>
            <div id='highScoresTitle' className='GOTitle'>HIGH SCORES</div>
            <div className='score'><span className='scoreNum'>1.</span> <div id="1place" style={{display: "inline"}}>0</div></div>
            <div className='score'><span className='scoreNum'>2.</span> <div id="2place" style={{display: "inline"}}>0</div></div>
            <div className='score'><span className='scoreNum'>3.</span> <div id="3place" style={{display: "inline"}}>0</div></div>
          </div>
          <div id='bottomContainer'>
            <img id='restart' src='./images/btn_restart.svg' />
          </div>
        </div>
      </div>
    );
  }
}

export default Hextrix;