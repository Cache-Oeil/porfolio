import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {setLanguage} from "redux-i18n"
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Introduce from '../Introduce';
import Skill from '../Skill';
import Footer from '../Footer';
import Slide from '../Slide';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { red400, red600 } from 'material-ui/styles/colors';
import './style.scss';

const selectFieldRootStyle = {
  position: 'fixed',
  top: 10,
  left: 10,
  width: 'auto',
  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
  borderRadius: '2px',
  backgroundColor: '#fff',
  zIndex: 1001
}

class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      mobile: false,
      isLanguageMenuOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    
  }

  onChangeLanguage = (event, index, value) => this.props.setLanguage(value)

  render() {
    const { lang, setLanguage } = this.props;

    return (
      <div className="site-container">
        <SelectField
          autoWidth
          value={lang}
          onChange={this.onChangeLanguage}
          style={selectFieldRootStyle}
          labelStyle={{paddingLeft: 20}}
          underlineStyle={{display: 'none'}}
        >
          <MenuItem value="fr" primaryText="FR" />
          <MenuItem value="en" primaryText="EN" />
          <MenuItem value="vi" primaryText="VI" />
        </SelectField>
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

Screens.contextTypes = {
  t: PropTypes.func
}

function mapStateToProps({ i18nState }) {
  return {
    lang: i18nState.lang
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLanguage: (lang) => dispatch(setLanguage(lang))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screens);