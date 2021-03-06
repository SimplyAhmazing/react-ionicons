import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosSunnyOutline = props => {
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
      <path d="M496 800h32v128h-32v-128z M496 96h32v128h-32v-128z M96 496h128v32h-128v-32z M800 496h128v32h-128v-32z M296.903 704.327l22.627 22.627-90.509 90.509-22.627-22.627 90.509-90.509z M794.978 206.523l22.627 22.627-90.509 90.509-22.627-22.627 90.509-90.509z M319.809 297.039l-22.627 22.627-90.509-90.509 22.627-22.627 90.509 90.509z M817.341 794.842l-22.627 22.627-90.509-90.509 22.627-22.627 90.509 90.509z M512 352c88.2 0 160 71.8 160 160s-71.8 160-160 160c-88.2 0-160-71.8-160-160s71.8-160 160-160zM512 320c-105.8 0-192 86.2-192 192s86.2 192 192 192c105.8 0 192-86.2 192-192s-86.2-192-192-192v0z"></path>
    </SVG>
  )
}


IosSunnyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosSunnyOutline.propTypes = {
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


export default IosSunnyOutline
