import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdChatbubbles = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M265.6 736c-40.4 0-89.6-49.2-89.6-89.6v-326.4h-19.2c-33.4 0-60.8 27.4-60.8 60.8v547.2l117-116h430.2c33.4 0 60.8-28.2 60.8-61.8v-14.2h-438.4z M858.2 96h-558.4c-38.4 0-69.8 31.4-69.8 69.8v452.2c0 38.4 31.4 70 69.8 70h476.4l151.8 106v-628.2c0-38.4-31.4-69.8-69.8-69.8z"></path>
    </SVG>
  )
}


MdChatbubbles.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdChatbubbles.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default MdChatbubbles
