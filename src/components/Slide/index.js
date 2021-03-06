import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'particles.js';
import { blue500, blue700 } from 'material-ui/styles/colors'

const styles = {
  mobile: {
    root: {
      color: 'white',
      backgroundColor: blue500,
      height: '100%'
    },
    media: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    mediaBackground: {
      backgroundColor: blue700,
      height: 'calc(100% - 241px)',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      textAlign: 'center',
      maxWidth: '80%',
      margin: '0 auto',
      paddingTop: 30
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      marginBottom: 8
    }
  },
  mobileLandscape: {
    root: {
      color: 'white',
      backgroundColor: blue500,
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row'
    },
    media: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    mediaBackground: {
      backgroundColor: blue700,
      height: '100%',
      textAlign: 'center',
      flex: '1 1',
      alignSelf: 'stretch'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      minWidth: 300,
      maxWidth: 'calc(50% - 48px)',
      padding: '24px 24px 128px',
      flex: '0 1',
      alignSelf: 'center'
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      marginBottom: 8
    }
  },
  desktop: {
    root: {
      color: 'white',
      backgroundColor: blue500,
      height: '100%'
    },
    media: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    mediaBackground: {
      backgroundColor: blue700,
      height: 'calc(100% - 216px)',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      textAlign: 'center',
      maxWidth: '80%',
      margin: '0 auto',
      paddingTop: 32,
      paddingBottom: 10
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      marginBottom: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }
}

const particlesConfig = {
  "particles": {
    "number": {
      "value": 200
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "repulse": {
          "distance": 400
        },
        "push": {
          "particles_nb": 4
        }
      }
    }
  }
}

class Slide extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.particles) {
      particlesJS('particles', particlesConfig, () => console.log('particles.js has loaded'))
    }
  }

  render() {
    const {
      contentStyle,
      media,
      mediaBackgroundStyle,
      mediaStyle,
      subtitle,
      subtitleStyle,
      textStyle,
      title,
      titleStyle,
      mobile,
      landscape,
      children
    } = this.props

    const style = mobile ? (landscape ? styles.mobileLandscape : styles.mobile) : styles.desktop

    return (
      <div style={{...style.root, ...contentStyle}}>
        <div id="particles" style={{...style.mediaBackground, ...mediaBackgroundStyle}}>
          {media && 
          <div style={{...style.media, ...mediaStyle}}>{React.cloneElement(media, {
            style: {...media.style, maxHeight: '100%'}
          })}
          </div>}
        </div>
        <div style={{...style.text, ...textStyle}}>
          {title && 
          <div style={{...style.title, ...titleStyle}}>
            {title}
          </div>}
          {subtitle && 
          <p style={{...style.subtitle, ...subtitleStyle}}>
            {subtitle}
          </p>}
          {children}
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
  /** Override the inline-styles of the content. */
  contentStyle: PropTypes.object,
  /** Object to display in the upper half. */
  media: PropTypes.node,
  /** Override the inline-styles of the media container. */
  mediaBackgroundStyle: PropTypes.object,
  /** Override the inline-styles of the media. */
  mediaStyle: PropTypes.object,
  /** Subtitle of the slide. */
  subtitle: PropTypes.string,
  /** Override the inline-styles of the subtitle. */
  subtitleStyle: PropTypes.object,
  /** Override the inline-styles of the text container. */
  textStyle: PropTypes.object,
  /** Title of the slide. */
  title: PropTypes.string,
  /** Override the inline-styles of the title. */
  titleStyle: PropTypes.object,
  /**
   * If `true`, the screen width and height is filled.
   * @ignore
   */
  mobile: PropTypes.bool,
  /**
   * If `true`, slide will adjust content for wide mobile screens.
   * @ignore
   */
  landscape: PropTypes.bool
}

export default Slide;