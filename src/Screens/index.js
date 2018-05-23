import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import Introduce from '../controllers/Introduce';
import Skill from '../controllers/Skill';
import Product from '../controllers/Product';
import Footer from '../components/Footer';
import Slide from '../components/Slide';
import AudioPlayer from '../components/AudioPlayer';
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
          particles={true}
          mediaBackgroundStyle={{backgroundColor: "#212121"}}
          contentStyle={{backgroundColor: red600, height: 400, width: '100%'}}
          textStyle={{padding: 0, height: '100%'}}
          mobile
          landscape
        >
          <AudioPlayer/>
        </Slide>
        <Header />
        <Switch>
          <Route path="/introduce" component={Introduce} />
          <Route path="/skill" component={Skill} />
          <Route path="/product" component={Product} />
        </Switch>
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
  setLang: (lang) => dispatch(setLanguage(lang)),
  navigate: (path) => dispatch(push(path))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Screens));