import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBriefcase = props => {
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
      <path d="M192 224h64v32h-64v-32z M96 416h832v480h-832v-480z M768 224h64v32h-64v-32z M832 256v64h-64v-64h-96v-64c-1-36.4-27.2-64-64.4-64h-198.2c-37.2 0-57.4 27.4-57.4 64v64h-96v64h-64v-64h-96v128h832v-128h-96zM640 255v1h-256v-59.8c0-20.4 5.8-36.2 27.4-36.2h194.2c20.8 0 34.4 15.4 34.4 36.2v58.8z"></path>
    </SVG>
  )
}


IosBriefcase.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBriefcase.propTypes = {
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


export default IosBriefcase
