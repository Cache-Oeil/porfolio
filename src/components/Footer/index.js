import React, { Component } from 'react';
import './style.scss';

const Footer = (props) => {
  return (
    <div className="site-footer">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-element">
            <h2 className="footer-title">Our Mission</h2>
            <p className="lead">Hãy cộng tác với tôi nếu bạn thấy hứng thú, sự hài lòng của bạn là động lực của tôi.</p>
          </div>
          <div className="footer-element">
            <h2 className="footer-title">Send Message</h2>
            <form className="send-mail-form">
              <input className="email" placeholder="Your Email Address" type="email" />
              <textarea cols="30" rows="2" placeholder="Enter here..."></textarea>
              <button type="submit" className="btn-msn">Send</button>
            </form>
          </div>
          <div className="footer-element">
            <h2 className="footer-title">Contact me</h2>
            <p className="contact-info">Call me: (+33) 7 51 14 83 30 <br/>2 Avenuedu Docteur Jean Laigret, Blois, France.</p>
            <a href="#" className="e-mail">baochow95@gmail.com</a>
            <div className="social-menu">
              <a href="#" className="social-icon facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#" className="social-icon twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" className="social-icon google-plus">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                <i className="fa fa-google-plus" aria-hidden="true"></i>
              </a>
              <a href="#" className="social-icon linkedin">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#" className="social-icon instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;