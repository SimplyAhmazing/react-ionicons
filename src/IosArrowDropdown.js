import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosArrowDropdown = props => {
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
      <path d="M698.4 416l25.6 27.6-212 228.4-212-228.4 25.6-27.6 186.4 200.8z M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416c0-229.8-186.2-416-416-416zM512 130.6c210.2 0 381.4 171 381.4 381.4 0 210.2-171 381.4-381.4 381.4-210.2 0-381.4-171-381.4-381.4-0-210.2 171.2-381.4 381.4-381.4z"></path>
    </SVG>
  )
}


IosArrowDropdown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosArrowDropdown.propTypes = {
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


export default IosArrowDropdown
