import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = (props, context) => {
  const {
    className
  } = props;

  return (
    <div className={className ? className : "site-header"}>
      <div className="brand">
          <img src="https://i.imgur.com/S4yCEbH.png" alt="logo-cione" />
      </div>
      <ul id="menuLeft" className="menu menu-left">
          <li><Link to="/">{context.t('header.home')}</Link></li>
          <li><Link to="/introduce">{context.t('header.introduce')}</Link></li>
          <li><Link to="/skill">{context.t('header.skill')}</Link></li>
      </ul>
      <ul id="menuRight" className="menu menu-right">
          <li><Link to="/evaluate">{context.t('header.evaluate')}</Link></li>
          <li><Link to="/product">{context.t('header.product')}</Link></li>
          <li><a href="#contact">{context.t('header.contact')}</a></li>
      </ul>
    </div>
  )
}

Header.contextTypes= {
  t: PropTypes.func
}

export default Header;