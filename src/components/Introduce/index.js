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
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-bg" style={{backgroundImage: 'url(https://placeimg.com/801/801/nature)'}}></div>
            <div className="tl-year">
                <p>2010</p>
            </div>
            <div className="tl-content">
                <h1>Quốc Học - Huế</h1>
                <p>Tốt nghiệp từ trường THCS Nguyễn Tri Phương, sau đó trúng tuyển vào trường THPT chuyên Quốc Học - Huế, chọn lớp chuyên Lý, 2 năm đạt giải 3 thi HSG Vật lý cấp Quốc gia và nhiều thành tích khác.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-bg" style={{backgroundImage: 'url(https://placeimg.com/802/802/nature)'}}></div>
            <div className="tl-year">
                <p>2013</p>
            </div>
            <div className="tl-content">
                <h1>Trở thành tân sinh viên</h1>
                <p>Sau khi nhập học vào ĐH Bách Khoa HCM khoảng 2 tuần thì rút hồ sơ học bạ và tham gia vào lớp chuẩn bị (classe préparatoire) của trường <dfn title="Institut National des Sciences Appliquées">INSA</dfn> Centre Val de Loire trong vòng 2 năm.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-bg" style={{backgroundImage: 'url(https://placeimg.com/803/803/nature)'}}></div>
            <div className="tl-year">
                <p>2015</p>
            </div>
            <div className="tl-content">
                <h1>Đặt chân lên đất Pháp</h1>
                <p>Trải qua 2 năm học chương trình dự bị, tiếp tục trở thành sinh viên năm 3 học tập và sinh sống tại thành phố Blois - một thành phố cổ kính, yên bình với những tòa lâu đài tráng lệ và một chút gì đó rất giống nơi tôi sinh ra - Huế.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-bg" style={{backgroundImage: 'url(https://placeimg.com/800/800/nature)'}}></div>
            <div className="tl-year">
                <p>2017</p>
            </div>
            <div className="tl-content">
                <h1>Sắp tốt nghiệp</h1>
                <p>Được sống và học tập tại Pháp là một cơ hội, cơ hội để trải nghiệm, để đi đây đó mở mang tâm trí và rèn luyện tính tự lập. Và trong năm trước đó tôi đã phát hiện ra niềm đam mê về Web của mình, đây chính là một cơ hội và thách thức cho năm cuối đời sinh viên và tương lai sau này.</p>
            </div>
          </div>
        </div>        
      </section>
    );
  }
}

export default Introduce;