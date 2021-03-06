import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdKeypad = props => {
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
      <path d="M512 797c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4c0-44.6-36.4-81.4-81-81.4zM273 64c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4zM273 308.4c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4zM273 552.8c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4c0-44.8-36.4-81.4-81-81.4zM751 227c44.6 0 81-36.6 81-81.4s-36.4-81.6-81-81.6-81 36.6-81 81.4 36.4 81.6 81 81.6zM512 552.8c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4c0-44.8-36.4-81.4-81-81.4zM751 552.8c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4c0-44.8-36.4-81.4-81-81.4zM751 308.4c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4zM512 308.4c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4zM512 64c-44.6 0-81 36.6-81 81.4s36.4 81.4 81 81.4 81-36.6 81-81.4-36.4-81.4-81-81.4z"></path>
    </SVG>
  )
}


MdKeypad.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdKeypad.propTypes = {
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


export default MdKeypad
