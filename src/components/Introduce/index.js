import React, { Component } from 'react';
import Slide from '../Slide';
import Bar from '../Bar';
import Carousel from '../Carousel';
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
  render() {
    return (
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
              media={<img src="https://i.imgur.com/JSqg9eC.jpg" className="img-avatar"/>}
              mediaBackgroundStyle={{height: 200, backgroundColor: 'transparent'}}
              mediaStyle={{marginTop: 15}}
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
            <Slide
              media={<img src="http://ibcr32onwrk3lymzyyyoy4yu.wpengine.netdna-cdn.com/wp-content/uploads/2010/04/web-development.png" />}
              mediaBackgroundStyle={{height: 200, backgroundColor: 'transparent'}}
              mediaStyle={{marginTop: 15}}
              contentStyle={slideRootStyle}
            >
              <p>Mình là Bảo, hiện đang là sinh viên năm cuối của Viện Khoa Học Ứng Dụng Quốc Gia tại Val de Loire, Pháp. 
                Mặc dù biết đến lập trình cũng khá lâu, nhưng mãi tới tận cuối năm ngoái, một sự kiện xảy đến cuốn mình vào trong niềm đam mê phát triển Web. 
                Front-end developement là mục tiêu trước mắt mình đang chinh phục để hướng tới một Full-Stack Developer đầy bản lĩnh. 
                Và CiOne chính là nơi đã giúp mình hệ thống lại kiến thức và tạo một cộng đồng hỗ trợ nhiệt tình.
              </p>
            </Slide>
            <Slide
              media={<img src={FalconLogo} />}
              mediaBackgroundStyle={{height: 378.5,backgroundColor: 'transparent'}}
              contentStyle={slideRootStyle}
              textStyle={{padding: 0}}
            />
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Introduce;