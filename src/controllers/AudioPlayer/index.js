import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from '../../components/AudioPlayer';
import musicSrc from '../../../assets/music/mash_up.mp3';

// temporary data
const tracks = [
  {
    id: 1,
    title: 'MASHUP',
    artist: "NERDHEAD Vs. Foxxi MisQ Vs. HALCALI Vs. So'Fly Vs. 天上智喜 Vs. CLIFF EDGE Vs. Mai.K",
    albumb: {
      name: null,
      artwork: 'https://i1.sndcdn.com/artworks-000079173282-v6ygm6-t500x500.jpg'
    },
    source: musicSrc,
    duration: 275
  },
  {
    id: 2,
    title: '',
    artist: '',
    albumb: {
      name: '',
      artwork: ''
    },
    source:'',
    duration: 123
  },
  {
    id: 3,
    title: '',
    artist: '',
    albumb: {
      name: '',
      artwork: ''
    },
    source:'',
    duration: 123
  }
]
const mapStateToProps = state => ({
  tracks
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);