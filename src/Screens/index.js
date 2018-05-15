import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Introduce from '../containers/Introduce';
import Skill from '../containers/Skill';
import Footer from '../components/Footer';
import Slide from '../components/Slide';

import { red400, red600 } from 'material-ui/styles/colors';
import './style.scss';

class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      mobile: false
    };
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {

    return (
      <div className="site-container">
        <Slide 
          media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
          mediaBackgroundStyle={{backgroundColor: red400}}
          contentStyle={{backgroundColor: red600, height: 400, width: '100%'}}
          title='This is a very cool feature'
          subtitle='Just using this will blow your mind.'
          mobile
          landscape
        />
        <Header />
        <Switch>
          <Route path="/introduce" component={Introduce} />
          <Route path="/skill" component={Skill} />
        </Switch>
        {/*<Route path="" component={} />
        <Route path="" component={} />
        <Route path="" component={} />} */}
        <Footer />
      </div>
    );
  }
}

export default Screens;