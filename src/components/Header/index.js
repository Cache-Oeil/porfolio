import React, { Component } from 'react';
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
          <li><a href="trang-chu.html">Home</a></li>
          <li><a href="#present">Giới thiệu</a></li>
          <li><a href="#skill">Kỹ năng</a></li>
      </ul>
      <ul id="menuRight" className="menu menu-right">
          <li><a href="#evaluate">Đánh giá</a></li>
          <li><a href="#product">Sản phẩm</a></li>
          <li><a href="#contact">Liên hệ</a></li>
      </ul>
    </div>
  )
}

export default Header;