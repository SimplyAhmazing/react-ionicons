import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPower = props => {
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
      <path d="M558.2 96h-92.4v462.2h92.4v-462.2zM781.4 196.4l-65.6 65.6c73 58.8 119.8 148.8 119.8 250 0 178.8-144.6 323.6-323.6 323.6s-323.6-144.8-323.6-323.6c0-101.2 46.6-191.4 119.2-250.6l-65.2-65.2c-89.6 76.4-146.4 189.2-146.4 315.8 0 229.8 186.2 416 416 416s416-186.2 416-416c0-126.6-56.8-239.4-146.6-315.6z"></path>
    </SVG>
  )
}


MdPower.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPower.propTypes = {
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


export default MdPower
