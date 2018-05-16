import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from '../../components/Slide';
import Bar from '../../components/Bar';
import Carousel from '../../components/Carousel';
import FalconLogo from '../../../assets/img/falcon-logo-small.png';
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

class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.location)
  }

  render() {
    return (
      <div className="introduce">
        <div className="introduce-container">
          <Bar title={this.context.t('header.introduce')} topFaceStyle={{ backgroundColor: '#67605f', color: '#dedcdb'}} frontFaceStyle={{ backgroundColor: '#dedcdb', color:'#67605f'}}/>
          <Carousel
            autoplay
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
              media={<img src="https://i.imgur.com/JSqg9eC.jpg" className="img-avatar"/>}
              mediaBackgroundStyle={{height: 200, backgroundColor: 'transparent'}}
              mediaStyle={{marginTop: 15}}
              contentStyle={slideRootStyle}
              title="Bao CHAU"
              subtitle={this.context.t('introduce.carousel.career')}
            >
              <p>{this.context.t('introduce.carousel.resume')}</p>
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
            <Slide
              media={<img src="http://ibcr32onwrk3lymzyyyoy4yu.wpengine.netdna-cdn.com/wp-content/uploads/2010/04/web-development.png" />}
              mediaBackgroundStyle={{height: 200, backgroundColor: 'transparent'}}
              mediaStyle={{marginTop: 15}}
              contentStyle={slideRootStyle}
            >
              <p>{this.context.t('introduce.carousel.introduction')}</p>
            </Slide>
            <Slide
              media={<img src={FalconLogo} />}
              mediaBackgroundStyle={{height: 378.5,backgroundColor: 'transparent'}}
              contentStyle={slideRootStyle}
              textStyle={{padding: 0}}
            />
          </Carousel>
        </div>
        <div className="timeline">
          { this.props.timeLineStorys.map((story, index) => (
          <div key={index} className="tl-item">
            <div className="tl-bg" style={{backgroundImage: story.background}}></div>
            <div className="tl-year">
                <p>{story.year}</p>
            </div>
            <div className="tl-content">
                <h1>{story.content.title}</h1>
                <p>{story.content.story}</p>
            </div>
          </div>
          ))}
        </div>      
      </div>
    );
  }
}

Introduce.contextTypes = {
  t: PropTypes.func
}

Introduce.propTypes = {
  timeLineStorys: PropTypes.array
}

export default Introduce;