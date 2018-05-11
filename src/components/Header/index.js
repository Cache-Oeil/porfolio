import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = (props) => {
  const {
    className
  } = props;

  return (
    <div className={className ? className : "site-header"}>
      <div className="brand">
          <img src="https://i.imgur.com/S4yCEbH.png" alt="logo-cione" />
      </div>
      <ul id="menuLeft" className="menu menu-left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/introduce">Giới thiệu</Link></li>
          <li><Link to="/skill">Kỹ năng</Link></li>
      </ul>
      <ul id="menuRight" className="menu menu-right">
          <li><Link to="/evaluate">Đánh giá</Link></li>
          <li><Link to="/product">Sản phẩm</Link></li>
          <li><a href="#contact">Liên hệ</a></li>
      </ul>
    </div>
  )
}

export default Header;