import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {setLanguage} from "redux-i18n"
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Introduce from '../controllers/Introduce';
import Skill from '../controllers/Skill';
import Product from '../controllers/Product';
import Footer from '../components/Footer';
import Slide from '../components/Slide';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
  zIndex: 1401
}

export const ConnectedSwitch = connect(state => ({
  location: state.routing.location
}))(Switch)

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

  onChangeLanguage = (e, i, v) => this.props.setLang(v)

  render() {
    const { lang, setLanguage } = this.props;

    return (
      <div className="site-container">
        <SelectField
          autoWidth
          value={this.props.lang}
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
        <ConnectedSwitch>
          <Route path="/introduce" component={Introduce} />
          <Route path="/skill" component={Skill} />
          <Route path="/product" component={Product} />
        </ConnectedSwitch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.location,
  lang: state.i18nState.lang,
});

const mapDispatchToProps = dispatch => ({
  setLang: (lang) => dispatch(setLanguage(lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Screens);