import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from '../../components/AudioPlayer';
import musicSrc from '../../../assets/music/mash_up.mp3';

// temporary data
const tracks = [
  {
    id: 1,
    title: 'MASHUP',
    artist: "Various artists",
    albumb: {
      name: null,
      artwork: 'https://i1.sndcdn.com/artworks-000079173282-v6ygm6-t500x500.jpg'
    },
    source: 'https://s3.eu-west-3.amazonaws.com/baochau-music/' +
    'MASHUP++NERDHEAD+vs.+Foxxi+misQ+vs.+HALCALI+vs.+SoFly+vs.+%E5%A4%A9%E4%B8%8A%E6%99%BA%E5%96%9C+vs.+CLIFF+EDGE+vs.+Mai.K.mp3',
    duration: 275
  },
  {
    id: 2,
    title: 'Cặp đôi đẹp nhất',
    artist: "Hắc Kỳ Tử",
    albumb: {
      name: null,
      artwork: 'https://i.imgur.com/FeAbQN3.jpg'
    },
    source: 'https://s3.eu-west-3.amazonaws.com/baochau-music/Cap-Doi-Dep-Nhat-Hac-Ky-Tu.mp3',
    duration: 242
  }
]
const mapStateToProps = state => ({
  tracks
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);