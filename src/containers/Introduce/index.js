import React, { Component } from 'react';
import { connect } from 'react-redux';
import Introduce from '../../Screens/Introduce';

const timeLineStorys = [
  {
    background: 'url(https://placeimg.com/801/801/nature)',
    year: 2010,
    content: {
      title: 'Quốc Học - Huế',
      story: 'Tốt nghiệp từ trường THCS Nguyễn Tri Phương, sau đó trúng tuyển vào trường THPT chuyên Quốc Học - Huế, chọn lớp chuyên Lý, 2 năm đạt giải 3 thi HSG Vật lý cấp Quốc gia và nhiều thành tích khác.'
    }
  },
  {
    background: 'url(https://placeimg.com/802/802/nature)',
    year: 2013,
    content: {
      title: 'Trở thành tân sinh viên',
      story: 'Sau khi nhập học vào ĐH Bách Khoa HCM khoảng 2 tuần thì rút hồ sơ học bạ và tham gia vào lớp chuẩn bị (classe préparatoire) của trường <dfn title="Institut National des Sciences Appliquées">INSA</dfn> Centre Val de Loire trong vòng 2 năm.'
    }
  },
  {
    background: 'url(https://placeimg.com/803/803/nature)',
    year: 2015,
    content: {
      title: 'Đặt chân lên đất Pháp',
      story: 'Trải qua 2 năm học chương trình dự bị, tiếp tục trở thành sinh viên năm 3 học tập và sinh sống tại thành phố Blois - một thành phố cổ kính, yên bình với những tòa lâu đài tráng lệ và một chút gì đó rất giống nơi tôi sinh ra - Huế.'
    }
  },
  {
    background: 'url(https://placeimg.com/800/800/nature)',
    year: 2017,
    content: {
      title: 'Sắp tốt nghiệp',
      story: 'Được sống và học tập tại Pháp là một cơ hội, cơ hội để trải nghiệm, để đi đây đó mở mang tâm trí và rèn luyện tính tự lập. Và trong năm trước đó tôi đã phát hiện ra niềm đam mê về Web của mình, đây chính là một cơ hội và thách thức cho năm cuối đời sinh viên và tương lai sau này.'
    }
  }
]

const mapStateToProps = (state) => ({
  timeLineStorys: timeLineStorys
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Introduce);