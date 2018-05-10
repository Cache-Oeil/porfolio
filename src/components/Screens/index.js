import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Slide from '../Slide';
import Bar from '../Bar';
import Carousel from '../Carousel';

import { red400, red600 } from 'material-ui/styles/colors';
import './style.scss';

const carouselRootStyle = {
  position: "relative",
  backgroundColor: "unset",
  paddingTop: 40,
  paddingBottom: 40
}

const contentContainerStyle = {
  transform: "unset",
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
  borderRadius: 14
}

const slideRootStyle = {
  color: 'black',
  backgroundColor: 'transparent',
}

class Screens extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      mobile: false
    };
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
        <section className="section">
          <div className="section-container">
            <Bar title="Gioi thieu" topFaceStyle={{ backgroundColor: '#67605f', color: '#dedcdb'}} frontFaceStyle={{ backgroundColor: '#dedcdb', color:'#67605f'}}/>
            <Carousel 
              autoplay={false}
              open
              style={carouselRootStyle}
              contentStyle={contentContainerStyle}
              footerStyle={{ marginTop: 0 }}
              dotsStyle={{ paddingTop: 0 }}
              dotColor='black'
              mobile={this.state.mobile}
              landscape={false}
            >
              <Slide 
                //media={<img src="https://i.imgur.com/JSqg9eC.jpg" />}
                contentStyle={slideRootStyle}
                title="Bao Chou"
                subtitle="Web Developper"
              >
                <p>Etudiant en 5eme année à l'INSA Centre Val de Loire, France.</p>
                <div className="social-media">
                    <ul>
                        <li><a href="https://www.facebook.com/yagami.shuukoku"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
              </Slide>
              <div className="slide">
                
              </div>
              <div className="slide">
              
              </div>
            </Carousel>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Screens;